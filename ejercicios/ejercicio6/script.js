document.getElementById("ver").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const mail = document.getElementById("mail").value;
  const edad = document.getElementById("edad").value;
  const altura = document.getElementById("altura").value;

  const contenedor = document.getElementById("perfilUsuario");
  contenedor.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.innerText = nombre + " " + apellido;
  h2.style.textDecoration = "underline";
  h2.style.fontWeight = "bold";

  const pMail = document.createElement("p");
  pMail.innerHTML = "<i>" + mail + "</i>";

  const pEdad = document.createElement("p");
  pEdad.innerText = "Edad: " + edad;

  const pAltura = document.createElement("p");
  pAltura.innerText = "Altura: " + altura + " cm";

  contenedor.appendChild(h2);
  contenedor.appendChild(pMail);
  contenedor.appendChild(pEdad);
  contenedor.appendChild(pAltura);
});
