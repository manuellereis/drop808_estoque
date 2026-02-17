let estoque = [];

    function adicionarProduto() {
      const produto = document.getElementById("produto").value;
      const preco = document.getElementById("preco").value;
      const quantidade = document.getElementById("quantidade").value;

      if (!produto || !preco || !quantidade) {
        alert("Preencha todos os campos!");
        return;
      }

      const item = {
        produto,
        preco,
        quantidade
      };

      estoque.push(item);
      atualizarTabela();
      limparCampos();
    }

    function atualizarTabela() {
      const tabela = document.getElementById("tabelaEstoque");
      tabela.innerHTML = "";

      estoque.forEach((item, index) => {
        tabela.innerHTML += `
          <tr>
            <td>${item.produto}</td>
            <td>R$ ${item.preco}</td>
            <td>${item.quantidade}</td>
            <td><button class="delete-btn" onclick="removerProduto(${index})">Excluir</button></td>
          </tr>
        `;
      });
    }

    function removerProduto(index) {
      estoque.splice(index, 1);
      atualizarTabela();
    }

    function limparCampos() {
      document.getElementById("produto").value = "";
      document.getElementById("preco").value = "";
      document.getElementById("quantidade").value = "";
    }