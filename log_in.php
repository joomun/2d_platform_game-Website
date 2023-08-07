<!DOCTYPE html>

<?php
include './php/common.php';
links("Log-in");
title("Log-in");

?>
<html lang="en">

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./css/style_log.css" />

  <title>Sign in & Sign up Form</title>

</head>

<body>

  <div class="container">

    <video autoplay muted loop plays-inline class='backvid'>
      <source src='../Assests/video/log-in-1.mp4' type='video/mp4' />
    </video>

    <div class="forms-container">
      <div class="signin-signup">
        <form action="#" class="sign-in-form">
          <span id="check-2"></span>
          <img class="form__image" src="./Assests/Images/3logos.png" />
          <h2 class="title">Sign in</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" id="username-signin"/>
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" id="Password-signin"/>
          </div>
          <input type='button' class="btn" value="Sign in" id="submit" onclick="log_in()" />

        </form>
        <form action="#" class="sign-up-form">
          <span id="check"></span>
          <img class="form__image" src="./Assests/Images/3logos.png" />
          <h2 class="title">Sign up</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" id="username-signup" onkeyup="checkusername(this.value)" />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email" id="email-signup" />
          </div>
          <div >
            <input type="radio" name="gender" value="male"> Male
            <input type="radio" name="gender" value="female"> Female

          </div> 
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" onkeyup="checkPassword(this.value)" id="password-signup" />
          </div>

          <div class="validation" id="container-requirements">
            <ul>
              <li id="lower"> At least 1 lower case</li>
              <li id="upper"> At least 1 upper case</li>
              <li id="number"> At least 1 number </li>
              <li id="special"> At least 1 special character</li>
              <li id="length"> At least 8 characters</li>
            </ul>
          </div>
          <input type='button' class="btn" value="Sign up" id="submit" onclick="save()" />
        </form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>New here ?</h3>
          <p>
            Regiser now and join our fight against the houses to unite and
            SAVE THE GALAXY!
          </p>
          <button class="btn transparent" id="sign-up-btn">
            Sign up
          </button>
        </div>
        <img src="./Assests/Images/register.svg" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>One of us ?</h3>
          <p>
            Log-in Directly and Let's continue to SAVE THE GALAXY!! Enemies attack are eminent
          </p>
          <button class="btn transparent" id="sign-in-btn">
            Sign in
          </button>


        </div>
        <img src="./Assests/Images/log.svg" class="image" alt="" />
      </div>
    </div>

  </div>

  <script src="./js/app.js"></script>
  <script src="js/log_in_sorting.js"></script>
  <!-- Back to Homepage box overflow  -->
  <a href="./index.php" class="gotobottom"><i class="fas fa fa-home"></i></a>

</body>

</html>