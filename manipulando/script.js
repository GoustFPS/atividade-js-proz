// Capturando os elementos ('h1' pelo id, 'a' e 'ul' pelo elemento e 'ol' pelo id )
let changeH1 = document.querySelector('#titulo')
let changeA = document.querySelector('a')
let changeUl = document.querySelector('ul')
let changOl = document.querySelector('#lista-ordenada')

// Usando .innerText para adicionar conteúdo textual aos elemento 'h1' e 'a'
changeH1.innerText = 'Adicionando título com innerText ao H1'
changeA.innerText = 'Site da Proz'
console.log(changeH1)
console.log(changeA)

// Usando .innerHTML para adicionar três intens simples em 'ul' e links ao 'ol'
changeUl.innerHTML = '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>'
changOl.innerHTML = '<ol><li><a href="https://goustfps.github.io/">Link 1</a></li><li><a href="https://github.com/GoustFPS">Link 2</a></li><li><a href="https://github.com/GoustFPS/atividade-js-proz">Link 3</a></li></ol>'
console.log(changeUl)
console.log(changOl)