# Documentação do Tech Challenge Fase 02

## Descrição do Projeto

Este projeto foi desenvolvido com o objetivo de oferecer uma plataforma digital para professores da rede pública compartilharem conteúdos educacionais por meio de postagens em formato de blog. A versão atual refatora o back-end da aplicação anterior, criada em OutSystems, para uma arquitetura escalável baseada em Node.js.

---

## Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **MongoDB**
- **Docker**
- **GitHub Actions**
- **Jest**

---

## Arquitetura da Aplicação

A estrutura do projeto segue o padrão do **NestJS**, que adota o paradigma modular e a arquitetura baseada em **Domain Driven Design (DDD)**:

```
📦 src
 ┣ 📂posts
 ┃ ┣ 📂dto
 ┃ ┣ 📂entities
 ┃ ┣ 📜posts.controller.ts
 ┃ ┣ 📜posts.service.ts
 ┃ ┣ 📜posts.module.ts
 ┣ 📂common
 ┣ 📂app.module.ts
 ┣ 📂main.ts
```

- **Modules**: Organização das funcionalidades em domínios isolados (ex: `posts.module`).
- **Controllers**: Responsáveis por lidar com as requisições HTTP e chamar os serviços.
- **Services**: Contêm a lógica de negócio da aplicação.
- **DTOs**: Objetos de transferência de dados usados para validação e tipagem.
- **Entities**: Representam os modelos da base de dados.

---

## Setup Inicial

### Pré-requisitos

- Node.js 18+
- Docker + Docker Compose
- MongoDB (caso queira rodar sem Docker)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/bruunoxd/tech-challenge-fase02.git

# Acesse o diretório
cd tech-challenge-fase02

# Instale as dependências
npm install
```

### Rodando com Docker

```bash
# Inicie os serviços
docker-compose up
```

A API estará disponível em: `http://localhost:3000`

---

## Testes

Para rodar os testes unitários:

```bash
npm run test
```

O projeto garante cobertura, principalmente em criação, edição e exclusão de postagens.

---

## Endpoints da API

| Método | Rota            | Descrição                                       |
| ------ | --------------- | ----------------------------------------------- |
| GET    | `/posts`        | Lista todos os posts                            |
| GET    | `/posts/:id`    | Retorna o conteúdo de um post                   |
| POST   | `/posts`        | Cria uma nova postagem                          |
| PUT    | `/posts/:id`    | Edita uma postagem existente                    |
| DELETE | `/posts/:id`    | Exclui uma postagem                             |
| GET    | `/posts/search` | Busca postagens por termo no título ou conteúdo |

> Todos os dados são enviados e recebidos em **JSON**.

---

## CI/CD com GitHub Actions

O projeto possui um workflow configurado (`.github/workflows/node.js.yml`) que executa:

- Instalação de dependências
- Execução de testes
- Validação de builds

---

## Docker

O projeto conta com os seguintes arquivos para containerização:

- `Dockerfile`: para build da aplicação
- `docker-compose.yml`: orquestra MongoDB e aplicação Node.js

---

## Experiência da Equipe

Durante o desenvolvimento enfrentamos desafios como:

- Definição de estrutura escalável no Node.js
- Aprendizado e integração do Docker e GitHub Actions
- Garantia de cobertura mínima de testes em tempo hábil

A colaboração em equipe e a divisão de responsabilidades foram essenciais para cumprir os prazos com qualidade.
