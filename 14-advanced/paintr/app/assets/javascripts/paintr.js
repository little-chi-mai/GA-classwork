$(document).ready(() => {
  $('#add-color').on('click', () => {
    
    // get the color from the text field
    const color = $('#color').val();
    console.log(color);
    // create a swatch in that color
    const $swatch = $('<div/>').addClass('swatch').css('background-color', color);

    // append the swatch to the palette
    $swatch.appendTo('.palette'); 
    // or $('.palette').append($(swatch));    
  })
  
  // livequery => live => on()
  // Event delegation:
  $('.palette').on('click', '.swatch', function() {
    
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    console.log('swatch clicked', this.style.backgroundColor);
  })

  // event delegation: listen on events via parent element
  $('.canvas').on('mouseover', '.pixel', function(e) {
    if (e.shiftKey === false) return;
    // get the color
    const color = $('.swatch.selected').css('background-color');
    // pain the pixel
    $(this).css('background-color', color);
  })

});