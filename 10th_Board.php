<section class="exams_page">
<div class="container  mt-5">
    <div class="row " id="board_exams">
        <div class="col-lg-12">
            <h1 class="heading">10th Board Exams</h1>
            <hr class="heading_hr mb-5">
        </div>
        <!-- <div class="col-lg-3 col-md-4 col-6 mb-4">
            <a href="">
                <div class="btn"><p>CBSE</p></div>
            </a>
        </div> -->
    </div>
</div>
</section>

<script>
    /* const board_exams =['CBSE Board','CISCE Board','NIOS','MP Board ', 'UP Board','Bihar Board','Maharashtra Board','TSBIE',] */

    const board_exams =['CBSE Board','CISCE Board','NIOS' ,'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh','Uttarakhand', 'West Bengal']

/* for(let i=0; i<board_exams.length; i++){
    document.getElementById('board_exams').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href=""><div class="btn"><p>${board_exams[i]}</p></div></a>
    </div>`
}
 */




/* <--- 10th Boards ---> */

const educationBoards = [
    "Central Board of Secondary Education (CBSE)",
    "Council for the Indian School Certificate Examinations (CISCE)",
    "Andhra Pradesh Board of Secondary Education",
    "Andhra Pradesh Board of Intermediate Education",
    "Arunachal Pradesh Board of Secondary Education",
    "Secondary Education Board of Assam",
    "Assam Higher Secondary Education Council",
    "Bihar School Examination Board",
    "Chhattisgarh Board of Secondary Education",
    "Goa Board of Secondary and Higher Secondary Education",
    "Gujarat Secondary and Higher Secondary Education Board",
    "Haryana Board of School Education",
    "Himachal Pradesh Board of School Education",
    "Jammu and Kashmir State Board of School Education",
    "Jharkhand Academic Council",
    "Karnataka Secondary Education Examination Board",
    "Department of Pre-University Education, Karnataka",
    "Kerala Board of Public Examinations",
    "Kerala Board of Higher Secondary Education",
    "Madhya Pradesh Board of Secondary Education",
    "Maharashtra State Board of Secondary and Higher Secondary Education",
    "Board of Secondary Education, Manipur",
    "Meghalaya Board of School Education",
    "Mizoram Board of School Education",
    "Nagaland Board of School Education",
    "Board of Secondary Education, Odisha",
    "Council of Higher Secondary Education, Odisha",
    "Punjab School Education Board",
    "Board of Secondary Education, Rajasthan",
    "Rajasthan Board of Secondary Education (RBSE)",
    "Rajasthan Board of Secondary Education, Ajmer",
    "Sikkim Board of Secondary Education",
    "Tamil Nadu Board of Secondary Education",
    "Tamil Nadu Board of Higher Secondary Education",
    "Board of Secondary Education, Telangana",
    "Telangana State Board of Intermediate Education",
    "Tripura Board of Secondary Education",
    "Board of High School and Intermediate Education Uttar Pradesh",
    "Uttarakhand Board of School Education",
    "West Bengal Board of Secondary Education",
    "West Bengal Council of Higher Secondary Education"
  ];

  const educationBoardsStateName = [
    "Central Board of Secondary Education (CBSE)",
    "Council for the Indian School Certificate Examinations (CISCE)",
    "Andhra Pradesh Board of Secondary Education (AP Board)",
    "Andhra Pradesh Board of Intermediate Education (AP Inter Board)",
    "Arunachal Pradesh Board of Secondary Education (APBSE)",
    "Secondary Education Board of Assam (SEBA)",
    "Assam Higher Secondary Education Council (AHSEC)",
    "Bihar School Examination Board (BSEB)",
    "Chhattisgarh Board of Secondary Education (CGBSE)",
    "Goa Board of Secondary and Higher Secondary Education (GBSHSE)",
    "Gujarat Secondary and Higher Secondary Education Board (GSEB)",
    "Haryana Board of School Education (HBSE)",
    "Himachal Pradesh Board of School Education (HPBOSE)",
    "Jammu and Kashmir State Board of School Education (JKBOSE)",
    "Jharkhand Academic Council (JAC)",
    "Karnataka Secondary Education Examination Board (KSEEB)",
    "Department of Pre-University Education, Karnataka (PUE)",
    "Kerala Board of Public Examinations (KBPE)",
    "Kerala Board of Higher Secondary Education (KBHSE)",
    "Madhya Pradesh Board of Secondary Education (MP Board)",
    "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
    "Board of Secondary Education, Manipur (BSEM)",
    "Meghalaya Board of School Education (MBOSE)",
    "Mizoram Board of School Education (MBSE)",
    "Nagaland Board of School Education (NBSE)",
    "Board of Secondary Education, Odisha (BSE Odisha)",
    "Council of Higher Secondary Education, Odisha (CHSE Odisha)",
    "Punjab School Education Board (PSEB)",
    "Board of Secondary Education, Rajasthan (BSER)",
    "Rajasthan Board of Secondary Education (RBSE)",
    "Rajasthan Board of Secondary Education, Ajmer (RBSE Ajmer)",
    "Sikkim Board of Secondary Education (SBSE)",
    "Tamil Nadu Board of Secondary Education (TNBSE)",
    "Tamil Nadu Board of Higher Secondary Education (TNBHSE)",
    "Board of Secondary Education, Telangana (TS SSC Board)",
    "Telangana State Board of Intermediate Education (TS Intermediate Board)",
    "Tripura Board of Secondary Education (TBSE)",
    "Board of High School and Intermediate Education Uttar Pradesh (UP Board)",
    "Uttarakhand Board of School Education (UBSE)",
    "West Bengal Board of Secondary Education (WBBSE)",
    "West Bengal Council of Higher Secondary Education (WBCHSE)"
  ];

  /* for(let i=0; i<educationBoardsStateName.length; i++){
    document.getElementById('board_exams').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href=""><div class="btn"><p>${educationBoardsStateName[i]}</p></div></a>
    </div>`
} */
  

  const educationBoardsShortForm = [
    "CBSE","CISCE","APBSE","APIBE","APBSE","SEBA","AHSEC","BSEB","CGBSE","GBSHSE","GSEB","HBSE",
    "HPBOSE","JKBOSE","JAC","KSEEB","PUE","KBPE","KBHSE","MPBSE","MSBSHSE","BSEM","MBOSE","MBSE",
    "NBSE","BSEODISHA","CHSEODISHA","PSEB","RBSE","RBSE","RBSE","SBSE","TNBSE","TNBHSE","BSETEL",
    "TSBIE","TBSE","UPBSE","UBSE","WBBSE","WBCHSE"];

    for(let i=0; i<educationBoardsShortForm.length; i++){
    document.getElementById('board_exams').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=10th_${educationBoardsShortForm[i]}"><div class="btn"><p>${educationBoardsShortForm[i]}</p></div></a>
    </div>`
}
  
  







</script>




