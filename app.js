
/* ── Navigation ── */
function showPage(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

function setCat(el, page){
  document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  showPage(page);
}

/* ── Sorting ── */
function setSort(btn){
  document.querySelectorAll('.sort-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ── Size selector ── */
function selectSize(btn){
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ── Thumbnail gallery ── */
function changeImage(el, src){

  document.querySelectorAll('.thumb')
    .forEach(t => t.classList.remove('active'));

  el.classList.add('active');

  document.getElementById('mainImg').src = src;
}

/* ── Wishlist toggle ── */
document.addEventListener('click', e => {
  if(e.target.closest('.wishlist-btn')){
    e.stopPropagation();
    const btn = e.target.closest('.wishlist-btn');
    btn.classList.toggle('active');
    btn.innerHTML = btn.classList.contains('active')
      ? '<i class="ti ti-heart-filled"></i>'
      : '<i class="ti ti-heart"></i>';
  }
});

/* ── Cart counter ── */
function addToCart(){
  const badge = document.getElementById('cartCount');
  badge.textContent = parseInt(badge.textContent) + 1;
  const btn = document.querySelector('.btn-cart');
  btn.textContent = '✓ Added!';
  btn.style.background = '#388e3c';
  setTimeout(() => {
    btn.innerHTML = '<i class="ti ti-shopping-cart" style="margin-right:6px;vertical-align:-2px"></i>Add to cart';
    btn.style.background = '#ff9f00';
  }, 1500);
}

/* ── User dropdown ── */
function toggleDropdown(){
  document.getElementById('userDropdown').classList.toggle('open');
}
document.addEventListener('click', e => {
  if(!e.target.closest('.user-menu-wrap')){
    document.getElementById('userDropdown').classList.remove('open');
  }
});