const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(){ navigation.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }
menu.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); });
navigation.addEventListener('click', e => { if(e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape' && navigation.classList.contains('open')) {closeMenu();menu.focus();} });

// Accessible notice popup; content is rendered as plain text.
const notice = window.ACADEMY_NOTICE;
const noticeDialog = document.querySelector('#notice-dialog');
const noticeOpen = document.querySelector('#notice-open');
if (notice && notice.enabled === true) {
  document.querySelector('#notice-title').textContent = notice.title || '공지사항';
  document.querySelector('#notice-content').textContent = notice.content || '';
  const noticeImage = document.querySelector('#notice-image');
  if (typeof notice.image === 'string' && notice.image.trim()) {
    noticeImage.alt = notice.imageAlt || '공지사항 이미지';
    noticeImage.addEventListener('error', () => { noticeImage.hidden = true; });
    noticeImage.src = notice.image;
    noticeImage.hidden = false;
  }
  const storageKey = 'wisecoding-notice-hidden-' + String(notice.id || 'default');
  const today = () => { const d = new Date(); return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-'); };
  const showNotice = () => {
    if (!noticeDialog.open) {
      document.querySelector('#notice-hide-today').checked = false;
      noticeDialog.showModal();
      document.body.classList.add('notice-visible');
    }
  };
  const closeNotice = () => {
    if (document.querySelector('#notice-hide-today').checked) {
      try { localStorage.setItem(storageKey, today()); } catch (_) { /* Storage is optional. */ }
    }
    noticeDialog.close();
  };
  noticeOpen.hidden = false;
  noticeOpen.addEventListener('click', showNotice);
  noticeDialog.querySelectorAll('[data-notice-close]').forEach(button => button.addEventListener('click', closeNotice));
  noticeDialog.addEventListener('cancel', e => { e.preventDefault(); closeNotice(); });
  noticeDialog.addEventListener('close', () => { document.body.classList.remove('notice-visible'); });
  let hiddenToday = false;
  try { hiddenToday = localStorage.getItem(storageKey) === today(); } catch (_) { /* Still display the notice. */ }
  if (!hiddenToday) showNotice();
}
