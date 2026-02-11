const questions = [
  {
    q: "ใครทักใครก่อน",
    c: ["ทิ้ว", "บิว", "ทักพร้อมกัน"],
    correct: 0,
  },
  {
    q: "สถานที่ที่อยากไปที่สุดด้วยกัน 2 คน",
    c: ["ทะเล", "ภูเขา", "น้ำตก"],
    correct: 0,
  },
  {
    q: "ตุ๊กตาตัวแรกที่ซื้อให้",
    c: ["ยูนิคอน", "กระต่ายม่วง", "ชินจัง"],
    correct: 0,
  },
  {
    q: "วันแรกที่ครบกัน บิวให้อะไร",
    c: ["เงิน", "เสื้อ", "เค้ก"],
    correct: 2,
  },
  {
    q: "เรารักกันมากแค่ไหน",
    c: ["รักมาก", "รักเท่าชีวิต", "รักที่สุดในโลก"],
    correct: 1,
  }
];


let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
