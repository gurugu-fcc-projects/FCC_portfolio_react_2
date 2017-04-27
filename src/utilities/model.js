import $ from 'jquery';

const highlightButton = (currentButton) => {
  const buttons = ['about', 'portfolio', 'contact'];

  buttons.forEach((button) => {
    if (button === currentButton) {
      document.querySelector('.' + button).classList.add('highlight');
    } else {
      document.querySelector('.' + button).classList.remove('highlight');
    }
  });
}

export const checkPosition = () => {
  if (window.scrollY > 2800) {
    highlightButton('contact');
  } else if (window.scrollY > 400) {
    highlightButton('portfolio');
  } else if (window.scrollY < 400) {
    highlightButton('about');
  }
}

export const scrollAction = (event) => {
  event.preventDefault();
  const $anchor = event.target;

  $('body,html').stop().animate({
    scrollTop: $($anchor.getAttribute('data-link')).offset().top
  }, 1000);
}
