# Instruções de instalação

Para utilizar este programa, você precisa ter o **Node.js** e o **Yarn** instalados em seu computador. Caso você ainda não tenha essas ferramentas, por favor, siga as instruções de instalação disponíveis em [nodejs.org](https://nodejs.org) e [yarnpkg.com](https://yarnpkg.com).

## Instalação das dependências

Com o Node.js e o Yarn instalados, abra o terminal e navegue até a pasta raiz deste projeto. Em seguida, execute o seguinte comando para instalar as dependências listadas no arquivo `package.json`: yarn

## Executando o servidor

Com as dependências instaladas, você pode executar o servidor utilizando o seguinte comando: 'yarn dev'. Este comando irá iniciar o servidor em modo de desenvolvimento. O servidor será iniciado na porta 3000, e você poderá acessá-lo no seu navegador através do endereço `http://localhost:3000`, porém pode ser utilizado `https://contactspace.onrender.com`.

Caso você queira executar o servidor em modo de produção, utilize o seguinte comando: yarn start. 

Este comando irá iniciar o servidor em modo de produção. O servidor será iniciado na porta 3000, e você poderá acessá-lo no seu navegador através do endereço `http://localhost:3000`.

## Documentação

Para mais informações sobre como utilizar este programa, tais com as suas rotas, por favor, consulte a documentação disponível no index.html, para fazer isso você pode abrir em localhost após instalar as dependências.

## Rotas

Contact

PATCH Edit Contact
https://contactspace.onrender.com/users/contacts/:id
Authorization
Bearer Token
Body Example json
{
  "name": "Joabe Conrado"
}


POST Contact Append
https://contactspace.onrender.com/users/contacts
Authorization
Bearer Token
Body Example json
{
  "name": "Ben ferreita",
  "email": "ben@gmail.com",
  "telephone": "32215676543"
}
DELETE Delete Contact
https://contactspace.onrender.com/users/contacts/:id
Authorization
Bearer Token

Section
POST Login
https://contactspace.onrender.com/login
Body Example json
{
  "email": "1@gmail.com",
  "password": "Gerente123"
}

User
DELETE Delete User
https://contactspace.onrender.com/users/:id

POST Create User
https://contactspace.onrender.com/users
Body Example json
{
  "name": "Joabe Conrado",
  "password": "Gerente123!",
  "email": "admin@gmail.com",
  "telephone": 92994453565
}

PATCH Edit User
https://contactspace.onrender.com/users/:id
Body Example json
{
  "name": "Joabee Conrado"
}

GET Get User
https://contactspace.onrender.com/users


