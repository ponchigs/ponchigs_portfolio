
(function(){
  const nav = document.getElementById('mainNav');
  if(!nav) return;
  const links = nav.querySelectorAll('a[href]');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if(href === current) a.classList.add('active');
  });
})();
