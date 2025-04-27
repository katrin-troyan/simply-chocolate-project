function initSwipe(list) {
  const swipeItems = list.querySelectorAll('.bestsellers-item, .response-item');
  const prevButton = list
    .closest('.container')
    .querySelector('.swipe-button-prev');
  const nextButton = list
    .closest('.container')
    .querySelector('.swipe-button-next');

  let currentIndex = 0;
  let itemsPerView = getItemsPerView();
  const totalItems = swipeItems.length;
  const swipeThreshold = 50;
  let touchStartX = 0;
  let touchEndX = 0;

  function getItemsPerView() {
    return window.innerWidth >= 768 && window.innerWidth < 1168 ? 2 : 1;
  }

  function updateSlider() {
    list.style.transform = `translateX(${
      -(100 / itemsPerView) * currentIndex
    }%)`;
  }

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0 && currentIndex > 0) {
        currentIndex--;
      } else if (
        swipeDistance < 0 &&
        currentIndex < totalItems - itemsPerView
      ) {
        currentIndex++;
      }
      updateSlider();
    }
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsPerView) {
      currentIndex++;
      updateSlider();
    }
  });

  list.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  });

  list.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  window.addEventListener('resize', () => {
    itemsPerView = getItemsPerView();
    currentIndex = 0;
    updateSlider();
  });

  updateSlider();
}

const swipeLists = document.querySelectorAll(
  '.bestsellers-list, .response-list'
);
swipeLists.forEach(initSwipe);
