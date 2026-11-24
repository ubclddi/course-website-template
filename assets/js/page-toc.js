// Builds the "On this page" list on the right from the page's ## and ### headings
document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector("#main-content");
    var main = container && container.querySelector("main");
    if (!main) return;
  
    var headings = main.querySelectorAll("h2[id], h3[id]");
    if (headings.length < 2) return; // not worth a list for 0 or 1 heading
  
    // Build the list
    var nav = document.createElement("nav");
    nav.className = "page-toc";
    nav.setAttribute("aria-label", "On this page");
  
    var title = document.createElement("p");
    title.className = "page-toc-title";
    title.textContent = "On this page";
    nav.appendChild(title);
  
    var list = document.createElement("ul");
    headings.forEach(function (h) {
      var li = document.createElement("li");
      li.className = "page-toc-" + h.tagName.toLowerCase(); // page-toc-h2 or page-toc-h3
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.dataset.toc || h.textContent.trim(); // short label if there is one
      a.title = h.textContent.trim();                         // full title shows on hover
      li.appendChild(a);
      list.appendChild(li);
    });
    nav.appendChild(list);
  
    container.classList.add("has-page-toc");
    container.insertBefore(nav, main.nextSibling);
  
    // Highlight the section you're currently reading
    var links = nav.querySelectorAll("a");
    function highlight() {
      var current = 0;
      headings.forEach(function (h, i) {
        if (h.getBoundingClientRect().top < 120) current = i;
      });
      links.forEach(function (a, i) {
        a.classList.toggle("active", i === current);
      });
    }
    window.addEventListener("scroll", highlight, { passive: true });
    highlight();
  });