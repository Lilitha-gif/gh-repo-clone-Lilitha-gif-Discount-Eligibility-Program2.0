function checkEligibility() {
    // Retrieve values from the form
    let age = parseInt(document.getElementById("age").value);
    let isMember = document.getElementById("isMember").checked;

    // Check eligibility
    let result;
    if (age >= 65) {
        result = "You are eligible for the Senior Discount!";
    } else if (age >= 18 && isMember) {
        result = "You are eligible for the Member Discount!";
    } else {
        result = "You are not eligible for any discount.";
    }

    // Display result
    document.getElementById("result").textContent = result;
}

