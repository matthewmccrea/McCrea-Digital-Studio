(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.querySelector(".contact-form");
  var status = form ? form.querySelector("[data-form-status]") : null;

  function encode(data) {
    return Object.keys(data)
      .map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
      })
      .join("&");
  }

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var formData = new FormData(form);
      var payload = {};
      formData.forEach(function (value, key) {
        payload[key] = value;
      });

      var submitBtn = form.querySelector(".btn-submit");
      if (submitBtn) {
        submitBtn.disabled = true;
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload)
      })
        .then(function () {
          status.hidden = false;
          status.textContent = "¡Gracias! Te voy a responder dentro de las 24 horas hábiles.";
          form.reset();
        })
        .catch(function () {
          status.hidden = false;
          status.style.color = "#ff9d9d";
          status.textContent = "Hubo un problema al enviar. Escribime directo a hola@mccreadigital.com.";
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
          }
        });
    });
  }
})();
