export default class Produto {
  id;
  descricao;
  marca = "";
  preco = 0;

  constructor(id, descricao, marca, preco) {
    this.setId(id);
    this.setDescricao(descricao);
    this.setMarca(marca);
    this.setPreco(preco);
  }

  setId(id) {
    this.id = id;
  }

  setDescricao(desc) {
    this.descricao = desc;
  }

  setMarca(marca) {
    this.marca = marca;
  }

  setPreco(preco) {
    this.preco = preco;
  }
}
