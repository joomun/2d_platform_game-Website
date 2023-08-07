<!DOCTYPE html>


<!-- fetch css links & title format -->
<?php
include './php/common.php';
links("Leaderboard");
title("Leaderboard");
?>

<header>
  <?php
  nav_bar();
  ?>
</header>

<body>
  <div class="hero">
    <section>
      <!-- fetch background video  -->
      <?php
      video_back('./Assests/video/Area.mp4')
      ?>

      <div class="container">
        <div class="leaderboard">
          <img src="./Assests/Images/3logos.PNG" class="theme-img" />
          <div class="description">
            <h3 text-allign="center" >Heroes of the Galaxy</h3>

          </div>

          <!-- Leaderboard table  -->
          <table>
            <thead>
              <!--  table header  -->
              <tr>
                <td class="head">Postion</td>
                <td class="head">Player</td>
                <td class="head">Score</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="winner">1</td>
                <td class="player" >
                  <img src="./Assests/Images/user_icons.png" />
                  <p id="winner_Name" ></p>
                </td>
                <td id="winner_Score" ></td>
              </tr>

              <tr>
                <td id="runner-up">2</td>
                <td class="player">
                  <img src="./Assests/Images/user_icons.png" />
                  <p id="runner_up_1_name"></p>
                </td>
                <td id="runner_up_1_score"></td>
              </tr>

              <tr>
                <td id="second-runner-up">3</td>
                <td class="player">
                  <img src="./Assests/Images/user_icons.png" />
                  <p id="runner_up_2_name"></p>
                </td>
                <td id="runner_up_2_score"></td>
              </tr>
              <tr>
                <td>4</td>
                <td class="player">
                  <img src="./Assests/Images/NicePng_ladies-suit-png_2491703.png" />
                  <p id="runner_up_3_name"></p>
                </td>
                <td id="runner_up_3_score"></td>
              </tr>

              <tr>
                <td>5</td>
                <td class="player">
                  <img src="./Assests/Images/NicePng_ladies-suit-png_2491703.png" />
                  <p id="runner_up_4_name"></p>
                </td>
                <td id="runner_up_4_score"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
  <script src="./js/leaderboard.js"></script>
</body>
<script>
  function search() {
    var text = document.getElementById("search").value;
    const tr = document.getElementsByTagName("tr");
    for (let i = 1; i < tr.length; i++) {
      if (
        !tr[i].children[1].children[1].innerHTML
        .toLowerCase()
        .includes(text.toLowerCase())
      ) {
        tr[i].style.display = "none";
      } else {
        tr[i].style.display = "";
      }
    }
  }
</script>

<?php
footer_function();
?>