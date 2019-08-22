// jQuery(function ($) {

function sendMail() {
  $('#sendMail').click(function() {
    let body = $("#mailBody").val()
    let name = $("#mailName").val()
    let email = $("#mailEmail").val()
    $('#sendMail').attr("disabled", true).html('Thank you! We will get in touch asap.');

    $.post("https://europe-west1-portfolios.cloudfunctions.net/sendmail", {
      "body": body,
      "name": name,
      "email": email
    }).done(function(data) {
      console.log(data)
    });
  });
}
// })
