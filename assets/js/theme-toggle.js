// Dark / light mode switch. Remembers the choice between visits.
(function () {
    var KEY = "theme";
    function getSaved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
    function save(t) { try { localStorage.setItem(KEY, t); } catch (e) {} }
  
    function apply(theme) {
      // "default" is the theme's normal (light) colours
      jtd.setTheme(theme === "dark" ? "dark" : "default");
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  
    // Use the saved choice, or the computer's own light/dark setting
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = getSaved() || (prefersDark ? "dark" : "light");
    apply(theme);
  
    // Add the button at the bottom of the left menu
    document.addEventListener("DOMContentLoaded", function () {
      var nav = document.getElementById("site-nav");
      if (!nav) return;
  
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "theme-toggle";
  
      function updateLabel() {
        // The button names the mode you'll switch TO
        btn.textContent = theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
        btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      }
      updateLabel();
  
      btn.addEventListener("click", function () {
        theme = theme === "dark" ? "light" : "dark";
        apply(theme);
        save(theme);
        updateLabel();
      });
  
      nav.appendChild(btn);
    });
  })();