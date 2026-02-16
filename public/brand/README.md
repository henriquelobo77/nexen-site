# Assets de Marca Nexen

Este diretório contém os assets visuais da marca Nexen.

## Arquivos Atuais

- **logo.png**: Logo principal da Nexen ✅
- **icon.png**: Ícone/favicon da Nexen ✅
- **logo.svg**: Logo placeholder SVG (pode ser removido)
- **icon.svg**: Ícone placeholder SVG (pode ser removido)

## Assets Configurados

Seus arquivos PNG já foram configurados e estão sendo usados no site!

### Como os Assets São Usados

1. **Header**: Exibe `logo.png` no topo da página
2. **Footer**: Exibe `logo.png` invertida (branca) no rodapé
3. **Favicon**: O `icon.png` é usado como favicon do site

### Se Precisar Atualizar

Para trocar as imagens, simplesmente substitua:
- `logo.png` → Nova logo (PNG ou SVG)
- `icon.png` → Novo ícone (PNG ou SVG, idealmente quadrado)

**Importante**: Se usar SVG em vez de PNG, atualize também:
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`
- `app/icon.png` (copie o novo ícone)

### 4. Especificações técnicas

**Logo (logo.svg)**:
- Formato: SVG vetorial (ou PNG em alta resolução)
- Proporção sugerida: ~3:1 (largura:altura)
- Fundo: Transparente
- Cores: Seguir paleta da marca (#3360EF, #20BCED, #000626)

**Ícone (icon.svg)**:
- Formato: SVG vetorial (ou PNG 512x512px)
- Proporção: 1:1 (quadrado)
- Fundo: Pode ter fundo ou ser transparente
- Uso: Favicon, app icons, redes sociais

### 5. Atualizar referências (se necessário)

Os componentes já estão configurados para usar estes arquivos. Se você mudar os nomes, atualize:
- `components/layout/Header.tsx` (linha com logo)
- `app/layout.tsx` (metadata/favicon)

## Paleta de Cores

Use estas cores nos seus assets:

- **Navy**: #000626 (escuro principal)
- **Blue**: #3360EF (azul principal)
- **Cyan**: #20BCED (ciano/destaque)
- **Gray**: #EDEDED (cinza claro)

## Suporte

Se precisar de ajuda com os assets, entre em contato com o designer ou desenvolvedor do projeto.
