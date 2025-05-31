const quizQuestions = [
    {
        id: 1,
        question: "HTML stands for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Programming Language",
            c: "Hyper Text Styling Language",
            d: "Hyper Text Scripting Language"
        },
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which language is used for styling web pages?",
        options: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "PHP"
        },
        answer: "CSS"
    },
    {
        id: 3,
        question: "Which of these is a JavaScript framework?",
        options: {
            a: "Django",
            b: "React",
            c: "Laravel",
            d: "Bootstrap"
        },
        answer: "React"
    },
    {
        id: 4,
        question: "Which tag is used to define a hyperlink in HTML?",
        options: {
            a: "link",
            b: "a",
            c: "href",
            d: "url"
        },
        answer: "a"
    },
    {
        id: 5,
        question: "Which company developed JavaScript?",
        options: {
            a: "Microsoft",
            b: "Netscape",
            c: "Oracle",
            d: "Sun Microsystems"
        },
        answer: "Netscape"
    },
    {
        id: 6,
        question: "Which of these is not a programming language?",
        options: {
            a: "Python",
            b: "HTML",
            c: "Java",
            d: "C++"
        },
        answer: "HTML"
    },
    {
        id: 7,
        question: "What does CSS stand for?",
        options: {
            a: "Creative Style Sheets",
            b: "Cascading Style Sheets",
            c: "Colorful Style Sheets",
            d: "Cascading Script Sheets"
        },
        answer: "Cascading Style Sheets"
    },
    {
        id: 8,
        question: "Which HTML tag is used to display an image?",
        options: {
            a: "img",
            b: "image",
            c: "picture",
            d: "src"
        },
        answer: "img"
    },
    {
        id: 9,
        question: "Which HTML tag is used to define a table?",
        options: {
            a: "table",
            b: "thead",
            c: "tr",
            d: "tb"
        },
        answer: "table"
    },
    {
        id: 10,
        question: "Which one is not a JavaScript data type?",
        options: {
            a: "String",
            b: "Boolean",
            c: "Object",
            d: "Function"
        },
        answer: "Function"
    }
];

let indexNumber = 0
const count = document.getElementById("count");
count.innerHTML = `  ${indexNumber + 1} / ${quizQuestions.length}`;

function uiRender() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");
    question.innerHTML = quizQuestions[indexNumber].question;

    const optionList = quizQuestions[indexNumber].options;
    console.log(options);

    options.innerHTML = ""

    for (var key in optionList) {
        console.log(optionList[key]);
        options.innerHTML += ` <li onclick="checkAns(this)">${optionList[key]}</li>`;

    }

}


function nextQues() {
    indexNumber++;
    uiRender();
    count.innerHTML = `  ${indexNumber + 1} / ${quizQuestions.length}`;

}


function checkAns(ele) {
    console.log(ele.innerHTML);
    const allLi = document.getElementById("options").children;
    const userSelection = ele.innerHTML
    const correctAns = quizQuestions[indexNumber].answer

    if (userSelection === correctAns) {
        ele.style.background = "green"
    }

    else {
        ele.style.background = "Red"

    }

    for (var i = 0; i < allLi.length; i++) {
        if (allLi[i].innerHTML === correctAns) {
            allLi[i].style.background = "green"
            break
        }

    }

    for (var i = 0; i < allLi.length; i++) {
        allLi[i].style.pointerEvents = "none"
    }




}
