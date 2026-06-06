const tableContainer = document.getElementById('table-container');
const selectorContainer = document.getElementById('selector-container');
const tableForm = document.getElementById('table-form');

const COLUMNS_NUMBER = 5;
const MIN_ROWS_NUMBER = 3;
let rows = MIN_ROWS_NUMBER;

const checkAndRender = () => {
  const calculationResult = JSON.parse(localStorage.getItem('calculationResult'));

  if (calculationResult) {
    showResult(calculationResult);
  } else {
    renderForm();
    createTable();
  }
};

const renderForm = () => {
  const label = document.createElement('label');
  label.setAttribute('for', 'rows-count');
  label.textContent = 'Выберите количество строк';

  const select = document.createElement('select');
  select.id = 'rows-count';
  select.name = 'rows';

  for (let i = MIN_ROWS_NUMBER; i <= 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }

  select.addEventListener('change', handleSelect);

  selectorContainer.appendChild(label);
  selectorContainer.appendChild(select);
};

const showResult = (result) => {
  tableContainer.innerHTML = '';

  const resultDiv = document.createElement('div');
  resultDiv.textContent = `Среднее геометрическое: ${result.geometricMean.toFixed(4)}`;

  const valuesText = document.createElement('p');
  valuesText.textContent = `Значения: ${result.values.join(', ')}`;

  const dateText = document.createElement('p');
  dateText.textContent = `Рассчитано: ${new Date(result.calculatedAt).toLocaleString()}`;

  const clearButton = document.createElement('button');
  clearButton.textContent = 'Новый расчет';
  clearButton.classList.add('submit-button');
  clearButton.addEventListener('click', () => {
    localStorage.removeItem('calculationResult');
    localStorage.removeItem('tableData');
    tableContainer.innerHTML = '';
    selectorContainer.innerHTML = '';
    renderForm();
    createTable();
  });

  resultDiv.appendChild(valuesText);
  resultDiv.appendChild(dateText);
  resultDiv.appendChild(clearButton);
  tableContainer.appendChild(resultDiv);
};

const handleSelect = (event) => {
  rows = event.target.value;
  console.log('Выбрано строк:', rows);
  createTable();
}

const createTable = () => {
  tableContainer.innerHTML = '';

  const table = document.createElement('table');

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < COLUMNS_NUMBER; j++) {
      const td = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'number';
      input.name = `row-${i}-col-${j}`;
      td.appendChild(input);
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  tableContainer.appendChild(table);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Отправить';
  submitButton.classList.add('submit-button');
  tableContainer.appendChild(submitButton);
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('submit');

  const table = tableContainer.querySelector('table');
  if (!table) {
    alert('Таблица не создана. Выберите количество строк.');
    return;
  }

  const inputs = tableContainer.querySelectorAll('input');
  let allFilled = true;

  inputs.forEach(input => {
    if (input.value === '') {
      allFilled = false;
    }
  });

  if (!allFilled) {
    alert('Заполните все ячейки таблицы.');
    return;
  }

  const data = [];
  inputs.forEach(input => {
    data.push({
      name: input.name,
      value: input.value
    });
  });

  localStorage.setItem('tableData', JSON.stringify(data));
  window.location.href = 'calculator.html';
}

checkAndRender();

tableForm.addEventListener('submit', handleSubmit);