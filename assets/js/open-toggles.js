// If a link points inside a closed toggle, open it and scroll there
(function () {
    function openTarget() {
      var id = decodeURIComponent(location.hash.slice(1));
      if (!id) return;
      var el = document.getElementById(id);
      if (!el) return;
      var box = el.closest("details");
      while (box) {
        box.open = true;
        box = box.parentElement.closest("details");
      }
      el.scrollIntoView();
    }
    document.addEventListener("DOMContentLoaded", openTarget);
    window.addEventListener("hashchange", openTarget);
  })();