//pront:
//me mostra os deiz bairros com maior inciden�a de crimenes violentos da cidade de curitiba no ano 2023,
//inclui os seguintes atributos nome do bairro, popula��o, tipo de ocorrencia, quantidade e indice de criminalidade cria
//uma lista de objetos JavaScript ordenada no orden descendente pelo indice de criminalidade.
const bairros = [
  {
    bairro: "Cidade Industrial de Curitiba (CIC)",
    descricao:
      "A Cidade Industrial de Curitiba, ou simplesmente CIC, � um bairro que se destaca por sua dimens�o e diversidade. Surgido na d�cada de 1970 com o objetivo de impulsionar o desenvolvimento industrial da cidade, o CIC abriga uma vasta �rea industrial, mas tamb�m possui uma significativa popula��o residente. Com uma infraestrutura completa e uma localiza��o estrat�gica, o bairro oferece uma variedade de servi�os e op��es de moradia, tornando-se um importante centro econ�mico e social de Curitiba. Ao longo dos anos, o CIC evoluiu e se consolidou como um bairro din�mico e em constante transforma��o.",
    populacao: 100000,
    ocorrencias: [
      { tipo: "homic�dio", quantidade: 15 },
      { tipo: "roubo", quantidade: 10 },
      { tipo: "tr�fico", quantidade: 5 },
    ],
    link: "https://pt.wikipedia.org/wiki/Cidade_Industrial_de_Curitiba",
    tags: "todos, Industrializa��o, Diversidade, Mobilidade",
  },
  {
    bairro: "Cajuru",
    descricao:
      "Conhecido por sua tranquilidade e �reas verdes, o Cajuru � um bairro residencial que combina casas e apartamentos. Possui uma infraestrutura completa, com escolas, supermercados e com�rcio local. � um local ideal para quem busca qualidade de vida e f�cil acesso a outros pontos da cidade.",
    populacao: 80000,
    ocorrencias: [
      { tipo: "roubo", quantidade: 12 },
      { tipo: "furto", quantidade: 8 },
      { tipo: "les�o corporal", quantidade: 6 },
    ],
    link: "",
    tags: "todos, Residencial, Qualidade, Tranquilo, Tranquilidade",
  },
  {
    bairro: "Tatuquara",
    descricao:
      "O Tatuquara � um bairro com forte identidade e um grande potencial de crescimento. Abriga uma diversidade de moradores e oferece um com�rcio variado, al�m de �reas verdes e espa�os de lazer. Sua localiza��o estrat�gica facilita o acesso a outras regi�es de Curitiba.",
    populacao: 120000,
    ocorrencias: [
      { tipo: "homic�dio", quantidade: 8 },
      { tipo: "roubo", quantidade: 15 },
      { tipo: "furto", quantidade: 12 },
    ],
    link: "",
    tags: "todos, Periferia, Solidariedade, Crescimento",
  },
  {
    bairro: "Boqueir�o",
    descricao:
      "Um dos bairros mais tradicionais de Curitiba, o Boqueir�o � conhecido por sua vida noturna agitada e pela variedade de restaurantes e bares. Al�m disso, possui um com�rcio diversificado, desde grandes shoppings at� feiras populares. � um bairro com forte presen�a cultural e um grande atrativo tur�stico.",
    populacao: 95000,
    ocorrencias: [
      { tipo: "roubo", quantidade: 9 },
      { tipo: "furto", quantidade: 10 },
      { tipo: "tr�fico", quantidade: 4 },
    ],
    link: "",
    tags: "todos, Comercial, Popular, Gastronomia",
  },
  {
    bairro: "Centro",
    descricao:
      "O cora��o de Curitiba, o Centro Hist�rico concentra os principais �rg�os p�blicos, bancos, lojas e pr�dios hist�ricos da cidade. � um local vibrante e com uma grande oferta de servi�os. A Rua XV de Novembro � o principal eixo comercial e concentra diversas op��es de compras e gastronomia.",
    populacao: 75000,
    ocorrencias: [
      { tipo: "furto", quantidade: 15 },
      { tipo: "roubo", quantidade: 8 },
      { tipo: "dano", quantidade: 7 },
    ],
    link: "",
    tags: "todos, Hist�rico, Comercial, Turismo",
  },
];
