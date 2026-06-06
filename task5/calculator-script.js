const data = JSON.parse(localStorage.getItem('tableData'));
console.log(data);

const resultDiv = document.getElementById('result');

if (data && data.length > 0) {
  const values = data.map(item => Number(item.value));
  const product = values.reduce((acc, num) => acc * num, 1);
  const geometricMean = Math.pow(product, 1 / values.length);
  
  console.log('Среднее геометрическое:', geometricMean);
  resultDiv.textContent = `Среднее геометрическое: ${geometricMean.toFixed(4)}`;

  const resultData = {
    values: values,
    geometricMean: geometricMean,
    calculatedAt: new Date().toISOString()
  };
  
  localStorage.setItem('calculationResult', JSON.stringify(resultData));
} else {
  console.log('Нет данных для расчета');
  resultDiv.textContent = 'Данные таблицы отсутствуют';
}

const backButton = document.createElement('button');
  backButton.textContent = 'Вернуться на главную';
  backButton.classList.add('submit-button');
  backButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

resultDiv.appendChild(backButton);