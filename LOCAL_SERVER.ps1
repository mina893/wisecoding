$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 8000
$prefix = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
try {
  $listener.Start()
} catch {
  Write-Host "Port 8000 could not be opened. Trying port 8080..."
  $port = 8080
  $prefix = "http://localhost:$port/"
  $listener = New-Object System.Net.HttpListener
  $listener.Prefixes.Add($prefix)
  $listener.Start()
}
Write-Host ""
Write-Host "WiseCoding 3D test server is running: $prefix"
Write-Host "Keep this window open while testing."
Write-Host "Press Ctrl+C to stop."
Start-Process $prefix
$mime = @{
  '.html'='text/html; charset=utf-8'; '.htm'='text/html; charset=utf-8';
  '.js'='application/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8';
  '.glb'='model/gltf-binary'; '.gltf'='model/gltf+json';
  '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.svg'='image/svg+xml';
  '.json'='application/json; charset=utf-8'; '.txt'='text/plain; charset=utf-8'; '.md'='text/plain; charset=utf-8'
}
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  try {
    $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
    if ([string]::IsNullOrWhiteSpace($rel)) { $rel = 'index.html' }
    $candidate = [IO.Path]::GetFullPath((Join-Path $root $rel))
    $rootFull = [IO.Path]::GetFullPath($root + [IO.Path]::DirectorySeparatorChar)
    if (-not $candidate.StartsWith($rootFull, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $candidate -PathType Leaf)) {
      $ctx.Response.StatusCode = 404
      $bytes = [Text.Encoding]::UTF8.GetBytes('404 Not Found')
      $ctx.Response.ContentType = 'text/plain; charset=utf-8'
    } else {
      $ext = [IO.Path]::GetExtension($candidate).ToLowerInvariant()
      $ctx.Response.StatusCode = 200
      if ($mime.ContainsKey($ext)) { $ctx.Response.ContentType = $mime[$ext] } else { $ctx.Response.ContentType = 'application/octet-stream' }
      $bytes = [IO.File]::ReadAllBytes($candidate)
    }
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes,0,$bytes.Length)
  } catch {
    $ctx.Response.StatusCode = 500
  } finally {
    $ctx.Response.OutputStream.Close()
  }
}
