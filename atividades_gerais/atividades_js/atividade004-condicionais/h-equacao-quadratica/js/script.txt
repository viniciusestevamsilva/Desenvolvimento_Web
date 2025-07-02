document.addEventListener('DOMContentLoaded', function () {

  const btn = document.getElementById('btnCalcular');
  const resultado = document.getElementById('resultadoBhaskara');

  btn.addEventListener('click', function () {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const c = parseFloat(document.getElementById('inputC').value);

  
    const delta = b * b - 4 * a * c;

    function raizquadrada(n) {
      let x = n;
      let y = 1;
      let e = 0.000001;
      while (x - y > e) {
        x = (x + y) / 2;
        y = n / x;
      }
      return x;
    }

    const raizDelta = raizquadrada(delta);

    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);

    resultado.innerHTML = `
      <p>Dados: a = ${a}, b = ${b}, c = ${c}</p>
      <p>Δ = b² - 4ac = (${b})² - 4 × ${a} × ${c} = ${delta}</p>
      <p>√Δ = ${raizDelta.toFixed(4)}</p>
      <p>Fórmula de Bhaskara:</p>
      <p>x' = (-${b} + √${delta}) / (2 × ${a}) = ${x1.toFixed(2)}</p>
      <p>x" = (-${b} - √${delta}) / (2 × ${a}) = ${x2.toFixed(2)}</p>
      <p><strong>Raízes da equação:</strong> x' = ${x1.toFixed(2)} e x" = ${x2.toFixed(2)}</p>
    `;

  });
});