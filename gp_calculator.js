function calculateGPA() {
    //getting input data
    inputField1 = document.getElementById("course1").value;
    inputField2 = document.getElementById("course2").value;
    inputField3 = document.getElementById("course3").value;
    inputField4 = document.getElementById("course4").value;
    inputField5 = document.getElementById("course5").value;
    inputField6 = document.getElementById("course6").value;
    inputField7 = document.getElementById("course7").value;

    //validating coursegrade selectors
    var courseGrade1 = document.getElementById("acquired_grade_course1").value;
    var courseGrade2 = document.getElementById("acquired_grade_course2").value;
    var courseGrade3 = document.getElementById("acquired_grade_course3").value;
    var courseGrade4 = document.getElementById("acquired_grade_course4").value;
    var courseGrade5 = document.getElementById("acquired_grade_course5").value;
    var courseGrade6 = document.getElementById("acquired_grade_course6").value;
    var courseGrade7 = document.getElementById("acquired_grade_course7").value;

    //validating course unit selectors
    var courseUnit1 = document.getElementById("course1_unit1").value;
    var courseUnit2 = document.getElementById("course2_unit2").value;
    var courseUnit3 = document.getElementById("course3_unit3").value;
    var courseUnit4 = document.getElementById("course4_unit4").value;
    var courseUnit5 = document.getElementById("course5_unit5").value;
    var courseUnit6 = document.getElementById("course6_unit6").value;
    var courseUnit7 = document.getElementById("course7_unit7").value;

    //calculating course GPA
    var courseGpa1 = courseGrade1 * courseUnit1;
    var courseGpa2 = courseGrade2 * courseUnit2;
    var courseGpa3 = courseGrade3 * courseUnit3;
    var courseGpa4 = courseGrade4 * courseUnit4;
    var courseGpa5 = courseGrade5 * courseUnit5;
    var courseGpa6 = courseGrade6 * courseUnit6;
    var courseGpa7 = courseGrade7 * courseUnit7;

    //calculating weighted point
    var weightedPoint = courseGpa1 + courseGpa2 + courseGpa3 + courseGpa4 + courseGpa5 + courseGpa6 +courseGpa7;

    //calculating total courses unit
    var totalCoursesUnit = parseFloat(courseUnit1) + parseFloat(courseUnit2) + parseFloat(courseUnit3) + parseFloat(courseUnit4) + parseFloat(courseUnit5) + parseFloat(courseUnit6) + parseFloat(courseUnit7);

    //calculating GPA
    var gradePointAverage = weightedPoint/totalCoursesUnit;

    document.getElementById("result").innerHTML = (`GPA: ${gradePointAverage}`);
}