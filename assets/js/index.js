import factory from "./factory.js";
import Cookie from "./Cookie.js";

addEventListener("DOMContentLoaded", (event) => {
  const username = "formPesquisaSatisfacao";
  const cookie = new Cookie(username);
  const eita = cookie.getCookie();
  console.log(eita);
});

// Produtos da página de avaliação
const produtos = [
  {
    id: 1,
    nome: "Macbook Air M3 8GB 256GB - Prateado",
    marca: "Apple",
    preco: "R$ 8.999,00",
    img: "assets/images/macbook-air-m3.jpg",
  },
  {
    id: 2,
    nome: 'Smartphone Galaxy S24 Ultra, 6.8",  256GB, 12GB RAM - Titânio Preto',
    marca: "Samsung",
    preco: "R$ 6.500,00",
    img: "assets/images/s24-ultra.jpg",
  },
  {
    id: 3,
    nome: "Smartwatch Galaxy Watch 3 LTE 8GB",
    marca: "Samsung",
    preco: "R$ 800,00",
    img: "assets/images/watch-3-lte.jpg",
  },
  {
    id: 4,
    nome: "Headset Cloud III 53mm, USB - Preto",
    marca: "Hyperx",
    preco: "R$ 549,00",
    img: "assets/images/hyperx-cloud3.jpg",
  },
  {
    id: 5,
    nome: "PlayStation 5 Slim 1TB",
    marca: "Sony",
    preco: "R$ 3.799,00",
    img: "assets/images/ps5-slim.jpg",
  },
  {
    id: 6,
    nome: 'Monitor LG UltraGear 27" 240Hz Full HD 1ms IPS',
    marca: "LG",
    preco: "R$ 1.699,99",
    img: "assets/images/lg-27-ultragear.jpg",
  },
  {
    id: 7,
    nome: 'Smart TV Crystal 50" 4K UHD',
    marca: "Samsung",
    preco: "R$ 2.390,00",
    img: "assets/images/samsung-tv-50.jpg",
  },
  {
    id: 8,
    nome: "Roteador TP-Link Archer AX72 AX5400 - WiFi 6, 5378Mbps, Dual Band",
    marca: "TP-Link",
    preco: "R$ 709,99",
    img: "assets/images/tplink-ax5400.jpg",
  },
];

// Gera o HTML dos produtos
function gerarProdutos() {
  const productList = document.getElementById("product-list");
  produtos.forEach((produto) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <div class="produtoImg">
      <img src="${produto.img}" alt="${produto.nome}">
    </div>
      <div class="produtoDados">  
        <h4>${produto.nome}</h4>
        <span>Marca: ${produto.marca}</span>
        <span>Preço: ${produto.preco}</span>
        <div class="estrelaAvaliacao">
          <input type="radio" id="estrela5-${produto.id}" name="produto-${produto.id}" />
          <label for="estrela5-${produto.id}">★</label>
          <input type="radio" id="estrela4-${produto.id}" name="produto-${produto.id}" />
          <label for="estrela4-${produto.id}">★</label>
          <input type="radio" id="estrela3-${produto.id}" name="produto-${produto.id}" />
          <label for="estrela3-${produto.id}">★</label>
          <input type="radio" id="estrela2-${produto.id}" name="produto-${produto.id}" />
          <label for="estrela2-${produto.id}">★</label>
          <input type="radio" id="estrela1-${produto.id}" name="produto-${produto.id}" />
          <label for="estrela1-${produto.id}">★</label>
        </div>
        <div class="comentario roboto-thin" id="div-comentario-${produto.id}" style="display: none;">
          <textarea id="comentario-${produto.id}" placeholder="Deixe um comentário sobre o produto"></textarea>
        </div>
      </div>
    `;
    productList.appendChild(listItem);

    const estrelas = listItem.querySelectorAll('input[type="radio"]');
    estrelas.forEach((estrela) => {
      estrela.addEventListener("click", () => {
        document.getElementById(`div-comentario-${produto.id}`).style.display =
          "block";
      });
    });
  });
}

gerarProdutos();
