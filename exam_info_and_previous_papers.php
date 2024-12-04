<section class="exam_info">
<div class="container-fluid ">
    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-4">
                <a href="index.php"> <h2 class="exam_name">NEET</h2></a>
                </div>
                <div class="col-lg-4 col-md-4 col-8 my_btns">
                    <div class="btn btn-primary">Slyllabus</div>
                    <div class="btn btn-primary">Exam Centers</div>
                </div>
            </div>          
        </div>
        <div class="col-lg-12 mt-2">
            <ul class="info">
                <li>The <span class="bold">National Eligibility cum Entrance Test</span> (Undergraduate) or NEET (UG), formerly the All India Pre-Medical Test (AIPMT), is an all India pre-medical entrance test for students who wish to pursue undergraduate medical (MBBS), dental (BDS) and AYUSH (BAMS, BUMS, BHMS, etc.) courses in government and private institutions in India and also, for those intending to pursue primary medical qualification abroad.</li>
            </ul>
        </div>
        <div class="col-lg-12">
            <p class="bold">Website :- <a href="https://neet.nta.nic.in/" target="_blank">https://neet.nta.nic.in/</a></p>
        </div>
        <div class="col lg-12">
            <p class="bold">Eligibility Criteria :- </p>
            <ul class="eligible">
                <li>Student must have passed 10+2 or equivalent with Physics, Chemistry, Biology/Biotechnology and English as core subjects from a recognized board.</li>
                <li>Also, Class 12 or equivalent appearing aspirants are also eligible to apply for NEET.</li>
                <li>Candidates must have attained the age of 17+ by the end of appearing year.</li>
            </ul>
        </div>
        <div class="col-lg-12">
            <p><span class="bold">Exam Mode :- </span> <span class="mode">Offline</span></p>
        </div>
        <div class="col-lg-12">
            <p class="bold">Exam Form :- <a href="https://neet.nta.nic.in/" target="_blank">https://neet.nta.nic.in/</a></p>
        </div>
        <div class="col-lg-12">
            <p class="bold">Admit Card :- <a href="https://neet.nta.nic.in/" target="_blank">https://neet.nta.nic.in/</a></p>
        </div>
        <div class="col-lg-12">
            <p><span class="bold">Exam Date :- </span> <span class="mode">30/05/2024</span></p>
        </div>
    </div>
</div>
</section>

<section class="papers">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <p><span class="bold prev_papers">Previous Years Papers</p>
            </div>

            <?php
                for ($i=2023; $i > 2017; $i--) { ?>
                <div class="pp">
                <div class="row bg_1">
                <div class="col-lg-12">
                    <p><span class="bold paper_year">Year : <?php echo $i ?></p>
                </div>
                <div class="col-lg-12">
                    <div class="btn btn-primary">Download PDF</div>
                    <div class="btn btn-primary">Preview PDF</div>
                </div>
                </div>
                </div>
            
            <?php
                }
            ?>            
            
        </div>
    </div>
</section>