# CodeChella Festival

[Click here to read the English version of this Readme](#credits-and-acknowledgment)

Página do CodeChella: um festival de música alternativa para Devs!

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Festival CodeChella 2023**
| :label: Tecnologias | React
| :rocket: URL         | https://codechella-puce.vercel.app/
| :fire: Desafio     | https://www.alura.com.br/challenges/front-end-6

![](https://user-images.githubusercontent.com/19349339/223120722-e7754769-b82d-4497-8afd-68cb40c03a73.png#vitrinedev)

## Créditos e Agradecimentos

Este projeto é o resultado da minha participação na 6ª edição do Desafio de Front End da Alura. Por meio de uma abordagem de aprendizado baseado em desafios, nós colocamos nossos conhecimentos em ação resolvendo um desafio simulado em um projeto do mundo real, que inclui receber tasks via Trello e lidar com prazos para entrega. 

O desafio foi proposto pela [**Alura**](https://www.alura.com.br), uma escola online de tecnologia, que disponibilizou os cards Trello semanalmente, bem como o layout das telas no Figma (que também incluiu a tipologia e paleta de cores).

Existe toda uma equipe da Alura por trás do desafio, sendo nosso contato maior com a [**Mônica Hillman**](https://www.linkedin.com/in/monicamhillman/), instrutora de Front End, e o [**Lucas de Freitas Pereira**](https://br.linkedin.com/in/lucas-de-freitas-pereira-b89044192), que cuida de todas as comunidades no Discord da Alura. Meu muito obrigado aos dois e a toda equipe, tanto pelo desafio proposto quanto pelo suporte.

Outro agradecimento vai para todo o **pessoal no Discord** que participou neste desafio, se ajudando mutuamente por meio do compartilhamento de dicas, códigos e respondendo a dúvidas. 

O site do festival possui muitas imagens. Para deixar o carregamento mais rápido, usei o [TinyPNG](https://tinypng.com) para comprimir estas imagens.

Na página 404, eu mostro a foto aleatória de um gatinho. Essa foto vem do site [Cataas (Cat as a service)](https://cataas.com/#/).

Na página de Perguntas Frequentes, o conteúdo da resposta é mostrado ao clicar na pergunta. Isso é chamado de "accordion". Aprendi a fazer o efeito de exibir/esconder o conteúdo [neste artigo da W3Schools](https://www.w3schools.com/howto/howto_js_accordion.asp).

Criei um componente `<ScrollToTop />` para que as páginas sejam sempre mostradas a partir do topo da janela. Copiei o código desse componente do [tutorial do React Router](https://v5.reactrouter.com/web/guides/scroll-restoration/scroll-to-top).

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

## Tecnologias

As seguintes tecnologias foram utilizadas:

- node v16.15.1;
- npm v8.11.0;
- React v18.2.0;
- React Router v6.8.1;

O projeto foi desenvolvido em React, utilizando-se das  funcionalidades abaixo:

- CSS Modules;

- React Router;

- Context API;

- forwardRef API;

- Hooks: useState, useEffect, useContex, useNavigate, useRef;

- localStorage.

## Desenvolvimento

Você pode [ver o projeto online clicando aqui](https://codechella-puce.vercel.app/).

A cada semana é disponibilizado um Trello com as tarefas a serem realizadas.

Visando responsividade, as telas (páginas) foram feitas para se adaptar a três layouts diferentes: mobile (a partir de 320px), tablet (a partir de 768px) e desktop (a partir de 1024px). O desenvolvimento foi feito seguindo o conceito de *mobile-first*.

### Semana 1

Foram desenvolvidas as telas da página inicial, da página sobre a experiência e da página mostrando o mapa de setores. 

O site possui dois temas de cores: Verão (com cores mais quentes) e Boreal (com cores mais frias). No final do rodapé da tela há dois botões para que a pessoa escolha o tema que preferir, que é alterado dinamicamente. A escolha fica salva no *localstorage* do navegador. O Gif abaixo mostra a página inicial e os dois temas sendo aplicados: 

![gif da página inicial no tema "verão" e depois no tema "boreal"](https://user-images.githubusercontent.com/19349339/223164957-7c098fb4-13e4-451b-a781-09998eda3e5c.gif)

Visando o reúso de partes que são renderizadas de maneira semelhante, desenvolvi os componentes abaixo: 

#### Banner

Recebe via props uma imagem, uma posição para esta imagem (opciona) e um texto (opcional). Quando o texto está presente, é aplicada uma opacidade à imagem para que o texto fique destacado. 

O banner é preenchido com a imagem utilizando-se a propriedade CSS `background`, por padrão centralizada. Esse posicionamento pode ser alterado por meio da prop `position`.

#### Button

Renderiza um botão, com um texto e uma imagem, recebidos via props. A imagem é um ícone decorativo opcional.

#### Header

Renderiza o logo e o menu de navegação. Na versão mobile, o menu é substituído por um "menu hambúrguer", que mostra os links de navegação ao ser clicado, como pode ser visto no gif abaixo: 

![gif mostrando a animação ao abrir e fechar o menu](https://user-images.githubusercontent.com/19349339/223131758-1cdccfc1-529d-4638-bceb-130d752afa9c.gif)

#### Footer

Renderiza o logo, uma lista de links de redes sociais, um texto copyright, e os botões para escolha do tema. Todos estes itens são posicionados de maneira diferente a depender do tamanho da tela, e por isso utilizei o Grid para facilitar esse posicionamento.

#### Article

Renderiza uma imagem, um título e um conteúdo (que pode ser um texto, outra imagem, texto + botão, etc), todos recebidos via props. 

Este foi um **componente que me deu muito trabalho**, pois ele é reutilizado em várias seções das telas, porém com posicionamentos, margens e alinhamentos variados. Exemplos: a imagem pode aparecer no lado esquerdo do texto, outras vezes no lado direto, ou ainda no topo; em algumas páginas, o título recebe uma margem maior para separá-lo do texto; o conteúdo do artigo pode estar centralizado, outras vezes alinhado à direita ou à esquerda; os estilos podem mudar a depender do tamanho da tela; etc. Segue abaixo uma imagem mostrando vários artigos em diferentes estilos: 

![artigo mostrando imagens em posições diferentes e textos com alinhamentos diferentes](https://user-images.githubusercontent.com/19349339/223151912-28cfe1d0-82e0-45e8-b922-497c1b63d33e.png)

Refiz diversas vezes este componente, tentando torná-lo o mais genérico possível para englobar todas essas mudanças de estilo, e isso virou uma dor de cabeça... No final, decidi por somente alterar a posição da imagem por meio de uma prop adicional: `imagePosition`. A imagem sempre fica no topo em telas mobile e tablet. Já para telas desktop, o posicionamento é feito por meio dessa prop (à esquerda do texto, por padrão). 

Para o restante das alterações de estilo, eu decidi que caberia às páginas **"injetar" o CSS** para obter o layout desejado. Como utilizei o CSS modules, que aplica localmente o CSS em cada componente, essa "injeção" de CSS foi feita por meio da criação de uma `div` externa ao `<Article />` e então utilizando seletores CSS para chegar aos elementos desse componente e alterar seus estilos. Não tenho certeza se esta é a abordagem mais correta, mas foi a que decidi utilizar. 

#### LineUp

A página principal mostra uma lista com as bandas de cada dia do evento, que chamamos de *"lineup"*. As bandas são mostradas com certa "hierarquia", recebendo tamanho e peso de fontes diferentes. Para fazer essa renderização do lineup, decidi criar três componentes, para melhor trabalhar com a estilização:

- LineUpWrapper: irá englobar todos os dias de atrações (que são componentes `<LineUpContent />`). Recebe um título via props;

- LineUpContent: renderiza um dia de atração e suas bandas (que são componentes `<LineUpLayer />`), também recebendo um título via props, que seria a data da atração; 

- LineUpLayer: é quem de fato renderiza as bandas, de acordo com sua "hierarquia". A prop `layer` adiciona uma classe à banda, definindo sua posição na hierarquia, e seus valores são "`l1`, `l2`, `l3` e `l4`".

Segue um código para exemplificar o uso destes componentes: 

```xml
<LineUpWrapper title='/Line-Up/'>
    <LineUpContent title='SÁBADO <11/03>'>
        <LineUpLayer layer='l1'>
            <p>System of a DOM</p>
        </LineUpLayer>
        <LineUpLayer layer='l2'>
            <p>Python Maiden</p>
            <p>Apollo Client 2001</p>
        </LineUpLayer>
    </LineUpContent>

    <LineUpContent title='DOMINGO <12/03>'>
        <LineUpLayer layer='l1'>
            <p>Lana Del Ploy</p>
        </LineUpLayer>
        <LineUpLayer layer='l2'>
            <p>Dua Lib</p>
            <p>The Backnd</p>
        </LineUpLayer>
    </LineUpContent>
</LineUpWrapper>
```

#### Páginas, Rotas e Contexto

O componente `<AppRoutes />` é o responsável por gerenciar as rotas e respectivas páginas.

Todas as páginas possuem elementos em comum: um cabeçalho, um banner e um footer. Por isso, eu criei um componente `<PageTemplate />` e fiz uso de rotas aninhadas para compartilhar um mesmo padrão de página entre elas. Dentro desse componente, no entanto, coloquei somente os componentes `<Header />` e `<Footer />`, pois o banner tem uma imagem e texto diferentes em cada página, ficando sob responsabilidade da página adicionar e configurar seu `<Banner />`.

Além das três páginas solicitadas, também criei uma página padrão para rotas inexistentes (a famosa "página 404").

Para lidar com os dois temas que podem ser aplicados ao site ("Verão" e "Boreal"), criei um contexto `<ThemeContext />` e um provider `<ThemeProvider />`. O provider possui uma variável de estado `theme`, que pode ser acessada pelas páginas e componentes para renderizarem de acordo com o tema atual. O `<Footer />` também acessa `setTheme` para modificar o tema.

O resultado final das rotas é mostrado no código abaixo: 

```xml
<BrowserRouter>
    <ThemeProvider>
        <Routes>
            <Route path="/" element={<PageTemplate />}>
                <Route index element={<Home />} />
                <Route path="experiencia" element={<Experiencia />} />
                <Route path="mapa" element={<Mapa />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </ThemeProvider>
</BrowserRouter>
```

### Semana 2

O sprint da semana 2 continua o desenvolvimento do restante das páginas do festival: página de informações, formulário para obter um ingresso, e visualização do ingresso obtido. Por enquanto, o foco é na parte visual das páginas, incluindo seus conteúdos e estilos. A  interação com elementos da página, bem como o tráfego de informações registradas no formulário, ficarão para a próxima sprint.

Durante o sprint anterior, foram feitas a estruturação das rotas, criação de contexto e de variáveis CSS para alterar o tema, além a criação de componentes e templates comuns a cada página. Isso auxiliou muito no andamento e na produtividade desta sprint atual, facilitando a criação das novas páginas e reúso dos componentes já existentes. Ainda assim, três novos componentes foram criados para atender seções específicas, como um formulário, uma seção de perguntas e respostas, e um card mostrando as informações de um ingresso obtido.

Segue abaixo detalhes sobre os novos componentes:

#### Accordion

Renderiza um título e um conteúdo, recebidos via props. Este componente é utilizado múltiplas vezes na seção de "Perguntas Frequentes", em que inserimos uma pergunta no título e a respectiva resposta no conteúdo. O título na verdade é um botão que, quando clicado, irá revelar o conteúdo da resposta. Essa interação, no entanto, será implementada no próximo sprint. Por hora, tanto a pergunta quanto sua resposta estão visíveis.

#### Form

Renderiza os campos do formulário (nome, e-mail, setor desejado e data de nascimento) e um botão para salvar os dados. Todos os campos são obrigatórios. 

No começo, pensei em tratar cada campo como um outro componente, para facilitar o reúso. No entanto, como esta é a única página que possui um formulário, e por se tratar de somente 4 campos, decidir manter tudo dentro do componente `<Form />`. Somente o botão está reutilizando o componente `<Button />`, desenvolvido na sprint anterior.

O componente recebe via props uma função `onSubmit`, tirando do `<Form />` a responsabilidade de implementar o evento de envio do formulário, deixando essa responsabilidade para a página que utilizar o componente. No caso do projeto, a responsabilidade é da página de compra de ingresso. Por hora, está implementado somente o redirecionamento para a página de visualização do ingresso. No próximo sprint precisarei criar as variáveis de estado e decidir sobre a necessidade de criar um contexto para trafegar estes dados, de modo a preencher dinamicamente o ingresso. 

#### Ticket

Este componente vai renderizar um cartão com todas as informações preenchidas no formulário, além de dados do evento e um QR Code, funcionando como um "ingresso virtual". 

Por enquanto, o conteúdo do ingresso está estático, servindo apenas de exemplo sobre como ele deve ficar. No próximo sprint, o conteúdo deverá ser preenchido com os dados recebidos do formulário.

![Exemplo de ingresso, mostrando um QR Code na primeira linha e, nas linhas seguintes, o nome, tipo de ingresso, setor do festival, data e local](https://user-images.githubusercontent.com/19349339/224027407-547de7a0-1ed4-4744-9b08-f440e65ebeb3.png)

### Semanas 3 e 4

O último sprint do projeto é mais longo, dedicado às interações da pessoa usuária com as páginas do site, além dos retoques finais na aplicação. 

As seções a seguir são um resumo do que foi desenvolvido ou alterado durante as últimas semanas:

#### Accordion interativo

Na página de Informações, a seção de "Perguntas Frequentes" deve mostrar somente as perguntas. As respostas são exibidas ao clicar em uma pergunta. Um elemento com esse comportamento é o que se chama de "Accordion", cujo componente já havia sido criado no sprint anterior. 

Implementei o comportamento de exibir/esconder as respostas por meio da alteração da altura da div que contém a resposta. Inicialmente, tentei fazer utilizando uma variável de estado com `useState`, para alterar dinamicamente a classe CSS do conteúdo conforme o estado mudasse. No entanto, para animar a altura com a propriedade `transition`, eu devo especificar um valor (`height: auto` não funciona), então eu precisava passar ao arquivo CSS a altura correta. O valor da altura de um elemento pode ser obtido com a propriedade `scrollHeight`, mas eu **não sei se é possível passar valores do JSX para um arquivo CSS**. No final, eu decidi alterar a altura via CSS inline por meio de uma função toggle chamada no evento de clique. Com isso, acabei por não utilizar o `useState`. 

Também adicionei uma animação à flecha que fica ao lado da pergunta: ela rotaciona quando o componente "abre" ou "fecha", como forma de dica visual à pesssoa usuária. Essa rotação foi feita por meio da adição/remoção de uma classe aplicada ao pseudo-elemento `::after`.

Segue abaixo gif mostrando um componente `<Accordion />` abrindo e fechando conforme é clicado no seu título.

![Gif mostrando um componente Accordion inicialmente fechado, com seu conteúdo sendo revelado após clicar no título, e fechando ao ser clicado novamente](https://user-images.githubusercontent.com/19349339/224329647-b955efa0-fe8f-4541-acea-0245240db10a.gif)

#### Validação de formulário

As seguintes validações foram aplicadas ao formulário da tela de compra de ingresso, utilizando as propriedades que o próprio HTML fornece para validar campos:

- Nome: obrigatório e necessário um mínimo de 5 caracteres;

- E-mail: obrigatório e necessário estar em um formato válido para e-mails;

- Tipo de Ingresso: obrigatório selecionar uma opção;

- Data de nascimento: obrigatória e deve respeitar a seguinte regra: "a partir de 16 anos, todo mundo pode entrar. De 10 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar".

    - A aplicação desta regra foi feita utilizando JavaScript no evento de onChange da data de nascimento. Quando a pessoa é menor de 10 anos, o botão de submeter o formulário é desabilitado e ganha uma cor diferente para indicar isso. Quando a pessoa possui entre 10 e 15 anos, um campo de checkbox é exibido, sendo obrigatório que a pessoa marque a confirmação de que estará acompanhada dos pais ou responsáveis legais.
    - Modifiquei o componente `<Button />` para que ele fosse um "forwardRef". Dessa forma, o componente pode repassar ao elemento `button` uma referência para que possa ser acessado por outros componentes (no caso, pelo formulário).

O gif abaixo mostra a aplicação das regras para a data de nascimento:

![gif mostrando a mensagem de erro ao inserir uma data de nascimento cuja idade seja menor de 10 anos, depois mostrando um checkbox com informação ao inserir uma data com uma idade entre 10 e 15 anos, e depois não mostrando nenhum erro ou informação ao inserir uma data para idades acima de 16 anos](https://user-images.githubusercontent.com/19349339/225400056-923cd4a4-f1f1-4bf0-a6be-a95b2cecbef1.gif)

#### Novo campo: data do evento

Adicionei um novo campo ao formulário, para que a pessoa selecione os dias em que irá participar do evento. Cada dia é um checkbox, sendo necessário selecionar pelo menos 1 dia. Essa validação foi feita via JavaScript, utilizando uma variável de estado controlando a quantidade de itens selecionados. A validação é ativada ao clicar no botão de "Avançar" e, por isso, precisei modificar novamente o componente `<Button />`, adicionando uma prop `onClick` para poder passar a função de validação. 

#### Armazenamento das informações do formulário

Como são poucas informações sendo armazenadas, compartilhadas somente entre as páginas de compra e visualização de ingresso, decidi por não usar a Context API. Ao invés disso, eu criei uma variável de estado `ticket` no componente `<Form />`, que guarda os dados do formulário em um objeto. Este componente recebe uma função `onSubmit` via props, então aproveitei esta função para devolver à página de compra de ingresso tanto o evento de submit quanto a variável `ticket`.

Na página de compra, eu salvo as informações do ingresso no localStorage do navegador, simulando o envio dos dados para um back-end. 

Também criei uma condição para que, caso já haja dados no localStorage, quando a pessoa acessa a página de compras ela é redirecionada para a página de visualização do ingresso. Desse modo, o link "Ingresso" no menu de navegação exibirá dinamicamente a página mais apropriada.

#### Visualização do ingresso

A página de visualizar o ingresso agora obtém as informações do ingresso via localStorage, simulando uma interação com o back-end. Essas informações são repassadas para o componente `<Ticket />` por meio de uma nova prop de mesmo nome, `ticket`. 

Nos dados salvos em `ticket`, há uma propriedade chamanda "consentment", que é marcada como `true` quando a pessoa tem entre 10 a 15 anos. Nestes casos, é adicionado um texto ao ingresso informando que a pessoa deve estar acompanhada dos pais ou representantes legais.

Adicionei também uma condição para mostrar o ingresso somente se as informações sobre ele foram recebidas. Desse modo, caso a pessoa acesse a página sem ter preenchido o formulário, ela recebe uma mensagem com um link para preenchê-lo.

Como agora a pessoa é redirecionada para esta página caso as informações sobre o ingresso ja estejam salvas no localStorage, também adicionei um texto com um link para que a pessoa possa comprar um novo ingresso. Ao clicar neste link, os dados de localStorage são removidos e a pessoa é redirecionada para o formulário.

## TODO

- Aplicar testes unitários simples aos componentes.

- refatorar o Form e criar componentes para os inputs?

## Instalação

O projeto foi criado com o Create React App, utilizando Node.js e npm. É necessário estar com ambos instalados em sua máquina para rodar a aplicação.

Após clonar/baixar o projeto, abra um terminal, navegue até a pasta do projeto e rode o seguinte comando para instalar todas as dependências necessárias:

    npm install

Após isso, você pode rodar a aplicação em modo de desenvolvimento com o seguinte comando:

    npm start
A aplicação irá rodar no endereço http://localhost:3000.

---

## Credits and Acknowledgment

This project is the result of my participation in the 6th edition of "Alura Front End Challenges". By using a challenge-based learning approach, we put our knowledge in action by solving a challenge, which simulates a real-world project, with tasks in Trello and due dates for project's milestones.

This challenge is proposed by [**Alura**](https://www.alura.com.br), a brazilian online school of technology. They provided the layout of each page, typology and color palette in a Figma file, as well as weekly assignments in Trello.

There a whole team of Alura's staff behind this challenge, but our main point of contact was with [**Mônica Hillman**](https://www.linkedin.com/in/monicamhillman/), Front End instructor, and [**Lucas de Freitas Pereira**](https://br.linkedin.com/in/lucas-de-freitas-pereira-b89044192), community manager on Discord. My sincere thanks to both and the entire team for this challenge and all the support we've received.

Another thanks goes out to all the other **participants on Discord**, each week mutually helping each other by sharing tips, codes and answering questions.

This project has several images. In order to load them faster, I've used [TinyPNG](https://tinypng.com) for image compression.

There's a 404 page in which I show a random cat pic. I've used [Cataas (Cat as a service)](https://cataas.com/#/) to get those pics.

In the FAQ page, content for the asnwer is displayed when one clicks on the question. This is called "accordion". I've learned how to hide/show content [in this article of W3Schools](https://www.w3schools.com/howto/howto_js_accordion.asp).

I've created a component `<ScrollToTop />` so that pages are always displayed from the top of the window. I copied the code for this component from [React Router's tutorial](https://v5.reactrouter.com/web/guides/scroll-restoration/scroll-to-top).

## About the Challenge

**CodeChella** is an annual alternative music festival, bringing bands of different music genres, aiming to promote a pleasant and unforgettable experience for its visitors, providing a multicultural and social integration.

In order to promote the festival in Brazil and sell tickets, the organizing team wants to **create a website** with the following pages (in portuguese):

- Home page showing all the bands that will perform in the festival;

- A page to explain the experience, showing the various stages of the festival;

- A page showing the map of the available sectors to purchase a ticket;

- A FAQ page;

- A page to fill out a form to purchase a ticket;

- A page showing the virtual ticket.

**Note:** it's very important that the website is **responsive**, so users can easily view and buy tickets using their phones.

You can [click here](https://www.figma.com/file/xHLPBeA2ujaXbBjHMK9xh7/CodeChella-%7C-Challenge-I---Front-end-2023?node-id=) to access the Figma file created for this website.

## Technologies

The following technologies have been used:

- node v16.15.1;
- npm v8.11.0;
- React v18.2.0;
- React Router v6.8.1;

This project was developed in React, using the features below::

- CSS Modules;

- React Router;

- Context API;

- forwardRef API;

- Hooks: useState, useEffect, useContex, useNavigate, useRef;

- localStorage.

## Development

You can check the website online (in Portuguese) [clicking here](https://codechella-puce.vercel.app/).

New assignments are provided every week in Trello.

Aiming responsiveness, the pages were developed to adapt to three different layouts, based on the devices they'll be rendered: mobile (from 320px wide), tablet (from 768px wide) and desktop (from 1024px wide). The development was based on a *mobile-first* approach.

### Week 1

I've developed three pages: home page, experience page and sectors page. I've also created a 404 page, in which I show a random picture of a cute cat 😸, so that the user don't feel sad for reaching an non-existing page.

The website has two color themes: Summer (with warm colors) and Boreal (with a cold color palette). At the end of the footer there are two buttons for the user to choose which theme they prefer. Themes are dynamically changed and the user's preference is saved on the browser's *localstorage*. The following gif shows the home page using the two themes:

![gif showing the home page using "Summer" theme and then "Boreal" theme](https://user-images.githubusercontent.com/19349339/223164957-7c098fb4-13e4-451b-a781-09998eda3e5c.gif)

In order to reuse sections that are rendered in a similar way, I've developed several components and a template for a page. I've also used React Router to deal with page navigation and the SPA (single-page application) approach. The theme is shared to all pages using Context API.

### Week 2

I've continued developing the rest of the pages: FAQ page, form page and ticket page. For now, I've focused on the visual part of the pages, including their content and styles. User interaction with elements of the page, as well as how the data in the form will be shared with other pages, will be developed in the following weeks.

Having developed so many components, routes and a page template in the previous week helped me easily create the new pages, with the need of only creating three new components to deal with specific sections: the form, the FAQ section and the card to show a ticket.

### Weeks 3 and 4

The last weeks were dedicated to user interaction and final touches in the website.

In the page to buy a ticket, I've added built-in form validation and created a state variable `ticket` to share ticket information between pages and the `<Form />` component. When the form is valid, ticket data is submitted and stored in the browser's localStorage. This way, the page that shows the ticket can now retrieve ticket data from localStorage.

In the FAQ page, I've added an animation that shows/hides the answer to each question when the user clicks on it. This effect can be seen in the gif below.

![Gif showing a question and its content being revealed when the user clicks on it, then hidden again after another click](https://user-images.githubusercontent.com/19349339/224329647-b955efa0-fe8f-4541-acea-0245240db10a.gif)

## Instalation

This project was bootstrapped with Create React App, using Node.js and npm. You need both installed in order to run the app.

After cloning or downloading this project, open a terminal, navigate to the project's folder and run the following command in order to install all necessary dependencies:

    npm install

*[Click here](https://github.com/facebook/create-react-app/issues/11174) to check the info regarding an `npm audit`'s vulnerability warning that may show up in the console.*

After that, you can run the app in the development mode with the following command:

    npm start

The app will run at http://localhost:3000.