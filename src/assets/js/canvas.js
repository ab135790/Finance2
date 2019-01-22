export const canVas = () => {
  const myCanvas = document.getElementById('myCanvas');
  const ctx = myCanvas.getContext('2d');
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(50, 50, 40, 0.75 * Math.PI, 0.25 * Math.PI, false);
  ctx.strokeStyle = 'rgba(220,220,220, 0.6)';
  ctx.stroke();
  ctx.closePath();
};
