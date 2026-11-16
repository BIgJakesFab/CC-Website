// Shared across all Crafted Creations Jekyll pages
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => {
    b.classList.toggle('active', b === button);
    b.setAttribute('aria-pressed', String(b === button));
  });
  document.querySelectorAll('.project').forEach(p => {
    p.hidden = button.dataset.filter !== 'all' && p.dataset.category !== button.dataset.filter;
  });
}));

document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const projectType = document.querySelector('[name=type]');
  const contact = document.querySelector('#contact');
  if (projectType && contact) {
    projectType.value = button.dataset.project;
    contact.scrollIntoView({ behavior: 'smooth' });
  }
}));

const inquiry = document.querySelector('#inquiry');
if (inquiry) inquiry.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(inquiry);
  const prepared = document.querySelector('#prepared');
  const result = document.querySelector('#request-result');
  if (!prepared || !result) return;
  prepared.value = `Hi Crafted Creations! My name is ${data.get('name')}.\n\nProject: ${data.get('type')}\n\n${data.get('details')}`;
  result.hidden = false;
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
const copyButton = document.querySelector('#copy');
if (copyButton) copyButton.addEventListener('click', async () => {
  const prepared = document.querySelector('#prepared');
  const status = document.querySelector('#copy-status');
  if (!prepared || !status) return;
  try {
    await navigator.clipboard.writeText(prepared.value);
    status.textContent = 'Copied! Paste your request into Messenger to send it.';
  } catch {
    prepared.select();
    status.textContent = 'Select and copy the request above, then paste it into Messenger.';
  }
});
