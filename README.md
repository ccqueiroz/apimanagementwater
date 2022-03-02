<h1 align="center"> Management Water - Backend </h1>

<h2 align="center">Backend para o sistema Management Water.</h2>
<h3 align="center">Sistema este que servirá para gestão de fluxo e vendas para depósitos de águas minerais.</h3>

## Estrutura de pastas:

<strong>config</strong> - configurações de bibliotecas externas, como por exemplo, autenticação, upload, email, etc.

<strong>modules</strong> - abrangem as áreas de conhecimento da aplicação, diretamente relacionados com as regras de negócios. A princípio criaremos os seguintes módulos na aplicação: customers, products, orders e users.

<strong>shared</strong> - módulos de uso geral compartilhados com mais de um módulo da aplicação, como por exemplo, o arquivo server.ts, o arquivo principal de rotas, conexão com banco de dados, etc.

<strong>services</strong> - estarão dentro de cada módulo da aplicação e serão responsáveis por todas as regras que a aplicação precisa atender, como por exemplo:
<ul>
  <li>A senha deve ser armazenada com criptografia;</li>
  <li><i>Não pode haver mais de um produto com o mesmo nome;</i></li>
  <li><i>Não pode haver um mesmo email sendo usado por mais de um usuário;</i></li>
  <li><i>E muitas outras...</i></li>
</ul>

<h2 align="center">Executando a aplicação</h2>
Faça um clone deste repositório e instale no seu ambiente de desenvolvimento usando o seguinte comando no seu terminal:

````
git clone -b master --single-branch https://github.com/ccqueiroz/apimanagementwater.git
````
Após clonar o conteúdo do repositório, acesse o diretório criado e efetue a instalação das dependências:

````
  cd apimanagementwater

  yarn

  # ou

  npm install
````

Após essa instalação execute a aplicação com o comando ```yarn dev ou npm run dev```. O servidor estará em execução no endereço http://localhost:3333
