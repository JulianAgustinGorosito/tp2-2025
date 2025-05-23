document.getElementById("calcular").addEventListener("click", () => {
  const base = document.getElementById("base").value;
  const altura = document.getElementById("altura").value;
  const area = (base * altura) / 2;
  alert("el area es: " + area);
});
