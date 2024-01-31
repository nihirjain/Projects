let button = document.getElementById("Qption1");
let ques = document.getElementById("Question_heading");
let button2 = document.getElementById("Qption2");
let button3 = document.getElementById("Qption3");
let button4 = document.getElementById("Qption4");
let container = document.querySelector(".container");
let Game_Completion = document.querySelector(".Game_Completion");
let TOTALSCORE = document.querySelector(".TOTALSCORE");
let Startbtn = document.getElementById("Start_btn");
let ReStartbtn = document.getElementById("Restart");
let Notselect = document.querySelector(".Selection");
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      answer: "William Shakespeare"
    },
    {
      question: "Which element has the chemical symbol 'H'?",
      options: ["Helium", "Hydrogen", "Hassium", "Hafnium"],
      answer: "Hydrogen"
    },
    {
      question: "In what year did World War II end?",
      options: ["1945", "1939", "1941", "1950"],
      answer: "1945"
    },
    {
      question: "What is the capital of Japan?",
      options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
      answer: "Tokyo"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the currency of Australia?",
      options: ["Dollar", "Euro", "Pound", "Yen"],
      answer: "Dollar"
    },
    {
      question: "Which famous scientist developed the theory of relativity?",
      options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
      answer: "Albert Einstein"
    }
  ];
  
let counter = 0;
let SCORE = 0;

function ShowQuestion(){
    ques.innerHTML = questions[counter].question;
    button.value = questions[counter].options[0];
    button2.value = questions[counter].options[1];
    button3.value = questions[counter].options[2];
    button4.value = questions[counter].options[3];
}
  

ShowQuestion();

let Question_No = document.getElementById("Question_No");
let Score_No = document.getElementById("Score_No");


Question_No.innerHTML = `${counter + 1}/${questions.length}`
document.querySelectorAll(".Options").forEach((el)=>{
    el.addEventListener("click",function(e){
        document.querySelectorAll(".Options").forEach((e)=>{
            e.setAttribute("disabled" , true);
            e.classList.add("Clicked");
            Notselect.style.display = "none"
            
        })
    })
})

document.getElementById("Next").addEventListener("click",function(){
    if(button.hasAttribute("disabled" , true)){
        document.querySelectorAll(".Options").forEach((el)=>{
            el.removeAttribute("disabled");
            el.style.border = "solid"
        })
        if(counter < questions.length-1){
            counter = counter + 1;
            Question_No.innerHTML = `${counter + 1}/${questions.length}`
            ShowQuestion();
        }
        else{
            Game_Completion.style.display = "flex";
            container.style.display = "none";
        }    

    }
    else{
        Notselect.style.display = "block"
    }
})

function AnsCheker(){
    document.querySelectorAll(".Options").forEach((el)=>{
       el.addEventListener("click",function(e){
            if(e.target.value === questions[counter].answer){
                e.target.style.border = "4px solid green";
                SCORE = SCORE + 1;
                Score_No.innerText = SCORE;
                TOTALSCORE.innerHTML = `Your Total Score is : ${SCORE}`;
            }
            else{
                e.target.style.border = "4px solid red";
                AutoMateAnswer();
            }
       })
    })
}

AnsCheker();

function AutoMateAnswer(){
    document.querySelectorAll(".Options").forEach((el)=>{
        if(el.value == questions[counter].answer){
            el.style.border = "4px solid green"
        }
    })
}

Startbtn.addEventListener("click",function(e){
    e.target.parentNode.style.display = "none"
    container.style.display = "flex";
})

ReStartbtn.addEventListener("click",function(e){
    e.target.parentNode.style.display = "none"
    container.style.display = "flex";
    counter = 0;
    SCORE = 0;
    Question_No.innerHTML = `${counter + 1}/${questions.length}`
    Score_No.innerText = SCORE;
    ShowQuestion();
})