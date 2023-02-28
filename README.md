# This README is a working in progress 🚧

Right now, this README is a little Frankenstein, with loosely disconnected texts in Portuguese and English that I add while I'm developing the project. Please ignore it for now.

I'll update it with a clean and readable version when reaching certain project milestones. 

## O desafio

O **CodeChella** é um festival de música alternativa que acontece anualmente, é composto por gêneros diversos e visa promover uma experiência encantadora e inesquecível para o visitante, proporcionando uma integração multicultural e social. 

Visando sua divulgação e a venda de ingressos, o festival deseja **implementar um site** que possibilite essas ações:

- Uma página inicial que mostrará as atrações do festival;

- Uma página para explicar a experiência do festival, mostrando os diversos palcos;

- Uma página para demonstrar os setores disponíveis para compra de ingresso;

- Uma página de perguntas frequentes;

- Uma página para compra de ingressos, por meio do preenchimento de um formulário;

- Uma página para mostrar o ingresso gerado.

**Atenção:** é muito importante que o site seja **responsivo** para dar aos clientes a facilidade de comprar através de dispositivos mobiles.

[Clique aqui](https://www.figma.com/file/xHLPBeA2ujaXbBjHMK9xh7/CodeChella-%7C-Challenge-I---Front-end-2023?node-id=) para acessar o modelo Figma para o site.

## Technologies

- node v16.15.1;
- npm v8.11.0;
- React v18.2.0;
- React Router v6.8.1;

## Semana 1

A cada semana é disponibilizado um Trello com as tarefas a serem realizadas.

Para a primeira semana, é necessário desenvolver três telas (páginas): a página inicial, a página sobre a experiência proporcionada pelo festival e a página mostrando o mapa de setores. 

O site possui dois temas: Verão e Boreal, cada um com uma paleta de cores diferentes. O projeto pode ser desenvolvido escolhendo um dos temas, e fica como *desafio* criar uma funcionalidade para que o usuário possa escolher qual tema utilizar na página, alterando-a dinamicamente com o tema escolhido.

Visando responsividade, decidi utilizar o conceito de mobile-first para criar as páginas. Os tamanhos de tela considerados na hora de estilizar o layout foram: mobile (360px), tablet (768px) e desktop (1024px).

Componentes criados:

- Header: renderiza o logo e o menu de links.
- Footer: renderiza o logo, lista de links de redes sociais e texto copyright.

## TODO

Talvez passar o logo e a lista de links por prop para o Header?

## Instalação

O projeto foi criado com o Create React App, utilizando Node.js e npm. É necessário estar com ambos instalados em sua máquina para rodar a aplicação.

Após clonar/baixar o projeto, abra um terminal, navegue até a pasta do projeto e rode o seguinte comando para instalar todas as dependências necessárias:

    npm install

Após isso, você pode rodar a aplicação em modo de desenvolvimento com o seguinte comando:

    npm start
A aplicação irá rodar no endereço http://localhost:3000.


## Instalation

This project was bootstrapped with Create React App, using Node.js and npm. You need both installed in order to run the app.

After cloning or downloading this project, open a terminal, navigate to the project's folder and run the following command in order to install all necessary dependencies:

    npm install

*[Click here](https://github.com/facebook/create-react-app/issues/11174) to check the info regarding an `npm audit`'s vulnerability warning that may show up in the console.*

After that, you can run the app in the development mode with the following command:

    npm start

The app will run at http://localhost:3000.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
