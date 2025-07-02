function copyText() {
  const judul = document.getElementById("materiJudul").textContent;
  const topik = document.getElementById("materiTopik").textContent;
  const content = document.getElementById("materiContent");

  let text = `${judul}\n${topik}\n\n`;

  // Ambil semua <p> kecuali quote
  const paragraphs = content.querySelectorAll("p:not([style*='font-weight: bold'])");
  paragraphs.forEach(p => {
    const html = p.innerHTML.replace(/<br\s*\/?>/gi, "\n");
    const clean = html.replace(/&nbsp;/g, " "); // ubah &nbsp; jadi spasi
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = clean;
    text += tempDiv.textContent + "\n\n";
  });

  // List item
  const listItems = content.querySelectorAll("ol > li");
  listItems.forEach((li, index) => {
    const clean = li.innerHTML.replace(/&nbsp;/g, " ");
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = clean;
    text += `${index + 1}. ${tempDiv.textContent}\n`;
  });

  // Kutipan akhir (bold)
  const quote = content.querySelector("p[style*='font-weight: bold']");
  if (quote) {
    const tempQuote = quote.innerHTML.replace(/&nbsp;/g, " ");
    const div = document.createElement("div");
    div.innerHTML = tempQuote;
    text += `\n\n${div.textContent}\n`;
  }

  // Tanda tangan/pemateri
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