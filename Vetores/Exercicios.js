// 1) Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. 
// Desenvolver um programa que remova os números a mais para corrigi-la. Mostrar a lista corrigida na tela.

//          0  1  2  3  4  5  6  7  8  9   10  11  12  13  14
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(lista)

//     posição, quantidade_deletar
lista.splice(5, 10)
console.log(lista)

// 2) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
// Caso exista, o programa deve mostrar todos os índices que ele se encontra.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

