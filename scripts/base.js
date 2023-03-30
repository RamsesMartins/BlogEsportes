/**
 * Este script adiciona top bar e footer dinamicamente a uma página
 */

function createElement(html, callback) {
  const element = document.createElement("div");
  
  element.innerHTML = html;
  
  callback(element);
}

window.addEventListener("load", () => {
  const topBarHTML = `
  <div class="topbar">
    <span class="home">
      <i class="fa-solid fa-house"></i>
      <a href="index.html">Home</a>
    </span>
    <span class="paths">
      <a href="categorias/futebol.html">Futebol</a>
      <a href="categorias/basquete.html">Basquete</a>
      <a href="categorias/volei.html">Vôlei</a>
      <a href="contatos.html">Contatos</a>
    </span>
  </div>
  `;
  
  const footerHTML = `
  <footer class="footer">
  </footer>
  `;
  
  createElement(topBarHTML, (e) => document.body.prepend(e));
  createElement(footerHTML, (e) => document.body.append(e));
});