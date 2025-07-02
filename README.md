Pré-requisitos:
Ter o Git instalado.
Ter o Docker Desktop instalado e rodando.
Passos para rodar o projeto:

1. Clone o repositório:
Abra um terminal e rode o comando abaixo para baixar o projeto. (Substitua a URL pela URL do nosso repositório).

git clone https://github.com/SEU_USUARIO/tech-challenge-fase02.git

2. Entre na pasta do projeto:
cd tech-challenge-fase02

3. Suba a aplicação com Docker Compose:
Este único comando vai construir a imagem da API, baixar a imagem do MongoDB e iniciar os dois contêineres.

docker-compose up --build

E é isso! Depois que o comando terminar, a API estará rodando em http://localhost:3000 e conectada ao banco de dados. Não precisa instalar mais nada!
