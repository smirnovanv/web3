const findRoot = () => {

const a = parseFloat(document.getElementById('a').value);
const b = parseFloat(document.getElementById('b').value);
const c = parseFloat(document.getElementById('c').value);
const d = parseFloat(document.getElementById('d').value);

if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
  document.getElementById('result').innerHTML = '<b>Ошибка:</b> все коэффициенты должны быть числами.';
  return;
}

if (a === 0) {
  document.getElementById('result').innerHTML = '<b>Ошибка:</b> коэффициент a не должен быть равен нулю (уравнение не кубическое).';
  return;
}

document.getElementById('result').innerHTML = '';

// вспомогательные функции


// функция f(x) = a*x^3 + b*x^2 + c*x + d
const f = (x, a, b, c, d) => a * x * x * x + b * x * x + c * x + d;

// производная f'(x) = 3*a*x^2 + 2*b*x + c
const fDerivative = (x, a, b, c) => 3 * a * x * x + 2 * b * x + c;

// метод Ньютона с одного начального приближения
const newtonFromStart = (a, b, c, d, startX, tolerance, maxIter = 100) => {
  let x = startX;
  
  for (let i = 0; i < maxIter; i++) {
    const fx = f(x, a, b, c, d);
    const fpx = fDerivative(x, a, b, c);
    
    // защита от деления на ноль
    if (Math.abs(fpx) < 1e-12) {
      return null;
    }
    
    const xNew = x - fx / fpx;
    
    // проверка сходимости: |x_{n+1} - x_n| < tolerance
    if (Math.abs(xNew - x) < tolerance) {
      // дополнительная проверка, что значение функции близко к нулю
      if (Math.abs(f(xNew, a, b, c, d)) < tolerance) {
        return xNew;
      }
      return null;
    }
    
    x = xNew;
  }
  
  return null;
};

// поиск корня с перебором начальных приближений
const findRootWithMultipleStarts = (a, b, c, d, tolerance) => {
  // точка перегиба кубической параболы: x = -b/(3a)
  const inflection = -b / (3 * a);
  
  // набор начальных приближений
  const startPoints = [
    0,
    1,
    -1,
    2,
    -2,
    5,
    -5,
    inflection,
    inflection + 1,
    inflection - 1,
    inflection + 2,
    inflection - 2
  ];
  
  for (const startX of startPoints) {
    if (!isFinite(startX)) continue;
    
    const root = newtonFromStart(a, b, c, d, startX, tolerance);
    
    if (root !== null && isFinite(root)) {
      // проверка, что это действительно корень
      const fAtRoot = Math.abs(f(root, a, b, c, d));
      if (fAtRoot <= tolerance) {
        return root;
      }
    }
  }
  
  return null;
};

// итоговый результат
const solution = findRootWithMultipleStarts(a, b, c, d, 0.1);

document.getElementById('result').innerHTML = `<b>Результат:</b> ${solution}`;
}
