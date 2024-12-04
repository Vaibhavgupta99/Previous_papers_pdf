<?php 
    $host_name = "localhost";
    $user_name = "root";
    $db_pass = "";

    $conn = mysqli_connect($host_name,$user_name,$db_pass,'papers_db');

    include_once './header.php';
    /* include_once './navbar.php'; */
?>

<style>
    body {
        background: #000;
    }
    .exam_details {
        background: #262833;
        color: #fcfcfc;
        padding:20px;
        font-size: 18px;
        font-weight: 500;
    }
    
    .radio_left {
        margin-left: 15px;
    }

    .btn_center {
        text-align: center;
    }

    .btn {
        padding: 5px 50px;
        border: none;
    }

    .btn.b1 {
        background: green;
    }
</style>


<form action="conn.php" method="post" enctype="multipart/form-data">

<div class="container exam_details">
    <div class="row">
        <div class="col-lg-12 mb-3">
            <h2>Upload Exam Papers:</h2>
        </div>
        <div class="col-lg-6">
            <label for="e_name" class="mb-1">Exam Name:</label>
            <input id="e_name" class="form-control" type="text" name="e_name">
    
            <label for="s_name" class="mt-3 mb-1">Short Name:</label>
            <input id="s_name" class="form-control" type="text" name="s_name">

            <label for="info" class="mt-3 mb-1">Exam Info:</label><br>
            <textarea id="info" class="form-control" rows="4" cols="50" name="info"></textarea>

            <label class="mt-3 mb-1">Exam Mode:</label>    
            <div>
                <input id="online" type="radio" name="mode">
                <label for="online">Online</label>
                <input id="offline" class="radio_left" type="radio" name="mode">
                <label for="offline">Offline</label>
            </div>

            <label for="date" class="mt-3 mb-1">Exam Date:</label>
            <input id="date" class="form-control" type="text" name="date">

            <label for="eligibility" class="mt-3 mb-1">Eligibility:</label><br>
            <textarea id="eligibility" class="form-control" rows="4" cols="50" name="eligibility"></textarea>

            <label for="website" class="mt-3 mb-1">Website Link:</label>
            <input id="website" class="form-control" type="text" name="website">

            <label for="e_form" class="mt-3 mb-1">Exam Form Link:</label>
            <input id="e_form" class="form-control" type="text" name="e_form">

            <label for="admit" class="mt-3 mb-1">Admit Card Link:</label>
            <input id="admit" class="form-control" type="text" name="admit">

            
        </div>

        <div class="col-lg-6">

            <label class="mb-1">Category:</label>
            <select class="form-select form-control" name="category">
                <script>
                    category = ['Engineering', 'Boards', 'Medical', 'Management', 'Law', 'Agriculture', 'Design', 'Research', 'Defence', 'Banking', 'Civil Services', 'Teaching', 'Olympiad', 'Hacking','Cyber Security']
                    category.forEach(i => {
                    document.write(`<option value="${i}">${i}</option>`)
                });
                </script>
            </select>

            <label for="syllabus" class="mt-3 mb-1">Syllabus:</label>
            <input id="syllabus" class="form-control" type="file" accept="application/pdf" name="syllabus">

            <label for="centers" class="mt-3 mb-1">Exam Centers:</label>
            <input id="centers" class="form-control" type="file" accept="application/pdf" name="centers">

            <label for="pdf_2024" class="mt-3 mb-1">PDF of 2024 Exam:</label>
            <input id="pdf_2024" class="form-control" type="file" accept="application/pdf" name="pdf_2024">

            <label for="pdf_2023" class="mt-3 mb-1">PDF of 2023 Exam:</label>
            <input id="pdf_2023" class="form-control" type="file" accept="application/pdf" name="pdf_2023">

            <label for="pdf_2022" class="mt-3 mb-1">PDF of 2022 Exam:</label>
            <input id="pdf_2022" class="form-control" type="file" accept="application/pdf" name="pdf_2022">

            <label for="pdf_2021" class="mt-3 mb-1">PDF of 2021 Exam:</label>
            <input id="pdf_2021" class="form-control" type="file" accept="application/pdf" name="pdf_2021">

            <label for="pdf_2020" class="mt-3 mb-1">PDF of 2020 Exam:</label>
            <input id="pdf_2020" class="form-control" type="file" accept="application/pdf" name="pdf_2020">

            <label for="pdf_2019" class="mt-3 mb-1">PDF of 2019 Exam:</label>
            <input id="pdf_2019" class="form-control" type="file" accept="application/pdf" name="pdf_2019">

            <label for="pdf_2018" class="mt-3 mb-1">PDF of 2018 Exam:</label>
            <input id="pdf_2018" class="form-control" type="file" accept="application/pdf" name="pdf_2018">                       
        </div>
        <div class="col-lg-12 btn_center mt-3">
            <input type="Submit" class="btn btn-primary b1" name="post" value="Submit">

            <input type="Reset" class="btn btn-primary b2" value="Reset"> 
        </div>
    </div>
</div>

</form>

<?php include_once './footer.php'; ?>