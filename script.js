// Small enhancements; the site still works without this file.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-btn");
  var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  try {
    var saved = localStorage.getItem("theme");
    if (saved) dark = saved === "dark";
  } catch (e) {}

  function setTheme(isDark) {
    root.setAttribute("data-theme", isDark ? "dark" : "light");
    btn.textContent = isDark ? "\u2600" : "\u263E";
  }
  setTheme(dark);

  btn.addEventListener("click", function () {
    dark = !dark;
    setTheme(dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  document.querySelectorAll("[data-print]").forEach(function (b) {
    b.addEventListener("click", function () { window.print(); });
  });

})();
