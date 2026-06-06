const CORRECT_ANSWERS = {
    q1: '3',
    q2: '4',
    q3: ['1', '3']
}

const RESULT_MARKS = {
  0: 'не справились',
  1: 'не справились',
  2: 'среднее знание',
  3: 'хорошее знание',
}

const form = document.getElementById('form-1');
const resultBox = document.getElementById('result-box');

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const q1 = formData.get('q1');
  const q2 = formData.get('q2');
  const q3 = formData.getAll('q3');

  const result = {
    q1: q1 == CORRECT_ANSWERS.q1,
    q2: q2 == CORRECT_ANSWERS.q2,
    q3: q3.length == 2 && q3.includes(CORRECT_ANSWERS.q3[0]) && q3.includes(CORRECT_ANSWERS.q3[1]),
  }

  const corrctAnswersNumber = Object.values(result).filter(el => el).length;
  const finalResult = RESULT_MARKS[corrctAnswersNumber];

  resultBox.innerHTML = `Результат: ${finalResult}`;
}

form.addEventListener('submit', handleSubmit);