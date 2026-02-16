# Site Institucional Nexen

Site institucional moderno e profissional desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Características

- ✅ **Next.js 14** com App Router
- ✅ **TypeScript** para type-safety
- ✅ **Tailwind CSS** com design system customizado
- ✅ **Responsivo** para desktop, tablet e mobile
- ✅ **SEO otimizado** com metadata, sitemap e robots.txt
- ✅ **Acessibilidade** seguindo boas práticas WCAG
- ✅ **Performance** otimizada com Next.js Image e fontes
- ✅ **Páginas legais** (Privacidade e Termos de Uso)

## 📦 Estrutura do Projeto

```
nexen/
├── app/                        # App Router do Next.js
│   ├── layout.tsx             # Layout raiz
│   ├── page.tsx               # Página inicial (home)
│   ├── globals.css            # Estilos globais
│   ├── sitemap.ts             # Sitemap gerado automaticamente
│   ├── robots.ts              # Robots.txt gerado automaticamente
│   ├── privacidade/           # Página de Política de Privacidade
│   └── termos/                # Página de Termos de Uso
├── components/
│   ├── layout/                # Componentes de layout
│   │   ├── Header.tsx         # Cabeçalho com navegação
│   │   └── Footer.tsx         # Rodapé
│   ├── sections/              # Seções da página inicial
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Services.tsx       # Seção de serviços
│   │   ├── Process.tsx        # Processo de trabalho
│   │   ├── Differentials.tsx  # Diferenciais
│   │   ├── CNPJCard.tsx       # Card com dados do CNPJ
│   │   └── Contact.tsx        # Formulário de contato e FAQ
│   └── ui/                    # Componentes UI reutilizáveis
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Badge.tsx
│       └── Section.tsx
├── content/                   # Conteúdo estruturado
│   ├── company.ts            # Dados da empresa (CNPJ, contato, etc.)
│   ├── services.ts           # Descrição dos serviços
│   ├── legal.ts              # Textos legais (privacidade, termos)
│   └── seo.ts                # Metadata para SEO
├── lib/
│   └── utils.ts              # Funções utilitárias
├── public/
│   └── brand/                # Assets de marca
│       ├── logo.svg          # Logo principal
│       ├── icon.svg          # Ícone/favicon
│       └── README.md         # Instruções para trocar assets
└── tailwind.config.ts        # Configuração do Tailwind (cores, fontes)
```

## 🎨 Design System

### Paleta de Cores

```javascript
nexen: {
  navy: '#000626',    // Azul escuro principal
  blue: '#3360EF',    // Azul principal
  cyan: '#20BCED',    // Ciano (destaque)
  gray: '#EDEDED',    // Cinza claro
}
```

### Tipografia

- **Fonte**: Sora (Google Fonts)
- **Pesos**: 300, 400, 600, 700

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

### 3. Build para produção

```bash
npm run build
npm start
```

## ✏️ Customização

### 1. Atualizar dados da empresa

Edite o arquivo `content/company.ts` com as informações reais:

```typescript
export const company = {
  legalName: "NEXEN LTDA",              // Nome legal da empresa
  tradeName: "Nexen",
  cnpj: "XX.XXX.XXX/XXXX-XX",          // CNPJ real
  address: {
    street: "Rua Exemplo, 123",
    city: "São Paulo",
    state: "SP",
    cep: "00000-000",
  },
  foundedAt: "DD/MM/AAAA",
  cnae: "...",
  contact: {
    email: "contato@nexen.com.br",
    whatsapp: "+5511999999999",         // Número com código do país
    phone: "+5511999999999",
  },
  social: {
    linkedin: "https://linkedin.com/company/nexen",
    instagram: "https://instagram.com/nexen",
  }
}
```

### 2. Customizar serviços

Edite o arquivo `content/services.ts` para ajustar os serviços oferecidos:

```typescript
export const services = [
  {
    id: "automacao",
    title: "Automação de Processos",
    description: "...",
    features: [...],
    icon: "workflow"
  },
  // Adicionar, remover ou editar serviços
]
```

### 3. Logo e Ícone

✅ **Já configurados!** Seus arquivos PNG estão sendo usados:
- `public/brand/logo.png` → Exibida no Header e Footer
- `public/brand/icon.png` → Usado como favicon
- O Next.js otimiza as imagens automaticamente

Para trocar, substitua os arquivos PNG mantendo os mesmos nomes.

### 4. Customizar cores

Edite o arquivo `tailwind.config.ts`:

```typescript
colors: {
  nexen: {
    navy: '#000626',
    blue: '#3360EF',
    cyan: '#20BCED',
    gray: '#EDEDED',
  }
}
```

### 5. Editar conteúdo das páginas

- **Hero**: `components/sections/Hero.tsx`
- **Serviços**: `content/services.ts`
- **Processo**: `components/sections/Process.tsx`
- **Diferenciais**: `components/sections/Differentials.tsx`
- **FAQ**: `components/sections/Contact.tsx` (array `faqs`)

### 6. Atualizar SEO

Edite `content/seo.ts` com suas keywords e descrições:

```typescript
export const seo = {
  home: {
    title: "...",
    description: "...",
    keywords: [...],
  }
}
```

Não esqueça de atualizar a URL base em:
- `app/sitemap.ts`
- `app/robots.ts`

## 🚀 Deploy na Vercel

### Opção 1: Via GitHub (Recomendado)

1. Crie um repositório no GitHub e faça push do código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/nexen.git
   git push -u origin main
   ```

2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em "New Project"
4. Importe seu repositório do GitHub
5. Vercel detectará automaticamente que é um projeto Next.js
6. Clique em "Deploy"

### Opção 2: Via CLI da Vercel

1. Instale a CLI da Vercel:
   ```bash
   npm i -g vercel
   ```

2. Faça deploy:
   ```bash
   vercel
   ```

3. Siga as instruções no terminal

### Configurar domínio customizado

1. No dashboard da Vercel, vá em Settings → Domains
2. Adicione seu domínio (ex: nexen.com.br)
3. Configure os DNS conforme instruções da Vercel
4. Atualize a URL base em `sitemap.ts` e `robots.ts`

## 📱 Funcionalidades

### Header

- Navegação responsiva com menu mobile
- Sticky header com efeito de scroll
- Links de navegação âncora (scroll suave)
- Botão CTA para WhatsApp

### Seções da Home

1. **Hero**: Chamada principal com estatísticas e CTAs
2. **Serviços**: Grid de cards com 5 serviços
3. **Processo**: Timeline do processo de trabalho (4 etapas)
4. **Diferenciais**: 4 cards destacando pontos fortes
5. **Cartão CNPJ**: Dados oficiais com botões de copiar
6. **Contato**: Formulário + FAQ com accordion

### Footer

- Links de navegação
- Informações de contato
- Links para redes sociais
- Copyright dinâmico

### Páginas Legais

- Política de Privacidade (LGPD compliant)
- Termos de Uso
- Table of Contents (sidebar em desktop)

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento (localhost:3000)
npm run build    # Build para produção
npm start        # Servidor de produção
npm run lint     # Verificar erros de lint
```

## 📊 Performance

O site foi otimizado para:

- ✅ Core Web Vitals
- ✅ Lighthouse Score 90+
- ✅ Fontes otimizadas (next/font)
- ✅ Imagens otimizadas (next/image)
- ✅ CSS otimizado (Tailwind JIT)

## ♿ Acessibilidade

- Semântica HTML5 correta
- ARIA labels em elementos interativos
- Contraste de cores WCAG AA
- Navegação por teclado
- Alt text em imagens

## 📝 Checklist Pré-Deploy

Antes de fazer deploy para produção, certifique-se de:

- [ ] Atualizar dados em `content/company.ts` (CNPJ, contatos, endereço)
- [ ] Substituir logo e ícone placeholder em `public/brand/`
- [ ] Revisar e ajustar textos dos serviços em `content/services.ts`
- [ ] Atualizar URL base em `app/sitemap.ts` e `app/robots.ts`
- [ ] Testar todos os links e botões (WhatsApp, email, navegação)
- [ ] Testar responsividade (desktop, tablet, mobile)
- [ ] Verificar SEO (title, description, keywords)
- [ ] Testar formulário de contato
- [ ] Revisar páginas legais (Privacidade e Termos)

## 🐛 Problemas Comuns

### Erro de build

```bash
npm run build
```

Se houver erros de TypeScript, verifique os arquivos indicados.

### Fontes não carregam

Certifique-se de que está conectado à internet (Google Fonts).

### Imagens não aparecem

Verifique se os arquivos estão em `public/` e os caminhos estão corretos.

## 📞 Suporte

Para dúvidas ou problemas técnicos:

- Email: contato@nexen.com.br
- WhatsApp: [número]

## 📄 Licença

© 2026 Nexen. Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS**
