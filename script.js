let listOfQuizs = {
    "quizs": [
        {
            "quizID": "1", "quizName": "IELTS Reading", "questions": [
                {
                    "questionID": "1", "name": "The fire is ...", "answers":
                        ['cold', 'loud', 'soft', 'hot']
                },
                {

                    "questionID": "2", "name": "The dog sleeps on the ... grass", "answers":
                        ['cold', 'loud', 'soft', 'hot']
                },
            ]
        }
    ]
}
let alphabet;
let QuestionBox = document.getElementById('questionBox');
for (let i = 0; i < listOfQuizs.quizs[0].questions.length; i++) {
    let QuestionText = document.createElement('div');
    QuestionText.className = 'card';
    QuestionText.innerHTML = `<p id="question" class="h4">Question ${listOfQuizs.quizs[0].questions[i].questionID}: ${listOfQuizs.quizs[0].questions[i].name}</p>`
    QuestionBox.appendChild(QuestionText);
    let o = 10;

    for (let k = 0; k < listOfQuizs.quizs[0].questions[i].answers.length; k++) {

        alphabet = '';

        alphabet += o.toString(36);

        let radioButton = document.createElement('div');
        radioButton.innerHTML = `<input class="form-check-input" type="radio" name="exampleRadios${i}" id="exampleRadios${i}" value="${alphabet.toUpperCase()}">
            <label class="form-check-label" for="exampleRadios1">${alphabet.toUpperCase()}. ${listOfQuizs.quizs[0].questions[i].answers[k]}
            </label>`
        QuestionText.appendChild(radioButton)
        o++;
    }
}

let button = document.querySelector('button');
button.addEventListener('click', ShowAnswer);

let backdrop;
let noti;



function ShowAnswer() {
    noti = document.createElement('div');
    noti.className = 'card noti';


    const headText = document.createElement('span');
    headText.className = 'h4';
    headText.textContent = 'Finish the test';
    noti.appendChild(headText);


    const exitNoti = document.createElement('button');
    exitNoti.textContent = 'x';
    exitNoti.className = 'exit';
    exitNoti.addEventListener('click', closeModalHandler);
    noti.appendChild(exitNoti);

    
    const lastAnswers = document.createElement('div');
    lastAnswers.className = 'card';


    let firstAnswer;
    for (let i = 0 ; i < document.getElementById('exampleRadios0').length; i++){
        if (document.getElementById('exampleRadios0').checked){
            firstAnswer = document.getElementById('exampleRadios0').value;
            break;
        }
    }

    let sencondAnswer;
    for (let i = 0 ; i < document.getElementById('exampleRadios1').length; i++){
        if (document.getElementById('exampleRadios1').checked){
            sencondAnswer = document.getElementById('exampleRadios1').value;
            break;
        }
    }

    lastAnswers.textContent = `Are you sure with your answer: 1.${firstAnswer} 2.${sencondAnswer}`



    noti.appendChild(lastAnswers);

    document.body.appendChild(noti);
    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    backdrop.addEventListener('click', closeModalHandler);
    document.body.appendChild(backdrop);
}
function closeModalHandler() {
    noti.remove();
    noti = null;
    backdrop.remove();
    backdrop = null;
}