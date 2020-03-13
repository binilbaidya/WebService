//For Contacts
// SELECTING ALL TEXT ELEMENTS
var username = document.forms['form']['username'];
var email = document.forms['form']['email'];
var message = document.forms['form']['message'];
// SELECTING ALL ERROR DISPLAY ELEMENTS
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var message_error = document.getElementById('message_error');
// validation function
function Validate() {
  // validate name
  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('name_error').style.color = "red";
    name_error.textContent = "Name is required.";
    username.focus();
    return false;
  }
  // validate email
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_error').style.color = "red";
    email_error.textContent = "Email is required.";
    email.focus();
    return false;
  }

  if (email.value.indexOf("@", 0) < 0) {
    email.style.border = "1px solid red";
    document.getElementById('email_error').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }

  if (email.value.indexOf(".", 0) < 0) {
    email.style.border = "1px solid red";
    document.getElementById('email_error').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  // validate message
  if (message.value == "") {
    message.style.border = "1px solid red";
    document.getElementById('message_error').style.color = "red";
    message_error.textContent = "Message is required to submit.";
    message.focus();
    return false;
  }
}

function add(){
  var n = document.getElementsByName("username")[0].value
  var e = document.getElementsByName("email")[0].value
	localStorage.setItem('Name', n);
	localStorage.setItem('Email', e);
}
//For Subscription
var em = document.forms['form']['email'];
var error = document.getElementById('emailer');

function Valid() {
  // validate email
  if (em.value == "") {
    em.style.border = "1px solid red";
    document.getElementById('emailer').style.color = "red";
    error.textContent = "Email is required to subscribe";
    em.focus();
    return false;
  }

  if (em.value.indexOf("@", 0) < 0) {
    em.style.border = "1px solid red";
    document.getElementById('emailer').style.color = "red";
    error.textContent = "Email is required to subscribe";
    em.focus();
    return false;
  }

  if (em.value.indexOf(".", 0) < 0) {
    em.style.border = "1px solid red";
    document.getElementById('emailer').style.color = "red";
    error.textContent = "Email is required to subscribe";
    em.focus();
    return false;
  }
}

function em(){
  var em = document.getElementsByName("email")[0].value
  localStorage.setItem('Email', em);
}
