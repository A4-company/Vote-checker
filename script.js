function checkEligibility() {
    var birthYear = document.getElementById("birthYear").value;
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    var resultElement = document.getElementById("result");

    if (age >= 18) {
        resultElement.textContent = "You are eligible to vote!" + age + " years old.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "You are not eligible to vote. You are " + age + " years old.";
        resultElement.style.color = "green";
    }
}
