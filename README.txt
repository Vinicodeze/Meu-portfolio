# 💻 Portfólio Pessoal - Vinícius Paulino

Bem-vindo ao meu portfólio pessoal! Este projeto é um website estático desenvolvido para apresentar minhas habilidades em programação web, meus principais projetos e minha trajetória de aprendizado.

## ✨ Visão Geral

O projeto é um portfólio completo que detalha minha experiência como estudante de 18 anos focado em **desenvolvimento Front-end**.

### 🌟 Destaques do Projeto

* **Design:** Tema escuro (Dark Theme) consistente em todas as páginas, utilizando variáveis CSS para gerenciamento de cores.
* **Tecnologias Foco:** HTML, CSS e JavaScript.
* **Formulário Funcional:** Formulário de contato com envio assíncrono (AJAX) para uma experiência de usuário mais fluida.

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia | Uso Principal |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 | Conteúdo e estruturação semântica das quatro páginas. |
| **Estilo** | CSS3 (Puro) | Estilização completa, uso de `flexbox`, e variáveis CSS (`:root`) para cores (Dark Theme). |
| **Interatividade** | JavaScript | Manipulação do DOM e envio assíncrono do formulário de contato. |
| **Serviço Externo** | Formspree | Processamento de submissão dos dados do formulário de contato. |

### 🎨 Paleta de Cores (Variáveis CSS)

O tema escuro do portfólio é definido por estas variáveis, encontradas em todos os arquivos `.css`:

* `--cor-fundo`: `#0D1117` (Fundo geral da página)
* `--cor-primaria`: `#3A86FF` (Cor de destaque, links e botões)
* `--cor-caixa`: `#161B22` (Fundo de cards e caixas de informação)
* `--cor-texto-claro`: `#FFFFFF` (Cor principal dos títulos e textos)

---

## 📁 Estrutura de Arquivos

O projeto é modularizado, com arquivos `.css` e `.html` específicos para cada seção:

├── app.js # Lógica para envio assíncrono do formulário (Formspree) ├── contato.css # Estilos específicos da página de Contato ├── contato.html # Página de Contato com o formulário ├── index.html # Página Inicial (Início) ├── projetos.css # Estilos específicos da página de Projetos ├── projetos.html # Página que lista os projetos em destaque ├── sobre.css # Estilos específicos da página Sobre Mim ├── sobre.html # Página com informações pessoais e objetivos └── style.css # Estilos gerais (aplicados à index.html)

## 🚀 Páginas e Conteúdo

### 1. Início (`index.html`)

* **Apresentação:** "Olá, meu nome é Vinicius. Atualmente sou estudante e estou praticando minhas habilidades em programação web."
* **Habilidades:** Lista as competências principais (HTML, CSS, JavaScript, Git e GitHub) em cards separados.

### 2. Sobre Mim (`sobre.html`)

* **Informações Pessoais:** 18 anos, último ano do Ensino Médio.
* **Objetivos:** Iniciar faculdade de **Análise e Desenvolvimento de Sistemas (ADS)** e buscar uma carreira como desenvolvedor **Front-end** ou Analista/Desenvolvedor de Sistemas.
* **Experiência:** Lista cursos concluídos, incluindo **Programação Web (Fundação FAT)** e **Lógica de Programação (SENAI e Alura)**.

### 3. Projetos (`projetos.html`)

* Apresenta os projetos com links para visualização e código-fonte.
* **Destaques:** "Jogo do número secreto" (primeiro contato com JS na Alura) e "Padaria" (primeiro projeto responsivo grande, feito na FAT).
* **Efeito Visual:** As imagens dos projetos possuem um efeito de escala (`transform: scale(1.8)`) no *hover* para destaque.

### 4. Contato (`contato.html` e `app.js`)

#### Formulário

* Utiliza `fieldset` e `legend` para estruturar o formulário.
* O atributo `action` aponta para o endpoint do Formspree (`https://formspree.io/f/mwpanvkp`).

#### Lógica de Envio (`app.js`)

O script JavaScript garante uma experiência de envio moderna e assíncrona:

1.  **Captura o evento `submit`** e previne o carregamento da página (`event.preventDefault()`).
2.  **Cria um objeto `FormData`** com os dados do formulário.
3.  **Envia os dados** para o Formspree via `fetch` com o método `POST`.
4.  **Feedback ao Usuário:** Exibe um `alert` de sucesso e limpa o formulário (`form.reset()`) em caso de envio bem-sucedido.

#### Contatos Diretos

* **E-mail:** `viniciuspaulino300@gmail.com`
* **GitHub:** `https://github.com/Vinicodeze`
* **LinkedIn:** Link fornecido no código.

---

## 🛠️ Como Iniciar Localmente

Para visualizar o portfólio em sua máquina, siga estas instruções:

1.  **Clone o repositório:**
    ```bash
    git clone [https://www.youtube.com/watch?v=m_6f3r-fwsE](https://www.youtube.com/watch?v=m_6f3r-fwsE)
    ```
2.  **Acesse o diretório do projeto:**
    ```bash
    cd [nome-do-repositorio]
    ```
3.  **Abra o arquivo `index.html`** em seu navegador preferido.

### ⚠️ Configuração do Formulário

Para que o formulário de contato funcione e você receba as mensagens, **você deve** substituir o link no atributo `action` do `<form>` em `contato.html` pelo seu próprio endpoint gerado no site do **Formspree**.

```html
<form action="[SEU NOVO ENDPOINT DO FORMSPREE]" method="POST">
    </form>