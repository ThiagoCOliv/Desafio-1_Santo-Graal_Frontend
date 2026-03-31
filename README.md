# Desafio 1 — Santo Graal

## Visão geral

Este desafio consiste em construir uma interface responsiva baseada no padrão **Holy Grail Layout**, utilizando tecnologias modernas de frontend.

Esse layout possui um **conteúdo principal com duas barras laterais, header e footer**, onde os elementos devem **se reorganizar ou colapsar em telas menores**.

![Exemplo Holy Grail](./examples/holy-grail.png)

O nome "Santo Graal" surgiu porque esse layout era historicamente difícil de implementar antes da existência de **Flexbox** e **CSS Grid**.

Hoje ele é comum em aplicações como:

* dashboards
* portais de documentação
* painéis administrativos
* fóruns e comunidades

---

# Referência visual

Abaixo estão exemplos de interfaces que utilizam esse padrão.

![Exemplo LinkedIn](./examples/linkedin.jpg)

![Exemplo Reddit](./examples/reddit.png)

![Exemplo Mozilla](./examples/mozilla.png)

![Exemplo NestJS](./examples/nest-js.png)

---

# Stack obrigatória

A implementação deve utilizar:

* **React**
* **Vite**
* **TypeScript**
* **Tailwind CSS**

Este repositório já fornece um projeto inicial com **React + Vite + TypeScript**.

O participante deve instalar e configurar **Tailwind CSS** seguindo a documentação oficial:

[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

---

# Objetivo

Construir uma interface responsiva inspirada em aplicações reais que utilizam o padrão **Holy Grail Layout**.

---

# Estrutura obrigatória

A interface deve conter claramente:

* **Header**
* **Duas barras laterais**
* **Conteúdo principal**
* **Footer**

Recomenda-se o uso de elementos semânticos:

* `header`
* `nav`
* `main`
* `aside`
* `footer`

---

# Responsividade

O layout deve funcionar corretamente em diferentes tamanhos de tela.

### Desktop

Todas as regiões devem aparecer simultaneamente.

### Mobile

* o **conteúdo principal deve ter prioridade**
* as barras laterais devem se adaptar ou colapsar
* não deve existir **scroll horizontal causado por layout quebrado**

Menu mobile (hamburger/drawer) é **opcional**, mas recomendado.

---

# Requisitos obrigatórios

Para aprovação no desafio:

* Implementar o layout Holy Grail
* Interface **responsiva**
* Utilizar **React + Vite + TypeScript**
* Utilizar **Tailwind CSS**
* Ter **componentização básica**
* O projeto deve compilar (`npm run build`)

---

# Melhorias opcionais

Os itens abaixo não são obrigatórios, mas aumentam a qualidade da solução:

* sidebar colapsável
* menu mobile
* conteúdo real simulando uma aplicação
* header ou sidebar fixos
* boa hierarquia visual
* componentes reutilizáveis
* estados de hover e focus
* boa organização do código

---

# Como desenvolver e entregar

## 1. Faça um fork do repositório

Clique em **Fork** no topo desta página para criar uma cópia do repositório na sua conta do GitHub.

Depois clone o seu fork:

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

---

## 2. Configure o projeto

Instale as dependências:

```bash
npm install
```

Depois instale e configure **Tailwind CSS** seguindo a documentação oficial:

[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

---

## 3. Desenvolva a interface

Implemente o layout seguindo os requisitos do desafio.

A aplicação deve conter:

* Header
* Duas barras laterais
* Conteúdo principal
* Footer

O layout deve ser **responsivo**.

Durante o desenvolvimento, rode:

```bash
npm run dev
```

Antes de enviar, verifique se o projeto compila:

```bash
npm run build
```

---

## 4. Envie sua solução

Abra um **Pull Request do seu fork para este repositório**, contendo screenshots do layout em **desktop e mobile**

Após o envio, sua solução será revisada. Feedback poderá ser fornecido antes da aprovação.

## 5. Solução de Referência
Esse site demonstra um modelo de solução, que implementa todos os requisitos obrigatórios e opcionais do desafio.

https://desafio-1-solution.vercel.app/
