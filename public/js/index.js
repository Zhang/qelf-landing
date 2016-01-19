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
    referred: $('#referred').val(),
    phone: $('#phone').val()
  };

  $('#email').val('');
  $('#phone').val('');
  $('#referred').val('');

  $.ajax({
    type: 'POST',
    url: 'http://qelf.herokuapp.com',
    data: data,
    dataType: 'json'
  });
});

$('#signup-btn').click(function() {
  $('#modal').modal();
  return false;
});
