const form = document.querySelector('#settings');
for (const key of ['instagram']) document.getElementById(key).value = window.ACADEMY_CHANNELS?.[key] || '';
form.addEventListener('submit', e => {
  e.preventDefault();
  const config = {};
  for (const key of ['instagram']) {
    const input = document.getElementById(key);
    input.setCustomValidity('');
    const value = input.value.trim();
    if (value) {
      try {
        const url = new URL(value);
        if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) throw new Error();
        config[key] = url.href;
      } catch (_) { input.setCustomValidity('https://로 시작하는 올바른 주소를 입력해 주세요.');input.reportValidity();return; }
    } else config[key] = '';
  }
  const blob = new Blob(['window.ACADEMY_CHANNELS = ' + JSON.stringify(config, null, 2) + ';\n'], {type:'text/javascript;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');a.href=url;a.download='channels.js';document.body.appendChild(a);a.click();a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#status').textContent = '설정 파일 다운로드를 요청했습니다. 받은 channels.js를 GitHub에 덮어 올리면 반영됩니다.';
});
form.addEventListener('input', e => e.target.setCustomValidity?.(''));
