const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    alert("Formulário enviado com sucesso!");
    form.reset();
  } else {
    alert("Erro ao enviar o formulário. Tente novamente.");
  }
});
