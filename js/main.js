const links = document.querySelectorAll('.navbar-nav .nav-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
    document.querySelector('.navbar-collapse').classList.remove("show");
  });
});

document.body.addEventListener('click', () => {
  document.querySelector('.navbar-collapse').classList.remove("show");
});

document.querySelector('.navbar-brand').onclick = activeHome;

const goUp = document.querySelector('.go-up');
goUp.addEventListener('click', () => {
  activeHome();
});
window.onscroll = function () {
  if (this.scrollY >= 1000) {
    goUp.style.right = '20px';
  } else {
    goUp.style.right = '-60px';
  }
}

goUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}


function activeHome() {
  links.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains('home')) {
      link.classList.add('active');
    }
  });
}