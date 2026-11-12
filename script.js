
// SC CONSULTORIAS
// Interacciones generales de la página

document.addEventListener("DOMContentLoaded", () => {

    // ANIMACIONES AL DESPLAZARSE

    const elementos = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver((entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observador.unobserve(entrada.target);
                }

            });

        }, {
            threshold: 0.12
        });

        elementos.forEach((elemento) => {
            observador.observe(elemento);
        });

    } else {

        elementos.forEach((elemento) => {
            elemento.classList.add("visible");
        });

    }


    // MENU PARA CELULARES

    const botonMenu = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-links");

    if (botonMenu && menu) {

        botonMenu.addEventListener("click", () => {

            const abierto = menu.classList.toggle("open");

            botonMenu.setAttribute("aria-expanded", abierto);

            botonMenu.textContent = abierto ? "✕" : "☰";

        });

        document.querySelectorAll(".nav-links a").forEach((enlace) => {

            enlace.addEventListener("click", () => {

                menu.classList.remove("open");
                botonMenu.textContent = "☰";
                botonMenu.setAttribute("aria-expanded", "false");

            });

        });

    }


    // AÑO AUTOMATICO DEL FOOTER

    document.querySelectorAll(".current-year").forEach((elemento) => {

        elemento.textContent = new Date().getFullYear();

    });

});
