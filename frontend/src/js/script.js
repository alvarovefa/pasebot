// ==========================================
// 🎯 CONTROLADOR DE ENRUTAMIENTO SPA
// ==========================================

// ... (tus capturas de elementos se mantienen igual) ...
const vistaLanding = document.getElementById('view-landing');
const vistaDocentes = document.getElementById('view-docentes');
const btnInicio = document.getElementById('nav-inicio');
const btnDocentes = document.getElementById('nav-docentes');
const logoInicio = document.getElementById('logo-inicio');
const btnFootInicio = document.getElementById('foot-inicio');
const enlacesSecciones = document.querySelectorAll('.section-link');

// 1. FUNCIÓN PARA RENDERIZAR DATOS (Añade esto aquí)
function cargarDatosDocentes() {
    // Si tienes lógica para traer datos de un JSON o una API, 
    // ponla aquí. Por ahora, esto asegura que el contenedor esté listo.
    console.log("Datos de docentes cargados o inicializados");
}

// 2. TUS FUNCIONES DE NAVEGACIÓN EXISTENTES (Sin cambios)
function irADocentes() {
    vistaLanding.classList.remove('block');
    vistaLanding.classList.add('hidden');
    vistaDocentes.classList.remove('hidden');
    vistaDocentes.classList.add('block');
    btnDocentes.classList.add('text-amber-400');
    btnInicio.classList.remove('text-amber-400');
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function irAInicio() {
    vistaDocentes.classList.remove('block');
    vistaDocentes.classList.add('hidden');
    vistaLanding.classList.remove('block'); // Aseguramos reset
    vistaLanding.classList.remove('hidden'); // Limpieza
    vistaLanding.classList.add('block');
    btnInicio.classList.add('text-amber-400');
    btnDocentes.classList.remove('text-amber-400');
}

// 3. EVENTO DE INICIALIZACIÓN (El cambio clave)
document.addEventListener('DOMContentLoaded', () => {
    // Esto se ejecuta apenas el HTML está cargado
    cargarDatosDocentes();
    
    // Aquí decides qué vista mostrar al abrir
    // Si quieres que siempre empiece en el Landing:
    irAInicio();
});

// 4. ASIGNACIÓN DE EVENTOS (Se mantiene igual)
if (btnDocentes) btnDocentes.addEventListener('click', irADocentes);
if (btnInicio) btnInicio.addEventListener('click', irAInicio);
if (logoInicio) logoInicio.addEventListener('click', irAInicio);
if (btnFootInicio) btnFootInicio.addEventListener('click', irAInicio);

enlacesSecciones.forEach(enlace => {
    enlace.addEventListener('click', () => {
        if (vistaLanding.classList.contains('hidden')) {
            irAInicio();
        }
    });
});