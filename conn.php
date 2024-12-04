<?php 

session_start();

$host_name = "localhost";
$user_name = "root";
$db_pass = "";

$conn = mysqli_connect($host_name,$user_name,$db_pass);

$sql = 'CREATE DATABASE IF NOT EXISTS `papers_db`';
mysqli_query($conn,$sql);

$conn = mysqli_connect($host_name,$user_name,$db_pass,'papers_db');

$sql = 'CREATE TABLE IF NOT EXISTS `papers_db`.`users` (`id` INT NOT NULL AUTO_INCREMENT , `user_info` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = MyISAM';
mysqli_query($conn,$sql);

$sql = 'CREATE TABLE IF NOT EXISTS `papers_db`.`exams` (`id` INT NOT NULL AUTO_INCREMENT , `exam_info` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = MyISAM';
mysqli_query($conn,$sql);

$super_mail = "admin@gmail.com";
$super_pass = md5("Vaibhav");

if(isset($_POST['register'])){

    $name = isset($_POST['name'])? $_POST['name']: '';
    $phone = isset($_POST['phone'])? $_POST['phone']: ''; 
    $email = isset($_POST['email'])? $_POST['email']: '';
    $pass = isset($_POST['pass'])? $_POST['pass']: '';
    $conf_pass = $_POST['confirm_pass'];

    $sql = 'SELECT * FROM `users` WHERE 1';
    $row = mysqli_query($conn,$sql);
    $result = mysqli_fetch_all($row);
    $n = 1;

    foreach($result as $x => $val){
        $obj = json_decode($val[1],true);

        if($email == $obj['email']){
            $_SESSION['error'] = "Email already registered";
            $n = 0;
            break;
        }
    }

    if($n){
        if($pass == $conf_pass){
            $pass = md5($_POST['pass']);
    
            $data = array('name' => $name, 'phone' => $phone, 'email' => $email, 'pass' => $pass);
            $data = json_encode($data);
    
            $sql = "INSERT INTO `users`(`user_info`) VALUES ('".$data."')";
            mysqli_query($conn,$sql);
        }
        else {
            $_SESSION['error'] = "Both passwords must be same";
        }
    }
}

else if(isset($_POST["login"])){

    $email = $_POST['email'];
    $pass = md5($_POST['pass']);

    $sql = "SELECT * FROM `users` WHERE 1";
    $row = mysqli_query($conn, $sql);
    $result = mysqli_fetch_all($row);
    $n = 1;
    
    foreach($result as $x => $val) {        
       $obj =  json_decode($val[1], true);

       if($email == $obj['email'] && $pass == $obj['pass']){
            $_SESSION['admin'] = "Hello Admin";
            $n = 0;
            break;
       }
    }
    if($n){
        $_SESSION['error'] = "Invalid email or password";
    }
}

else if(isset($_POST['post'])){
    //Exam info
    $e_name = isset($_POST['e_name'])? $_POST['e_name']: '';
    $s_name = isset($_POST['s_name'])? strtoupper($_POST['s_name']): '';
    $info = isset($_POST['info'])? $_POST['info']: '';
    $mode = isset($_POST['mode'])? $_POST['mode']: '';
    $date = isset($_POST['date'])? $_POST['date']: '';
    $eligibility = isset($_POST['eligibility'])? $_POST['eligibility']: '';
    $website = isset($_POST['website'])? $_POST['website']: '';
    $e_form = isset($_POST['e_form'])? $_POST['e_form']: '';
    $admit = isset($_POST['admit'])? $_POST['admit']: '';
    $category = isset($_POST['category'])? $_POST['category']: '';
    $syllabus = basename($_FILES["syllabus"]["name"]);
    $centers = basename($_FILES["centers"]["name"]);
    $pdf_2024 = basename($_FILES["pdf_2024"]["name"]);
    $pdf_2023 = basename($_FILES["pdf_2023"]["name"]);
    $pdf_2022 = basename($_FILES["pdf_2022"]["name"]);
    $pdf_2021 = basename($_FILES["pdf_2021"]["name"]);
    $pdf_2020 = basename($_FILES["pdf_2020"]["name"]);
    $pdf_2019 = basename($_FILES["pdf_2019"]["name"]);
    $pdf_2018 = basename($_FILES["pdf_2018"]["name"]);

// PDF Uploads
$target_dir = "./assets/uploads/";

if(isset($syllabus)){
//Syllabus PDF...
$target_file = $target_dir.basename($_FILES["syllabus"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// start:  file rename
$fileName = basename($_FILES["syllabus"]["name"]);
$fileNameNoExtension = preg_replace("/\.[^.]+$/", "", $fileName);
$newfilename = $s_name . '_Syllabus' . '.' . $imageFileType;
// end: file rename
$target_file = $target_dir.basename($newfilename);
$syllabus = basename($newfilename);
// move uploaded file
move_uploaded_file($_FILES["syllabus"]["tmp_name"], $target_file);
}
else {
    $syllabus = '';
}


if(isset($centers)){
//Exam Center PDF...
$target_file = $target_dir.basename($_FILES["centers"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// start:  file rename
$fileName = basename($_FILES["centers"]["name"]);
$fileNameNoExtension = preg_replace("/\.[^.]+$/", "", $fileName);
$newfilename = $s_name . '_Exam_Centers' . '.' . $imageFileType;
// end: file rename
$target_file = $target_dir.basename($newfilename);
$centers = basename($newfilename);
// move uploaded file
move_uploaded_file($_FILES["centers"]["tmp_name"], $target_file);
}
else {
    $centers = '';
}


if(isset($pdf_2024)){
//2024 Exam PDF...
$target_file = $target_dir.basename($_FILES["pdf_2024"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// start:  file rename
$fileName = basename($_FILES["pdf_2024"]["name"]);
$fileNameNoExtension = preg_replace("/\.[^.]+$/", "", $fileName);
$newfilename = $s_name . '_2024' . '.' . $imageFileType;
// end: file rename
$target_file = $target_dir.basename($newfilename);
$pdf_2024 = basename($newfilename);
// move uploaded file
move_uploaded_file($_FILES["pdf_2024"]["tmp_name"], $target_file);
}
else {
    $pdf_2024 = '';
}


if(isset($pdf_2023)){
//2023 Exam PDF...
$target_file = $target_dir.basename($_FILES["pdf_2023"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// start:  file rename
$fileName = basename($_FILES["pdf_2023"]["name"]);
$fileNameNoExtension = preg_replace("/\.[^.]+$/", "", $fileName);
$newfilename = $s_name . '_2023' . '.' . $imageFileType;
// end: file rename
$target_file = $target_dir.basename($newfilename);
$pdf_2023 = basename($newfilename);
// move uploaded file
move_uploaded_file($_FILES["pdf_2023"]["tmp_name"], $target_file);
}
else {
    $pdf_2023 = '';
}


if(isset($pdf_2022)){
//2022 Exam PDF...
$target_file = $target_dir.basename($_FILES["pdf_2022"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// start:  file rename
$fileName = basename($_FILES["pdf_2022"]["name"]);
$fileNameNoExtension = preg_replace("/\.[^.]+$/", "", $fileName);
$newfilename = $s_name . '_2022' . '.' . $imageFileType;
// end: file rename
$target_file = $target_dir.basename($newfilename);
$pdf_2022 = basename($newfilename);
// move uploaded file
move_uploaded_file($_FILES["pdf_2022"]["tmp_name"], $target_file);
}
else {
    $pdf_2022 = '';
}


if(isset($pdf_2021)){
//2021 Exam PDF...
$target_file = $target_dir.basename($_FILES["pdf_2021"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// start:  file rename
$fileName = basename($_FILES["pdf_2021"]["name"]);
$fileNameNoExtension = preg_replace("/\.[^.]+$/", "", $fileName);
$newfilename = $s_name . '_2021' . '.' . $imageFileType;
// end: file rename
$target_file = $target_dir.basename($newfilename);
$pdf_2021 = basename($newfilename);
// move uploaded file
move_uploaded_file($_FILES["pdf_2021"]["tmp_name"], $target_file); 
}
else {
    $pdf_2021 = '';
}


if(isset($pdf_2020)){
//2020 Exam PDF...
$target_file = $target_dir.basename($_FILES["pdf_2020"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// start:  file rename
$fileName = basename($_FILES["pdf_2020"]["name"]);
$fileNameNoExtension = preg_replace("/\.[^.]+$/", "", $fileName);
$newfilename = $s_name . '_2020' . '.' . $imageFileType;
// end: file rename
$target_file = $target_dir.basename($newfilename);
$pdf_2020 = basename($newfilename);
// move uploaded file
move_uploaded_file($_FILES["pdf_2020"]["tmp_name"], $target_file);  
}
else {
    $pdf_2020 = '';
}


if(isset($pdf_2019)){
//2019 Exam PDF...
$target_file = $target_dir.basename($_FILES["pdf_2019"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// start:  file rename
$fileName = basename($_FILES["pdf_2019"]["name"]);
$fileNameNoExtension = preg_replace("/\.[^.]+$/", "", $fileName);
$newfilename = $s_name . '_2019' . '.' . $imageFileType;
// end: file rename
$target_file = $target_dir.basename($newfilename);
$pdf_2019 = basename($newfilename);
// move uploaded file
move_uploaded_file($_FILES["pdf_2019"]["tmp_name"], $target_file);  
}
else {
    $pdf_2019 = '';
}


if(isset($pdf_2018)){
//2018 Exam PDF...
$target_file = $target_dir.basename($_FILES["pdf_2018"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// start:  file rename
$fileName = basename($_FILES["pdf_2018"]["name"]);
$fileNameNoExtension = preg_replace("/\.[^.]+$/", "", $fileName);
$newfilename = $s_name . '_2018' . '.' . $imageFileType;
// end: file rename
$target_file = $target_dir.basename($newfilename);
$pdf_2018 = basename($newfilename);
// move uploaded file
move_uploaded_file($_FILES["pdf_2018"]["tmp_name"], $target_file);
}
else {
    $pdf_2018 = '';
}


    $sql = 'SELECT * FROM `exams` WHERE 1';
    $row = mysqli_query($conn,$sql);
    $result = mysqli_fetch_all($row);
    $n = 1;

    foreach($result as $x => $val) {
        $obj = json_decode($val[1],true);

        if($e_name == $obj['e_name'] OR $s_name == $obj['s_name']){
            $_SESSION['error'] = "Exam info already stored";
            $n = 0; 
            break;
        }
    }

    if($n){
        $data = array('e_name' => $e_name, 's_name' => $s_name, 'info' => $info, 'mode' => $mode , 'date' => $date, 'eligibility' => $eligibility, 'syllabus' => $syllabus, 'centers' => $centers, 'website' => $website, 'e_form' => $e_form, 'admit' => $admit, 'category' => $category, 'pdf_2024' => $pdf_2024, 'pdf_2023' => $pdf_2023, 'pdf_2022' => $pdf_2022, 'pdf_2021' => $pdf_2021, 'pdf_2020' => $pdf_2020, 'pdf_2019' => $pdf_2019, 'pdf_2018' => $pdf_2018,);
        $data = json_encode($data);

        $sql = "INSERT INTO `exams`(`exam_info`) VALUES ('".$data."')";
        mysqli_query($conn,$sql);
    }

    header('location:post.php');
}

else if(isset($_POST['update'])){

}

else {
    header('location:index.php');
}

header('location:index.php');
?>