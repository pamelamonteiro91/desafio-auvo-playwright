🧪 Desafio Auvo — Automação de Testes com Playwright
Este projeto é uma prova de conceito (POC) de automação de testes web desenvolvida para validar o fluxo de cadastro e pesquisa de produtos no site fictício de e-commerce SauceDemo, utilizando Playwright com JavaScript/TypeScript e arquitetura Page Object Model (POM).


🎯 Objetivo
Automatizar os seguintes fluxos funcionais:
- Login: Acessar o site e realizar login com credenciais padrão.
- Pesquisa de Produtos: Listar os produtos disponíveis após login.
- Validação de Produto: Verificar título, preço e descrição de um produto.
- Carrinho e Checkout: Adicionar produtos ao carrinho e seguir para checkout.
- Finalização de Pedido: Preencher os dados e concluir a compra.

🛠️ Tecnologias Utilizadas
- Playwright — Framework moderno de automação de testes
- JavaScript + TypeScript — Linguagem principal do projeto
- Node.js — Ambiente de execução JavaScript
- Page Object Model (POM) — Arquitetura modular e organizada

📁 Estrutura do Projeto
DESAFIO-AUVO-QA/
├── pages/               # Classes de páginas (POM)
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── LoginPage.ts
│   ├── ProductDetailsPage.ts
│   └── ProductsPage.ts
├── tests/               # Testes automatizados
│   ├── login-spec.ts
│   ├── product-search-spec.ts
│   ├── product-details.spec.ts
│   ├── add-to-cart-spec.ts
│   ├── checkout-spec.ts
│   ├── multi-cart.spec.ts
│   ├── remove-cart-spec.ts
│   └── multi-user-checkout.spec.ts
├── test-results/        # Evidências dos testes (relatórios, screenshots, vídeos)
├── test-data.ts         # Dados de teste (opcional)
├── playwright.config.ts # Configuração do Playwright
├── tsconfig.json        # Configuração do TypeScript
├── package.json         # Dependências e scripts
└── README.md            # Documentação do projeto


---

## ⚙️ Requisitos e Setup

### Pré-requisitos
- Node.js >= 18
- npm ou yarn

### Instalação
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
npm install
# ou
yarn install

Configuração do Playwright
bash
npx playwright install

🚀 Execução dos Testes

Executar todos os testes
npx playwright test

Executar testes específicos
npx playwright test tests/nome-do-teste.spec.ts --headed --debug

Estrutura dos testes

LoginTest – Valida login com usuário padrão.

ProductSearchTest – Pesquisa produtos e valida títulos, preços e descrições.

CartAndCheckoutTest – Adiciona produtos ao carrinho, realiza checkout e finaliza pedido.

📸 Evidências de Testes

Durante a execução, capturas de tela são geradas automaticamente na pasta "screenshots" para auxiliar na validação dos cenários.

1. Login bem-sucedido

2. Produtos adicionados ao carrinho

3. Carrinho vazio após remoção de produtos

4. Checkout finalizado

📊 Evidências dos Testes Automatizados
Este projeto está configurado para gerar evidências automáticas de cada execução de teste, facilitando a análise de falhas e validação dos cenários.
Tipos de evidências geradas
- 📸 Screenshots: capturados automaticamente em caso de falha
- 🎥 Vídeos: gravados apenas quando um teste falha
- 📄 Relatório HTML: mostra o status de cada teste, tempo de execução e links para evidências

Visualizar o relatório HTML

npx playwright show-report test-results
O relatório será aberto automaticamente no navegador padrão.

Estrutura da pasta test-results/
test-results/
├── index.html               # Relatório interativo
├── <nome-do-teste>/        # Pasta com evidências por teste
│   ├── trace.zip            # Trace interativo
│   ├── video.webm           # Vídeo do teste (se falhou)
│   └── screenshot.png       # Captura de tela (se falhou)

Limpar evidências antigas (opcional)
rm -rf test-results -- LINUX 
rmdir /s /q test-results -- WINDOWS

✅ Cobertura de Testes

login-spec.ts - Valida login com credenciais válidas e inválidas
product-search-spec.ts - Lista os produtos após login
product-details.spec.ts - Valida título, preço e descrição de um produto
add-to-cart-spec.ts  - Adiciona produto ao carrinho
checkout.spec.ts - Fluxo de checkout completo
multi-cart.spec.ts - Adiciona múltiplos produtos e valida o preço total
remove-cart.spec.ts - Remove produtos do carrinho e valida se está vazio

📚 Observações e Decisões do Projeto

O projeto segue Page Object Model (POM) para separar lógica de página da lógica dos testes.

As capturas de tela são feitas automaticamente em pontos-chave do fluxo para validação visual.

A estrutura modular permite fácil manutenção e adição de novos cenários de teste.

Os testes cobrem todos os passos descritos no desafio: login, pesquisa, validação de produtos, carrinho e checkout.

📦 Entrega

O código está publicado em repositório público no GitHub:
Link para o repositório

📷 Evidências Visuais dos Testes
Abaixo estão capturas de tela geradas automaticamente durante a execução dos testes com Playwright. Elas ilustram os principais pontos do fluxo de testes:

✅ Login realizado com sucesso
Login realizado com sucesso

🛒 Produto adicionado ao carrinho
Produto no carrinho

📦 Detalhes do produto validados
Detalhes do produto

🧾 Listagem de produtos após login
Listagem de produtos

🧹 Carrinho vazio após remoção de produtos
Carrinho vazio

🎉 Pedido finalizado com sucesso
Pedido finalizado




