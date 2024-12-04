<?php 
$host_name = "localhost";
$user_name = "root";
$db_pass = "";

$conn = mysqli_connect($host_name,$user_name,$db_pass,'papers_db');

$sql = 'SELECT * FROM `exams` WHERE 1';
$row = mysqli_query($conn,$sql);
?>

<section class="exams">
    <div class="container-fluid mb-5">
        <div class="row row_1" id="popular_exams">
            <div class="col-lg-12">
                <?php 
                    while($result = mysqli_fetch_all($row)){
                        var_dump($result);
                    }
                ?>

            </div>
            <div class="col-lg-9">
                <h1 class="heading">Popular Government Exams</h1>
                <hr class="heading_hr mb-5">                
            </div>
            <div class="col-lg-3">
                <a href="index.php?exam_calendar"><div class="btn btn_cal"><p><i class="fa-regular fa-calendar-days cal"></i> Exam Calendar</p></div></a>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row row_2">
            <div class="col-lg-3 c1">
                <div class="row" id="category"></div>
            </div>

            <div class="col-lg-9 c2">
                <div class="row" id="exams"></div>
            </div>
        </div>
    </div>
</section>

<section id="#request" class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 Request">
                <form action="" class="form-control f1" method="post">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>Request Question Paper:</h2>
                        </div>
                        <div class="col-lg-12 mb-2">
                            <label for="name">Name:</label>
                            <input class="form-control" placeholder="Enter your name" id="name" type="text" name="Name" >
                        </div>
                        <div class="col-lg-12 mb-2">
                            <label for="email">Email:</label>
                            <input class="form-control" placeholder="Enter your email" type="email" id="email" name="email">
                        </div>
                        <div class="col-lg-12 mb-2">
                            <label for="exam_name">Exam Name:</label>
                            <input class="form-control" placeholder="Enter the name of the exam" id="exam_name" type="text" name="exam_name">
                        </div>
                        <div class="col-lg-12 mb-2">
                            <label for="year">Exam Year:</label>
                            <input class="form-control" placeholder="Enter year" type="text" id="year" name="year">
                        </div>
                        <div class="col-lg-6 offset-lg-3">
                            <input class="form-control submit_req" type="submit" name="submit" value="Send Request">
                        </div>                        
                    </div>
                </form>
            </div>

            <div class="col-lg-6 Feedback">
                <form action="" class="form-control f1" method="post">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>Feedback:</h2>
                        </div>
                        <div class="col-lg-12 mb-2">
                            <label for="f_name">Name:</label>
                            <input class="form-control" placeholder="Enter your name" id="f_name" type="text" name="Name" >
                        </div>
                        <div class="col-lg-12 mb-2">
                            <label for="f_email">Email:</label>
                            <input class="form-control" placeholder="Enter your email" type="email" id="f_email" name="email">
                        </div>
                        <div class="col-lg-12 mb-2">
                            <label for="message" class="message">Message:</label>
                            <textarea class="form-control" name="message" id="message" cols="10" rows="4"></textarea>
                        </div>                        
                        <div class="col-lg-6 offset-lg-3">
                            <input class="form-control submit_req" type="submit" name="submit" value="Send Feedback">
                        </div>                        
                    </div>
                </form>
            </div>

            <div class="col-lg-12 copyright">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="disclaimer"><i class="fa-regular fa-copyright c_right"></i> Copyright PreviousPapersPDF.com All rights reserved. </p>
                        <div class="social_media">
                            <a href="#"><i class="fab fa-facebook-f social_icons icon_fb"></i></a>
                            <a href="#"><i class="fab fa-instagram social_icons"></i></a>
                            <a href="#"><i class="fab fa-twitter social_icons"></i></a>
                            <a href="#"><i class="fab fa-skype social_icons"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in social_icons"></i></a>
                        </div>
                    </div>
                    <!-- <div class="col-lg-6">
                        <div class="social_media">
                            <i class="fab fa-facebook-f social_icons"></i>
                            <i class="fab fa-instagram social_icons"></i>
                            <i class="fab fa-twitter social_icons"></i>
                            <i class="fab fa-skype social_icons"></i>
                            <i class="fab fa-linkedin-in social_icons"></i>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</section>