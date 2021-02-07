const fetchBook = function (event) {
  event.preventDefault(); //Dont leave this page

  const name = $('#title').val();

  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${name}`;

  //Modern jQuery: Deferreds (=> Promises)
  $.ajax(url).done(function (result) {
    const cover = result.items[0].volumeInfo.imageLinks.thumbnail;
    $('#image').attr('src', cover);
  })

  // Traditional flavour:
  // $.ajax(url, {
  //   success: function (result) {
  //     const cover = result.items[0].volumeInfo.imageLinks.thumbnail;
  //     $('#image').attr('src', cover);
  //   }
  // });
};

$(document).ready(function () {
  $('#search-form').on('submit', fetchBook);
});
