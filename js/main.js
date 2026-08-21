/* AD Advisors — full-screen menu + search toggle (vanilla JS, no deps) */
(function () {
  'use strict';

  var nav     = document.querySelector('[data-nav]');
  var menu    = document.querySelector('[data-menu]');
  var toggle  = document.querySelector('.menu-toggle');
  var search  = document.querySelector('[data-search]');
  var searchToggle = search && search.querySelector('.search-toggle');
  var searchField  = search && search.querySelector('.search-field');

  /* ---------------- full-screen menu ---------------- */
  if (nav && menu && toggle) {
    var setMenu = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', open);
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      // keep the collapsed menu out of the tab order / a11y tree
      if (open) { menu.removeAttribute('inert'); }
      else      { menu.setAttribute('inert', ''); }
    };

    var isOpen = function () { return toggle.getAttribute('aria-expanded') === 'true'; };

    toggle.addEventListener('click', function () {
      var open = !isOpen();
      setMenu(open);
      if (open) { closeSearch(); }
    });

    // following a link closes the menu
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) { setMenu(false); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  /* ---------------- search ---------------- */
  function closeSearch() {
    if (!search) { return; }
    search.classList.remove('is-open');
    searchToggle.setAttribute('aria-expanded', 'false');
    searchField.setAttribute('tabindex', '-1');
  }

  if (search && searchToggle && searchField) {
    searchToggle.addEventListener('click', function () {
      var open = !search.classList.contains('is-open');
      search.classList.toggle('is-open', open);
      searchToggle.setAttribute('aria-expanded', String(open));
      if (open) {
        searchField.removeAttribute('tabindex');
        searchField.focus();
      } else {
        searchField.setAttribute('tabindex', '-1');
        searchField.blur();
      }
    });

    searchField.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeSearch(); searchToggle.focus(); }
    });

    document.addEventListener('click', function (e) {
      if (search.classList.contains('is-open') && !search.contains(e.target)) {
        closeSearch();
      }
    });
  }
})();
