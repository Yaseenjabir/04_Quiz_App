const store = [
  {
    storeQuestion: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    storeQuestion: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    storeQuestion: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    storeQuestion: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];

const myQuestion = document.querySelector("h2");
const myOption1 = document.querySelector("#label1");
const myOption2 = document.querySelector("#label2");
const myOption3 = document.querySelector("#label3");
const myOption4 = document.querySelector("#label4");
const submit = document.querySelector("#submit");

let storeObj = 0;

myQuestion.textContent = store[storeObj].storeQuestion;
myOption1.textContent = store[storeObj].ans1text;
myOption2.textContent = store[storeObj].ans2text;
myOption3.textContent = store[storeObj].ans3text;
myOption4.textContent = store[storeObj].ans4text;

let score = 0;
submit.addEventListener("click", () => {
  const select = document.querySelector('input[type="radio"]:checked');
  if (select === null) {
    alert("Please Choose a correct option");
  } else {
       if(select.nextElementSibling.textContent === store[storeObj].answer){
        score++;
       }

    storeObj++;

    if (storeObj < store.length) {
      myQuestion.textContent = store[storeObj].storeQuestion;
      myOption1.textContent = store[storeObj].ans1text;
      myOption2.textContent = store[storeObj].ans2text;
      myOption3.textContent = store[storeObj].ans3text;
      myOption4.textContent = store[storeObj].ans4text;
      select.checked = false;
    } else {

      submit.remove();

      const final = document.createElement("div");
      final.classList.add("final");
      const parent = document.querySelector('.parent');
      final.textContent = `Your score is ${score} out of ${store.length}`
      parent.append(final)
      select.checked = false;

      const divRestart = document.createElement('div');
      divRestart.classList.add('divRestart')
      parent.append(divRestart);

      const restart = document.createElement('button');
      restart.textContent = "Restart";
      restart.classList.add('restart');
      divRestart.append(restart);
      restart.addEventListener('click',()=>{
        location.reload();
      })
    }
  }
});

