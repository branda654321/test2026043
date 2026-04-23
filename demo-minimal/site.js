(function () {
  var header = document.querySelector('.site-header');
  if (!header) {
    return;
  }

  var toggle = header.querySelector('.menu-toggle');
  var menu = header.querySelector('.menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var nextState = !menu.classList.contains('is-open');
      menu.classList.toggle('is-open', nextState);
      toggle.setAttribute('aria-expanded', String(nextState));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();