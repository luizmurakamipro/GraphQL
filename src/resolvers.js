var { alunos } = require('./data');

module.exports = {
    Query: {
        alunos: () => alunos,
        aluno: (_, { id }) => alunos[id],
    },

    Mutation: {
        criarAluno: (_, { nome, curso, semestre, ra, cpf, cidade }) => {
            alunos.push({ 
                "id": alunos.length, 
                "nome": nome, 
                "curso": curso,
                "semestre": semestre,
                "ra": ra,
                "cpf": cpf,
                "cidade": cidade 
            });

            return alunos[alunos.length - 1];
        },

        atualizarAluno: (_, { id, nome, curso, semestre, ra, cpf, cidade }) => {
            alunos[id] = {
                "id": id,
                "nome": nome, 
                "curso": curso,
                "semestre": semestre,
                "ra": ra,
                "cpf": cpf,
                "cidade": cidade 
            }

            return alunos[id];
        },

        apagarAluno: (_, { id }) => {
            alunos.splice(id, 1);

            return alunos;
        }
    },
}