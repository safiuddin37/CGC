const questions = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const quiz = document.getElementById('main');
const questionel = document.getElementById('question');
const answerels = document.querySelectorAll('.answer');
const atext = document.getElementById('a_text');
const btext = document.getElementById('b_text');
const ctext = document.getElementById('c_text');
const dtext = document.getElementById('d_text');
const submit = document.getElementById('submit');
const deselectselection = () => {
  answerels.forEach((answerel) => {
    answerel.checked=false;
  });
};
let currentquiz = 0;
let score = 0;
loadquiz();
function loadquiz() {
  deselectselection();
  let currentquizdata = questions[currentquiz];
  questionel.innerText = currentquizdata.question;
  atext.innerText = currentquizdata.a;
  btext.innerText = currentquizdata.b;
  ctext.innerText = currentquizdata.c;
  dtext.innerText = currentquizdata.d;
}

function selectedanswer() {
  let answer;
  answerels.forEach(answerel => {
    if (answerel.checked===true) {
      answer = answerel.id;
    }
});
return answer;
}
submit.addEventListener("click", () => {
  let answer = selectedanswer();
  if (answer) {
    if (answer === questions[currentquiz].correct) {
      score++;
    }
    currentquiz++;
  }
  if (currentquiz < questions.length) {
    loadquiz();
  } else {
    quiz.innerHTML=`
        <h3>You answered ${score}/${questions.length} questions correctly</h3>
        `;
  }
});

  
