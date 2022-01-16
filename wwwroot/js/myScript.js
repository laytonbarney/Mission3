// This contains the calulator for my website
$("#btnSend").click(function () {

    //variables that reference element id's

    var textG = '';
    var as = $("#assignements").val();
    var qu = $("#quizzes").val();
    var i = $("#intex").val();
    var ex = $("#extracredit").val();

    //validates no fields are blank and numbers are all between 0 - 100

    if (as == '' || qu == '' || i == '' || ex == '') {
        alert('One or more fields are missing a value.');
        return false;
    }
    if (as > 100) {
        alert("Values Must be less than or equal to 100");
        return false;
    } else if (qu > 100) {
        alert("Values Must be less than or equal to 100");
        return false;
    } else if (i > 100) {
        alert("Values Must be less than or equal to 100");
        return false;
    } else if (ex > 100) {
        alert("Values Must be less than or equal to 100");
        return false;
    }


    //calculates grade


    var result = (as * .4367) + (qu * .131) + (i * .4323) + (ex * .022)

    result = Number(result).toFixed(2);

    if (result >= 95) {
        textG = "A";
    } else if (result >= 90) {
        textG = "A-";
    } else if (result >= 85) {
        textG = "B+";
    } else if (result >= 83) {
        textG = "B";
    } else if (result >= 80) {
        textG = "B-";
    } else if (result >= 75) {
        textG = "C+";
    } else if (result >= 70) {
        textG = "C";
    } else if (result >= 60) {
        textG = "D";
    } else {
        textG = "F";
    }


    alert("Your current score\n" + result +"% " + textG);
})