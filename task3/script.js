const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawPyramid() {
  // Читаем значения из полей
  const baseSize = parseInt(document.getElementById('base').value);
  const height = parseInt(document.getElementById('height').value);
  const startX = parseInt(document.getElementById('posX').value);
  const startY = parseInt(document.getElementById('posY').value);

  // Очищаем холст
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // предусловие - левосторонняя система координат, угол 45 градусов

  const r = baseSize / (2 * Math.sqrt(3)); // радиус вписанной окружности
  const R = baseSize / Math.sqrt(3); // радиус описанной окружности

  const cos45 = Math.cos(45 * Math.PI / 180);
  const sin45 = Math.sin(45 * Math.PI / 180);

  // Координаты вершины D
  const D = {
    x: startX + baseSize / 2 + cos45 * r, // прибавляем смещение из-за искажения
    y: startY
  }

  // Координаты A (крайний правый угол основания)
  const A = {
    x: startX,
    y: startY + height + sin45 * r,
  }

  // Координаты B (крайний правый угол основания)
  const B = {
    x: startX + baseSize,
    y: startY + height + sin45 * r,
  }

  // Координаты C (дальний угол основания)
  const C = {
    x: D.x + sin45 * R,
    y: startY + height - sin45 * R,
  }

  // Отрисовка на Canvas
  // Левая грань (A-D-C) — самая светлая, так как обращена к свету
  ctx.fillStyle = '#e8dcc8';
  ctx.beginPath();
  ctx.moveTo(A.x, A.y);
  ctx.lineTo(D.x, D.y);
  ctx.lineTo(C.x, C.y);
  ctx.closePath();
  ctx.fill();

  // скрытая линия основания
  ctx.lineTo(A.x, A.y);
  ctx.lineTo(C.x, C.y);
  ctx.stroke();

  // Правая грань (B-D-C) — средняя по освещенности
  ctx.fillStyle = '#c4b394';
  ctx.beginPath();
  ctx.moveTo(B.x, B.y);
  ctx.lineTo(D.x, D.y);
  ctx.lineTo(C.x, C.y);
  ctx.closePath();
  ctx.fill();

  // Передняя грань (A-D-B) — самая темная, так как отвернута от света
  ctx.fillStyle = '#a6926e';
  ctx.beginPath();
  ctx.moveTo(A.x, A.y);
  ctx.lineTo(D.x, D.y);
  ctx.lineTo(B.x, B.y);
  ctx.closePath();
  ctx.fill();

  // Стили для видимых (передних) линий
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.setLineDash([]); // Сплошная линия

  ctx.beginPath();
  // Передняя грань основания (строго горизонтальная)
  ctx.moveTo(A.x, A.y);
  ctx.lineTo(B.x, B.y);
  ctx.stroke();

  // Видимые боковые грани, идущие к вершине
  ctx.lineTo(D.x, D.y);
  ctx.lineTo(A.x, A.y);
  ctx.stroke();

  ctx.lineTo(D.x, D.y);
  ctx.lineTo(B.x, B.y);
  ctx.stroke();

  // правая линия основания
  ctx.lineTo(B.x, B.y);
  ctx.lineTo(C.x, C.y);
  ctx.stroke();

  // задняя линия к вершине
  ctx.lineTo(D.x, D.y);
  ctx.lineTo(C.x, C.y);
  ctx.stroke();

  ctx.lineWidth = 1;
}