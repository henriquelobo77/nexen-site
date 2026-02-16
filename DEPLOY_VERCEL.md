# 🚀 Deploy na Vercel - Passo a Passo

## ✅ Status: Código no GitHub

Seu repositório: **https://github.com/henriquelobo77/nexen-site**

- ✅ 43 arquivos commitados
- ✅ Branch main configurada
- ✅ Pronto para deploy

---

## 🎯 Próximos Passos

### **Opção 1: Deploy via Interface Web (Recomendado - Mais Fácil)**

#### 1. Acesse a Vercel

Abra: **https://vercel.com/signup**

#### 2. Faça Login com GitHub

- Clique em **"Continue with GitHub"**
- Autorize a Vercel a acessar seus repositórios

#### 3. Importe o Projeto

- Clique em **"Add New..."** → **"Project"**
- Você verá seus repositórios do GitHub
- Clique em **"Import"** ao lado de `nexen-site`

#### 4. Configure o Deploy (Opcional)

A Vercel detecta automaticamente que é Next.js. As configurações padrão estão perfeitas:

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

Não precisa alterar nada!

#### 5. Deploy

- Clique em **"Deploy"**
- Aguarde ~2-3 minutos
- 🎉 Seu site estará no ar!

URL temporária: `nexen-site.vercel.app` (ou similar)

---

### **Opção 2: Deploy via CLI (Avançado)**

Se preferir linha de comando:

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer login
vercel login

# 3. Deploy
vercel

# 4. Deploy para produção
vercel --prod
```

---

## 🌐 Conectar Seu Domínio

### Depois que o deploy estiver completo:

#### 1. No Dashboard da Vercel

- Acesse seu projeto `nexen-site`
- Vá em **Settings** → **Domains**
- Clique em **"Add"**

#### 2. Adicione Seu Domínio

Digite: `nexen.com.br` (ou seu domínio real)

#### 3. Configure o DNS

A Vercel mostrará os registros DNS necessários. Exemplo:

```
Tipo    Nome    Valor
────────────────────────────────────────────
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

#### 4. Atualize no Registro.br (ou seu registrador)

1. Acesse o painel do **Registro.br** (ou GoDaddy, Hostinger, etc.)
2. Vá em **DNS** ou **Gerenciamento de DNS**
3. Adicione os registros que a Vercel mostrou:
   - **Tipo A**: 
     - Nome/Host: `@` ou deixe vazio
     - Valor: IP fornecido pela Vercel
   - **Tipo CNAME**:
     - Nome/Host: `www`
     - Valor: CNAME fornecido pela Vercel
4. Salve as alterações

#### 5. Aguarde Propagação

- **Tempo**: 5 minutos a 48 horas
- **Verificar**: Use https://dnschecker.org
- A Vercel mostrará quando estiver pronto

#### 6. SSL Automático

A Vercel configura HTTPS automaticamente:
- ✅ Certificado Let's Encrypt
- ✅ Renovação automática
- ✅ Redirect HTTP → HTTPS

---

## 📝 Atualizar URLs no Código

Depois que seu domínio estiver ativo, atualize:

### 1. `app/sitemap.ts`

```typescript
const baseUrl = 'https://nexen.com.br'; // ← Seu domínio
```

### 2. `app/robots.ts`

```typescript
const baseUrl = 'https://nexen.com.br'; // ← Seu domínio
```

### 3. Commit e Push

```bash
git add .
git commit -m "Update: Configurar domínio oficial"
git push
```

A Vercel fará deploy automático em ~2 minutos!

---

## 🔄 Atualizações Futuras

Sempre que quiser atualizar o site:

```bash
# 1. Edite os arquivos que quiser
# 2. Commit e push
git add .
git commit -m "Descrição das mudanças"
git push

# 3. Vercel faz deploy automático!
```

Você receberá um email confirmando o deploy.

---

## ⚙️ Configurações Opcionais na Vercel

### Environment Variables (se precisar)

Se precisar de variáveis de ambiente:
1. Settings → Environment Variables
2. Adicione as variáveis necessárias

### Analytics

Para ver visitantes:
1. Analytics → Enable
2. Vercel Analytics (gratuito para 100k pageviews/mês)

### Preview Deployments

A Vercel cria URLs de preview automaticamente para:
- Cada commit em branches
- Cada Pull Request

Exemplo: `nexen-site-git-feature-xyz.vercel.app`

---

## 🆘 Problemas Comuns

### Build Falha?

1. Verifique os logs no dashboard
2. Teste localmente: `npm run build`
3. Verifique se `package.json` está correto

### DNS Não Propaga?

1. Use https://dnschecker.org para verificar
2. Aguarde até 48h
3. Limpe cache DNS: `ipconfig /flushdns`

### Domínio Não Conecta?

1. Verifique se os registros DNS estão corretos
2. Certifique-se de que não há registros conflitantes
3. Remova AAAA records antigos se existirem

---

## 📊 Após o Deploy

### Checklist Final:

- [ ] Site acessível em `nexen-site.vercel.app`
- [ ] Todas as páginas carregam (home, privacidade, termos)
- [ ] Logos aparecem corretamente
- [ ] Botões de WhatsApp/Email funcionam
- [ ] Formulário de contato funciona
- [ ] Site responsivo em mobile
- [ ] HTTPS ativo (cadeado verde)
- [ ] Domínio customizado conectado (se aplicável)

---

## 🎉 Pronto!

Seu site Nexen está no ar! 🚀

**URLs:**
- Temporária: `https://nexen-site.vercel.app`
- GitHub: https://github.com/henriquelobo77/nexen-site
- Dashboard: https://vercel.com/dashboard

**Próximos passos sugeridos:**
1. Conectar seu domínio oficial
2. Ativar Vercel Analytics
3. Compartilhar o link!
4. Adicionar Google Analytics (se quiser)

---

**Dúvidas?** Acesse a documentação da Vercel: https://vercel.com/docs
