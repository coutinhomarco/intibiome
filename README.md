# Intibiome

## Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto:

-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources)

-   [React](https://pt-br.reactjs.org/)
-   [SASS](https://sass-lang.com/)
-   [React Router Dom](https://reactrouter.com/en/main)
-   [Antd icons](https://ant.design/components/icon)
-   [Azure](https://azure.microsoft.com/pt-br/)
- [testing-library/react](https://testing-library.com/)
- [Jest](https://jestjs.io/pt-BR/)

<br>
<h2>Instalar o projeto em sua máquina</h2>
<br>
<h3>Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js 14](https://nodejs.org/en/).

###  Rodando a aplicação (localmente).

```bash
# Clone este repositório
# Foi utilizado SSH
$ git clone git@github.com:coutinhomarco/intibiome.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd intibiome

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start


# O projeto tem testes automatizados de renderização
# Para rodar os testes
$ npm run test
```

<h2>Organização do projeto.</h2>
A organização do projeto foi a seguinte:
<br/>

```bash
src
├── assets
│   ├── Header
│   │      └── ...imagens
│   │     
│   ...
├── components
│   ├── AboutUS
│   │        ├── index.jsx
│   │        └── index.scss
│   ├── Header
│   │        ├── index.jsx
│   │        └── index.scss
│   ├── OurProducts
│   │        ├── index.jsx
│   │        └── index.scss
│    ...
│ 
├── pages
│   ├── Home
│   │    ├── index.jsx
│   │    └── index.scss
│   │
│   └─ ErrorPage
│        ├── index.jsx
│        └── index.scss
│    ...  
│   
├── styles
│      └── common.scss
└── README.md
```
Todas as pastas foram organizadas por meio de subpastas, as quais determinam onde os estilos, imagens, jsx, js e etc seram utilizados.
<br/>