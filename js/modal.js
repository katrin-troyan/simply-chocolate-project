(() => {
  const openModalBtns = document.querySelectorAll('[data-modal-open]');
  const closeModalBtns = document.querySelectorAll('[data-modal-close]');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      const modalId = btn.getAttribute('data-modal-open');
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      toggleModal(modal);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      const modalId = btn.getAttribute('data-modal-close');
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      toggleModal(modal);
    });
  });

  function toggleModal(modal) {
    modal.classList.toggle('is-open');
  }
})();
