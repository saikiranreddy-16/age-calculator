// let userInput = document.getElementById("date");
// userInput.max = new Date().toISOString().split("T")[0];

// let result = document.getElementById("result");

// function calculateAge() {
//     if (userInput.value === "") {
//         result.innerHTML = "<span>Please select a date</span>";
//         return;
//     }

//     let birthDate = new Date(userInput.value);

//     let d1 = birthDate.getDate();
//     let m1 = birthDate.getMonth() + 1;
//     let y1 = birthDate.getFullYear();

//     let today = new Date();

//     let d2 = today.getDate();
//     let m2 = today.getMonth() + 1;
//     let y2 = today.getFullYear();

//     let d3, m3, y3;

//     // YEARS
//     y3 = y2 - y1;

//     // MONTHS
//     if (m2 >= m1) {
//         m3 = m2 - m1;
//     } else {
//         y3--;
//         m3 = 12 + m2 - m1;
//     }

//     // DAYS
//     if (d2 >= d1) {
//         d3 = d2 - d1;
//     } else {
//         m3--;
//         d3 = getDaysInMonth(y1, m1) + d2 - d1;
//     }

//     if (m3 < 0) {
//         m3 = 11;
//         y3--;
//     }

//     result.innerHTML = `
//         <h3>
//             Your Age is 
//             <span>${y3}</span> Years 
//             <span>${m3}</span> Months 
//             <span>${d3}</span> Days
//         </h3>
//     `;
// }

// function getDaysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
// }

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
