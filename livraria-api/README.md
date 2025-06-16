# 📚 **Livraria API**

Este é um projeto simples de uma **Livraria** construída com o framework **NestJS**. A API oferece as seguintes funcionalidades:

- **Criar um livro**
- **Listar todos os livros**
- **Listar um livro por ID**
- **Atualizar dados de um livro**
- **Excluir um livro**

## 🚀 **Como Executar o Sistema**

### 💻 **Requisitos**

Antes de iniciar a instalação, verifique se você possui os seguintes itens instalados:

- **[Node.js](https://nodejs.org/)** (versão recomendada: LTS)
- **[MySQL](https://www.mysql.com/)**
- **[Git](https://git-scm.com/)**
- **[Insomnia](https://insomnia.rest/)** (para testar as requisições da API)

### ⚙️ **Instalação**

1. **Clone o repositório do projeto:**

   ```bash
   git clone https://github.com/Marilio01/livraria-api.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd livraria-api
   ```

3. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

4. **Instale o Sequelize e as dependências necessárias:**

   ```bash
   npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
   ```

5. **Instale as dependências de tipos do Sequelize (para desenvolvimento):**

   ```bash
   npm install --save-dev @types/sequelize
   ```

### 🛠️ **Configuração do Banco de Dados**

1. **Crie um banco de dados MySQL manualmente ou use o comando abaixo no MySQL:**

   ```sql
   CREATE DATABASE livraria;
   ```

   > _Se você escolher outro nome para o banco de dados, lembre-se de alterar a configuração no arquivo `appModule` no código._

2. **Configure as credenciais do banco de dados no arquivo `.env` na raiz do projeto. Se o arquivo não existir, crie-o com as seguintes configurações:**

   ```env
   MEU_USUARIO_BANCO_DADOS=seu_usuario
   MINHA_SENHA_BANCO_DADOS=sua_senha
   ```

## 🚀 **Execução do Projeto**

1. **Para iniciar o servidor NestJS, execute o seguinte comando:**

   ```bash
   npm run start
   ```

2. **Para iniciar o servidor com **hot reload** durante o desenvolvimento, use o comando:**

   ```bash
   npm run start:dev
   ```

3. O projeto será executado na porta padrão **3000**, podendo ser acessado no seguinte endereço:

   ```url
   http://localhost:3000
   ```

## 💻 Front-end

Este back-end possui um front-end Angular separado que consome esta API.  
Para rodar o sistema completo, clone e execute o front-end disponível em: [https://github.com/joao769/livraria-api-web](https://github.com/joao769/livraria-api-web)

## 🧪 **Testando a API com o Insomnia**

1. Abra o **Insomnia** e crie um novo ambiente de requisição.
2. Configure os endpoints para testar as rotas da API.
3. Utilize os métodos **GET**, **POST**, **PUT** e **DELETE** conforme a documentação da API.
4. Envie as requisições e verifique as respostas do servidor.

> **Dica:** Não se esqueça de testar todas as rotas para garantir que a API esteja funcionando corretamente!