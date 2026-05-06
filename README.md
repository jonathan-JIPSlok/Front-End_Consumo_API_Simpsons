# 🍩 Front-End Consumo API Simpsons

Aplicação front-end desenvolvida com **HTML, CSS e JavaScript puro** para consumir e exibir dados da **API pública dos personagens dos Simpsons**.


## 📖 Sobre o projeto

Este projeto foi criado com o objetivo de praticar conceitos fundamentais do desenvolvimento front-end, incluindo:

- Consumo de APIs REST
- Manipulação do DOM
- Programação assíncrona com `fetch`
- Estruturação e organização de projetos
- Renderização dinâmica de dados na interface

A aplicação realiza requisições para a API dos Simpsons e exibe os personagens com suas informações de forma dinâmica e interativa.


## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **API REST**

## 📂 Estrutura do projeto

📦 Front-End_Consumo_API_Simpsons <br>
 ┣ 📂 css <br>
 ┣ 📂 imagens <br>
 ┣ 📂 js <br>
 ┣ 📜 index.html <br>
 ┣ 📜 LICENSE <br>
 ┗ 📜 README.md <br>

## ⚙️ Funcionalidades
- ✅ Consumo de API utilizando fetch

- ✅ Exibição dinâmica dos personagens

- ✅ Interface estilizada e responsiva

- ✅ Manipulação de elementos HTML via JavaScript

- ✅ Projeto desenvolvido totalmente em JavaScript puro

### 🎨 Protótipo / Design
O projeto conta com um protótipo visual criado como referência para o layout da aplicação.
Esse protótipo serviu como inspiração para a construção da interface.

![Protótipo do projeto](./imagens/Site%20Simpsons.png)

## 🔗 API utilizada
A aplicação consome a seguinte API pública:

```fetch('https://apisimpsons.fly.dev/api/personajes')```

Essa API retorna informações detalhadas dos personagens, como nome, imagem e descrição.

## ▶️ Como executar o projeto
1. Clone o repositório

```git clone https://github.com/jonathan-JIPSlok/Front-End_Consumo_API_Simpsons.git```

2. Acesse a pasta do projeto

```cd Front-End_Consumo_API_Simpsons```

3. Execute o projeto

Abra o arquivo index.html diretamente no navegador ou utilize a extensão Live Server no VS Code para melhor experiência.

## 💻 Exemplo de consumo da API

```
fetch('https://apisimpsons.fly.dev/api/personajes?page=1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));
```

## 📚 Aprendizados
Durante o desenvolvimento deste projeto foram praticados:

- Requisições HTTP

- Uso de Promises

- Manipulação de JSON

- Manipulação do DOM

- Estruturação de aplicações front-end

- Integração com APIs externas

## 👨‍💻 Autor
Desenvolvido por Jonathan.

GitHub: jonathan-JIPSlok


## 📄 Licença
Este projeto está sob a licença MIT.