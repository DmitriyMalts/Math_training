const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const audioYes = new Audio("yes.mp3");
const audioNo = new Audio("no.mp3");
let answer = 0;

function gen_eqation() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let wrong1 = Math.floor(Math.random() * 100) + 4;
    let wrong2 = Math.floor(Math.random() * 100) + 10;
    let wrong3 = Math.floor(Math.random() * 99) + 5;
    let allAnswer = [];
    let switchAnswers = [];
    if (num1 < num2) {
        num1 = num2;
    }

    answer = num1 * num2;



    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;

    allAnswer = [answer, wrong1, wrong2, wrong3];
    for (i = allAnswer.length; i--;) {
        switchAnswers.push(allAnswer.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
    option4.innerHTML = switchAnswers[3];
}

// function playAudioYes() {
//     const audioYes = document.getElementById('yes1');
//     yes1.paly();

// }
option1.addEventListener('click', function () {
    if (option1.innerHTML == answer) {
        audioYes.play();
        gen_eqation();



    }
    else {

        audioNo.play();
    }
})

option2.addEventListener('click', function () {
    if (option2.innerHTML == answer) {
        gen_eqation();
        audioYes.play();
    }
    else {
        audioNo.play();
    }
})

option3.addEventListener('click', function () {
    if (option3.innerHTML == answer) {
        gen_eqation();
        audioYes.play();
    }
    else {
        audioNo.play();
    }
})

option4.addEventListener('click', function () {
    if (option4.innerHTML == answer) {
        gen_eqation();
        audioYes.play();
    }
    else {
        audioNo.play();
    }
})
gen_eqation();



