$(document).ready(function () {

  function escape(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function createTweetElement(tData) {
    const user = tData.user.name;
    const id = tData._id;
    const handle = tData.user.handle;
    const avatar = tData.user.avatars.small;
    const content = escape(tData.content.text);
    const dateAgo = moment(tData.created_at).fromNow();
    const likes = tData.likes;

    return `<article>
            <header>
              <span class='avatar'><img src='${avatar}' width='55px' height='55px'></span>
              <h2>${user}</h2>
              <span class='handle'>${handle}</span>
            </header>
            <div class='content'>${content}</div>
            <footer>
              <span class='postdate'>${dateAgo}</span>
              <div class='social'>
                <span><i class='fa fa-flag' aria-hidden='true'></i></span>
                <span><i class='fa fa-retweet' aria-hidden='true'></i></span>
                <i class='fa fa-heart unlike' aria-hidden='true'></i><span class='likey' data-twtid=${id}> ${likes} </span>
              </div>
            </footer>
          </article>`;
  }

  function renderTweets(tweets) {
    $('.tweets-container').empty();
    tweets.forEach((element) => {
      const tweet = createTweetElement(element);
      $('.tweets-container').append(tweet);
    });

    $('.fa-heart').on('click', function () {
      $this = $(this);
      $likey = $(this).siblings('.likey');
      id = $likey.data('twtid');

      event.preventDefault();

      let parsedLikes = parseInt($likey.text());

      if ($this.hasClass('unlike')) {
        $this.addClass('like');
        $this.removeClass('unlike');

        $likey.text(++parsedLikes);

        $.ajax({
          url: `/tweets/${id}/1`,
          method: 'PUT'
        });
        
      } else {
        $this.addClass('unlike');
        $this.removeClass('like');

        $likey.text(--parsedLikes);

        $.ajax({
          url: `/tweets/${id}/-1`,
          method: 'PUT'
        });
      }
    });
  }

  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: renderTweets
    });
  }

  // initial load
  loadTweets();

  $('form').on('submit', function (event) {
    event.preventDefault();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize(),
      success: () => {
        loadTweets();
        $('textarea').val('');
        $('.counter').text(140);
        $this.siblings('.submit-btn').attr('disabled', 'disabled');
        $this.siblings('.error').text('Write something!');
      }
    });
  });

  $('.compose').on('click', () => {
    $('.new-tweet').slideToggle();
    $('textarea').focus();
  });

});