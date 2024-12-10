Frontend do Sistema de Gerenciamento de Clientes
Este é o frontend de um sistema de gerenciamento de clientes, criado com React, TypeScript, TailwindCSS e Axios para comunicação com o backend. O objetivo é fornecer uma interface intuitiva para cadastro, listagem e exclusão de clientes.

🛠️ Tecnologias Utilizadas
1. React
React é uma biblioteca JavaScript para construção de interfaces de usuário. Ele utiliza um modelo baseado em componentes, permitindo uma forma eficiente de criar e atualizar a interface do usuário.

Principais características do React:

Componentização: Reutilização de código e estrutura modular.
State Management: Controle eficiente do estado da aplicação.
Virtual DOM: Melhora a performance ao atualizar somente os componentes que realmente mudaram.
2. TypeScript
TypeScript é uma linguagem que adiciona tipagem estática ao JavaScript, permitindo detectar erros em tempo de desenvolvimento e melhorar a escalabilidade e manutenção do código.

Benefícios do TypeScript no projeto:

Segurança: Tipagem estática, garantindo maior segurança e confiabilidade.
Intellisense: Suporte completo em IDEs, com autocompletar, navegação de código e mais.
3. TailwindCSS
TailwindCSS é um framework CSS utilitário que permite uma abordagem de design mais rápida e flexível. Com ele, é possível criar interfaces personalizadas e responsivas com classes pré-definidas.

Vantagens do TailwindCSS:

Design responsivo: Facilita a criação de layouts que funcionam bem em diferentes dispositivos.
Facilidade na personalização: Possui classes utilitárias que podem ser combinadas de maneira simples para customizar o design.
Sem dependência de CSS extra: Não requer arquivos CSS separados, tudo pode ser feito dentro dos componentes.
4. Axios
Axios é uma biblioteca para fazer requisições HTTP. Ela é usada para se comunicar com o backend e obter ou enviar dados.

Benefícios do Axios:

Facilidade de uso: API simples e baseada em Promises.
Suporte a requisições assíncronas: Garante que a interface não trave durante as requisições.
Manipulação de erros: Facilita o tratamento de erros de rede.
🚀 Funcionalidades do Frontend
O frontend oferece uma interface para o gerenciamento de clientes, com as seguintes funcionalidades:

Cadastro de Clientes: Formulário para cadastrar novos clientes.
Listagem de Clientes: Exibe todos os clientes cadastrados no sistema.
Exclusão de Clientes: Permite excluir clientes da lista.
As requisições de GET, POST e DELETE são feitas com Axios para interação com o backend, que é construído utilizando Prisma e MongoDB.
