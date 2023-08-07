<!DOCTYPE html>


<!-- fetch css links & title format -->
<?php
include './php/common.php';
links("Play");
title("Play");
?>

<header>
  <?php
  nav_bar();
  ?>
  <link rel="stylesheet" href="./css/animations.css">
</header>

<div class="hero">
  <section>
    <!-- fetch background video  -->
    <?php
    video_back('./Assests/video/Area.mp4')
    ?>
    

    <!-- container where game will be embeded  -->
    <div class="game_container" id="main">
        <div class= "Game_Stats" id="myBar">HEALTH :100%      </div>
        <div class= "Game_Stats" id="myScore">SCORE:0</div>
        <div class= "Game_Stats" id="myHighScore">HIGHSCORE:0</div>
        <canvas id="canvas_1"> </canvas>
        <canvas id="canvas_2"> </canvas>
        <canvas id="canvas_3"> </canvas>
        <canvas id= "Progress_bar">
        
          
        <canvas>
        <script  src="./js/script_animation.js"></script>
        <script type="module" src="./js/background_animation.js"></script>
        <script type="module" src="./js/enemies_animation.js"></script>

        <script>

          window.addEventListener('keydown', function(e) {
              if(e.keyCode == 32 && e.target == document.body) {
                e.preventDefault();
              }
            });
        </script>
    </div>
    <span id="game_over"></span>
    
    <span id="not_logged-in"></span>
  </section>
</div>
</body>

<?php
footer_function();
?>