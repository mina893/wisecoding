(() => {
  const channels = window.ACADEMY_CHANNELS || {};
  const labels = { instagram: '인스타그램', youtube: '유튜브' };
  document.querySelectorAll('[data-channel]').forEach(link => {
    const key = link.dataset.channel;
    const label = labels[key] || '채널';
    link.removeAttribute('href');
    link.setAttribute('aria-disabled', 'true');
    link.textContent = label + ' 준비 중';
    link.setAttribute('aria-label', label + ' 준비 중');
    link.title = label + ' 준비 중';
    try {
      const url = new URL(String(channels[key] || '').trim());
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) return;
      link.href = url.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.removeAttribute('aria-disabled');
      link.textContent = label + ' ↗';
      link.title = label + ' (새 탭에서 열기)';
      link.setAttribute('aria-label', link.title);
    } catch (_) {}
  });
})();
