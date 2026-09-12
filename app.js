document.addEventListener('DOMContentLoaded', () => {
  // 1. Alternar despliegue de la barra de navegación curva
  const navegacion = document.getElementById('navegacion');
  const btnToggle = document.getElementById('btn-toggle-nav');

  btnToggle.addEventListener('click', () => {
    navegacion.classList.toggle('desplegado');
  });

  // 2. Control de visibilidad para Soft Skills y Tools
  const btnSoftSkills = document.getElementById('btn-open-soft-skills');
  const btnTools = document.getElementById('btn-open-tools');

  const modalSoftSkills = document.getElementById('modal-soft-skills');
  const modalTools = document.getElementById('modal-tools');

  btnSoftSkills.addEventListener('click', () => {
    modalSoftSkills.classList.toggle('oculta');
  });

  btnTools.addEventListener('click', () => {
    modalTools.classList.toggle('oculta');
  });

  // 3. Enlaces del menú curvo
  // 3. Enlaces del menú curvo
  const enlaceHerramientas = document.getElementById('link-herramientas');
  const enlaceProyectos = document.getElementById('link-proyectos');
  const enlaceSobreMi = document.getElementById('link-sobre-mi');

  enlaceHerramientas.addEventListener('click', () => {
    // Muestra ambos al tiempo removiendo la clase 'oculta'
    if (modalTools) modalTools.classList.remove('oculta');
    if (modalSoftSkills) modalSoftSkills.classList.remove('oculta');

    // Desplaza suavemente hasta la sección principal
    const seccionAbout = document.getElementById('about');
    if (seccionAbout) seccionAbout.scrollIntoView({ behavior: 'smooth' });

    // Cierra la barra de navegación curva
    navegacion.classList.remove('desplegado');
  });

  enlaceProyectos.addEventListener('click', () => {
    const seccionProyectos = document.getElementById('projects');

    if (seccionProyectos) {
      seccionProyectos.scrollIntoView({ behavior: 'smooth' });
    }

    navegacion.classList.remove('desplegado');
  });

  enlaceSobreMi.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    navegacion.classList.remove('desplegado');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const cardTaskPlanner = document.getElementById('card-task-planner');
  const modalTaskPlanner = document.getElementById('modal-task-planner');
  const btnCerrar = document.getElementById('btn-cerrar-task-planner');

  // 1. Abrir la ventana emergente al hacer click en la tarjeta (Imagen 1)
  cardTaskPlanner.addEventListener('click', () => {
    modalTaskPlanner.classList.add('activo');
  });

  // 2. Cerrar ventana con el botón de la 'X' roja
  btnCerrar.addEventListener('click', () => {
    modalTaskPlanner.classList.remove('activo');
  });

  // 3. Cerrar al hacer click fuera del recuadro (en el fondo oscuro)
  modalTaskPlanner.addEventListener('click', (e) => {
    if (e.target === modalTaskPlanner) {
      modalTaskPlanner.classList.remove('activo');
    }
  });

  // 4. Cerrar presionando la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalTaskPlanner.classList.contains('activo')) {
      modalTaskPlanner.classList.remove('activo');
    }
  });
});

// Lógica para Modal de TuCancha
const cardTuCancha = document.getElementById('card-tucancha');
const modalTuCancha = document.getElementById('modal-tucancha');
const btnCerrarTuCancha = document.getElementById('btn-cerrar-tucancha');

if (cardTuCancha && modalTuCancha) {
  // Abrir al hacer clic en la tarjeta de TuCancha (Rana)
  cardTuCancha.addEventListener('click', () => {
    modalTuCancha.classList.add('activo');
  });

  // Cerrar con el botón 'X'
  btnCerrarTuCancha.addEventListener('click', () => {
    modalTuCancha.classList.remove('activo');
  });

  // Cerrar al hacer clic fuera de la ventana
  modalTuCancha.addEventListener('click', (e) => {
    if (e.target === modalTuCancha) {
      modalTuCancha.classList.remove('activo');
    }
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalTuCancha.classList.contains('activo')) {
      modalTuCancha.classList.remove('activo');
    }
  });
}
// Lógica para Modal de Universo a un click
const cardUniverso = document.getElementById('card-universo');
const modalUniverso = document.getElementById('modal-universo');
const btnCerrarUniverso = document.getElementById('btn-cerrar-universo');

if (cardUniverso && modalUniverso) {
  // Abrir al hacer clic en la tarjeta (Monte Fuji)
  cardUniverso.addEventListener('click', () => {
    modalUniverso.classList.add('activo');
  });

  // Cerrar con el botón 'X'
  btnCerrarUniverso.addEventListener('click', () => {
    modalUniverso.classList.remove('activo');
  });

  // Cerrar al hacer clic fuera del recuadro
  modalUniverso.addEventListener('click', (e) => {
    if (e.target === modalUniverso) {
      modalUniverso.classList.remove('activo');
    }
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalUniverso.classList.contains('activo')) {
      modalUniverso.classList.remove('activo');
    }
  });
}