export function mostrarAluno(aluno){
    for(let i = 0; i < aluno.materias.length; ++i){
        console.log(`nome: ${aluno.nome} materia: ${aluno.materias[i].nome} nota: ${aluno.materias[i].nota}`)
    }
}

export function mostrarAprovados(listaAlunos){
    for(let i = 0; i < listaAlunos.length; ++i){
        for(let j = 0; j < listaAlunos[i].materias.length; ++j){
            if(listaAlunos[i].materias[j].nota >= 6 && listaAlunos[i].materias[j].presenca >= 75){
                console.log(`O aluno ${listaAlunos[i].nome} está aprovado em ${listaAlunos[i].materias[j].nome}`)
            }
        }
    }
}

export function mostrarNaoAprovados(listaAlunos){
    for(let i = 0; i < listaAlunos.length; ++i){
        for(let j = 0; j < listaAlunos[i].materias.length; ++j){
            if(listaAlunos[i].materias[j].nota < 6 || listaAlunos[i].materias[j].presenca < 75){
                console.log(`O aluno ${listaAlunos[i].nome} está reprovado em ${listaAlunos[i].materias[j].nome}`)
            }
        }
    }
}


// export function mediaAlunos(listaAlunos){
//     let mediasNotas = []
//     for(let i = 0; i < listaAlunos.length; ++i){
//         for(let j = 0; j < listaAlunos[i].materias.length; ++j){
//             mediasNotas.push(listaAlunos[i].materias[j].nota)
//         }
//     }
//     let media2 = []
//     for(let j = 0; j < mediasNotas.length - 1; ++j){
//         media2.push((mediasNotas[j] + mediasNotas[j + 1])/2)
//     }

//     console.log(media2)
// }

// export function maiorNota(listaAlunos){
    
// }

//TENTATIVA FALHA