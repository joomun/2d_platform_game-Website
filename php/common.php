<!-- function to send links for css -->
<?php
function links($page_name)
{

    // creating array of links
    $links = array(
        './css/mainpage.css ', './css/footer_styles.css', 'https://use.fontawesome.com/releases/v5.4.1/css/all.css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', './css/owl.carousel.min.css', './css/styles.css', './css/log_in.css', './css/leaderboard.css'
    );
    $i = 0;

    // deleting unrequired links
    if ($page_name == "Log-in") {
        array_splice($links, 5, 8);
        array_splice($links, 4, 1);
        array_splice($links, 1, 1);
        array_splice($links, 2, 1);
        array_splice($links, 3, 1);
    };

    // deleting unrequired links
    switch ($page_name) {
        case "Sign-up":
            array_splice($links, 8, 1);
            array_splice($links, 5, 1);
            array_splice($links, 1, 1);
            array_splice($links, 3, 1);
            break;
        case "Play":
            array_splice($links, 5);
        case "Leaderboard":
            array_splice($links, 5, 3);
        case "Help":
            array_splice($links, 7, 2);
    }


    //sending head tag to html
    echo
    '
        <head>
            <meta name="SAVE THE GALAXY" content="width=device-width,initia-scale=1" />
    ';


    //sending links to html
    while ($i < count($links)) {
        echo
        "
            <link rel='stylesheet' href='" . $links[$i] . "'  />
        ";

        $i++;
    }
    echo

    '

        </head>
        ';
}
?>


<!-- function to page name -->
<?php
function title($page_name)
{
    echo

    "
            <title>$page_name</title>
        </head>
        ";
}
?>



<!-- function to send back vids links -->
<?php
function video_back($video_location)
{
    echo
    "
    <video autoplay muted loop plays-inline class='backvid'>
        <source src='$video_location' type='video/mp4' />
    </video>
    ";
}
?>


<!-- function to send nav-bar -->
<?php
function nav_bar()
{
    echo
    '
    <nav>
    <img src="./Assests/Images/logo_v2.png" class="logo" />
    <ul class="navigation-bar">
      <li><a href="./index.php"> Home</a></li>
      <li><a href="./index.php#area"> Explore</a></li>
      <li><a href="./Help.php"> Help </a></li>
      <li><a href="./Leaderboard.php"> Leaderboard </a></li>
      <li><a href="./play.php"> Play</a></li>
      <li id="log-in-nav"><a href="./log_in.php" > Log-in </a><i class="fa fa-sign-in"></i></li>
      <script>

      let log_in_user= JSON.parse(sessionStorage.getItem(\'currentloggedin\'));
      
      function log_out_function(){
        console.log("I was clicked to log out")
        sessionStorage.clear();
        window.location.reload();
      }
      if (log_in_user != undefined){
        var elem = document.getElementById("log-in-nav");
        elem.innerHTML = \'<a href="javascript:javascript:void(0)" onclick="log_out_function()" > Log-out </a><i class="fa fa-sign-in"></i>\';
        
      }

      else if (log_in_user == undefined) {
        var elem = document.getElementById("log-in-nav");
        elem.innerHTML =\'<a href="./log_in.php" > Log-in </a><i class="fa fa-sign-in"></i>\';
      }


      </script>
    </ul>
        ';
}
?>

<?php
function log_out()
{
    echo
    '
          <li><a href="./log_in.php" > Log-out </a><i class="fa fa-sign-in"></i></li>
        ';
}
?>

<!-- function to send footer -->
<?php
function footer_function()
{
    echo
    '
        <footer class="text-center text-lg-start bg-white text-muted">
            <!-- Section: Social media -->
            <section
                class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
                <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
                </div>

                <div>
                <a
                    href="https://www.facebook.com/muddathir.joomun"
                    target="_blank"
                    class="me-4 link-secondary"
                >
                    <i class="fab fa-facebook-f"></i>
                </a>

                <a
                    href="https://www.instagram.com/muddathir_joomun/?hl=en"
                    target="_blank"
                    class="me-4 link-secondary"
                >
                    <i class="fab fa-instagram"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/joomun-noorani-muddathir-846636228"
                    target="_blank"
                    class="me-4 link-secondary"
                >
                    <i class="fab fa-linkedin"></i>
                </a>
                </div>
            </section>

            <!-- Section: Social media -->
            <section class="">
                <div class="container text-center text-md-start mt-5" v>
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                        <i class="fas fa-gem me-3 text-secondary"></i>Save The Galaxy
                    </h6>
                    <p>
                        We are here to make you enjoy your freetime and provide you with
                        entertainement. HAVE FUN!!
                    </p>
                    </div>

                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Pages</h6>
                    <p>
                        <a href="./index.php" class="text-reset">Home</a>
                    </p>
                    <p>
                        <a href="./log_in.php" class="text-reset">Log-in</a>
                    </p>
                    </div>

                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                    <p>
                        <a href="#area" class="text-reset">Explore</a>
                    </p>
                    <p>
                        <a href="./play.php" class="text-reset">Play</a>
                    </p>
                    </div>

                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                        <i class="fas fa-home me-3 text-secondary"></i> 22,c Gabriel
                        Froppier Curepipe
                    </p>
                    <p>
                        <i class="fas fa-envelope me-3 text-secondary"></i>
                        mj806@live.mdx.ac.uk
                    </p>
                    <p>
                        <i class="fas fa-phone me-3 text-secondary"></i> + 230 5756 8744
                    </p>
                    <p><i class="fas fa-print me-3 text-secondary"></i> + 230 675 7690</p>
                    </div>
                </div>
                </div>
            </section>

            <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025)">
                © 2021 Copyright:Save the Galaxy
            </div>
        </footer>
        ';
}
?>