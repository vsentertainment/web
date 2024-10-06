const tracks = [
    { title: "Facturao", artist: "KyoCz", slug: "facturao" },
    { title: "Gota a Gota", artist: "DYAN LA D, Forload", slug: "gotaagota" },
    { title: "Egoísta", artist: "Janitopalasbby, Forload", slug: "egoista" },
    { title: "7 Notas", artist: "EL PUEBLA", slug: "7notas" },
    { title: "Tan Sola", artist: "Janitopalasbby, MollyNa & Storm Beat", slug: "tansola" }
];

// Iterar sobre el array de pistas
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
    if (imgElement) imgElement.src = `../assets/img/tracks/${track.slug}.avif`;

    // Actualizar enlace
    const linkElement = document.getElementById(`link${trackNumber}`);
    if (linkElement) linkElement.href = `https://vsmusic.ffm.to/${track.slug}`;
});
