# Automação de Testes com CodeceptJS + WebDriver
<br>


## 🎯 Sobre o Projeto

Este projeto demonstra a implementação de uma suíte de automação de testes End-to-End (E2E) utilizando a sinergia entre o **CodeceptJS** e o módulo **WebDriverIO**. O foco é garantir a qualidade e a confiabilidade de aplicações web através de cenários de teste escritos de forma clara, legível e altamente manutenível.

A arquitetura dos testes segue as melhores práticas, promovendo:
* **Reutilização de Código:** Através da estruturação de *PageObjects* e *Helpers* personalizados.
* **Legibilidade:** Scripts de teste escritos em um estilo BDD/Gherkin-like, facilitando a compreensão por membros técnicos e não-técnicos do time.
* **Robustez:** Utilização de *Waiters* e asserções robustas para minimizar *flakiness*.
<br>

## 🛠️ Tecnologias e Dependências

As principais tecnologias e linguagens utilizadas neste projeto são:

| Tecnologia | Descrição |
| :--- | :--- |
| **CodeceptJS** | Framework moderno para testes End-to-End (E2E), conhecido por sua sintaxe elegante e fácil curva de aprendizado. |
| **WebDriverIO** | Módulo de *backend* utilizado pelo CodeceptJS para interagir com o navegador de forma eficiente e confiável. |
| **JavaScript (ES6+)** | Linguagem base para o desenvolvimento dos *scripts* de teste e *helpers* customizados. |
| **Node.js** | Ambiente de *runtime* necessário para executar os *scripts* e gerenciar as dependências do projeto. |

---
<br>

## 💻 Configuração e Execução

Siga os passos abaixo para configurar o ambiente de desenvolvimento e executar a suíte de testes.
<br>

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão LTS recomendada) e o [npm](https://www.npmjs.com/) instalados em sua máquina.
<br><br>

### Passo 1: Clonar o Repositório

Abra o terminal e execute o comando:

```
git clone https://github.com/eduardoamorimqa/codeceptjs-webdriver.git
```

### Passo 2: Instalar as Dependências

Dentro do diretório do projeto, instale todas as dependências listadas no package.json:

```
npm install
```

### Passo 3: Executar os Testes

Execute a suíte de testes completa em modo interativo (com logs detalhados dos passos):

```
npx codeceptjs run --steps
```

### Comandos de Execução Adicionais (Opcional)
<br>

Descrição: Executa apenas os testes cuja descrição contenha a palavra "login".

```
npx codeceptjs run --grep "login"
```
<br>


Descrição: Executa os testes e gera um relatório HTML profissional (assumindo que o reporter esteja configurado).

```
npx codeceptjs run --reporter mochawesome
```
<br>


Descrição: Comando atalho configurado no package.json para execução rápida.

```
npm test
```

### Autor

💼 Desenvolvido por: Eduardo Amorim - Especialista em QA e Automação de Testes  
💻 LinkedIn: https://www.linkedin.com/in/eduardoamorim-ti/

<br>

<h3 align="center">⭐ Se este projeto te ajudou, não esqueça de deixar uma estrela no repositório!</h3>



