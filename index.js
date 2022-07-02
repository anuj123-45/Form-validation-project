console.log("this is js file");

const nam = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let validnam = false;
let validemail = false;
let validphone = false;
$('#failure').hide();
$('#success').hide();



/*for username*/
nam.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]([a-zA-Z0-9\s]){2,9}$/;
  str = nam.value;

  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Matches");
    validnam=true;
    nam.classList.remove("is-invalid");
    nam.classList.add("is-valid");
  } else {
    console.log("Not Matches");
    nam.classList.add("is-invalid");
    validnam = false;
  }
});


/*for email*/
email.addEventListener("blur", () => {
  console.log("email is blurred");
  // validate email here

  let regex =
    /^([^0-9][_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;

  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Matches");
    validemail=true;
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  } else {
    console.log("Not matches");
    email.classList.add("is-invalid");
    validemail=false;
  }
});

/*for phone*/
phone.addEventListener("blur", () => {
  console.log("phone is blurred");
  // validate phone here

  let regex = /^([0-9]){10}$/;
  let str = phone.value;

  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Matches");
    validphone=true;
    phone.classList.remove("is-invalid");
    phone.classList.add("is-valid");
  } else {
    console.log("Not matches");
    phone.classList.add("is-invalid");
    validphone=false;
  }
});


/*for submitting the form*/

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("You click on submit button");
  // submit your form
  if (validnam && validemail && validphone) {
    console.log(
      "username , email and phone no are valid , Submitting the form"
    );
    success = document.getElementById("success");
    failure = document.getElementById("failure");
  
    success.classList.add("show");
    $('#failure').hide();
    $('#success').show();

  } else {
    console.log(
      "one of username , email or phone is not  valid , Hence not submitting the form. try again"
    );
    success = document.getElementById("success");
    failure = document.getElementById("failure");

    failure.classList.add("show");
    $('#success').hide();
    $('#failure').show();
 
  




  }
});
