var headerFixContainer = document.getElementById('wrapper');
var burger1 = document.getElementById('burger1');
var burger2 = document.getElementById('burger2');
var burger3 = document.getElementById('burger3');
var menu = document.getElementById('main');
var top = document.getElementById('top');
var arrow = document.querySelector('.arrow');
var burgermenu = document.getElementById('burgermenu');
var cross = document.querySelector('.cross');

document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    headerFixContainer.style.marginTop = "-250px";
  } else if (event.deltaY < 0) {
    headerFixContainer.style.marginTop = "";
  }
});

burger1.addEventListener('click', function() {
  burgermenu.style.display = 'block';
  cross.style.display = 'block';
});

burger2.addEventListener('click', function() {
  burgermenu.style.display = 'block';
  cross.style.display = 'block';
});

burger3.addEventListener('click', function() {
  burgermenu.style.display = 'block';
  cross.style.display = 'block';
});

cross.addEventListener('click', function() {
  burgermenu.style.display = 'none';
  cross.style.display = 'none';
});

arrow.addEventListener('click', function() {
  window.scrollTo (0, 0);
});
