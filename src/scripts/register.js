document.getElementById("btnregister").addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("scrpit cargando");
  console.log("click funciona");

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const mensaje = document.getElementById("mensaje");
  const terminos = document.getElementById("terminos").checked;

  if (!email || !password || !nombre) {
    mensaje.textContent = "Completa todos los campos";
    mensaje.style.color = "red";
    return;
  }
  if (!terminos) {
  mensaje.textContent = "Debes aceptar los términos y condiciones";
  mensaje.style.color = "red";
  return;
}

  const res = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email, password })
  });

  const data = await res.json();

  if (data.ok) {
    mensaje.textContent = "Usuario registrado correctamente";
    mensaje.style.color = "green";
    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  } else {
    mensaje.textContent = "Error al registrar";
    mensaje.style.color = "red";
  }
});
