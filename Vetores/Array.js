//             0  1  2  3  4  5  6
let numbers = [2, 5, 8, 2, 6, 7, 4]

//                 0           1           2           3
const names = ['Abigail', 'Astrogildo', 'Ursula', 'Ermenegildo']

//              0        1    2      3
let mix = ['Demóstenes', 12, 3.45, true]


// -- push(), pop(), unshift(), shift()

// .push(elemento)  - Adiciona o elemento no final do array
// numbers.push(1)
// console.log(numbers)

// .pop(elemento)   - Remove o elemento último elemento

// numbers.pop()
// console.log(numbers)


// indexOf(), includes(), splice()
// console.log(names.indexOf('Ursula'))      //   2
// console.log(names.indexOf('Jurandir'))    //   -1
// console.log(mix.includes('Demóstenes'))   //   true

//  splice(posição, quantidade_deletar, o_que_incluir)

// let pos = 2
// mix.splice(pos, 1, 'Janete')
// console.log(mix)

//               0        1        2        3
let mixDois = ['drum', 'angel', 'clown', 'guitar']

let posElemento
posElemento = mixDois.indexOf('clown')

for(i=0; i < mixDois.length; i++){

    // forma de achar o indice
    if(mixDois[i] == 'clown'){
        posElemento = i
    }
}


// objetos

const user = {
    name: 'Abigail',
    pass: 'biga123',
    email: 'abiga_182@gmail.com',
    phones: [],
    newsletter: true
}

let vetorUsers = [
    {},  // 0
    {},  // 1
    {},  // 2
]