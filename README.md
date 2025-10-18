# 🚀 StudyCards

Um aplicativo móvel de flashcards simples e limpo, construído com React Native, para auxiliar nos seus estudos.

![Badge de Status](https://img.shields.io/badge/Status-Parte%201%20Conclu%C3%ADda-brightgreen)

## 📖 Descrição do Projeto

Este é um projeto de mini-aplicativo desenvolvido para a disciplina Programação para Dispositivos Móveis. O objetivo é criar um aplicativo de flashcards focado em uma interface de usuário intuitiva e escalável.

O projeto está dividido em três partes, e esta entrega se refere à **Parte 1**, que estabelece a estrutura de navegação, a interface do usuário e a visualização de dados estáticos.

## 📱 Telas Principais

O aplicativo é composto por três telas principais:

* **1. Tela Inicial:** Apresenta a lista de coleções (decks) existentes.
* **2. Tela de Coleção:** Exibe os detalhes de uma coleção e a lista de cartões que ela contém.
* **3. Tela de Estudo:** A interface principal onde o usuário interage com os flashcards.

<p align="center">
  <img src="URL_DA_SUA_IMAGEM_AQUI" width="250" alt="Tela Inicial">
  <img src="URL_DA_SUA_IMAGEM_AQUI" width="250" alt="Tela de Coleção">
  <img src="URL_DA_SUA_IMAGEM_AQUI" width="250" alt="Tela de Estudo">
</p>

## ✨ Funcionalidades (Parte 1)

Funcionalidades implementadas nesta primeira entrega:

* [✔] Navegação completa entre as telas (Home, Coleção e Estudo).
* [✔] Renderização da lista de coleções na tela inicial.
* [✔] Cálculo e exibição da contagem de cartões por coleção.
* [✔] Renderização da lista de cartões (frente e verso) na tela de coleção.
* [✔] Layout estático da tela de estudo (visualização do card).
* [✔] Componentização da UI (criação de componentes reutilizáveis como `ListItem` e `AddButton`).
* [✔] Carregamento de dados iniciais a partir de um arquivo `mockData.js`.

## 🛠️ Tecnologias Utilizadas

* **[React Native](https://reactnative.dev/):** Framework principal para o desenvolvimento mobile.
* **[Expo](https://expo.dev/):** Plataforma e ferramentas para facilitar o desenvolvimento React Native.
* **[React Navigation](https://reactnavigation.org/):** Biblioteca para a criação da navegação e fluxo entre as telas.

## 🗺️ Próximas Etapas (Roadmap)

Este projeto foi planejado para evoluir. As próximas etapas incluem:

### Parte 2 - Interatividade e Estado
* [ ] Cadastro de novas coleções (salvando no estado da aplicação).
* [ ] Cadastro de novos cartões (salvando no estado da aplicação).
* [ ] Implementação da animação de "virar" o card na tela de estudo.
* [ ] Lógica para navegar entre os cartões (próximo/anterior).

### Parte 3 - Persistência e Funcionalidades Avançadas
* [ ] Integração com um banco de dados local (ex: AsyncStorage ou SQLite) para salvar os dados.
* [ ] Funcionalidades de Edição e Exclusão de coleções e cartões.
* [ ] (Opcional) Implementação de um algoritmo de Repetição Espaçada (SRS).

## 🚀 Como Executar o Projeto

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/tamarasb/study-cards.git](https://github.com/tamarasb/study-cards.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd study-cards
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
    *ou*
    ```bash
    yarn install
    ```
4.  Inicie o servidor do Expo:
    ```bash
    npx expo start
    ```
5.  Escaneie o QR Code com o aplicativo Expo Go no seu celular.

## 👨‍💻 Autor

Feito por **[Tamara Silva Bastos]**.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/SEU-LINKEDIN-AQUI)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tamarasb)