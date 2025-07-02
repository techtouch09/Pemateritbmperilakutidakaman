
function copyText() {
  const judul = document.getElementById("materiJudul").textContent;
  const topik = document.getElementById("materiTopik").textContent;
  const content = document.getElementById("materiContent");

  let text = `${judul}\n${topik}\n\n`;

  // Ambil semua <p> di dalam konten
  const paragraphs = content.querySelectorAll("p:not([style*='font-weight: bold'])");
  paragraphs.forEach(p => {
    text += p.textContent.trim() + "\n\n";
  });

  // Ambil semua list item dalam <ol>
  const listItems = content.querySelectorAll("ol > li");
  listItems.forEach((li, index) => {
    text += `${index + 1}. ${li.textContent.trim()}\n`;
  });

  // Tambah kutipan terakhir (yang bold & italic)
  const quote = content.querySelector("p[style*='font-weight: bold']");
  if (quote) {
    text += `\n\n${quote.textContent.trim()}\n`;
  }

  // Tambah info pemateri
  const author = document.getElementById("materiAuthor").textContent.trim();
  text += `\n\n${author}`;

  // Salin ke clipboard
  navigator.clipboard.writeText(text).then(() => {
    alert("Isi materi berhasil disalin!");
  }).catch(err => {
    alert("Gagal menyalin teks.");
    console.error(err);
  });
}
