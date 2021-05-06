<div align="center" style="margin-bottom: 20px;">
  <img alt="gobarber" src="./.github/assets/ZipCode.svg" width="15%" heigth="auto"/>
</div>

<div align="center" style="margin: 20px;">

  [![The MIT License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](https://github.com/ianmateusES/desafio-eureka/LICENSE.md)
  ![GitHub last commit](https://img.shields.io/github/last-commit/ianmateusES/desafio-eureka?color=green&style=flat-square)
  ![GitHub top language](https://img.shields.io/github/languages/top/ianmateusES/desafio-eureka?style=flat-square)

  <p align="center" >
    <a href="#fire-prévia-da-aplicação"> :fire: Prévia da Aplicação</a> |
    <a href="#thinking-como-contribuir"> :thinking: Como Contribuir?</a> |
    <a href="#zap-executando-o-projeto"> :zap: Executando o Projeto </a> |
    <a href="#memo-licença"> :memo: Licença </a> 
  </p>
</div>

## :barber: Projeto

Aplicação de consultas de CEP's, armazenando as consultas realizadas em cache (Redis).

## :fire: Prévia da Aplicação

<div align="center"> 
  <img width="50%" src="https://media.giphy.com/media/qeucrfAL3KyvujHGlG/giphy.gif" alt="preview"/>
</div>

### Requisito do projeto
- [Node v10+](https://nodejs.org/en/docs/) ou [Docker](https://docs.docker.com/)/[Docker-Compose](https://docs.docker.com/compose/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://classic.yarnpkg.com/en/docs/)

### Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org)
- [ExpressJS](https://expressjs.com/pt-br/)
- [React-router](https://reactrouter.com/web/guides/quick-start)
- [Styled-Components](https://styled-components.com/)
{...}

## :thinking: Como Contribuir?
**Faça um fork deste repositório**

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd desafio-eureka

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feat/bug/fix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :zap: Executando o Projeto
#### Clonando o projeto
```sh
$ git clone https://github.com/ianmateusES/desafio-eureka.git
$ cd desafio-eureka
```
#### Iniciando os containers
```sh
# Criando a imagem Docker do banco de dados.
# Basta ter o Docker instalado em sua máquina.
$ docker-compose up
```
### Acessando Web
Acesse a url `http:localhost:3000` e desfrute das consultas a CEP's.

### Acessando API
Para acessar a documentação da API, basta acessar o diretorio `/backend/docs/swagger` e executar:
```sh
$ yarn start
```
Logo, podera visualizar a documentação na url `http://localhost:8080`

## :memo: Licença

Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
  Feito com ❤ by <strong> Ian Mateus</strong> 
</p>