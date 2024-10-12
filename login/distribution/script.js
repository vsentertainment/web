function uploadFiles() {
    const titulo = document.getElementById('titulo').value;
    const artistas = document.getElementById('artistas').value;
    const imagen = document.getElementById('imagen').files[0];
    const audio = document.getElementById('audio').files[0];
    const status = document.getElementById('status');
    
    if (!titulo || !artistas || !imagen || !audio) {
        status.textContent = 'Por favor completa todos los campos.';
        return;
    }

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('artistas', artistas);
    formData.append('imagen', imagen, `${titulo}.jpg`);
    formData.append('audio', audio, `${titulo}.wav`);

    fetch('/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        status.textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
        status.textContent = 'Hubo un error al subir los archivos.';
    });
}
