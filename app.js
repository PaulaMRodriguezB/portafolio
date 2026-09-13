document.addEventListener('DOMContentLoaded', () => {
  const enlaceSobreMi = document.getElementById('link-sobre-mi');
  const enlaceHerramientas = document.getElementById('link-herramientas');
  const enlaceProyectos = document.getElementById('link-proyectos');
  const enlaceContacto = document.getElementById('link-contacto');
  
  const modalTools = document.getElementById('modal-tools');
  const modalSoftSkills = document.getElementById('modal-soft-skills');

  // Función para activar el botón seleccionado
  const marcarActivo = (elemento) => {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('activo'));
    if (elemento) elemento.classList.add('activo');
  };

  // 1. Click en About Me
  if (enlaceSobreMi) {
    enlaceSobreMi.addEventListener('click', (e) => {
      marcarActivo(enlaceSobreMi);
      const about = document.getElementById('about');
      if (about) about.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 2. Click en Skills / Tools (Abre Softskills + Tools y desplaza)
  if (enlaceHerramientas) {
    enlaceHerramientas.addEventListener('click', (e) => {
      marcarActivo(enlaceHerramientas);
      if (modalTools) modalTools.classList.remove('oculta');
      if (modalSoftSkills) modalSoftSkills.classList.remove('oculta');

      const about = document.getElementById('about');
      if (about) about.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 3. Click en Projects
  if (enlaceProyectos) {
    enlaceProyectos.addEventListener('click', (e) => {
      marcarActivo(enlaceProyectos);
      const proyectos = document.getElementById('projects');
      if (proyectos) proyectos.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 4. Click en Contact
  if (enlaceContacto) {
    enlaceContacto.addEventListener('click', (e) => {
      marcarActivo(enlaceContacto);
      // Reemplaza 'contacto' por el id real de tu sección de contacto
      const contacto = document.getElementById('contacto') || document.getElementById('contact');
      if (contacto) contacto.scrollIntoView({ behavior: 'smooth' });
    });
  }
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
