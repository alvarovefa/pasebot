// 1. Declaramos la función irAInicio FUERA del DOMContentLoaded si lo deseas, 
// pero BIEN PROTEGIDA para que no rompa nada.
function irAInicio() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const navLinks = document.getElementById("nav-links");
    const menuToggle = document.getElementById("menu-toggle");

    if (navLinks) {
        navLinks.classList.remove("menu-open");
    }
    if (menuToggle) {
        menuToggle.textContent = "☰";
    }
}

// 2. Evento principal de carga
document.addEventListener("DOMContentLoaded", () => {
    console.log("Datos de docentes cargados o inicializados");
    // ... Aquí va tu lógica de docentes y otras cosas ...

    // --- INTERACTIVIDAD DEL NAVBAR RESPONSIVO ---
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("menu-open");
            
            if (navLinks.classList.contains("menu-open")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }
        });

        // Cerrar el menú al hacer clic en cualquier link interno
        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("menu-open");
                menuToggle.textContent = "☰";
            });
        });
    }

    // --- ASIGNAR EL CLIC PARA VOLVER ARRIBA ---
    // Busca el botón que tengas (puede ser el logo, un botón flotante, o un link del footer)
    const btnVolverArriba = document.getElementById("btn-volver-arriba"); 
    
    if (btnVolverArriba) {
        // OJO: Se pasa el nombre de la función SIN paréntesis 'irAInicio'. 
        // Si pones 'irAInicio()' se ejecuta sola al cargar y causa el error.
        btnVolverArriba.addEventListener("click", irAInicio);
    }
});