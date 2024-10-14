const tracks = [{
        title: "Tikto",
        artist: "Yixs98, GMCS & Kaneda",
        slug: "tikto",
        customLink: "https://hypeddit.com/hbx0rd"
    },
    {
        title: "Gota a Gota",
        artist: "DYAN LA D, Forload",
        slug: "gotaagota"
    },
    {
        title: "Egoísta",
        artist: "Janitopalasbby, Forload",
        slug: "egoista"
    },
    {
        title: "7 Notas",
        artist: "EL PUEBLA",
        slug: "7notas"
    },
    {
        title: "Tan Sola",
        artist: "Janitopalasbby, MollyNa & Storm Beat",
        slug: "tansola"
    }
];

tracks.forEach((track, index) => {
    const trackNumber = index + 1;

    // Actualizar título
    const titleElement = document.getElementById(`title${trackNumber}`);
    if (titleElement) titleElement.textContent = track.title;

    // Actualizar artista
    const artistElement = document.getElementById(`artist${trackNumber}`);
    if (artistElement) artistElement.textContent = track.artist;

    // Actualizar imagen
    const imgElement = document.getElementById(`img${trackNumber}`);
    if (imgElement) imgElement.src = `../assets/img/tracks/${track.slug}.webp`;

    // Actualizar enlace, usando customLink si existe
    const linkElement = document.getElementById(`link${trackNumber}`);
    if (linkElement) {
        linkElement.href = track.customLink || `https://vsmusic.ffm.to/${track.slug}`;
    }

    // Crear referencia al video
    const videoElement = document.getElementById(`video${trackNumber}`);
    if (videoElement) {
        videoElement.src = `../assets/img/tracks/videos/${track.slug}.mp4`; // Ruta del video correspondiente
        videoElement.load();
    }

    // Mostrar video después de 3 segundos de mouseover
    const container = imgElement.parentElement; // Obtener el contenedor
    container.addEventListener('mouseover', () => {
            imgElement.classList.add('d-none'); // Ocultar imagen
            videoElement.classList.remove('d-none'); // Mostrar video
            videoElement.play();
    });

    // volver a la imagen en mouseout
    container.addEventListener('mouseout', () => {
        imgElement.classList.remove('d-none'); // Mostrar imagen
        videoElement.classList.add('d-none'); // Ocultar video
        videoElement.pause();
        videoElement.currentTime = 0; // Reiniciar video
    });
});
