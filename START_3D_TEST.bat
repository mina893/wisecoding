@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Starting WiseCoding 3D local test server...
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0LOCAL_SERVER.ps1"
