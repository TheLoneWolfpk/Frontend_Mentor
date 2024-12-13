document.getElementById("mortgage-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const loanAmount = parseFloat(document.getElementById("loan-amount").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById("loan-term").value) * 12;

    // Validate inputs
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate monthly payment
    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /
                           (Math.pow(1 + interestRate, loanTerm) - 1);
    const totalPayment = monthlyPayment * loanTerm;

    // Update results
    document.getElementById("monthly-payment").textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById("total-payment").textContent = `Total Payment: $${totalPayment.toFixed(2)}`;
});
