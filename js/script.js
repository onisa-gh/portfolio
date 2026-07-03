let p = 1;
const total = 14;

const navMap = {
  1:'n1', 2:'n1', 3:'n3',
  4:'n4', 5:'n4', 6:'n4', 7:'n4',
  8:'n8', 9:'n8', 10:'n8',
  11:'n11', 12:'n11', 13:'n11',
  14:'n14'
};

function go(n) {
  if (n < 1) n = total;
  if (n > total) n = 1;
  document.getElementById('page' + p).classList.remove('active');
  document.querySelectorAll('#nl a').forEach(a => a.classList.remove('active'));
  p = n;
  document.getElementById('page' + p).classList.add('active');
  const ni = document.getElementById(navMap[p]);
  if (ni) ni.classList.add('active');
  
  // Update sidebar page number
  const sidebarPageNum = document.querySelector('.sidebar-nav .pg-n');
  if (sidebarPageNum) sidebarPageNum.textContent = p;
  
  // Update header page number (mobile)
  const headerPageNum = document.querySelector('.header-controls .pg-n');
  if (headerPageNum) headerPageNum.textContent = p;
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openMob() {
  document.getElementById('mm').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMob() {
  document.getElementById('mm').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(p + 1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   go(p - 1);
  if (e.key === 'Escape') closeMob();
});

// init
go(1);