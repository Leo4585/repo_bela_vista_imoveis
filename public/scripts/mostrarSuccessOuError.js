const formularioDeContato = document.getElementById('formulario-contato');

formularioDeContato.addEventListener('submit', async (evento) => {
  evento.preventDefault();

  const formData = new FormData(formularioDeContato);

  try {
    const response = await fetch('/contato', {
      method: 'POST',
      body: new URLSearchParams(formData)
    });

    const data = await response.json();

    if (data.type === 'success') {
      Swal.fire({
        title: data.message,
        icon: "success",
        draggable: true,
        width: '10em'
      });
    } else {
      Swal.fire({
        title: data.message,
        icon: "error",
        draggable: true,
        width: '10em'
      });
    }
  } catch (error) {
    Swal.fire({
      title: 'Erro ao enviar formulário',
      icon: "error",
      draggable: true
    });
  }
});
