let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');


function checkPassword(data) {
  const lower = new RegExp('(?=.*[a-z])');
  const upper = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const special = new RegExp('(?=.*[!@#\$%\^$\*])');
  const length = new RegExp('(?=.{8,})');

  //lower case test
  if (lower.test(data)) {
    lowerCase.classList.add('valid');

  } else {
    lowerCase.classList.remove('valid');
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.backgroundColor = "#ff000044";
  }

  //upper case test
  if (upper.test(data)) {
    upperCase.classList.add('valid');
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.backgroundColor = "#ff000044";
  } else {
    upperCase.classList.remove('valid');
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.backgroundColor = "#ff000044";
  }

  //number test
  if (number.test(data)) {
    digit.classList.add('valid');
  } else {
    digit.classList.remove('valid');
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.backgroundColor = "#ff000044";
  }

  //special character

  if (special.test(data)) {
    specialChar.classList.add('valid');
  } else {
    specialChar.classList.remove('valid');
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.backgroundColor = "#ff000044";
  }

  //length check 

  if (length.test(data)) {
    minLength.classList.add('valid');
  } else {
    minLength.classList.remove('valid');
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.backgroundColor = "#ff000044";
  }

  if ((length.test(data)) && (special.test(data)) && (number.test(data)) && (upper.test(data)) && (lower.test(data))) {
    document.getElementById("submit").disabled = false;
    document.getElementById("submit").style.backgroundColor = "#5995fd";
  }
}

function checkusername(data) {
  var username = document.getElementById("username-signup").value;

  if (document.getElementById("username-signup").value.length == 0) {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.backgroundColor = "#ff000044";
  }


}

function save() {
  var username = document.getElementById("username-signup").value;
  var email = document.getElementById("email-signup").value;
  var password = document.getElementById("password-signup").value;
  var test_name = document.getElementById("username-signup").value;
  JSON.stringify(username);
  JSON.stringify(email);
  JSON.stringify(password);
  var ele = document.getElementsByName('gender');
              
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      var gender_final=ele[i].value;
  }
  if (localStorage[document.getElementById("username-signup").value] != undefined) {


    document.getElementById("check").innerHTML = '<object type="text/html" data="./modal_window.html" ></object>';


  } else {
    let user_obj = {
      name: username,
      email_Address: email,
      password: password,
      high_Score: 0,
      gender: gender_final,
    }
    localStorage.setItem(test_name, JSON.stringify(user_obj));

    document.getElementById("check").innerHTML = '<object type="text/html" data="./modal_window_registration.html" ></object>';
      var delayInMilliseconds = 2000; //1 second
      setTimeout(function() {window.location.href = "./log_in.php"
        //your code to be executed after 1 second
      }, delayInMilliseconds);
  }
}

function log_in(){

  if (localStorage[document.getElementById("username-signin").value] != undefined) {
    
    let userexiting_objt= JSON.parse(localStorage.getItem(document.getElementById("username-signin").value))






    if (document.getElementById("Password-signin").value != userexiting_objt.password){
      document.getElementById("check-2").innerHTML = '<object type="text/html" data="./modal_window_password.html" ></object>';
    }

    else {
      document.getElementById("check-2").innerHTML = '<object type="text/html" data="./modal_window_password_ok.html" ></object>';
      

      let username_loged_in=document.getElementById("username-signin").value;

      let value_required=userexiting_objt.high_Score;



      let log_in_onject = {
      name: username_loged_in,
      high_Score:value_required,
    }
      sessionStorage.setItem("currentloggedin",JSON.stringify(log_in_onject));
      var delayInMilliseconds = 3000; //1 second
      setTimeout(function() {window.location.href = "./index.php"
        //your code to be executed after 1 second
      }, delayInMilliseconds);

    }
  }


  else {
  document.getElementById("check-2").innerHTML = '<object type="text/html" data="./modal_window_log-in.html" ></object>';

  }
}


