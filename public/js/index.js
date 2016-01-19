$('#signup').click(function() {
  var emailAddr = $('#email').val();

  function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  if (!validateEmail(emailAddr)) {
    return;
  }

  var data = {
    email: emailAddr,
    referred: $('#referred').val()
  };

  $('#email').val('');
  $('#referred').val('');

  $.ajax({
    type: 'POST',
    url: 'https://qelf.co/',
    data: data,
    dataType: 'json'
  });
});
