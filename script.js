const adviceText = document.getElementById("advice");
const adviceIdText = document.getElementById("small-header");

async function generateAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  let adviceId = data.slip.id;
  let advice = data.slip.advice;

  adviceText.textContent = advice;
  adviceIdText.textContent = `Random Advice ${adviceId}`;

  console.log(adviceId, advice);
}

generateAdvice();
