# SecretarIA - Site Profissional

Este é um site profissional para a SecretarIA, uma empresa que oferece chatbots inteligentes para pequenos negócios e profissionais autônomos como dentistas, nutricionistas, pizzarias e outros.

## Visão Geral

O site foi desenvolvido em React e inclui as seguintes páginas:
- **Página Inicial**: Apresentação da empresa, recursos principais e planos
- **Sobre**: História da empresa, missão, visão, valores e equipe
- **Planos**: Detalhes dos planos oferecidos (Básico, Pro e Premium)
- **Contato**: Formulário de contato e informações para contato direto

## Estrutura do Projeto

```
secretaria/
├── public/
│   └── assets/           # Imagens e recursos estáticos
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas principais
│   ├── styles/           # Arquivos CSS
│   ├── hooks/            # Hooks personalizados
│   ├── utils/            # Funções utilitárias
│   ├── assets/           # Recursos internos
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Ponto de entrada
└── package.json          # Dependências e scripts
```

## Tecnologias Utilizadas

- React
- React Router DOM
- CSS Moderno (Flexbox e Grid)
- Font Awesome (para ícones)

## Planos de Preço

O site apresenta três planos de preço:
- **Experimental**: Grátis
- **Basico**: R$69,90/mês
- **Pro**: R$99,90/mês

## Instalação e Execução

Para instalar as dependências:
```bash
pnpm install
```

Para executar o servidor de desenvolvimento:
```bash
pnpm run dev
```

Para criar a versão de produção:
```bash
pnpm run build
```

## Personalização

O site foi desenvolvido com foco em facilitar a personalização. Os principais elementos que podem ser modificados são:

### Cores

As cores principais são definidas como variáveis CSS no arquivo `src/styles/global.css`:
- `--primary-color`: #4361ee (Azul)
- `--secondary-color`: #f72585 (Rosa)

### Conteúdo

O conteúdo das páginas pode ser modificado diretamente nos arquivos:
- Página Inicial: `src/pages/Home.tsx`
- Sobre: `src/pages/About.tsx`
- Planos: `src/pages/Plans.tsx`
- Contato: `src/pages/Contact.tsx`

### Planos de Preço

Os planos de preço são definidos como objetos JavaScript e podem ser facilmente modificados:
- Em `src/pages/Home.tsx` para a exibição na página inicial
- Em `src/pages/Plans.tsx` para a exibição detalhada na página de planos

## Design Responsivo

O site foi desenvolvido com design responsivo, adaptando-se a diferentes tamanhos de tela:
- Desktop
- Tablet
- Dispositivos móveis

## Contato

Para mais informações ou suporte, entre em contato através do formulário no site ou diretamente pelos contatos fornecidos na página de contato.
