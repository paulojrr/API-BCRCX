# RECRUTAMENTO DESENVOLVEDOR
Bem-vindo ao teste prático para os candidatos ao cargo de desenvolvedor na BCRCX!


## REQUISITOS
Você deverá modelar e construir, na linguagem de sua escolha, uma API, apenas uma API JSON, para um site de receitas.

- A API deve implementar autenticação JWT
- O usuário deve possuir apenas username e senha
- As receitas devem conter um título, um corpo, e o usuário que a cadastrou
- A API deve implementar enpoints para criar, alterar, deletar, e buscar uma receita
- A API deve implementar um endpoint de busca das receitas
- A API deve implementar um endpoint para cadastro de usuario
- O usuário não pode mudar a senha ou o login.

Não há a necessidade de uma interface.

## OPCIONAL
- Adicionar tags as receitas, e um edpoint para listar as receitas em uma tag
- Você não precisa fazer uma interface mas se quiser mostrar seus conhecimentos em front-end fique a vontade!

## Requisitos

Para executar o projeto é necessário ter os seguintes requisitos instalados no sistema:

- [Node.js](https://nodejs.org/en/) 12.x ou superior
- [Yarn](https://yarnpkg.com/) 1.21 ou superior
- Banco de dados [PostgreSQL](https://www.postgresql.org/) 11.x ou superior

## Executando o projeto

### Clonando o projeto

```bash
$ git clone https://github.com/paulojrr/API-BCRCX.git
$ cd API-BCRCX
```

### Scripts para execução do projeto

Dentro do diretório do projeto pela primeira vez, você deve se certificar que o serviço PostgreSQL está sendo executado e deve criar um banco de dados chamado `bcrcx_receitas`. No arquivo `./ormconfig.json` é possivel alterar as configurações de porta, usuario e senha do PostgreSQL de acordo com o seu contexto.

```json
{
  "type": "postgres",
  "host": "address_of_your_host",
  "port": number_of_postgres_port,
  "username": "your_postgres_user",
  "password": "your_password",
  "database": "bcrcx_receitas",
  "entities": ["./src/models/*.ts"],
  "migrations": ["./src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
```

Com as configurações feitas de forma correta, pode-se utilizar o comando `yarn` para instalar as dependências, então os seguintes scripts podem ser executados:

#### `yarn typeorm migration:run`

Configura os relacionamentos criados no TypeORM no PostgreSQL.<br />
Você poderá visualizar quaisquer erros no console.

#### `yarn dev:server`

Executa o backend em modo de desenvolvimento.<br />
Você poderá visualizar quaisquer erros no console.
