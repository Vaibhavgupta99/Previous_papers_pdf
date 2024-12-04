document.getElementById("search_input").addEventListener("keypress",function(event){
    if(event === "Enter") {
        event.preventDefault();
        document.getElementById("search_btn").click;
    }
})

/* <--- Category ---> */

const category = ['Engineering & Technology', 'Board Exams', 'Medical & Dental', 'Management', 'Law', 'Agriculture', 'Design', 'Science & Research', 'Defence & Security', 'Banking & Finance', 'Civil Services & Public Administration', 'Teaching & Education','Olympiad','Ethical Hacking','Cyber Security']

for (let i = 0; i < category.length; i++) {
   document.getElementById('category').innerHTML += `<div onclick="show(`+i+`)" class="col-lg-12 px-0">
    <div class="btn btn1">${category[i]}</div>
    </div>`    
}

/* <--- Exams ---> */

 const popular_exams = ['JEE', 'NEET', 'CAT', 'GATE', 'CLAT', 'NDA', 'UPSC', 'CA']

 for(let i=0; i<popular_exams.length; i++){
    document.getElementById('popular_exams').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${popular_exams[i]}"><div class="btn"><p>${popular_exams[i]}</p></div></a>
    </div>`
}


const exams = ['engineering', 'boards', 'medical', 'management', 'law', 'agriculture', 'design', 'research', 'defence', 'banking', 'civil_services', 'teaching', 'olympiad', 'hacking','cyberSecurity']

const exams_1 = ['engineering_1', 'boards_1', 'medical_1', 'management_1', 'law_1', 'agriculture_1', 'design_1', 'research_1', 'defence_1', 'banking_1', 'civil_services_1', 'teaching_1', 'olympiad_1','hacking_1','cyberSecurity_1']

for(let i=0; i<exams.length; i++){
    document.getElementById('exams').innerHTML += `<div id="${exams_1[i]}" class="col-lg-12">
    <div class="row" id="${exams[i]}"></div>
    </div>`
}

/* <--- Boards ---> */

const boards = ['10th Board', '12th Board']
const boards_1 = ['10th_Board','12th_Board']

for(let i=0; i<boards.length; i++){
    document.getElementById('boards').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${boards_1[i]}"><div class="btn"><p>${boards[i]}</p></div></a>
    </div>`
}

/* <--- Engineering & Technology ---> */

const engineeringExams1 = [
    'Joint Entrance Examination (JEE) Advanced',
    'Graduate Aptitude Test in Engineering (GATE)',
    'Indian Institutes of Technology Joint Admission Test (IIT-JAM)',
    'All India Engineering Entrance Examination (AIEEE)',
    'National Aptitude Test in Architecture (NATA)',
    'Vellore Institute of Technology Engineering Entrance Exam (VITEEE)',
    'Manipal University Online Entrance Test (MUOET)',
    'SRM Joint Engineering Entrance Exam (SRMJEEE)',
    'Birla Institute of Technology and Science Admission Test (BITSAT)',
    'National Institute of Technology Joint Entrance Examination (NIT-JEE)',
    'Indian Institute of Science Education and Research Aptitude Test (IISER AT)',
    'Common Admission Test for the Indian Institutes of Technology (CAT)',
    'Management Aptitude Test (MAT)',
    'Common Management Admission Test (CMAT)',
    'Xavier Aptitude Test (XAT)',
    'Graduate Management Admission Test (GMAT)',
    'Symbiosis National Aptitude Test (SNAP)',
    'NMIMS Management Aptitude Test (NMAT)',
    'Tata Institute of Social Sciences National Entrance Test (TISSNET)',
    'Indian Council of Agricultural Research Entrance Exam (ICAR AIEEA)',
    'Indian Maritime University Common Entrance Test (IMU CET)',
    'National Council for Hotel Management and Catering Technology Joint Entrance Examination (NCHMCT JEE)',
    'National Eligibility cum Entrance Test for Post Graduation (NEET PG)',
    'All India Post Graduate Medical Entrance Exam (AIPGMEE)',
    'National Eligibility cum Entrance Test for Undergraduates (NEET UG)',
    'All India Institute of Medical Sciences Entrance Exam (AIIMS)',
    'Common Law Admission Test (CLAT)',
    'All India Bar Examination (AIBE)',
    'National Institute of Fashion Technology Entrance Exam (NIFT)',
    'National Institute of Design Entrance Exam (NID)',
    'Indian Statistical Institute Admission Test (ISI)',
    'Joint Admission Test for M.Sc. (JAM)',
    'Indian Institute of Foreign Trade Entrance Exam (IIFT)',
    'Indian School of Mines Entrance Exam (ISM EE)',
    'National Entrance Screening Test (NEST)',
    'Combined Biotechnology Entrance Examination (CEEB)',
    'Jawaharlal Nehru University Entrance Examination (JNUEE)',
    'Banaras Hindu University Entrance Exam (BHU UET/PET)',
    'Delhi University Entrance Test (DUET)',
    'Jamia Millia Islamia Entrance Exam (JMI EE)',
    'Aligarh Muslim University Engineering Entrance Exam (AMUEEE)',
    'Maharashtra Common Entrance Test (MHT-CET)',
    'Karnataka Common Entrance Test (KCET)',
    'Tamil Nadu Engineering Admissions (TNEA)',
    'Andhra Pradesh Engineering, Agriculture and Medical Common Entrance Test (AP EAMCET)',
    'Telangana State Engineering, Agriculture and Medical Common Entrance Test (TS EAMCET)',
    'Uttar Pradesh State Entrance Examination (UPSEE)',
    'Rajasthan Pre-Engineering Test (RPET)',
    'West Bengal Joint Entrance Examination (WBJEE)',
    'Gujarat Common Entrance Test (GUJCET)',
    'Haryana Common Engineering Entrance Test (Haryana CEET)',
    'Kerala Engineering Architecture Medical Entrance Exam (KEAM)',
    'Odisha Joint Entrance Examination (OJEE)',
    'Punjab State Entrance Test (Punjab CET)',
    'Madhya Pradesh Pre-Engineering Test (MP PET)',
    'Bihar Combined Entrance Competitive Examination (BCECE)',
    'Jammu and Kashmir Common Entrance Test (J&K CET)',
    'Chhattisgarh Pre-Engineering Test (CG PET)',
    'Assam Joint Entrance Examination (Assam JEE)',
    'Goa Common Entrance Test (GCET)']



    const engineeringExams = [
        'Joint Entrance Examination (JEE) Advanced',
        'Graduate Aptitude Test in Engineering (GATE)',
        'Indian Institutes of Technology Joint Admission Test (IIT-JAM)',
        'All India Engineering Entrance Examination (AIEEE)',
        'National Aptitude Test in Architecture (NATA)',
        'Vellore Institute of Technology Engineering Entrance Exam (VITEEE)',
        'Manipal University Online Entrance Test (MUOET)',
        'SRM Joint Engineering Entrance Exam (SRMJEEE)',
        'Birla Institute of Technology and Science Admission Test (BITSAT)',
        'National Institute of Technology Joint Entrance Examination (NIT-JEE)',
        'Indian Institute of Science Education and Research Aptitude Test (IISER AT)',
        'Common Admission Test for the Indian Institutes of Technology (CAT)',
        'Management Aptitude Test (MAT)',
        'Common Management Admission Test (CMAT)',
        'Xavier Aptitude Test (XAT)',
        'Graduate Management Admission Test (GMAT)',
        'Symbiosis National Aptitude Test (SNAP)',
        'NMIMS Management Aptitude Test (NMAT)',
        'Tata Institute of Social Sciences National Entrance Test (TISSNET)',
        'Indian Council of Agricultural Research Entrance Exam (ICAR AIEEA)',
        'Indian Maritime University Common Entrance Test (IMU CET)',
        'National Council for Hotel Management and Catering Technology Joint Entrance Examination (NCHMCT JEE)',
        'National Eligibility cum Entrance Test for Post Graduation (NEET PG)',
        'All India Post Graduate Medical Entrance Exam (AIPGMEE)',
        'National Eligibility cum Entrance Test for Undergraduates (NEET UG)',
        'All India Institute of Medical Sciences Entrance Exam (AIIMS)',
        'Common Law Admission Test (CLAT)',
        'All India Bar Examination (AIBE)',
        'National Institute of Fashion Technology Entrance Exam (NIFT)',
        'National Institute of Design Entrance Exam (NID)',
        'Indian Statistical Institute Admission Test (ISI)',
        'Joint Admission Test for M.Sc. (JAM)',
        'Indian Institute of Foreign Trade Entrance Exam (IIFT)',
        'Indian School of Mines Entrance Exam (ISM EE)',
        'National Entrance Screening Test (NEST)',
        'Combined Biotechnology Entrance Examination (CEEB)',
        'Jawaharlal Nehru University Entrance Examination (JNUEE)',
        'Banaras Hindu University Entrance Exam (BHU UET/PET)',
        'Delhi University Entrance Test (DUET)',
        'Jamia Millia Islamia Entrance Exam (JMI EE)',
        'Aligarh Muslim University Engineering Entrance Exam (AMUEEE)',
        'Maharashtra Common Entrance Test (MHT-CET)',
        'Karnataka Common Entrance Test (KCET)',
        'Tamil Nadu Engineering Admissions (TNEA)',
        'Andhra Pradesh Engineering, Agriculture and Medical Common Entrance Test (AP EAMCET)',
        'Telangana State Engineering, Agriculture and Medical Common Entrance Test (TS EAMCET)',
        'Uttar Pradesh State Entrance Examination (UPSEE)',
        'Rajasthan Pre-Engineering Test (RPET)',
        'West Bengal Joint Entrance Examination (WBJEE)',
        'Gujarat Common Entrance Test (GUJCET)',
        'Haryana Common Engineering Entrance Test (Haryana CEET)',
        'Kerala Engineering Architecture Medical Entrance Exam (KEAM)',
        'Odisha Joint Entrance Examination (OJEE)',
        'Punjab State Entrance Test (Punjab CET)',
        'Madhya Pradesh Pre-Engineering Test (MP PET)',
        'Bihar Combined Entrance Competitive Examination (BCECE)',
        'Jammu and Kashmir Common Entrance Test (J&K CET)',
        'Chhattisgarh Pre-Engineering Test (CG PET)',
        'Assam Joint Entrance Examination (Assam JEE)',
        'Goa Common Entrance Test (GCET)']


        const engineeringExamsShort = [
            'JEE Advanced','GATE','IIT-JAM','AIEEE','NATA','VITEEE','MUOET','SRMJEEE','BITSAT',
            'NIT-JEE','IISER AT','CAT','MAT','CMAT','XAT','GMAT','SNAP','NMAT','TISSNET',
            'ICAR AIEEA','IMU CET','NCHMCT JEE','NEET PG','AIPGMEE','CLAT','AIBE','NIFT',
            'NID','ISI','JAM','IIFT','ISM EE','NEST','CEEB','JNUEE','BHU UET/PET','DUET',
            'JMI EE','AMUEEE','MHT-CET','KCET','TNEA','AP EAMCET','TS EAMCET','UPSEE','RPET',
            'WBJEE','GUJCET','Haryana CEET','KEAM','OJEE','Punjab CET','MP PET','BCECE','J&K CET',
            'CG PET','Assam JEE','GCET'];
        
    
  

for(let i=0; i<engineeringExamsShort.length; i++){
    document.getElementById('engineering').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${engineeringExamsShort[i]}"><div class="btn"><p>${engineeringExamsShort[i]}</p></div></a>
    </div>`
}

/* <--- Medical & Dental ---> */


const MedicalExams = [
    "All India Institute of Medical Sciences (AIIMS) MBBS Entrance Exam",
    "National Eligibility cum Entrance Test for Undergraduate (NEET-UG)",
    "All India Institute of Medical Sciences (AIIMS) PG Entrance Exam",
    "Graduate Medical Entrance Test (GMET)",
    "Indian Army B.Sc. Nursing Exam",
    "National Eligibility cum Entrance Test for Postgraduate (NEET-PG)",
    "JIPMER MBBS Entrance Exam",
    "JIPMER PG Entrance Exam",
    "National Institute of Nutrition Entrance Exam",
    "Postgraduate Institute of Medical Education and Research (PGIMER) Entrance Exam",
    "Indian Council of Medical Research (ICMR) Entrance Exam",
    "Odisha Joint Entrance Examination (OJEE)",
    "Punjab Medical Entrance Test (PMET)",
    "Telangana State Engineering, Agriculture and Medical Common Entrance Test (TS EAMCET)",
    "Karnataka Common Entrance Test (KCET)",
    "Maharashtra Common Entrance Test (MHT-CET)",
    "Bihar Combined Entrance Competitive Examination (BCECE)",
    "Andhra Pradesh Post Graduate Dental Entrance Test (APPGDET)",
    "Gujarat Post Graduate Dental Entrance Test (PGDET)",
    "Kerala Master of Dental Surgery (MDS) Entrance Exam",
    "Rajasthan Pre-Postgraduate Dental Entrance Exam (Rajasthan PGEET)",
    "Tamil Nadu Bachelor of Medicine and Bachelor of Surgery (TNMBBS) Entrance Exam",
    "Assam Combined Entrance Examination (CEE)",
    "Uttar Pradesh Combined Pre-Medical Test (UPCPMT)",
    "West Bengal Joint Entrance Examination (WBJEE)",
    "Haryana Pre-Medical Test (HPMT)",
    "Madhya Pradesh Pre-Medical Test (MPPMT)",
    "National Eligibility cum Entrance Test for Undergraduate (NEET-UG)",
    "National Eligibility cum Entrance Test for Postgraduate (NEET-PG)",
    "All India Institute of Medical Sciences (AIIMS) MDS Entrance Exam",
    "All India Pre-Dental Test (AIPDT)",
    "National Board of Examinations (NBE) Dental Screening Test (DST)",
    "Postgraduate Institute of Dental Sciences (PGIDS) Entrance Exam",
    "Andhra Pradesh Post Graduate Dental Entrance Test (APPGDET)",
    "Gujarat Post Graduate Dental Entrance Test (PGDET)",
    "Kerala Master of Dental Surgery (MDS) Entrance Exam",
    "Rajasthan Pre-Postgraduate Dental Entrance Exam (Rajasthan PGEET)",
    "Uttar Pradesh Postgraduate Dental Entrance Exam (UPPGDEE)",
    "Assam Combined Entrance Examination (CEE) for Dental Courses",
    "Bihar Combined Entrance Competitive Examination (BCECE) for Dental Courses",
    "Karnataka Postgraduate Entrance Test (K-PGET) for Dental Courses",
    "Maharashtra Common Entrance Test (MHT-CET) for Dental Courses",
    "Tamil Nadu MDS Entrance Exam",
    "West Bengal Post Graduate Dental Entrance Examination (WBPGDAT)",
    "Odisha Joint Entrance Examination (OJEE) for Dental Courses",
    "Punjab Medical Entrance Test (PMET) for Dental Courses",
    "Telangana State Engineering, Agriculture and Medical Common Entrance Test (TS EAMCET) for,Dental Courses",
    "Karnataka Common Entrance Test (KCET) for Dental Courses",
    "Bihar Combined Entrance Competitive Examination Board (BCECEB) for Dental Courses",
    "Andhra Pradesh Bachelor of Dental Surgery (APBDS) Entrance Test",
    "Gujarat Bachelor of Dental Surgery (GBDS) Entrance Test",
    "Karnataka Common Entrance Test (KCET) for Dental Courses",
    "Kerala Bachelor of Dental Surgery (KBDS) Entrance Examination",
    "Maharashtra Bachelor of Dental Surgery (MBDS) Entrance Exam",
    "Rajasthan Bachelor of Dental Surgery (RBDS) Entrance Test",
    "Tamil Nadu Bachelor of Dental Surgery (TNBDS) Entrance Exam",
    "Uttar Pradesh Combined Pre-Dental Entrance Exam (UPCPDEE)",
    "West Bengal Joint Entrance Examination (WBJEE) for Dental Courses"];


    const MedicalExamsShort = ["AIIMS MBBS", "NEET-UG", "AIIMS PG", "GMET", "Indian Army B.Sc. Nursing", "NEET-PG", "JIPMER MBBS", "JIPMER PG", "National Institute of Nutrition", "PGIMER", "ICMR", "OJEE", "PMET", "TS EAMCET", "KCET", "MHT-CET", "BCECE", "APPGDET", "PGDET", "Kerala MDS", "Rajasthan PGEET", "TNMBBS", "Assam CEE", "UPCPMT", "WBJEE", "HPMT", "MPPMT", "NEET-UG", "NEET-PG", "AIIMS MDS", "AIPDT", "NBE DST", "PGIDS", "APPGDET", "PGDET", "Kerala MDS", "Rajasthan PGEET", "UPPGDEE", "Assam CEE Dental", "BCECE Dental", "K-PGET", "MHT-CET Dental", "Tamil Nadu MDS", "WBPGDAT", "OJEE Dental", "PMET Dental", "TS EAMCET Dental", "KCET Dental", "BCECEB Dental", "APBDS", "GBDS", "KCET Dental", "KBDS", "MBDS", "RBDS", "TNBDS", "UPCPDEE", "WBJEE Dental"];

      

for(let i=0; i<MedicalExamsShort.length; i++){
    document.getElementById('medical').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${MedicalExamsShort[i]}"><div class="btn"><p>${MedicalExamsShort[i]}</p></div></a>
    </div>`
}

/* <--- Management ---> */


  const managementExams = [
    // National Level Management Exams
    'Common Admission Test',
    'Management Aptitude Test',
    'Xavier Aptitude Test',
    'Common Management Admission Test',
    'Graduate Management Admission Test',
    'NMIMS Management Aptitude Test',
    'Symbiosis National Aptitude Test',
    'Indian Institute of Foreign Trade Entrance Exam',
    'IRMA Social Awareness Test',
    'AIMS Test for Management Admissions',
    'Tata Institute of Social Sciences National Entrance Test',
    'Mudra Institute of Communications Admission Test',
    'ICFAI Business School Aptitude Test',
    'Maharashtra Common Entrance Test',
    'Indian Institute of Mass Communication Entrance Exam',
    'National Institute of Pharmaceutical Education and Research Joint Entrance Exam',
    'All India Council for Technical Education Common Management Admission Test',
  
    // State Level Management Exams
    'Tamil Nadu Common Entrance Test',
    'Karnataka Post Graduate Common Entrance Test',
    'Maharashtra MBA Common Entrance Test',
    'Andhra Pradesh Integrated Common Entrance Test',
    'Uttar Pradesh State Entrance Exam',
    'Rajasthan Management Aptitude Test',
    'Telangana State Integrated Common Entrance Test',
    'Kerala Management Aptitude Test',
    'Odisha Joint Entrance Examination',
    'Haryana Common Management Entrance Test',
    'Gujarat Common Entrance Test',
    'Punjab Management Entrance Test',
    'KMAT Kerala',
    'Madhya Pradesh Management Entrance Test',
    'West Bengal University of Technology Joint Entrance Management Aptitude Test',
    'Uttarakhand State Entrance Exam',
    'Tamil Nadu Common Entrance Test for MBA/MCA programs in Anna University, Chennai']; 


    const managementExamsShort = [
        // National Level Management Exams
        'CAT', 'MAT', 'XAT', 'CMAT', 'GMAT', 'NMAT', 'SNAP', 'IIFT Entrance Exam',
        'IRMASAT', 'ATMA', 'TISSNET', 'MICAT', 'IBSAT', 'MAH CET', 'IIMC Entrance Exam',
        'NIPER Joint Entrance Examination', 'AICTE CMAT',
        
        // State Level Management Exams
        'TANCET', 'Karnataka PGCET', 'MAH-MBA/MMS-CET', 'APICET', 'UPSEE',
        'RMAT', 'TSICET', 'KMAT', 'OJEE', 'Haryana CMAT', 'GCET', 'PMET',
        'KMAT Kerala', 'MP MET', 'WBUT JEMAT', 'UKSEE', 'TANCET for MBA/MCA in Anna University, Chennai'
      ];
  


for(let i=0; i<managementExamsShort.length; i++){
    document.getElementById('management').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${managementExamsShort[i]}"><div class="btn"><p>${managementExamsShort[i]}</p></div></a>
    </div>`
}

/* <--- Law ---> */


const lawExams = [
    // National Level Law Exams
    "Common Law Admission Test (CLAT)",
    "All India Law Entrance Test (AILET)",
    "Law School Admission Test (LSAT)",
    "Indian Law Institute Common Admission Test (ILI CAT)",
    "All India Bar Examination (AIBE)",
    "Symbiosis Law Admission Test (SLAT)",
    "Christ University Law Entrance Exam",
    "Law Entrance Exam for Banaras Hindu University (BHU UET)",
    "Lloyd Law College Entrance Test",
    "Aligarh Muslim University Law Entrance Exam",
    "National Law University Delhi AILET PG",
    "Indian Institute of Technology Kharagpur Law Entrance Exam",
    "Law School Admission Council of India (LSAC India) Law Entrance Exam",
    "Indian Institute of Legal Studies Law Entrance Exam",
    "Tamil Nadu National Law School Admission Test (TNNLSAT)",
    "Jindal Global Law School Entrance Exam",
    
    // State Level Law Exams
    "Maharashtra Common Entrance Test for Law (MHCET Law)",
    "Telangana State Law Common Entrance Test (TS LAWCET)",
    "Andhra Pradesh Law Common Entrance Test (AP LAWCET)",
    "Tamil Nadu Common Entrance Test for Law (TANCET Law)",
    "Karnataka State Law University Law School Admission Test (KSLU SLAT)",
    "Rajasthan University Law Entrance Test (RULET)",
    "Uttar Pradesh State Entrance Examination (UPSEE) for Law",
    "Punjab University Law Entrance Test (PULEET)",
    "Goa Common Entrance Test for Law (GCET Law)",
    "Haryana Common Law Entrance Test (Haryana LET)",
    "Bihar Combined Entrance Competitive Examination (BCECE) for Law",
    "Chhattisgarh Pre-Law Entrance Test (CGPLET)",
    "Jharkhand Combined Entrance Competitive Examination (JCECE) for Law",
    "Kerala Law Entrance Exam (CEE Kerala)",
    "Madhya Pradesh Pre-Law Entrance Test (MP PLET)",
    "Odisha Common Law Admission Test (OCLAT)",
    "West Bengal National University of Juridical Sciences Entrance Test (WBNUJS Entrance Test)",
    "Himachal Pradesh National Law University (HPNLU) Entrance Exam",
    "Karnataka State Law University Post Graduate Entrance Test (KSLU PGET)",
    "Tripura Law Entrance Exam",
    "Manipur University Entrance Exam for Law",
    "Mizoram University Entrance Exam for Law"
  ];

  
  const lawExamsShort = ["CLAT","AILET","LSAT","ILI CAT","AIBE","SLAT","Christ Univ LE","BHU UET","Lloyd LET","AMU LET","NLU Delhi AILET PG","IIT Kgp LE","LSAC India LE","IILS LE","TNNLSAT","Jindal LE","MHCET Law","TS LAWCET","AP LAWCET","TANCET Law","KSLU SLAT","RULET","UPSEE Law","PULEET","GCET Law","Haryana LET","BCECE Law","CGPLET","JCECE Law","CEE Kerala","MP PLET","OCLAT","WBNUJS ET","HPNLU ET","KSLU PGET","Tripura LE","Manipur LE","Mizoram LE"];




for(let i=0; i<lawExamsShort.length; i++){
    document.getElementById('law').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${lawExamsShort[i]}"><div class="btn"><p>${lawExamsShort[i]}</p></div></a>
    </div>`
}

/* <--- Agriculture ---> */

const agricultureExams = [
    // National Level Exams
    "Indian Council of Agricultural Research (ICAR) All India Entrance Examination for Admission (AIEEA)",
    "National Eligibility Test (NET) for Assistant Professorship and JRF in Agriculture",
    "Agricultural Scientists Recruitment Board (ASRB) Examination",
    "National Dairy Research Institute (NDRI) Entrance Exam",
    "Indian Forest Service Examination (IFS)",
    "National Institute of Food Technology Entrepreneurship and Management (NIFTEM) Entrance Exam",
    "Indian Institute of Technology (IIT) Kharagpur - Joint M.Tech-Ph.D. Program in Agricultural and Food Engineering Entrance Exam",
    "National Agri-Food Biotechnology Institute (NABI) Entrance Exam",
    "Indian Institute of Soil Science (IISS) Entrance Exam",
    
    // State Level Exams
    "Andhra Pradesh Engineering, Agriculture, and Medical Common Entrance Test (AP EAMCET - Agriculture and Medical Stream)",
    "Assam Agricultural University (AAU) Entrance Exam",
    "Bihar Combined Entrance Competitive Examination (BCECE) for Agriculture",
    "Chhattisgarh Pre Agriculture Test (CG PAT)",
    "Gujarat Common Entrance Test (GUJCET) for Agriculture",
    "Haryana Agriculture Entrance Test (HAU)",
    "Jharkhand Combined Entrance Competitive Examination (JCECE) for Agriculture",
    "Kerala Agricultural University Entrance Exam",
    "Madhya Pradesh Pre Agriculture Test (MP PAT)",
    "Maharashtra Council of Agricultural Education and Research (MCAER) Common Entrance Test",
    "Odisha University of Agriculture and Technology (OUAT) Common Entrance Exam",
    "Punjab Agriculture University (PAU) Common Entrance Exam",
    "Rajasthan Joint Entrance Test (JET) for Agriculture",
    "Tamil Nadu Agricultural University Entrance Exam",
    "Uttar Pradesh Combined Agriculture and Technology Entrance Test (UPCATET)",
    "West Bengal Joint Entrance Exam (WBJEE) for Agriculture",
    "Goa Common Entrance Test (GCET) for Agriculture",
    "Himachal Pradesh Krishi Vishvavidyalaya Entrance Exam",
    "Jammu and Kashmir Board of Professional Entrance Examinations (JKBOPEE) for Agriculture",
    "Karnataka Common Entrance Test (CET) for Agriculture",
    "Manipur Combined Agriculture Competitive Examination (MCACE)",
    "Meghalaya Agriculture Entrance Exam",
    "Mizoram Agriculture Entrance Exam",
    "Nagaland Agriculture Entrance Exam",
    "Sikkim Manipal University (SMU) Entrance Exam for Agriculture",
    "Tripura Joint Entrance Examination (TJEE) for Agriculture"
  ];

  
  const agricultureExamsShort = ["ICAR AIEEA", "NET Agriculture", "ASRB Exam", "NDRI Entrance Exam", "IFS Exam", "NIFTEM Entrance Exam", "IIT Kharagpur Joint M.Tech-Ph.D. Entrance Exam", "NABI Entrance Exam", "IISS Entrance Exam", "AP EAMCET", "AAU Entrance Exam", "BCECE Agriculture", "CG PAT", "GUJCET Agriculture", "HAU Entrance Test", "JCECE Agriculture", "Kerala Agri University Entrance Exam", "MP PAT", "MCAER CET", "OUAT Common Entrance Exam", "PAU CET", "Rajasthan JET Agriculture", "TNAU Entrance Exam", "UPCATET", "WBJEE Agriculture", "GCET Agriculture", "HPKV Entrance Exam", "JKBOPEE Agriculture", "KCET Agriculture", "MCACE", "Meghalaya Agri Entrance Exam", "Mizoram Agri Entrance Exam", "Nagaland Agri Entrance Exam", "SMU Entrance Exam", "TJEE Agriculture"];



for(let i=0; i<agricultureExamsShort.length; i++){
    document.getElementById('agriculture').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${agricultureExamsShort[i]}"><div class="btn"><p>${agricultureExamsShort[i]}</p></div></a>
    </div>`
}


/* <--- Design ---> */


const design = [ 
    "National Entrance Examination for Design (NEED)",
    "Common Entrance Examination for Design (CEED)",
    "Undergraduate Common Entrance Examination for Design (UCEED)",  
    "All India Entrance Examination for Design (AIEED)",  
    "National Institute of Fashion Technology Entrance Exam (NIFT)",  
    "National Aptitude Test in Architecture (NATA)",  
    "National Institute of Design Entrance Exam (NID)",  
    "Footwear Design and Development Institute All India Selection Test (FDDI AIST)",  
    "Srishti Institute of Art, Design and Technology Entrance Exam",  
    "MIT Institute of Design Entrance Exam",  
    "World University of Design Design Aptitude Test (WUD DAT)",  
    "Andhra Pradesh State Design Entrance Test (AP SDECT)",  
    "Assam Joint Entrance Examination for Design (Assam JEE)",  
    "Chhattisgarh Pre-Engineering Test (CGPET) for Design",  
    "Goa Common Entrance Test (GCET) for Design",  
    "Gujarat Common Entrance Test (GUJCET) for Design",  
    "Haryana Common Entrance Test (Haryana CEED)",  
    "Jammu and Kashmir Common Entrance Test (JKCET) for Design",  
    "Jharkhand Combined Entrance Competitive Examination Board (JCECEB) for Design",  
    "Karnataka Common Entrance Test (KCET) for Design",  
    "Kerala Engineering Architecture Medical (KEAM) Entrance Exam",  
    "Madhya Pradesh Pre-Engineering and Pharmacy Test (MP PEPT) for Design",  
    "Maharashtra State Common Entrance Test (MHT-CET) for Design",  
    "Odisha Joint Entrance Exam (OJEE) for Design",  
    "Punjab Technical University Design Entrance Test (PTU CET)",  
    "Rajasthan Pre-Entrance Test for Design (RPETD)",  
    "Tamil Nadu Common Entrance Test (TANCET) for Design",  
    "Telangana State Engineering, Agriculture and Medical Common Entrance Test (TS EAMCET) for Design",  
    "Uttar Pradesh State Entrance Examination (UPSEE) for Design",  
    "Uttarakhand State Entrance Examination (UKSEE) for Design",  
    "West Bengal Joint Entrance Exam (WBJEE) for Design"]
    


const designShort = [  "NEED",  "CEED",  "UCEED",  "AIEED",  "NIFT",  "NATA",  "NID",  "FDDI AIST",  "Srishti Institute of Art, Design and Technology Entrance Exam",  "MIT Institute of Design Entrance Exam",  "WUD DAT",  "AP SDECT",  "Assam JEE",  "CGPET",  "GCET",  "GUJCET",  "Haryana CEED",  "JKCET",  "JCECEB",  "KCET",  "KEAM",  "MP PEPT",  "MHT-CET",  "OJEE",  "PTU CET",  "RPETD",  "TANCET",  "TS EAMCET",  "UPSEE",  "UKSEE",  "WBJEE"];


for(let i=0; i<designShort.length; i++){
    document.getElementById('design').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${designShort[i]}"><div class="btn"><p>${designShort[i]}</p></div></a>
    </div>`
}



/* <--- Research ---> */

const researchExams = [
    "National Eligibility Test (NET)",
    "Joint CSIR-UGC NET",
    "Graduate Aptitude Test in Engineering (GATE)",
    "Indian Council of Agricultural Research (ICAR) National Eligibility Test (NET)",
    "Indian Council of Medical Research (ICMR) Junior Research Fellowship (JRF) Exam",
    "Biotechnology Eligibility Test (BET)",
    "National Entrance Screening Test (NEST)",
    "Indian Statistical Institute Admission Test (ISI)",
    "Joint Admission Test for M.Sc. (JAM)",
    "National Entrance Examination for Design (NEED)",
    "Joint Entrance Screening Test (JEST)",
    "National Institute of Fashion Technology (NIFT) Entrance Exam",
    "Common Entrance Examination for Design (CEED)",
    "Central Universities Common Entrance Test (CUCET)",
    "All India Institute of Medical Sciences (AIIMS) PhD Entrance Exam",
    "Andhra Pradesh Research Common Entrance Test (APRCET)",
    "Assam Joint MCA Entrance Exam (JMEE)",
    "Assam Combined Entrance Examination (CEE)",
    "Bihar Combined Entrance Competitive Examination (BCECE)",
    "Bihar Post Graduate Medical Admission Test (PGMAT)",
    "Chhattisgarh Pre-Pharmacy Test (CG PPHT)",
    "Chhattisgarh Pre-Engineering Test (CG PET)",
    "Delhi University Entrance Test (DUET)",
    "Guru Gobind Singh Indraprastha University Common Entrance Test (IPU CET)",
    "Gujarat Common Entrance Test (GUJCET)",
    "Gujarat State Eligibility Test (GSET)",
    "Haryana Common Entrance Test (Haryana CET)",
    "Haryana State Eligibility Test (HSET)",
    "Jammu and Kashmir Common Entrance Test (JKCET)",
    "Jharkhand Combined Entrance Competitive Examination (JCECE)",
    "Karnataka Common Entrance Test (KCET)",
    "Karnataka State Eligibility Test (KSET)",
    "Kerala Engineering Architecture Medical Entrance Exam (KEAM)",
    "Kerala State Eligibility Test (KSET)",
    "Madhya Pradesh Pre-Agriculture Test (MP PAT)",
    "Madhya Pradesh Pre-Engineering Test (MP PET)",
    "Maharashtra Common Entrance Test (MHT CET)",
    "Maharashtra State Eligibility Test (SET)",
    "Odisha Joint Entrance Examination (OJEE)",
    "Punjab State Teacher Eligibility Test (PSTET)",
    "Rajasthan Pre-Engineering Test (RPET)",
    "Rajasthan Pre-Medical Test (RPMT)",
    "Tamil Nadu Common Entrance Test (TANCET)",
    "Telangana State Eligibility Test (TS SET)",
    "Uttar Pradesh State Entrance Exam (UPSEE)",
    "Uttar Pradesh Teacher Eligibility Test (UPTET)",
    "West Bengal Joint Entrance Examination (WBJEE)"
  ];


  const researchExamShort = ["NET", "CSIR-UGC NET", "GATE", "ICAR NET", "ICMR JRF", "BET", "NEST", "ISI", "JAM", "NEED", "JEST", "NIFT", "CEED", "CUCET", "AIIMS PhD", "APRCET", "JMEE", "Assam CEE", "BCECE", "Bihar PGMAT", "CG PPHT", "CG PET", "DUET", "IPU CET", "GUJCET", "GSET", "Haryana CET", "HSET", "JKCET", "JCECE", "KCET", "KSET", "KEAM", "Kerala SET", "MP PAT", "MP PET", "MHT CET", "Maharashtra SET", "OJEE", "PSTET", "RPET", "RPMT", "TANCET", "TS SET", "UPSEE", "UPTET", "WBJEE"];

  

for(let i=0; i<researchExamShort.length; i++){
    document.getElementById('research').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${researchExamShort[i]}"><div class="btn"><p>${researchExamShort[i]}</p></div></a>
    </div>`
}

/* <--- Defence & Security ---> */


const defenceExams = [
    "National Defence Academy (NDA) Exam",
    "Combined Defence Services (CDS) Exam",
    "Indian Military Academy (IMA) Exam",
    "Air Force Common Admission Test (AFCAT)",
    "Naval Academy Exam",
    "Territorial Army Officer Exam",
    "National Cadet Corps (NCC) Special Entry Scheme Exam",
    "Short Service Commission (SSC) Exam for Army, Navy, and Air Force",
    "Indian Navy Entrance Test (INET)",
    "Coast Guard Assistant Commandant Exam",
    "Technical Entry Scheme (TES) Exam",
    "JAG Entry Scheme Exam for Law Graduates",
    "Army Education Corps (AEC) Exam",
    "Indian Navy B.Tech Entry Scheme Exam",
    "Indian Army Nursing Service Exam",
    "Indian Army JCO (Religious Teacher) Exam",
    "Border Security Force (BSF) Recruitment Exam",
    "Central Reserve Police Force (CRPF) Recruitment Exam",
    "Indo-Tibetan Border Police (ITBP) Recruitment Exam",
    "Sashastra Seema Bal (SSB) Recruitment Exam",
    "Assam Rifles Recruitment Exam",
    "Territorial Army Recruitment Exam",
    "Military Nursing Service (MNS) Exam",
    "Armed Forces Medical Services (AFMS) Exam",
    "Indian Army Technical Entry Scheme (TES) Exam",
    "Indian Army Technical Graduate Course (TGC) Exam",
    "Indian Army Havildar Education Exam",
    "Indian Army Soldier Clerk/SKT Exam",
    "Indian Army Soldier Technical Exam",
    "Indian Army Soldier GD Exam",
    "Indian Army Tradesman Exam",
    "Indian Navy Artificer Apprentice Exam",
    "Indian Navy Senior Secondary Recruit (SSR) Exam",
    "Indian Navy Matric Recruit (MR) Exam",
    "Indian Air Force Airmen Selection Exam",
    "Indian Air Force X and Y Group Exam",
    "Indian Coast Guard Yantrik Exam",
    "Indian Coast Guard Navik (General Duty) Exam",
    "Indian Coast Guard Navik (Domestic Branch) Exam",
    "Sainik School Entrance Exam",
    "Rashtriya Indian Military College (RIMC) Entrance Exam",
    "Army Institute of Technology (AIT) Entrance Exam",
    "Military College of Electronics and Mechanical Engineering (MCEME) Entrance Exam",
    "Indian Naval Academy (INA) Entrance Exam",
    "Officers Training Academy (OTA) Exam",
    "Army Cadet College (ACC) Exam",
    "National Eligibility-cum-Entrance Test (NEET) for admission to AFMC Pune",
    "National Cadet Corps (NCC) Exam for Officer Training",
    "Defence Research and Development Organisation (DRDO) Entry Test",
    "Integrated Defence Staff (IDS) Joint Entrance Exam",
      // National Level Security Exams
    "National Defence Academy (NDA) Entrance Exam",
    "Combined Defence Services (CDS) Examination",
    "Indian Military Academy (IMA) Entrance Exam",
    "Air Force Common Admission Test (AFCAT)",
    "Indian Navy Entrance Test (INET)",
    "Territorial Army Officer Recruitment Exam",
    "Central Armed Police Forces (CAPF) Examination",
    "Intelligence Bureau (IB) ACIO Exam",
    "Border Security Force (BSF) Recruitment Exam",
    "Indo-Tibetan Border Police (ITBP) Recruitment Exam",
    "Central Industrial Security Force (CISF) Recruitment Exam",
    "Sashastra Seema Bal (SSB) Recruitment Exam",
    "Railway Protection Force (RPF) Recruitment Exam",
  
    // State Level Security Exams
    "Andhra Pradesh Police Recruitment Board (APSLPRB) Recruitment Exam",
    "Bihar Police Recruitment Exam",
    "Chhattisgarh Police Recruitment Exam",
    "Gujarat Security Constable Recruitment Exam",
    "Haryana Police Recruitment Exam",
    "Jharkhand Police Recruitment Exam",
    "Karnataka State Police (KSP) Recruitment Exam",
    "Maharashtra State Security Corporation (MSSC) Recruitment Exam",
    "Odisha Police Recruitment Exam",
    "Punjab Police Recruitment Exam",
    "Rajasthan Police Recruitment Exam",
    "Tamil Nadu Uniformed Services Recruitment Board (TNUSRB) Recruitment Exam",
    "Telangana State Level Police Recruitment Board (TSLPRB) Recruitment Exam",
    "Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB) Recruitment Exam",
    "West Bengal Police Recruitment Exam"
  ];

  
  const defenceExamsShort = ["NDA", "CDS", "IMA", "AFCAT", "NA", "TA", "NCC", "SSC", "INET", "CGAC", "TES", "JAG", "AEC", "IN-B.E.", "IAN", "IA JCO", "BSF", "CRPF", "ITBP", "SSB", "AR", "TA", "MNS", "AFMS", "IA TES", "IA TGC", "IA Hav Edn", "IA Sol Clk/SKT", "IA Sol Tech", "IA Sol GD", "IA Tradesman", "IN AA", "IN SSR", "IN MR", "IAF Airmen", "IAF X & Y Group", "ICG Yantrik", "ICG Navik (GD)", "ICG Navik (DB)", "Sainik School EE", "RIMC EE", "AIT EE", "MCEME EE", "INA EE", "OTA", "ACC", "NEET-AFMC", "NCC-OT", "DRDO Entry Test", "IDS JEE", "NDA", "CDS", "IMA", "AFCAT", "INET", "TA", "CAPF", "IB ACIO", "BSF", "ITBP", "CISF", "SSB", "RPF", "APSLPRB", "Bihar Police", "CG Police", "Gujarat Security Constable", "Haryana Police", "Jharkhand Police", "KSP", "MSSC", "Odisha Police", "Punjab Police", "Rajasthan Police", "TNUSRB", "TSLPRB", "UPPRPB", "WB Police"];


for(let i=0; i<defenceExamsShort.length; i++){
    document.getElementById('defence').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${defenceExamsShort[i]}"><div class="btn"><p>${defenceExamsShort[i]}</p></div></a>
    </div>`
}

/* <--- Banking & Finance ---> */


const bankingFinanceExams = [
    // National Level Exams
    'Reserve Bank of India (RBI) Grade B Exam',
    'Institute of Banking Personnel Selection (IBPS) Probationary Officer (PO) Exam',
    'State Bank of India (SBI) PO Exam',
    'National Bank for Agriculture and Rural Development (NABARD) Grade A and B Exam',
    'Securities and Exchange Board of India (SEBI) Exam',
    'Insurance Regulatory and Development Authority of India (IRDAI) Exam',
    'National Insurance Academy (NIA) Entrance Exam',
    'Institute of Chartered Accountants of India (ICAI) Exam',
    'Certified Financial Planner (CFP) Exam',
    'Chartered Financial Analyst (CFA) Exam',
    
    // State Level Exams
    'Andhra Pradesh State Co-operative Bank (APCOB) Exam',
    'Andhra Pradesh Grameena Vikas Bank (APGVB) Exam',
    'Andhra Pradesh Mahesh Co-operative Urban Bank Exam',
    'Assam Cooperative Apex Bank Exam',
    'Bihar State Cooperative Bank Exam',
    'Bihar Gramin Bank Exam',
    'Gujarat State Co-operative Bank Exam',
    'Rajkot Nagarik Sahakari Bank Exam',
    'Surat Peoples Co-operative Bank Exam',
    'Haryana State Cooperative Bank Exam',
    'Jammu and Kashmir Bank PO Exam',
    'Jharkhand State Cooperative Bank Exam',
    'Karnataka Bank Clerk Exam',
    'Karnataka State Cooperative Apex Bank (KSC Apex Bank) Exam',
    'Vijaya Bank Clerk Exam',
    'Kerala Cooperative Bank Exam',
    'Kerala State Cooperative Bank Exam',
    'Madhya Pradesh State Cooperative Bank Exam',
    'Maharashtra State Cooperative Bank Exam',
    'Mumbai District Central Co-operative Bank Exam',
    'Thane Bharat Sahakari Bank Exam',
    'Odisha State Cooperative Bank Exam',
    'Punjab State Cooperative Bank Exam',
    'Rajasthan State Cooperative Bank Exam',
    'Jaipur Thar Gramin Bank Exam',
    'Tamil Nadu State Cooperative Bank Exam',
    'Telangana State Cooperative Bank Exam',
    'Uttar Pradesh Cooperative Bank Exam',
    'Purvanchal Bank Exam',
    'West Bengal State Cooperative Bank Exam',
    'Paschim Banga Gramin Bank Exam'];


    const bankingFinanceExamsShort = ['RBI Grade B', 'IBPS PO', 'SBI PO', 'NABARD Grade A and B', 'SEBI', 'IRDAI', 'NIA Entrance', 'ICAI', 'CFP', 'CFA', 'LIC AAO', 'UIIC Assistant', 'NIACL Assistant', 'RBI Assistant', 'SEBI Grade A', 'FCI Manager', 'SIDBI Grade A and B', 'Bank of Baroda PO', 'IDBI Assistant Manager', 'Indian Overseas Bank PO', 'APCOB', 'APGVB', 'Mahesh Co-operative Urban Bank', 'Assam Cooperative Apex Bank', 'Bihar State Cooperative Bank', 'Bihar Gramin Bank', 'Gujarat State Co-operative Bank', 'Rajkot Nagarik Sahakari Bank', 'Surat Peoples Co-operative Bank', 'Haryana State Cooperative Bank', 'Jammu and Kashmir Bank PO', 'Jharkhand State Cooperative Bank', 'Karnataka Bank Clerk', 'KSC Apex Bank', 'Vijaya Bank Clerk', 'Kerala Cooperative Bank', 'Kerala State Cooperative Bank', 'Madhya Pradesh State Cooperative Bank', 'Maharashtra State Cooperative Bank', 'Mumbai District Central Co-operative Bank', 'Thane Bharat Sahakari Bank', 'Odisha State Cooperative Bank', 'Punjab State Cooperative Bank', 'Rajasthan State Cooperative Bank', 'Jaipur Thar Gramin Bank', 'Tamil Nadu State Cooperative Bank', 'Telangana State Cooperative Bank', 'Uttar Pradesh Cooperative Bank', 'Purvanchal Bank', 'West Bengal State Cooperative Bank', 'Paschim Banga Gramin Bank'];
  


for(let i=0; i<bankingFinanceExamsShort.length; i++){
    document.getElementById('banking').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${bankingFinanceExamsShort[i]}"><div class="btn"><p>${bankingFinanceExamsShort[i]}</p></div></a>
    </div>`
}

/* <--- Civil Services & Public Administration ---> */


const civilServicesExams = [
    "UPSC Civil Services Examination",
    "Indian Administrative Service (IAS) Examination",
    "Indian Police Service (IPS) Examination",
    "Indian Foreign Service (IFS) Examination",
    "Indian Revenue Service (IRS) Examination",
    "Indian Forest Service (IFS) Examination",
    "Combined Defence Services (CDS) Examination",
    "National Defence Academy (NDA) Examination",
    "Indian Economic Service (IES) Examination",
    "Indian Statistical Service (ISS) Examination",
    "SSC Combined Graduate Level (CGL) Examination",
    "Railway Recruitment Board (RRB) Examination",
    "Reserve Bank of India (RBI) Examination",
    "State Public Service Commission (SPSC) Examination",
    "National Bank for Agriculture and Rural Development (NABARD) Examination",
    "Life Insurance Corporation of India (LIC) Examination",
    "Food Corporation of India (FCI) Examination",
    "Border Security Force (BSF) Examination",
    "Intelligence Bureau (IB) Examination",
    "Central Armed Police Forces (CAPF) Examination",
    "Indo Tibetan Border Police (ITBP) Examination",
    "Sashastra Seema Bal (SSB) Examination",
    "Central Reserve Police Force (CRPF) Examination",
    "Indian Coast Guard (ICG) Examination",
    "National Investigation Agency (NIA) Examination",
    "Bureau of Indian Standards (BIS) Examination",
    "Securities and Exchange Board of India (SEBI) Examination",
    "National Technical Research Organisation (NTRO) Examination",
    "Defence Research and Development Organisation (DRDO) Examination",
    "Indian Army Education Corps (AEC) Examination",
    "Indian Navy Education Branch (NEB) Examination",
    "Indian Air Force Education Branch (AEB) Examination",
    "Andhra Pradesh Public Service Commission (APPSC) Examination",
    "Assam Public Service Commission (APSC) Examination",
    "Arunachal Pradesh Public Service Commission (APPSC) Examination",
    "Bihar Public Service Commission (BPSC) Examination",
    "Chhattisgarh Public Service Commission (CGPSC) Examination",
    "Goa Public Service Commission (GPSC) Examination",
    "Gujarat Public Service Commission (GPSC) Examination",
    "Haryana Public Service Commission (HPSC) Examination",
    "Himachal Pradesh Public Service Commission (HPPSC) Examination",
    "Jammu and Kashmir Public Service Commission (JKPSC) Examination",
    "Jharkhand Public Service Commission (JPSC) Examination",
    "Karnataka Public Service Commission (KPSC) Examination",
    "Kerala Public Service Commission (KPSC) Examination",
    "Madhya Pradesh Public Service Commission (MPPSC) Examination",
    "Maharashtra Public Service Commission (MPSC) Examination",
    "Manipur Public Service Commission (MPSC) Examination",
    "Meghalaya Public Service Commission (MPSC) Examination",
    "Mizoram Public Service Commission (MPSC) Examination",
    "Nagaland Public Service Commission (NPSC) Examination",
    "Odisha Public Service Commission (OPSC) Examination",
    "Punjab Public Service Commission (PPSC) Examination",
    "Rajasthan Public Service Commission (RPSC) Examination",
    "Sikkim Public Service Commission (SPSC) Examination",
    "Tamil Nadu Public Service Commission (TNPSC) Examination",
    "Telangana State Public Service Commission (TSPSC) Examination",
    "Tripura Public Service Commission (TPSC) Examination",
    "Uttar Pradesh Public Service Commission (UPPSC) Examination",
    "Uttarakhand Public Service Commission (UKPSC) Examination",
    "West Bengal Public Service Commission (WBPSC) Examination"];


    const civilServicesExamsShort = ["UPSC", "IAS", "IPS", "IFS", "IRS", "IFS", "CDS", "NDA", "IES", "ISS", "SSC CGL", "RRB", "RBI", "SPSC", "NABARD", "LIC", "FCI", "BSF", "IB", "CAPF", "ITBP", "SSB", "CRPF", "ICG", "NIA", "BIS", "SEBI", "NTRO", "DRDO", "AEC", "NEB", "AEB", "APPSC", "APSC", "APPSC", "BPSC", "CGPSC", "GPSC", "GPSC", "HPSC", "HPPSC", "JKPSC", "JPSC", "KPSC", "KPSC", "MPPSC", "MPSC", "MPSC", "MPSC", "MPSC", "MPSC", "NPSC", "OPSC", "PPSC", "RPSC", "SPSC", "TNPSC", "TSPSC", "TPSC", "UPPSC", "UKPSC", "WBPSC"];

  

for(let i=0; i<civilServicesExamsShort.length; i++){
    document.getElementById('civil_services').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${civilServicesExamsShort[i]}"><div class="btn"><p>${civilServicesExamsShort[i]}</p></div></a>
    </div>`
}

/* <--- Teaching & Education ---> */


let teachingExams = [
    "National Eligibility Test (NET)",
    "Central Teacher Eligibility Test (CTET)",
    "State Eligibility Test (SET)",
    "Kishore Vaigyanik Protsahan Yojana (KVPY)",
    "National Institute of Fashion Technology Entrance Exam (NIFT)",
    "Indian Council of Agricultural Research (ICAR) Entrance Exam",
    "National Entrance Examination for Design (NEED)",
    "All India Bar Examination (AIBE)",
    "National Institute of Science Education and Research (NISER) Entrance Exam",
    "Indira Gandhi National Open University (IGNOU) Entrance Exam",
    "Andhra Pradesh Teacher Eligibility Test (APTET)",
    "Assam Teacher Eligibility Test (Assam TET)",
    "Bihar Teacher Eligibility Test (Bihar TET)",
    "Chhattisgarh Teacher Eligibility Test (CG TET)",
    "Gujarat Teacher Eligibility Test (Gujarat TET)",
    "Haryana Teacher Eligibility Test (HTET)",
    "Himachal Pradesh Teacher Eligibility Test (HP TET)",
    "Jharkhand Teacher Eligibility Test (JTET)",
    "Karnataka Teacher Eligibility Test (Karnataka TET)",
    "Kerala Teacher Eligibility Test (Kerala TET)",
    "Madhya Pradesh Teacher Eligibility Test (MP TET)",
    "Maharashtra Teacher Eligibility Test (Maharashtra TET)",
    "Odisha Teacher Eligibility Test (OTET)",
    "Punjab State Teacher Eligibility Test (PSTET)",
    "Rajasthan Teacher Eligibility Test (RTET)",
    "Tamil Nadu Teacher Eligibility Test (TNTET)",
    "Telangana State Teacher Eligibility Test (TS TET)",
    "Uttar Pradesh Teacher Eligibility Test (UPTET)",
    "Uttarakhand Teacher Eligibility Test (UTET)",
    "West Bengal Primary Teacher Eligibility Test (WB Primary TET)"
  ];

  
  const teachingExamsShort = ["NET", "CTET", "SET", "KVPY", "NIFT", "ICAR", "NEED", "AIBE", "NISER", "IGNOU", "APTET", "Assam TET", "Bihar TET", "CG TET", "Gujarat TET", "HTET", "HP TET", "JTET", "Karnataka TET", "Kerala TET", "MP TET", "Maharashtra TET", "OTET", "PSTET", "RTET", "TNTET", "TS TET", "UPTET", "UTET", "WB Primary TET"];

for(let i=0; i<teachingExamsShort.length; i++){
    document.getElementById('teaching').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${teachingExamsShort[i]}"><div class="btn"><p>${teachingExamsShort[i]}</p></div></a>
    </div>`
}


/* <--- Olympiad ---> */

const olympiadExams = [
  'International Mathematical Olympiad (IMO)',
  'International Physics Olympiad (IPhO)',
  'International Chemistry Olympiad (IChO)',
  'International Biology Olympiad (IBO)',
  'International Astronomy Olympiad (IAO)',
  'International Olympiad in Informatics (IOI)',
  'International Earth Science Olympiad (IESO)',
  'International Linguistics Olympiad (IOL)',
  'International Junior Science Olympiad (IJSO)',
  'National Cyber Olympiad (NCO)',
  'National Science Olympiad (NSO)',
  'National Cyber Security Olympiad (NCSO)',
  'National Astronomy and Astrophysics Olympiad (NAAO)',
  'National Biotechnology Olympiad (NBO)',
  'National Geography Olympiad (NGO)',
  'National Economics Olympiad (NEO)',
  'National Talent Search Examination (NTSE)',
  'International History Olympiad (IHO)',
  'International Robot Olympiad (IRO)',
  'International Social Studies Olympiad (ISSO)',
  'International General Knowledge Olympiad (IGKO)',
  'International French Language Olympiad (IFLO)',
  'International English Olympiad (IEO)',
  'International Hindi Olympiad (IHO)',
  'International Olympiad of Mathematics for Young Learners (IOMYL)',
  'National Science, Mathematics and Environment Exhibition (NSMEE)',
  'National Interactive Maths Olympiad (NIMO)',
  'National Space Science and Technology Olympiad (NSSTO)',
  'National Mental Ability and Scholastic Aptitude Test (NMAST)',
  'National Creative Ability Test (NCAT)',
  'International Olympiad of English Language (IOEL)',
  'International Commerce Olympiad (ICO)',
  'International Reasoning and Aptitude Olympiad (iRAO)',
  'International Spell Bee Olympiad (ISBO)',
  'International Olympiad of Science (IOS)',
  'International Informatics Olympiad (IIO)',
  'International Green Olympiad (IGO)',
  'International Olympiad of Astronomy and Astrophysics (IOAA)',
  'International Olympiad in Linguistics and Literature (IOLL)',
  'International Olympiad of Integrated Learning (IOIL)',
  'International Olympiad of Value Education (IOVE)',
  'International Olympiad of Yoga (IOY)',
  'International Olympiad of Talent Hunt (IOTH)',
  'National Biomedical Quiz (NBQ)',
  'National Astronomy Challenge (NAC)',
  'National Creative Writing Competition (NCWC)',
  'National Talent Exam in Science and Mathematics (NTESM)',
  'National Financial Literacy Assessment Test (NFLAT)',
  'National Level Science Talent Search Examination (NLSTSE)',
  'National Standard Examination in Astronomy (NSEA)'
];



const olympiadExamsShortNames = ['IMO', 'IPhO', 'IChO', 'IBO', 'IAO', 'IOI', 'IESO', 'IOL', 'IJSO',
'NCO', 'NSO', 'NCSO', 'NAAO', 'NBO', 'NGO', 'NEO', 'NTSE', 'IHO', 'IRO', 'ISSO', 'IGKO', 'IFLO',
'IEO', 'IHO', 'IOMYL', 'NSMEE', 'NIMO', 'NSSTO', 'NMAST', 'NCAT', 'IOEL', 'ICO', 'iRAO', 'ISBO',
'IOS', 'IIO', 'IGO', 'IOAA', 'IOLL', 'IOIL', 'IOVE', 'IOY', 'IOTH', 'NBQ', 'NAC', 'NCWC', 'NTESM',
'NFLAT', 'NLSTSE', 'NSEA'];


for(let i=0; i<olympiadExamsShortNames.length; i++){
    document.getElementById('olympiad').innerHTML += `<div class="col-lg-3 col-md-4 col-6 mb-4">
    <a href="index?exam=${olympiadExamsShortNames[i]}"><div class="btn"><p>${olympiadExamsShortNames[i]}</p></div></a>
    </div>`
}


/* <--- Show Function start ---> */

for(j=0; j<exams.length; j++){
    document.getElementById(exams_1[j]).style.display = "none";
}

document.getElementById(exams_1[0]).style.display = "block";
document.getElementsByClassName("btn btn1")[0].className = "btn btn1 active";

function show(i){

    for(j=0; j<exams.length; j++){
        document.getElementById(exams_1[j]).style.display = "none";
    }

    document.getElementsByClassName("btn btn1 active")[0].className = "btn btn1";    
    document.getElementById(exams_1[i]).style.display = "block";
    document.getElementsByClassName("btn btn1")[i].className = "btn btn1 active";
}

/* <--- End of show function ---> */