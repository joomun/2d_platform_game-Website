<!DOCTYPE html>


<!-- fetch css links & title format -->
<?php
include './php/common.php';
links("Homepage");
title("Homepage");
?>

<body>
  <div class="hero">
    <section>
      <!-- fetch background video  -->
      <?php
      video_back('./Assests/video/videoplayback.mp4')
      ?>

    <?php
      nav_bar();
    ?>
        
    </nav>

      <div class="content">
        <h1 class="zoom-in-zoom-out">Save the Galaxy</h1>

        <link rel="stylesheet" href="./css/test.css" />
        <a href="#area">EXPLORE</a>
      </div>
    </section>
  </div>

  <div class="hero" id="area">
    <section class="planet_description">
      <!-- fetch background video  -->
      <?php
      video_back('./Assests/video/black_background.mp4')
      ?>


      <!-- Container for carousel  -->
      <div class="container">
        <h1 class="text-center"><b>AREAS</b></h1>
        <div class="slider">
          <div class="owl-carousel">

            <!-- Container carousel card items  -->
            <div class="slider-card" id="atredies">
              <div class="d-flex justify-content-center align-items-center mb-4">
                <img src="./Assests/Images/House Atreides.PNG" alt="" />
              </div>
              <h5 class="mb-0 text-center"><b>HOUSE ATREIDES</b></h5>
              <p class="text-center p-4">
                The Atreides home planet is called, Caladan. It has a warm, calm
                climate and the lands are lush and green. The rich soils and
                mild weather combine to make it a agricultural planet. In the
                recent centuries industrial and technological growth have added
                to the prosperity of the Atreides.
              </p>
            </div>
            <div class="slider-card">
              <div class="d-flex justify-content-center align-items-center mb-4">
                <img src="./Assests/Images/House Ordos.PNG" alt="" />
              </div>
              <h5 class="mb-0 text-center"><b>HOUSE ORDOS</b></h5>
              <p class="text-center p-4">
                The home planet of the Ordos is a frigid ice-covered world. It
                is believed that the Ordos import their agricultural and
                technological goods from nearby star systems. Acting as traders
                and brokers, the Ordos produce no physical products but instead
                rely upon their merchandising skills to make their profits.
              </p>
            </div>
            <div class="slider-card">
              <div class="d-flex justify-content-center align-items-center mb-4">
                <img src="./Assests/Images/House Karkonnen.PNG" alt="" />
              </div>
              <h5 class="mb-0 text-center"><b>HOUSE HARKONEN</b></h5>
              <p class="text-center p-4">
                House Harkonnen comes from the dark planet of Giedi Prime. They
                have spread across the universe with the evil tactics. The
                Harkonnen are a cruel people and can be ruthless towards both
                friend and foe in their pursuit of control of Dune.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Script to run owl carousel  -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/script.js"></script>
  </div>

  <!-- Back to Homepage box overflow  -->
  <a href="#" class="gotobottom"><i class="fas fa-arrow-up"></i></a>
</body>

<?php
footer_function();
?>