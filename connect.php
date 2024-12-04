<?php

session_start();

$conn = mysqli_connect('localhost', 'root', '', 'movie_db_vaibhav');

if(isset($_POST['register'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $confirm_pass = $_POST['confirm_pass'];

    $sql = "SELECT * FROM movie_usertb WHERE `email` = '" . $email . "' ";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_num_rows($result);

    if($name=='' | $email=='' | $pass==''){
        $_SESSION['error'] = "Empty Field";
    }

    else if ($pass !== $confirm_pass) {
        $_SESSION['error'] = "Password not matched";
    }

    else if ($row){
        $_SESSION['error'] = "Email already exists";
    }

    else {
        $pass = md5($pass);
        $status = '0';
        $upload_count = '0';
        date_default_timezone_set("Asia/Calcutta"); //India time (GMT+5:30)
        $date = date('d-M-Y h:i:sa');

        $sql = 'INSERT INTO `movie_usertb` (`name`, `email`, `pass`, `status`, `date`, `upload_count`) VALUES ("'.$name.'", "'.$email.'", "'.$pass.'", "'.$status.'", "'.$date.'", "'.$upload_count.'")';
        mysqli_query($conn, $sql);

        $_SESSION['registered'] = "Successfully registered";
    }
    header("location: index.php");
}

else if(isset($_POST['login'])){

    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $pass = md5($pass);

    $super_admin_email = "admin@gmail.com";
    $super_admin_pass = md5("vaibhav");

    $sql = 'SELECT * FROM movie_usertb WHERE `email` = "'.$email.'" AND `pass` = "'.$pass.'" AND status = 1 ';
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);

    if(($super_admin_email == $email) && ($super_admin_pass == $pass)){
        $x = rand(0000,9999);
        $_SESSION['superadmin'] = $x;
        $_SESSION['token']= $x;
        header('location:index.php');
    }

    else if($row) {
        $_SESSION['row'] = $row['id'];
        header('location:index.php?url=profile');
    }

    else {
        $_SESSION['not exist'] = "Email not registered. Create new account.";
        header('location:index.php');
    }
}

else if(isset($_POST['movie_upload'])){
    
    $title = $_POST['title'];

    // Image Upload and Rename
    $target_dir = "./assets/uploads/";
    $target_file = $target_dir . basename($_FILES["image"]["name"]);
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    
    $img = str_replace(' ', '',$title);
    $img = preg_replace('/[^A-Za-z0-9\-]/', '', $img);
    $image = $img.rand(0000,9999).'.'.$imageFileType;
    $target_file = $target_dir . $image;
    move_uploaded_file($_FILES["image"]["tmp_name"], $target_file);

    $lang = $lang1 = $lang2 = $lang3 = $lang4 = $lang5 = "";

    if(isset($_POST['English'])){
        $lang1 = $_POST['English'];
    }

    if(isset($_POST['Hindi'])){
        $lang2 = $_POST['Hindi'];
    }

    if(isset($_POST['South'])){
        $lang3 = $_POST['South'];
    }

    if(isset($_POST['Chinese'])){
        $lang4 = $_POST['Chinese'];
    }

    if(isset($_POST['Other'])){
        $lang5 = $_POST['Other'];
    }
    $lang = array($lang1, $lang2, $lang3, $lang4, $lang5);
    $lang = array_filter($lang,'strlen');
    $lang = implode(",", $lang);

    $year = (int) $_POST['year'];
    $rating = $_POST['rating'];
    $cast = $_POST['cast'];

    $genre = $genre1 = $genre2 = $genre3 = $genre4 = $genre5 = $genre6 = $genre7 = $genre8 = $genre9 = $genre10 = $genre11 = $genre12 = $genre13 = $genre14 = $genre15 = $genre16 = $genre17 = $genre18 = $genre18 = $genre19 = $genre20 = "";

    if(isset($_POST['Action'])){
        $genre1 = $_POST['Action'];
    }

    if(isset($_POST['Horror'])){
        $genre2 = $_POST['Horror'];
    }

    if(isset($_POST['Adventure'])){
        $genre3 = $_POST['Adventure'];
    }

    if(isset($_POST['Comedy'])){
        $genre4 = $_POST['Comedy'];
    }

    if(isset($_POST['Crime'])){
        $genre5 = $_POST['Crime'];
    }

    if(isset($_POST['Biography'])){
        $genre6 = $_POST['Biography'];
    }

    if(isset($_POST['Documentry'])){
        $genre7 = $_POST['Documentry'];
    }

    if(isset($_POST['Drama'])){
        $genre8 = $_POST['Drama'];
    }

    if(isset($_POST['Family'])){
        $genre9 = $_POST['Family'];
    }

    if(isset($_POST['Fantasy'])){
        $genre10 = $_POST['Fantasy'];
    }

    if(isset($_POST['History'])){
        $genre11 = $_POST['History'];
    }

    if(isset($_POST['Music'])){
        $genre12 = $_POST['Music'];
    }

    if(isset($_POST['Musical'])){
        $genre13 = $_POST['Musical'];
    }

    if(isset($_POST['Mystery'])){
        $genre14= $_POST['Mystery'];
    }

    if(isset($_POST['Romance'])){
        $genre15 = $_POST['Romance'];
    }

    if(isset($_POST['Sci-Fi'])){
        $genre16 = $_POST['Sci-Fi'];
    }

    if(isset($_POST['Sport'])){
        $genre17 = $_POST['Sport'];
    }

    if(isset($_POST['Thriller'])){
        $genre18 = $_POST['Thriller'];
    }

    if(isset($_POST['War'])){
        $genre19 = $_POST['War'];
    }

    if(isset($_POST['Western'])){
        $genre20 = $_POST['Western'];
    }

    $genre = array($genre1,$genre2,$genre3,$genre4,$genre5,$genre6,$genre7,$genre8,$genre9,$genre10,$genre11,$genre12,$genre13,$genre14,$genre15,$genre16,$genre17,$genre18,$genre19,$genre20);
    $genre = array_filter($genre,'strlen');
    $genre = implode(",", $genre);  

    $industry = $_POST['industry'];
    $link = $_POST['link'];
    $upload_id = (int) $_SESSION['row'];

    date_default_timezone_set("Asia/Calcutta"); //India time (GMT+5:30)
    $upload_dateTime = date('d-M-Y h:i:sa');


    /* var_dump($title, $image, $lang, $year, $rating, $cast, $genre, $industry, $link,$upload_id,$upload_dateTime);
 */

    $sql = 'INSERT INTO `movie_detailtb` (`movie_name`,`movie_poster`,`movie_language`,`movie_year`,`movie_rating`,`movie_cast`,`movie_genre`,`movie_state`,`upload_id`,`upload_dateTime`) VALUES ("'.$title.'","'.$image.'","'.$lang.'","'.$year.'","'.$rating.'","'.$cast.'","'.$genre.'","'.$industry.'","'.$upload_id.'","'.$upload_dateTime.'") ';
    mysqli_query($conn, $sql);

    header('location:index.php');

}

else if(isset($_POST['search_submit'])) {

    $sql = 'SELECT * FROM `movie_detailtb` WHERE concat(`movie_name`,`movie_poster`,`movie_cast`) LIKE "%'.$_POST['search'].'%" ';
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_all($result);
    $_SESSION['search_result'] = $row;

    header('location:index.php');
}

else {
    header('location:index.php');
}

?>