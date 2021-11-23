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
            if (id < 0 || id > alunos.length)
                throw new "ID inválido";

            if (alunos[id].cpf == null)
                throw new "Usuário não existe";

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
            if (id < 0 || id > alunos.length)
                throw new "ID inválido";

            if (alunos[id].cpf == null)
                throw new "Usuário não existe";
            
            alunos.splice(id, 1);

            return alunos;
        }
    },
}