<p align="center">
  <img height="178" src="docs/swagger/docs/ZipCode.png" />
</p>

## Sobre a API
É uma API de consulta a CEPs que se comunica com API da [ViaCEP](https://viacep.com.br/) e armazena em cache as consultas já realizadas. A cache utlizada é [Redis](https://redis.io), por ser um banco de dados mais performatico em relação a caches.

## Requisitos
- [Node v10+](https://nodejs.org/en/docs/) ou [Docker](https://docs.docker.com/)/[Docker-Compose](https://docs.docker.com/compose/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://classic.yarnpkg.com/en/docs/)

## Executando a API
### Manual
- Instale as dependências, com Yarn ou Npm:
  ```bash
    # Usando npm
    npm install

    # Usando yarn
    yarn install
  ```

- Faça uma copia do arquivo `.env.example` para `.env`

- Gere um container da image do `redis:alpine` em modo detached ou seja em segundo plano:
  ```bash
    docker run --name redis-eureka -v $HOME/dataset/eureka/redis:/usr/local/etc/redis -p 6379:6379 -d redis:alpine
  ```

- Inicie a API:
  ```
    yarn dev:server
  ```
### Automatico
- Basta utilizar o docker-compose:
  ```bash
    docker-compose -f docker-compose.dev.yml up --build
  ```
