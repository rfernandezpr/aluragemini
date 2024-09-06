function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let CampoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.trim()
    .toLowerCase();

  if (!CampoPesquisa) {
    section.innerHTML =
      "<p>Nada foi encontrado, você precissa inserir o nome do bairro.</p>";
    return;
  }

  // Inicializa uma string para armazenar o HTML dos resultados
  let resultados = "";
  let NomeBairro = "";
  let DesBairro = "";
  let tags = "";

  // Itera sobre cada bairro no array de bairros
  for (let bairro of bairros) {
    NomeBairro = bairro.bairro.toLowerCase();
    DesBairro = bairro.descricao.toLowerCase();
    tags = bairro.tags.toLowerCase();
    // Cria o HTML para cada item de resultado
    if (
      NomeBairro.includes(CampoPesquisa) ||
      DesBairro.includes(CampoPesquisa) ||
      tags.includes(CampoPesquisa)
    ) {
      resultados += `
      <div class="item-resultado">
        <h2><a href="#" target="_blank">${bairro.bairro}</a></h2>
        <p class="descricao-meta">
          ${bairro.descricao}
        </p>
        <a href="${bairro.link}" target="_blank">Saiba mais</a>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado.</p>";
  }
  // Insere o HTML gerado na seção de resultados
  section.innerHTML = resultados;
}
