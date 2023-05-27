// Inicialize o Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBnfB3vXln6aSzLo_qyZYE_xlsMAFjCtS4",
  authDomain: "ativ-pratica-estoque-produtos.firebaseapp.com",
  databaseURL: "https://ativ-pratica-estoque-produtos-default-rtdb.firebaseio.com/",
  projectId: "ativ-pratica-estoque-produtos",
  storageBucket: "ativ-pratica-estoque-produtos.appspot.com",
  messagingSenderId: "903341913069",
  appId: "1:903341913069:web:d45a93aaff62273046ede4"
};

firebase.initializeApp(firebaseConfig);

// Obtenha uma referência para o nó do estoque de produtos
const estoqueRef = firebase.database().ref('estoque');

// Ler dados de produtos
estoqueRef.on('value', (snapshot) => {
  const estoque = snapshot.val();

  // Limpar o conteúdo atual do elemento 'estoque'
  document.getElementById('estoque').innerHTML = '';

  // Renderizar os produtos no elemento 'estoque'
  for (const produtoId in estoque) {
    if (estoque.hasOwnProperty(produtoId)) {
      const produto = estoque[produtoId];
      const produtoElement = document.createElement('div');
      produtoElement.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>Descrição: ${produto.descricao}</p>
        <p>Preço: R$ ${produto.preco}</p>
        <p>Quantidade em Estoque: ${produto.quantidade}</p>
        <hr>
      `;
      document.getElementById('estoque').appendChild(produtoElement);
    }
  }
});

