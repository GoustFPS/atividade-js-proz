// Adicionando titulo simples com o id 'titulo'
let titulo = document.createElement('h1')
titulo.innerText = 'Vende-Se:'
titulo.id = 'titulo'

let bodyH1 = document.querySelector('body')
bodyH1.appendChild(titulo)

// Adicionando subtitulo com o nome do produto
let subTitulo =  document.createElement('h2')
subTitulo.innerText = 'Construtor JavaScript'

let bodyH2 = document.querySelector('body')
bodyH2.appendChild(subTitulo)

// Criando div com imagem e preço
let div = document.createElement('div')
div.innerHTML = `
<img src="constructor.png" alt="Construtor JavaScript" width="300px">
<h3>R$ 69,99</h3>
`
div.id = 'imagem-preco'

let divImg = document.querySelector('body')
divImg.appendChild(div)

// Criando outra div filho da div 'imagem-preco' para adicionar vantagens
let vantagens = document.createElement('div')
vantagens.innerHTML = `
<p><strong>Vantagens de obter o construtor</strong></p>
<ul>
<li>1° Interação</li>
<li>2° Simplificação</li>
<li>3° Desempenho</li>
</ul>
`
vantagens.id = 'vantagens'

let divVantagens = document.querySelector('#imagem-preco')
divVantagens.appendChild(vantagens)








