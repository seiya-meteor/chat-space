$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message-list__box">
          <div class="Message-list__zone">
            <div class="Message-list__user">
              ${message.user_name}
            </div>
            <div class="Message-list__day">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__speak">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
        `<div class="Message-list__box">
          <div class="Message-list__zone">
            <div class="Message-list__user">
              ${message.user_name}
            </div>
            <div class="Message-list__day">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__speak">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');

    //送信ボタンを連続で押せないため押せるようにする記述
    $('.Form__submit').removeAttr('data-disable-with');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Message-list').append(html);      
      $('form')[0].reset();
      $('.Message-list').animate({ scrollTop: $('.Message-list')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});