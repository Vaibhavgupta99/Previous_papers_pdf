<section class="my_nav">
<div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 p1">
                <div class="row">
                <div class="col-lg-4">
                <a href="index">
                    <h2>Previouspapers.com</h2>
                </a>
            </div>    
            
            <div class="col-lg-4">
                <form action="abc" method="post">
                    <div class="s1_bar">                        
                        <input id="search_input_bar" class="form-control" type="search" placeholder="Search Exam or Question Papers" name="search">
                        <input id="search_btn" hidden type="submit" name="search_submit">
                        <i id="search_icon_bar" class="fa fa-search"></i>
                    </div>
                </form> 
            </div>
            
            <?php
                if(isset($_SESSION['superadmin']) | isset($_SESSION['row'])){
                    echo'<div class="col-lg-1 c1 ">
                    <a href="index.php?home"><button class="btn btn-success">Home</button></a>
                    </div>
                    <div class="col-lg-1 c2 ">
                    <a href="logout.php"><button class="btn btn-danger">Logout</button></a>
                    </div>';
                }
                else{
                    echo'<div class="col-lg-2 offset-lg-2 c3">
                <ul class="c3ul">
                    <li onclick="abc(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</li>
                    <li>|</li>
                    <li onclick="abc(1)" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</li>
                </ul>
                    </div>';
                }            
            ?>
                </div>
            </div>

            <div class="col-lg-12 px-4">
                <h2 class="h12 mb-2">Previous Years Question Papers</h2>
                <p class="p12">Repository of all previous years <!-- use typed.js and write banking,medical,jee,etc -->
                <span class="text-slider-items"> Banking, Medical, JEE</span>
                <span class="text-slider"></span>
                 papers in pdf format.</p>
            </div>

            <div class="col-lg-8 mt-3 px-4">
                <form action="abc" method="post">
                    <div class="s1">                        
                        <input id="search_input" class="form-control" type="search" placeholder="Search Exam or Question Papers" name="search">
                        <input id="search_btn" hidden type="submit" name="search_submit">
                        <i id="search" class="fa fa-search"></i>
                    </div>
                </form>    
            </div>
            <div class="col-4"></div>

            <div class="square"></div>
            <div class="circle1">
                <img src="./assets/img/pdf1.png" alt="">
            </div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
            <div class="circle5"></div>
            
        </div>
    </div>
</section>


<!-- Modal -->
<section class="my_modal">
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="container-fluid">
        <div class="row">
            <div onclick="abc(0)" class="col-6 cc_modal" id="login">
                <p>Login</p>
            </div>
            <div onclick="abc(1)" class="col-6 cc_modal">
                <p>Register</p>
            </div>
            <form action="conn.php" method="post" class="needs-validation">
                <div class="col-12 c1 cc">
                    <input name="name" class="form-control" type="text" placeholder="Username">                
                </div>
                <div class="col-12 c2 cc">
                    <input name="email" class="form-control" type="email" placeholder="E-mail">
                </div>
                <div class="col-12 c3 cc">
                    <input name="pass" class="form-control" type="password" placeholder="Password">                
                </div>
                <div class="col-12 c4 cc">
                    <input name="confirm_pass" class="form-control" type="password" placeholder="Confirm Password">
                </div>
                <div class="col-12 c5">
                    <p>
                        By clicking below, you agree to our <a href="#">Terms and Conditions</a>
                    </p>
                </div>
                <div class="col-12 c6">
                    <input id="input_log" name="register" type="submit" value="Register" class="form-control">
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<script>
    function abc(i) {
        document.getElementsByClassName('cc_modal')[0].style.background = "#eaeaea"
        document.getElementsByClassName('cc_modal')[1].style.background = "#eaeaea"
        document.getElementsByClassName('cc_modal')[0].style.color = "#999"
        document.getElementsByClassName('cc_modal')[1].style.color = "#999"

        document.getElementsByClassName('cc_modal')[i].style.background = "#fff"
        document.getElementsByClassName('cc_modal')[i].style.color = "#5cb635"

        if (i == 0 ) {
            document.getElementsByClassName('form-control')[1].style.display = "none"
            document.getElementsByClassName('form-control')[4].style.display = "none"
            document.getElementsByClassName('form-control')[5].value ="Login"
            document.getElementById('input_log').name = "login"
            document.getElementsByClassName('form-control')[2].placeholder = "E-mail"
        }

        else {
            document.getElementsByClassName('form-control')[1].style.display = "block"
            document.getElementsByClassName('form-control')[4].style.display = "block"
            document.getElementsByClassName('form-control')[5].value ="Register"
            document.getElementById('input_log').name = "register"
            document.getElementsByClassName('form-control')[2].placeholder = "E-mail"
        }
        
    }

    document.getElementsByClassName("s1_bar")[0].style.display = "none";
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 430 || document.documentElement.scrollTop > 430) {
    document.getElementsByClassName("s1_bar")[0].style.display = "block";
    document.getElementsByClassName("p1")[0].style.background = "linear-gradient(to bottom left,#5f75cc,#5caccf)";
    document.getElementsByClassName("p1")[0].style.background = "#100f21";
    document.getElementsByClassName("my_nav")[0].style.padding = "0px";
    document.getElementsByClassName("c3ul")[0].style.marginLeft = "30px";
    document.getElementsByClassName("p1")[0].style.padding = "10px 0px 10px 41px"
    document.getElementsByClassName("p1")[0].style.transition = "all 0.5s"
    document.getElementsByClassName("p1")[0].style.position = "fixed";
    document.getElementsByClassName("p1")[0].style.zIndex = "5"
    document.getElementsByClassName("circle")[0].style.display = "none"

  } else {
    document.getElementsByClassName("s1_bar")[0].style.display = "none";
    document.getElementsByClassName("p1")[0].style.background = "";
    document.getElementsByClassName("my_nav")[0].style.padding = "0px 41px 40px 41px";
    document.getElementsByClassName("c3ul")[0].style.marginLeft = "50px";
    document.getElementsByClassName("p1")[0].style.padding = "20px 0px"
    document.getElementsByClassName("p1")[0].style.transition = "all 0s"
    document.getElementsByClassName("p1")[0].style.position = "relative";
    document.getElementsByClassName("circle")[0].style.display = "block"
  }
}

/* if ($(".text-slider").length == 1) {
            
            var typed_strings =
                $(".text-slider-items").text();
      
            var typed = new Typed(".text-slider", {
                strings: typed_strings.split(", "),
                typeSpeed: 80,
                loop: true,
                backDelay: 900,
                backSpeed: 50,
            });
        } */
</script>