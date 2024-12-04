<?php

session_start();

    include_once './header.php';
    

    if(isset($_GET['exam'])){
        if($_GET['exam'] == '10th_Board'){
            include_once './10th_Board.php';
        }
        else if($_GET['exam'] == '12th_Board'){
            include_once './12th_Board.php';
        }
        else{
            include_once './exam_info_and_previous_papers.php';
        }
    }
    else if(isset($_GET['exam_calendar'])){
        include_once './exam_calendar.php';
    }
    else{
        include_once './navbar.php';
        include_once './home.php';
    }

    include_once './footer.php';
?>
