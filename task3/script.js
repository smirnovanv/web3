const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawPyramid() {
  // Читаем значения из полей
  const baseSize = parseInt(document.getElementById('base').value);
  const height = parseInt(document.getElementById('height').value);
  const startX = parseInt(document.getElementById('posX').value);
  const startY = parseInt(document.getElementById('posY').value);
  const tilt = parseInt(document.getElementById('tilt').value, 10); // подъём одного угла

  // Очищаем холст
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Высота равностороннего треугольника: h = base * sqrt(3) / 2
  const triHeight = (baseSize * Math.sqrt(3)) / 2;

  // Вершины основания (равносторонний треугольник в плоскости XY)
  // A — левый нижний, B — правый нижний, C — верхняя точка треугольника
  const A = { x: startX, y: startY + triHeight };
  const B = { x: startX + baseSize, y: startY + triHeight };
  const C = { x: startX + baseSize / 2, y: startY };

  // Наклон: поднимаем точку A по Y на tilt (чем больше tilt, тем сильнее наклон)
  const A_tilted = { x: A.x, y: A.y - tilt };

  // Центр основания по X для перспективы
  const centerX = startX + baseSize / 2;

  // Вершина пирамиды: смещаем по Y вверх и добавляем Z для перспективы
  const zOffset = 80;
  const apex = {
    x: centerX,
    y: startY - height,
    z: zOffset
  };

  // Упрощённая перспективная проекция
  function project(p) {
    const s = 1 / (1 + p.z / 200); // масштаб в зависимости от Z
    const dx = (p.x - centerX) * s;
    const dy = (p.y - startY) * s;
    return {
      x: centerX + dx,
      y: startY + dy
    };
  }

  const apex2D = project(apex);

  // Для основания используем уже наклоненные координаты
  const A2D = { x: A_tilted.x, y: A_tilted.y };
  const B2D = { x: B.x, y: B.y };
  const C2D = { x: C.x, y: C.y };

  // Рисуем грани с градиентами (имитация теней)
  drawFace([A2D, B2D, apex2D], '#ffd700', '#ffaa00'); // передняя грань
  drawFace([B2D, C2D, apex2D], '#eec900', '#d4a01e'); // правая грань
  drawFace([C2D, A2D, apex2D], '#f0e68c', '#b8860b'); // левая грань

  // Основание (наклонённое)
  drawFace([A2D, B2D, C2D], '#dcdcdc', '#aaaaaa');

  // Контур рёбер
  ctx.strokeStyle = 'rgba(0,0,0,0.4)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([]);

  // Рёбра основания
  ctx.beginPath();
  ctx.moveTo(A2D.x, A2D.y);
  ctx.lineTo(B2D.x, B2D.y);
  ctx.lineTo(C2D.x, C2D.y);
  ctx.closePath();
  ctx.stroke();

  // Рёбра от вершины к основанию
  ctx.beginPath();
  ctx.moveTo(apex2D.x, apex2D.y);
  ctx.lineTo(A2D.x, A2D.y);
  ctx.moveTo(apex2D.x, apex2D.y);
  ctx.lineTo(B2D.x, B2D.y);
  ctx.moveTo(apex2D.x, apex2D.y);
  ctx.lineTo(C2D.x, C2D.y);
  ctx.stroke();
}

function drawFace(points, colorLight, colorDark) {
  const [p1, p2, p3] = points;
  const minX = Math.min(p1.x, p2.x, p3.x);
  const maxX = Math.max(p1.x, p2.x, p3.x);
  const minY = Math.min(p1.y, p2.y, p3.y);
  const maxY = Math.max(p1.y, p2.y, p3.y);

  const gradient = ctx.createLinearGradient(minX, minY, maxX, maxY);
  gradient.addColorStop(0, colorLight);
  gradient.addColorStop(1, colorDark);

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  ctx.closePath();
  ctx.fill();
}