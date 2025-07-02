function copyText() {
  const judul = document.getElementById('materiJudul').innerText;
  const topik = document.getElementById('materiTopik').innerText;
  const isi = document.getElementById('materiContent').innerText;
  const pemateri = document.getElementById('materiAuthor').innerText;

  const fullText = `${judul}\n${topik}\n\n${isi}\n\n${pemateri}`;

  navigator.clipboard.writeText(fullText).then(() => {
    alert("Isi materi berhasil disalin ke clipboard.");
  }).catch(err => {
    alert("Gagal menyalin teks: " + err);
  });
}