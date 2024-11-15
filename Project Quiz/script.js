import { questions } from "./questions.js";
// console.log(questions);

let quiz_storage = document.querySelector("#quiz_test");
let btn_start = document.querySelector("#btn");
let playQuiz = document.querySelector("#quizItems");
let timer;
let interval;
let timerValue = 5;
let optionSelected;
userclick = [];              

function random() {
    return Math.floor(Math.random() * questions.length);
}

btn_start.addEventListener("click", function () {
    quiz_storage.style.display = "block";
    displayQuestion();

    interval = setInterval(() => {
        if (timerValue < 1) {
            timerValue = 5;
            displayQuestion()
        }
        else {
            timerValue--;
            timer.innerHTML = timerValue;


        }
    },1000)
    btn_start.style.display = "none"

})

function displayQuestion() {
    playQuiz.innerHTML = ""
    let randomQuistions = questions[random()];
    let question = document.createElement("h1");
    question.innerHTML = randomQuistions.q;
     
    timer.innerHTML = timerValue;
 
    playQuiz.append(question,timer);

    let options = randomQuistions.opt;
    let optiondiv = document.createElement("div")

    options.forEach((option) => {
        let btn = document.createElement("button");
        btn.innerHTML = options 
        optiondiv.append(option)
        
    });
    playQuiz.append(optiondiv)

    optiondiv.addEventListener("click",function(e){
      if(e.target.tagName="BUTTON"){
        optiondiv.querySelectorAll("button").forEach(btn=>btn.disabled=true)
        e.target.disabled=false
        userclick.push(e.target.innerHTML)
        optionSelected=true
      }

    })

        options.forEach(btn => btn.disable=true);

    

}




