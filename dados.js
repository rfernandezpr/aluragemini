//pront:
//me mostra os deiz bairros com maior incidença de crimenes violentos da cidade de curitiba no ano 2023,
//inclui os seguintes atributos nome do bairro, população, tipo de ocorrencia, quantidade e indice de criminalidade cria
//uma lista de objetos JavaScript ordenada no orden descendente pelo indice de criminalidade.
const bairros = [
  {
    bairro: "Cidade Industrial de Curitiba (CIC)",
    descricao:
      "A Cidade Industrial de Curitiba, ou simplesmente CIC, é um bairro que se destaca por sua dimensão e diversidade. Surgido na década de 1970 com o objetivo de impulsionar o desenvolvimento industrial da cidade, o CIC abriga uma vasta área industrial, mas também possui uma significativa população residente. Com uma infraestrutura completa e uma localização estratégica, o bairro oferece uma variedade de serviços e opções de moradia, tornando-se um importante centro econômico e social de Curitiba. Ao longo dos anos, o CIC evoluiu e se consolidou como um bairro dinâmico e em constante transformação.",
    populacao: 100000,
    ocorrencias: [
      { tipo: "homicídio", quantidade: 15 },
      { tipo: "roubo", quantidade: 10 },
      { tipo: "tráfico", quantidade: 5 },
    ],
    link: "https://pt.wikipedia.org/wiki/Cidade_Industrial_de_Curitiba",
    tags: "todos, Industrialização, Diversidade, Mobilidade",
  },
  {
    bairro: "Cajuru",
    descricao:
      "Conhecido por sua tranquilidade e áreas verdes, o Cajuru é um bairro residencial que combina casas e apartamentos. Possui uma infraestrutura completa, com escolas, supermercados e comércio local. É um local ideal para quem busca qualidade de vida e fácil acesso a outros pontos da cidade.",
    populacao: 80000,
    ocorrencias: [
      { tipo: "roubo", quantidade: 12 },
      { tipo: "furto", quantidade: 8 },
      { tipo: "lesão corporal", quantidade: 6 },
    ],
    link: "",
    tags: "todos, Residencial, Qualidade, Tranquilo, Tranquilidade",
  },
  {
    bairro: "Tatuquara",
    descricao:
      "O Tatuquara é um bairro com forte identidade e um grande potencial de crescimento. Abriga uma diversidade de moradores e oferece um comércio variado, além de áreas verdes e espaços de lazer. Sua localização estratégica facilita o acesso a outras regiões de Curitiba.",
    populacao: 120000,
    ocorrencias: [
      { tipo: "homicídio", quantidade: 8 },
      { tipo: "roubo", quantidade: 15 },
      { tipo: "furto", quantidade: 12 },
    ],
    link: "",
    tags: "todos, Periferia, Solidariedade, Crescimento",
  },
  {
    bairro: "Boqueirão",
    descricao:
      "Um dos bairros mais tradicionais de Curitiba, o Boqueirão é conhecido por sua vida noturna agitada e pela variedade de restaurantes e bares. Além disso, possui um comércio diversificado, desde grandes shoppings até feiras populares. É um bairro com forte presença cultural e um grande atrativo turístico.",
    populacao: 95000,
    ocorrencias: [
      { tipo: "roubo", quantidade: 9 },
      { tipo: "furto", quantidade: 10 },
      { tipo: "tráfico", quantidade: 4 },
    ],
    link: "",
    tags: "todos, Comercial, Popular, Gastronomia",
  },
  {
    bairro: "Centro",
    descricao:
      "O coração de Curitiba, o Centro Histórico concentra os principais órgãos públicos, bancos, lojas e prédios históricos da cidade. É um local vibrante e com uma grande oferta de serviços. A Rua XV de Novembro é o principal eixo comercial e concentra diversas opções de compras e gastronomia.",
    populacao: 75000,
    ocorrencias: [
      { tipo: "furto", quantidade: 15 },
      { tipo: "roubo", quantidade: 8 },
      { tipo: "dano", quantidade: 7 },
    ],
    link: "",
    tags: "todos, Histórico, Comercial, Turismo",
  },
];
