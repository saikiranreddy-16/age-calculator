

document.addEventListener("DOMContentLoaded", function () {

    const userInput = document.getElementById("date");
    const result = document.getElementById("result");
    const button = document.getElementById("btn");

    userInput.max = new Date().toISOString().split("T")[0];

    button.addEventListener("click", function () {

        if (!userInput.value) {
            result.innerHTML = "<span>Please select a date</span>";
            return;
        }

        const birthDate = new Date(userInput.value);
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        result.innerHTML = `
            <h3>
                Your Age is 
                <span>${years}</span> Years 
                <span>${months}</span> Months 
                <span>${days}</span> Days
            </h3>
        `;
    });
});
