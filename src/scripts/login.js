document.getElementById("btnlogin").addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const mensaje = document.getElementById("mensajelogin");
  if (!email || !password) {
    mensaje.textContent = "Completa todos los campos";
    mensaje.style.color = "red";
    return;
  }

  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.ok) {
    window.location.href = "/dashboard";
  } else {
    mensaje.textContent = "Correo o contraseña incorrectas";
    mensaje.style.color = "red";
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    document.getElementById("btnlogin").click();
  }
});
