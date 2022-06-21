function save()
{
    var mno = document.getElementById("mno").value;
    document.getElementById("mark_sheet_no").innerText = mno;

    var grp = document.getElementById("grp").value;
    document.getElementById("group").innerText = grp;
    
    var rno = document.getElementById("rno").value;
    document.getElementById("roll_no").innerText = rno;
    
    var eno = document.getElementById("eno").value;
    document.getElementById("enrolment_no").innerText = eno;
    
    var name = document.getElementById("name").value;
    document.getElementById("Name").innerText = name;
    
    var fname = document.getElementById("fname").value;
    document.getElementById("fathers_name").innerText = fname;
    
    var clg = document.getElementById("clg").value;
    document.getElementById("college").innerText = clg;
    
    var UTI = document.getElementById("UTI").value;
    document.getElementById("urduI_marks").innerText = UTI;
    
    var ETI = document.getElementById("ETI").value;
    document.getElementById("englishI_marks").innerText = ETI;
    
    var ITI = document.getElementById("ITI").value;
    document.getElementById("islamic_studiesI_marks").innerText = ITI;
    
    var CTI = document.getElementById("CTI").value;
    document.getElementById("chemistryI_marks").innerText = CTI;
    
    var CPI = document.getElementById("CPI").value;
    document.getElementById("chemistry_practicalI_marks").innerText = CPI;
    
    var PTI = document.getElementById("PTI").value;
    document.getElementById("physicsI_marks").innerText = PTI;
    
    var PPI = document.getElementById("PPI").value;
    document.getElementById("physics_practicalI_marks").innerText = PPI;
    
    var MTI = document.getElementById("MTI").value;
    document.getElementById("mathematicsI_marks").innerText = MTI;
    
    var UTII = document.getElementById("UTII").value;
    document.getElementById("urduII_marks").innerText = UTII;
    
    var ETII = document.getElementById("ETII").value;
    document.getElementById("englishII_marks").innerText = ETII;
    
    var PSTII = document.getElementById("PSTII").value;
    document.getElementById("pakistan_studiesII_marks").innerText = PSTII;
    
    var CTII = document.getElementById("CTII").value;
    document.getElementById("chemistryII_marks").innerText = CTII;
    
    var CPII = document.getElementById("CPII").value;
    document.getElementById("chemistry_practicalII_marks").innerText = CPII;
    
    var PTII = document.getElementById("PTII").value;
    document.getElementById("physicsII_marks").innerText = PTII;
    
    var PPII = document.getElementById("PPII").value;
    document.getElementById("physics_practicalII_marks").innerText = PPII;
    
    var MTII = document.getElementById("MTII").value;
    document.getElementById("mathematicsII_marks").innerText = MTII;

    var urdu1_marks = Number(UTI);
    var urdu2_marks = Number(UTII);
    var english1_marks = Number(ETI);
    var english2_marks = Number(ETII);
    var islamic_studies1_marks = Number(ITI);
    var pakistan_studies2_marks = Number(PSTII);
    var chemistry1_marks = Number(CTI);
    var chemistry_practical1_marks = Number(CPI);
    var chemistry2_marks = Number(CTII);
    var chemistry_practical2_marks = Number(CPII);
    var physics1_marks = Number(PTI);
    var physics2_marks = Number(PTII);
    var physics_practical1_marks = Number(PPI);
    var physics_practical2_marks = Number(PPII);
    var mathematics1_marks = Number(MTI);
    var mathematics2_marks = Number(MTII);

    document.getElementById("urdu_combined_marks").innerText = urdu1_marks + urdu2_marks;
    document.getElementById("urdu_percentage").innerText = Math.round((urdu1_marks+urdu2_marks)/200*100);
    if(((urdu1_marks+urdu2_marks)/200*100) < 40)
    {
        document.getElementById("urdu_remarks").innerText = "Fail";
    }
    else
    {
        document.getElementById("urdu_remarks").innerText = "Pass";
    }

    document.getElementById("english_combined_marks").innerText = english1_marks + english2_marks;
    document.getElementById("english_percentage").innerText = Math.round((english1_marks+english2_marks)/200*100);
    if(((english1_marks+english2_marks)/200*100) < 40)
    {
        document.getElementById("english_remarks").innerText = "Fail";
    }
    else
    {
        document.getElementById("english_remarks").innerText = "Pass";
    }

    document.getElementById("islamic_studies_combined_marks").innerText = islamic_studies1_marks;
    document.getElementById("islamic_studies_percentage").innerText = Math.round((islamic_studies1_marks)/50*100);
    if(((islamic_studies1_marks)/50*100) < 40)
    {
        document.getElementById("islamic_studies_remarks").innerText = "Fail";
    }
    else
    {
        document.getElementById("islamic_studies_remarks").innerText = "Pass";
    }

    document.getElementById("pakistan_studies_combined_marks").innerText = pakistan_studies2_marks;
    document.getElementById("pakistan_studies_percentage").innerText = Math.round((pakistan_studies2_marks)/50*100);
    if(((pakistan_studies2_marks)/50*100) < 40)
    {
        document.getElementById("pakistan_studies_remarks").innerText = "Fail";
    }
    else
    {
        document.getElementById("pakistan_studies_remarks").innerText = "Pass";
    }

    document.getElementById("chemistry_combined_marks").innerText = chemistry1_marks + chemistry2_marks;
    document.getElementById("chemistry_practical_combined_marks").innerText = chemistry_practical1_marks + chemistry_practical2_marks;
    document.getElementById("chemistry_percentage").innerText = Math.round((chemistry1_marks+chemistry2_marks+chemistry_practical1_marks+chemistry_practical2_marks)/200*100);
    if(((chemistry1_marks+chemistry2_marks+chemistry_practical1_marks+chemistry_practical2_marks)/200*100) < 40)
    {
        document.getElementById("chemistry_remarks").innerText = "Fail";
    }
    else
    {
        document.getElementById("chemistry_remarks").innerText = "Pass";
    }

    document.getElementById("physics_combined_marks").innerText = physics1_marks + physics2_marks;
    document.getElementById("physics_practical_combined_marks").innerText = physics_practical1_marks + physics_practical2_marks;
    document.getElementById("physics_percentage").innerText = Math.round((physics1_marks+physics2_marks+physics_practical1_marks+physics_practical2_marks)/200*100);
    if(((physics1_marks+physics2_marks+physics_practical1_marks+physics_practical2_marks)/200*100) < 40)
    {
        document.getElementById("physics_remarks").innerText = "Fail";
    }
    else
    {
        document.getElementById("physics_remarks").innerText = "Pass";
    }

    document.getElementById("mathematics_combined_marks").innerText = mathematics1_marks + mathematics2_marks;
    document.getElementById("mathematics_percentage").innerText = Math.round((mathematics1_marks+mathematics2_marks)/200*100);
    if(((mathematics1_marks+mathematics2_marks)/200*100) < 40)
    {
        document.getElementById("mathematics_remarks").innerText = "Fail";
    }
    else
    {
        document.getElementById("mathematics_remarks").innerText = "Pass";
    }

    
    var secured_marks1 = urdu1_marks + english1_marks + islamic_studies1_marks + chemistry1_marks + chemistry_practical1_marks + physics1_marks + physics_practical1_marks + mathematics1_marks;
    var secured_marks2 = urdu2_marks + english2_marks + pakistan_studies2_marks + chemistry2_marks + chemistry_practical2_marks + physics2_marks + physics_practical2_marks + mathematics2_marks;
    
    document.getElementById("secured_marksI").innerText=secured_marks1;
    document.getElementById("secured_marksII").innerText=secured_marks2;
    var total_secured_marks = secured_marks1+secured_marks2;
    document.getElementById("total_secured_marks").innerText=total_secured_marks;
    document.getElementById("percentage").innerText = Math.round((total_secured_marks)/1100*100);

    if(total_secured_marks >= 880)
    {
        document.getElementById("grade").innerText = "A-1";
    }
    else if(total_secured_marks < 880 && total_secured_marks >= 770)
    {
        document.getElementById("grade").innerText = "A";
    }
    else if(total_secured_marks < 770 && total_secured_marks >=660)
    {
        document.getElementById("grade").innerText = "B";
    }
    else if(total_secured_marks < 660 && total_secured_marks >= 550)
    {
        document.getElementById("grade").innerText = "C";
    }
    else if(total_secured_marks < 550 && total_secured_marks >= 440)
    {
        document.getElementById("grade").innerText = "D";
    }
    else if(total_secured_marks < 440 && total_secured_marks >= 363)
    {
        document.getElementById("grade").innerText = "E";
    }
    else
    {
        document.getElementById("grade").innerText = "F";
    }
    document.getElementById("form").style.display = "none";
    document.getElementById("marksheet").style.display = "block";
}
