function getCharRemaining() {
  $this = $(this);
  $this.siblings('.counter').text(140 - $this.val().length);

  // color warning if over char limit
  if ($this.val().length > 140) {
    $this.siblings('.counter').css('color', 'red');
    $this.siblings('.submit-btn').attr('disabled', 'disabled');
    $this.siblings('.error').text('Exceeded character limit');
    
    // initial state when content is empty
  } else if ($this.val().length === 0) {
    $this.siblings('.submit-btn').attr('disabled', 'disabled');
    $this.siblings('.error').text('Write something!');

    // content still within acceptable range
  } else {
    $this.siblings('.counter').css('color', 'black');
    $this.siblings('.submit-btn').removeAttr('disabled', 'disabled');
    $this.siblings('.error').text('');
  }
  console.log($this.val().length);
}

$(document).ready(function () {
  $('.new-tweet textarea').on('input', getCharRemaining);
});
