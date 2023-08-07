<!DOCTYPE html>


<!-- fetch css links & title format -->
<?php
include './php/common.php';
links("Help");
title("Help");
?>

<body>
  <section>
    <!-- fetch background video  -->
    <video autoplay muted loop plays-inline class="backvid">
      <source src="./Assests/video/" type="video/mp4" />
    </video>

    <nav>
        <img src="./Assests/Images/logo_v2.png" class="logo" />
        <ul class="navigation-bar">
          <li><a href="./index.php"> Home</a></li>
          <li><a href="./index.php#area"> Explore</a></li>
          <li><a href="./Help.php"> Help </a></li>
          <li><a href="./Leaderboard.php"> Leaderboard </a></li>
          <li><a href="./play.php"> Play</a></li>

        </ul>
      </nav>

    <div class="hero" id="area">
      <section class="help_tab">

        <?php
        video_back('./Assests/video/black_back.mp4')
        ?>


        <!-- Owl Caorusel container  -->
        <div class="container">
          <h1 class="text-center"><b>How to play?</b></h1>
          <div class="slider">
            <div class="owl-carousel">
              <div class="slider-card" id="atredies">
                <div class="d-flex justify-content-center align-items-center mb-4">
                  <video autoplay muted src="./Assests/video/charge_mode.mp4" loop width="320" height="240"></video>
                </div>
                <h5 class="mb-0 text-center"><b>Charged Attack</b></h5>
                <p class="text-center p-4">
                  Press space bar attack
                </p>
              </div>
              <div class="slider-card">
                <div class="d-flex justify-content-center align-items-center mb-4">
                  <video autoplay muted src="./Assests/video/Area_swap.mp4" loop width="320" height="240" speed="2x"></video>
                </div>
                <h5 class="mb-0 text-center"><b>Game Mode</b></h5>
                <p class="text-center p-4">
                  To change game mode you are required to reach a certain level of score.
                  After leveling up the mobs & maps & difficulty will change
                </p>
              </div>
              <div class="slider-card">
                <div class="d-flex justify-content-center align-items-center mb-4">
                  <video autoplay muted src="./Assests/video/enemies_mobs.mp4" loop width="320" height="240"></video>
                </div>
                <h5 class="mb-0 text-center"><b>Enemies</b></h5>
                <p class="text-center p-4">
                  You need to kill them using charged attacks
                </p>
              </div>

              <div class="slider-card">
                <div class="d-flex justify-content-center align-items-center mb-4">
                  <video autoplay muted src="./Assests/video/right.mp4" loop width="320" height="240"></video>
                </div>
                <h5 class="mb-0 text-center"><b>MOVEMENT </b></h5>
                <p class="text-center p-4">
                  USE ARROW KEYS TO MOVE RIGHT AND LEFT
                </p>
              </div>
            </div>
          </div>
        </div>

      <!-- Owl Caorusel script  -->
      </section>
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/script.js"></script>
    </div>
    <a href="#" class="gotobottom"><i class="fas fa-arrow-up"></i></a>
    <script src="./js/carousel.js"></script>
</body>

<?php
footer_function();
?>