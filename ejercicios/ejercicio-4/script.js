document.getElementById("calcular").addEventListener("click", () => {

  const peso = document.getElementById("peso").value;
  const estatura = document.getElementById("estatura").value;
  const estaturaEnCm = estatura / 100;
  const imc = peso / (estaturaEnCm * estaturaEnCm);

  alert('su indice de masa corporal es de '+imc);

});
