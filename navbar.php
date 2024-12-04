<section class="my_nav">
<div class="container-fluid">
        <div class="row">
        <div class="col-lg-12 p1">
                <div class="row">
                    <div class="col-lg-4">
                        <a href="index"><h2>Previous Papers PDF</h2></a>
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

                    <div class="col-lg-2 offset-lg-2 c3">
                    <?php 
                            if(isset($_SESSION['superadmin']) | isset($_SESSION['admin'])) {
                                ?>
                                 <a href="logout.php"><div class="btn btn-danger">Logout</div></a><?php
                            }
                            else { ?>
                                <ul class="c3ul">
                                    <li onclick="abc(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</li>
                                    <li>|</li>
                                    <li onclick="abc(1)" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</li>
                                </ul>
                            <?php
                            }
                        ?>
                        
                    </div>
                </div>
            </div>

            <div class="col-lg-12 p2">
                <div class="row">
                    <div class="col-lg-4">
                        <a href="index"><h2>Previous Papers PDF</h2></a>
                    </div>    
            
                    <div class="col-lg-4"></div>

                    <div class="col-lg-2 offset-lg-2 c3">
                        <?php 
                            if(isset($_SESSION['superadmin']) | isset($_SESSION['admin'])) {
                                ?>
                                 <a href="logout.php"><div class="btn btn-danger">Logout</div></a><?php
                            }
                            else { ?>
                                <ul class="c3ul">
                                <li onclick="abc(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</li>
                                <li>|</li>
                                <li onclick="abc(1)" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</li>
                                <!-- <li><a href="#request">Request Question Paper</a></li> -->
                                </ul>
                            <?php
                            }
                        ?>
                        
                    </div>
                </div>
            </div>
            

            <div class="col-lg-7 c4">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="h12 mb-2">Previous Years Question Papers</h2>
                        <p class="p12">Repository of all previous years
                        <span class="text-slider-items">National level, State level</span>
                        <span class="text-slider"></span> papers in pdf format.</p>
                    </div>

                    <div class="col-lg-12">
                        <form action="abc" method="post">
                            <div class="s1">                        
                                <input id="search_input" class="form-control" type="search"         placeholder="Search Exam or Question Papers" name="search">
                                <input id="search_btn" hidden type="submit" name="search_submit">
                                <i id="search" class="fa fa-search"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-5 c5">
                <div class="img_png"></div>
            </div>
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
                        <div class="col-6 cc_modal" onclick="abc(0)" id="login">
                            <p>Login</p>
                        </div>

                        <div class="col-6 cc_modal" onclick="abc(1)">
                            <p>Register</p>
                        </div>

                        <form action="conn.php" method="post" class="needs-validation">
                            <div class="col-12 c1 cc">
                                <input name="name" class="form-control f1" type="text" placeholder="Username">               
                            </div>

                            <div class="col-12 c2 cc">
                                <input name="email" class="form-control f1" type="email" placeholder="E-mail">
                            </div>

                            <div class="col-12 c3 cc">
                                <input name="pass" class="form-control f1" type="password" placeholder="Password">                
                            </div>

                            <div class="col-12 c4 cc">
                                <input name="confirm_pass" class="form-control f1" type="password" placeholder="Confirm Password">
                            </div>

                            <div class="col-12 c5">
                                <p>By clicking below, you agree to our <a href="#">Terms and Conditions</a></p>
                            </div>

                            <div class="col-12 c6">
                                <input id="input_log" name="register" type="submit" value="Register" class="form-control f1">
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
        document.getElementsByClassName('cc_modal')[i].style.color = "#0be491"

        if (i == 0 ) {
            document.getElementsByClassName('form-control f1')[0].style.display = "none"
            document.getElementsByClassName('form-control f1')[3].style.display = "none"
            document.getElementsByClassName('form-control f1')[4].value ="Login"
            document.getElementById('input_log').name = "login"
        }

        else {
            document.getElementsByClassName('form-control f1')[0].style.display = "block"
            document.getElementsByClassName('form-control f1')[3].style.display = "block"
            document.getElementsByClassName('form-control f1')[4].value ="Register"
            document.getElementById('input_log').name = "register"
        }
        
    }


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
    document.getElementsByClassName("p1")[0].style.marginTop = "0px"
  } 
  else{
    document.getElementsByClassName("p1")[0].style.marginTop = "-100px"
  }
}

</script>