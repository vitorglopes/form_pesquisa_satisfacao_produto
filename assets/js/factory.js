import Produto from "./models/Produto.js";

var produtosLista = []; //new Produto(1, "teste", "marca", 10);

function produtosGenerate() {}

export default function factory(action) {
  switch (action) {
    case "produtos":
      produtosGenerate();
      break;
  }
}
