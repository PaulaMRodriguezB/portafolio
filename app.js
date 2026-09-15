document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================
     1. ELEMENTOS DE LA NAVBAR Y BOTONES INTERNOS
     ========================================== */
  const enlaceSobreMi = document.getElementById('link-sobre-mi');
  const enlaceHerramientas = document.getElementById('link-herramientas'); // "Skills" en Nav
  const enlaceProyectos = document.getElementById('link-proyectos');
  const enlaceContacto = document.getElementById('link-contacto');
  const enlaceCv = document.querySelector('.btn-cv-pildora');

  // Botones dentro de la tarjeta de "About"
  const btnOpenSoftSkills = document.getElementById('btn-open-soft-skills');
  const btnOpenTools = document.getElementById('btn-open-tools');

  // Modales
  const modalTools = document.getElementById('modal-tools');
  const modalSoftSkills = document.getElementById('modal-soft-skills');

  // Función para activar el botón seleccionado en la Navbar
  const marcarActivo = (elemento) => {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('activo'));
    if (elemento) elemento.classList.add('activo');
  };

  /* ==========================================
     2. EVENTOS DE LA NAVBAR
     ========================================== */
  // 1. Click en About Me
  if (enlaceSobreMi) {
    enlaceSobreMi.addEventListener('click', () => {
      marcarActivo(enlaceSobreMi);
      const about = document.getElementById('about');
      if (about) about.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 2. Click en Skills de la Nav -> Abre AMBAS subventanas a la vez
  if (enlaceHerramientas) {
    enlaceHerramientas.addEventListener('click', (e) => {
      e.preventDefault();
      marcarActivo(enlaceHerramientas);

      if (modalSoftSkills) {
        modalSoftSkills.classList.remove('oculta');
        modalSoftSkills.classList.add('activo');
      }
      if (modalTools) {
        modalTools.classList.remove('oculta');
        modalTools.classList.add('activo');
      }

      const about = document.getElementById('about');
      if (about) about.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 3. Click en Projects
  if (enlaceProyectos) {
    enlaceProyectos.addEventListener('click', () => {
      marcarActivo(enlaceProyectos);
      const proyectos = document.getElementById('projects');
      if (proyectos) proyectos.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 4. Click en Contact
  if (enlaceContacto) {
    enlaceContacto.addEventListener('click', () => {
      marcarActivo(enlaceContacto);
      const contacto = document.getElementById('contacto') || document.getElementById('contact');
      if (contacto) contacto.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 5. Click en CV
  if (enlaceCv) {
    enlaceCv.addEventListener('click', () => {
      marcarActivo(enlaceCv);
    });
  }

  /* ==========================================
     3. EVENTOS DE BOTONES INTERNOS (INDIVIDUALES)
     ========================================== */
  // Click en "Open Soft Skills" -> Abre SOLO Soft Skills
  if (btnOpenSoftSkills) {
    btnOpenSoftSkills.addEventListener('click', () => {
      if (modalSoftSkills) {
        modalSoftSkills.classList.remove('oculta');
        modalSoftSkills.classList.add('activo');
      }
      if (modalTools) {
        modalTools.classList.remove('activo');
        modalTools.classList.add('oculta');
      }
    });
  }

  // Click en "Open Tools" -> Abre SOLO Tools
  if (btnOpenTools) {
    btnOpenTools.addEventListener('click', () => {
      if (modalTools) {
        modalTools.classList.remove('oculta');
        modalTools.classList.add('activo');
      }
      if (modalSoftSkills) {
        modalSoftSkills.classList.remove('activo');
        modalSoftSkills.classList.add('oculta');
      }
    });
  }
});

/* ==========================================
   4. MODALES DE PROYECTOS Y CIERRE TECLA ESCAPE
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  const cardTaskPlanner = document.getElementById('card-task-planner');
  const modalTaskPlanner = document.getElementById('modal-task-planner');
  const btnCerrar = document.getElementById('btn-cerrar-task-planner');

  if (cardTaskPlanner && modalTaskPlanner) {
    cardTaskPlanner.addEventListener('click', () => modalTaskPlanner.classList.add('activo'));
  }

  if (btnCerrar && modalTaskPlanner) {
    btnCerrar.addEventListener('click', () => modalTaskPlanner.classList.remove('activo'));
  }

  if (modalTaskPlanner) {
    modalTaskPlanner.addEventListener('click', (e) => {
      if (e.target === modalTaskPlanner) modalTaskPlanner.classList.remove('activo');
    });
  }
});

// Modal TuCancha
const cardTuCancha = document.getElementById('card-tucancha');
const modalTuCancha = document.getElementById('modal-tucancha');
const btnCerrarTuCancha = document.getElementById('btn-cerrar-tucancha');

if (cardTuCancha && modalTuCancha) {
  cardTuCancha.addEventListener('click', () => modalTuCancha.classList.add('activo'));

  if (btnCerrarTuCancha) {
    btnCerrarTuCancha.addEventListener('click', () => modalTuCancha.classList.remove('activo'));
  }

  modalTuCancha.addEventListener('click', (e) => {
    if (e.target === modalTuCancha) modalTuCancha.classList.remove('activo');
  });
}

// Modal Universo
const cardUniverso = document.getElementById('card-universo');
const modalUniverso = document.getElementById('modal-universo');
const btnCerrarUniverso = document.getElementById('btn-cerrar-universo');

if (cardUniverso && modalUniverso) {
  cardUniverso.addEventListener('click', () => modalUniverso.classList.add('activo'));

  if (btnCerrarUniverso) {
    btnCerrarUniverso.addEventListener('click', () => modalUniverso.classList.remove('activo'));
  }

  modalUniverso.addEventListener('click', (e) => {
    if (e.target === modalUniverso) modalUniverso.classList.remove('activo');
  });
}

// Cierre global con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.ventana-sub, .modal').forEach(m => {
      m.classList.remove('activo');
      m.classList.add('oculta');
    });
  }
});

..