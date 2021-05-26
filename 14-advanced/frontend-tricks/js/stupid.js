$(document).ready(() => {
  // Parallax /////////////////////////////////
  const $kitty = $('.kitty-js');
  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $kitty.css('background-position-y', -scrollTop / 2); // janky
  })

  // Bubble /////////////////////////////////////////
  $(window).on('mousemove', (e) => {
    const {pageX:x, pageY:y} = e; // Destructuring with renaming

    const size = Math.random() * 10;

    const $bubble = $('<div class="bubble">').css({
      left: x,
      top: y,
      width: size + 'em',
      height: size + 'em',
    })

    $bubble.appendTo('body');

    $bubble.animate({top: -200}, 5000, () => {
      $bubble.remove(); // this callback runs when the animation is complete.
    });
  })
})
