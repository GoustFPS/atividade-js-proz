// Usando .innerText para adicionar conteúdo textual ao elemento 'h1'
let changeH1 = document.querySelector('#titulo')
changeH1.innerText = 'Adicionando título com innerText ao H1'
console.log(changeH1)

// Usando .innerText para adicionar conteúdo textual ao elemento 'a'
let changeA = document.querySelector('a')
changeA.innerText = 'Site da Proz'
console.log(changeA)

// Usando .innerHTML para adicionar três intens simples em 'ul'
let changeUl = document.querySelector('ul')
changeUl.innerHTML = '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>'
console.log(changeUl)

// Usando ..innerHTML para adicionar três links em 'ol'
let changOl = document.querySelector('ol')
changOl.innerHTML = '<ol><li><a href="https://goustfps.github.io/">Link 1</a></li><li><a href="https://github.com/GoustFPS">Link 2</a></li><li><a href="https://github.com/GoustFPS/atividade-js-proz">Link 3</a></li></ol>'
console.log(changOl)