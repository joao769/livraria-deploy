# 📚 Livraria API - Projeto Completo (Monorepo)

Este repositório contém o código-fonte completo e a configuração Docker para a aplicação **Livraria-api**, incluindo o backend em NestJS e o frontend em Angular.

A estrutura de monorepo e o uso do Docker Compose permitem que todo o ambiente (API, Web App e Banco de Dados) seja iniciado com um único comando.

## 💻 Pré-requisitos

Antes de começar, garanta que você tenha os seguintes softwares instalados:

- **[Git](https://git-scm.com/)**: Para clonar o repositório.
- **[Docker Desktop](https://www.docker.com/products/docker-desktop/)**: A ferramenta que gerencia os contêineres e já inclui o `docker-compose`.

> **Importante:** O Docker Desktop **precisa estar em execução** na sua máquina para que os comandos `docker-compose` funcionem. Verifique se o ícone da baleia do Docker está visível e estável na sua bandeja do sistema antes de prosseguir.

## 🚀 Como Executar o Sistema

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/joao769/livraria-deploy.git
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd livraria-deploy
    ```

3.  **Verifique se o Docker Desktop está rodando.**
    (Este passo é crucial para evitar erros de conexão).

4.  **Inicie a Aplicação com Docker Compose:**
    Este comando irá construir as imagens do frontend e do backend e iniciar todos os contêineres.
    ```bash
    docker-compose up --build
    ```
    A primeira execução pode demorar um pouco, pois o Docker precisará baixar as imagens base e instalar as dependências.
    

## ✅ Acessando os Serviços

Após a conclusão do comando `docker-compose up`, os serviços estarão disponíveis nos seguintes endereços:

- **Frontend (Aplicação Web):** [http://localhost:4200](http://localhost:4200)
- **Backend (API):** [http://localhost:3000](http://localhost:3000)

## 🛑 Para Parar o Ambiente

Para parar todos os contêineres, pressione `Ctrl + C` no terminal onde o `docker-compose` está rodando, e depois execute:

```bash
docker-compose down
```
Este comando irá parar e remover os contêineres, mas manterá os dados do banco de dados salvos no volume do Docker.