/* function declaration */
function checkDriverAge(ans) {
    if (Number(ans) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(ans) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    } else {
        return "Sorry, you are too young to drive this car. Powering off";
    }
}

/* function expression */
var checkDriverAge2 = function() {
    var age = prompt("Enter your age");
    if (Number(age) > 18) {
        alert ("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert ("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        alert ("Sorry, you are too young to drive this car. Powering off");
    }
}
