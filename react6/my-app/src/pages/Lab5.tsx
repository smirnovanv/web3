export const Lab5 = () => {
  // ============================================
  // 4.1. Объявить две числовых переменных
  // ============================================
  let variantNumber = 8; // номер варианта
  const six = 6;

  // ============================================
  // 4.2. Восемь разных условий
  // ============================================
  console.log('=== Условия ===');
  
  // 1. Равно
  if (variantNumber === six) {
    console.log(`1. ${variantNumber} равно ${six}`);
  }
  
  // 2. Не равно
  if (variantNumber !== six) {
    console.log(`2. ${variantNumber} не равно ${six}`);
  }
  
  // 3. Больше
  if (variantNumber > six) {
    console.log(`3. ${variantNumber} больше ${six}`);
  }
  
  // 4. Меньше
  if (variantNumber < six) {
    console.log(`4. ${variantNumber} меньше ${six}`);
  }
  
  // 5. Больше или равно
  if (variantNumber >= six) {
    console.log(`5. ${variantNumber} больше или равно ${six}`);
  }
  
  // 6. Меньше или равно
  if (variantNumber <= six) {
    console.log(`6. ${variantNumber} меньше или равно ${six}`);
  }
  
  // 7. Строгое равенство (===)
  if (variantNumber === six) {
    console.log(`7. ${variantNumber} строго равно ${six} (по значению и типу)`);
  }
  
  // 8. Строгое неравенство (!==)
  if (variantNumber !== six) {
    console.log(`8. ${variantNumber} строго не равно ${six}`);
  }

  // ============================================
  // 4.3. Тернарный оператор
  // ============================================
  const ternaryResult = variantNumber > six 
    ? `${variantNumber} больше ${six}` 
    : `${variantNumber} меньше или равно ${six}`;
  console.log('=== Тернарный оператор ===');
  console.log(ternaryResult);

  // ============================================
  // 4.4. Сложить две переменных
  // ============================================
  const sum = variantNumber + six;
  console.log('=== Сложение ===');
  console.log(`${variantNumber} + ${six} = ${sum}`);

  // ============================================
  // 4.5. Краткая форма (прибавить 1)
  // ============================================
  let sumPlusOne = sum;
  sumPlusOne += 1;
  console.log('=== Прибавление 1 ===');
  console.log(`${sum} + 1 = ${sumPlusOne}`);

  // ============================================
  // 4.6. Массив строк из шести элементов
  // ============================================
  const stringArray = [
    'Фигурное катание',
    'Олимпийские игры',
    'Танцы на льду',
    'Спорт',
    'Золотая медаль',
    'Чемпионат мира'
  ];

  // ============================================
  // 4.7. Цикл для вывода всех элементов
  // ============================================
  console.log('=== Массив строк (все элементы) ===');
  for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
  }

  // ============================================
  // 4.8. Поиск подстроки в цикле
  // ============================================
  console.log('=== Поиск подстроки "фигур" ===');
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].toLowerCase().includes('фигур')) {
      console.log(`${stringArray[i]}!`);
    }
  }

  // ============================================
  // 4.9. Удалить второй и пятый элементы
  // ============================================
  // Второй элемент имеет индекс 1, пятый — индекс 4
  // Удаляем с конца, чтобы не сбивать индексы
  const modifiedArray = [...stringArray];
  modifiedArray.splice(4, 1); // удаляем пятый (индекс 4)
  modifiedArray.splice(1, 1); // удаляем второй (индекс 1)
  console.log('=== Массив после удаления ===');
  console.log(modifiedArray);

  // ============================================
  // 4.10-4.11. Функция с темой варианта (alert)
  // ============================================
  const themeName = 'Фигурное катание на льду';
  
  function showThemeAlert() {
    alert(`Тема: ${themeName}`);
  }

  // ============================================
  // 4.12. Глобальная переменная Boolean (false)
  // ============================================
  let globalBooleanVariable: boolean = false;

  // ============================================
  // 4.13. Функция с подтверждением
  // ============================================
  function confirmAndSetGlobal() {
    const userConfirmed = window.confirm('Подтвердите действие');
    if (userConfirmed) {
      globalBooleanVariable = true;
      console.log('=== Подтверждение ===');
      console.log(`Глобальная переменная установлена в: ${globalBooleanVariable}`);
    }
  }

  // ============================================
  // 4.14. Преобразовать строку в число
  // ============================================
  const stringNumber = '123.45';
  const convertedNumber = parseFloat(stringNumber);
  console.log('=== Преобразование строки в число ===');
  console.log(`Строка "${stringNumber}" → число ${convertedNumber}`);

  // ============================================
  // 4.15. Создать объект
  // ============================================
  const figureSkatingObject = {
    // a.i. Строковое свойство с переносом строки
    description: 'Фигурное катание - это олимпийский вид спорта,\nкоторый сочетает в себе искусство и спорт.',
    // a.ii. Числовое свойство (номер варианта)
    variantNumber: 8,
    // a.iii. Массив строк
    disciplines: ['Одиночное катание', 'Парное катание', 'Танцы на льду', 'Синхронное катание'],
    // a.iv. Произвольный массив чисел
    scores: [9, 8, 4, 1, 5, 6],
    // a.v. Объект внутри объекта
    medal: {
      gold: 3,
      silver: 2,
      bronze: 1
    }
  };

  // a.b. Вывести объект в консоль
  console.log('=== Объект темы ===');
  console.log(figureSkatingObject);

  // a.c. Заменить первый элемент массива на название темы
  console.log('=== Замена первого элемента массива ===');
  console.log(`Было: ${figureSkatingObject.disciplines[0]}`);
  figureSkatingObject.disciplines[0] = "Фигурное катание";
  console.log(`Стало: ${figureSkatingObject.disciplines[0]}`);

  // a.d. Максимальное значение из массива чисел
  console.log('=== Максимальное значение из массива scores ===');
  const maxScore = Math.max(...figureSkatingObject.scores);
  console.log(`Максимальная оценка: ${maxScore}`);

  // ============================================
  // 4.16-4.17. Функция преобразования в верхний регистр
  // ============================================
  function toUpperCaseString(input: string): string {
    return input.toUpperCase();
  }

  const testString = 'фигурное катание';
  const upperCaseResult = toUpperCaseString(testString);
  console.log('=== Преобразование в верхний регистр ===');
  console.log(`Было: "${testString}" → Стало: "${upperCaseResult}"`);

  // ============================================
  // 4.18-4.19. Добавить в объект свойство с датой
  // ============================================
  figureSkatingObject.currentDate = new Date();
  console.log('=== Объект с добавленной датой ===');
  console.log(figureSkatingObject);
  console.log('=== Свойство типа дата ===');
  console.log(`Дата: ${figureSkatingObject.currentDate}`);

  return (
    <article className="lab5-page">
      <h2>Лабораторная 5</h2>

      <button 
        onClick={showThemeAlert}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4a6fa5',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Показать тему
      </button>

      <button 
        onClick={confirmAndSetGlobal}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#27ae60',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '10px',
          marginLeft: '10px'
        }}
      >
        Подтвердить действие
      </button>

      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f0f8fa',
        borderRadius: '8px',
        border: '1px solid #c5d5e8'
      }}>
        <h3>Результаты в консоли</h3>
        <p>Откройте консоль браузера, чтобы увидеть результаты всех скриптов.</p>
        <p><strong>Номер варианта:</strong> {variantNumber}</p>
        <p><strong>Тема:</strong> {themeName}</p>
      </div>
    </article>
  );
};