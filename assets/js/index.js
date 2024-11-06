const produtos = [];

function productFactory(id, nome, marca, preco, urlImg) {
  return {
    id: id,
    nome: nome,
    marca: marca,
    preco: preco,
    img: urlImg,
  };
}

produtos.push(
  productFactory(
    1,
    "Macbook Air M3 8GB 256GB - Prateado",
    "Apple",
    "R$ 8.999,00",
    "assets/images/macbook-air-m3.jpg"
  ),
  productFactory(
    2,
    'Smartphone Galaxy S24 Ultra, 6.8",  256GB, 12GB RAM - Titânio Preto',
    "Samsung",
    "R$ 6.500,00",
    "assets/images/s24-ultra.jpg"
  ),
  productFactory(
    3,
    "Smartwatch Galaxy Watch 3 LTE 8GB",
    "Samsung",
    "R$ 800,00",
    "assets/images/watch-3-lte.jpg"
  ),
  productFactory(
    4,
    "Headset Cloud III 53mm, USB - Preto",
    "Hyperx",
    "R$ 549,00",
    "assets/images/hyperx-cloud3.jpg"
  ),
  productFactory(
    5,
    "PlayStation 5 Slim 1TB",
    "Sony",
    "R$ 3.799,00",
    "assets/images/ps5-slim.jpg"
  ),
  productFactory(
    6,
    'Monitor LG UltraGear 27" 240Hz Full HD 1ms IPS',
    "LG",
    "R$ 1.699,99",
    "assets/images/lg-27-ultragear.jpg"
  ),
  productFactory(
    7,
    'Smart TV Crystal 50" 4K UHD',
    "Samsung",
    "R$ 2.390,00",
    "assets/images/samsung-tv-50.jpg"
  ),
  productFactory(
    8,
    "Roteador TP-Link Archer AX72 AX5400 - WiFi 6, 5378Mbps, Dual Band",
    "TP-Link",
    "R$ 709,99",
    "assets/images/tplink-ax5400.jpg"
  )
);

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
          <input type="radio" id="estrela5-${produto.id}" name="produtos" value="5" data-id="${produto.id}" data-marca="${produto.marca}" data-preco="${produto.preco}" data-nome="${produto.nome}" data-img="${produto.img}" />
          <label for="estrela5-${produto.id}">★</label>
          <input type="radio" id="estrela4-${produto.id}" name="produtos" value="4" data-id="${produto.id}" data-marca="${produto.marca}" data-preco="${produto.preco}" data-nome="${produto.nome}" data-img="${produto.img}" />
          <label for="estrela4-${produto.id}">★</label>
          <input type="radio" id="estrela3-${produto.id}" name="produtos" value="3" data-id="${produto.id}" data-marca="${produto.marca}" data-preco="${produto.preco}" data-nome="${produto.nome}" data-img="${produto.img}" />
          <label for="estrela3-${produto.id}">★</label>
          <input type="radio" id="estrela2-${produto.id}" name="produtos" value="2" data-id="${produto.id}" data-marca="${produto.marca}" data-preco="${produto.preco}" data-nome="${produto.nome}" data-img="${produto.img}" />
          <label for="estrela2-${produto.id}">★</label>
          <input type="radio" id="estrela1-${produto.id}" name="produtos" value="1" data-id="${produto.id}" data-marca="${produto.marca}" data-preco="${produto.preco}" data-nome="${produto.nome}" data-img="${produto.img}" />
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

function sendForm() {
  setTimeout(() => {
    window.location.assign("//127.0.0.1:5500/form-success.html");
  }, 500);
}

const btnSendForm = document.getElementById("sendProductsAvaliationForm");
btnSendForm.addEventListener("click", sendForm, {
  once: true,
  passive: true,
  capture: false,
});

addEventListener("DOMContentLoaded", (event) => {
  gerarProdutos();
});
