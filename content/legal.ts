import { company } from "./company";

export const privacyPolicy = {
  title: "Política de Privacidade",
  lastUpdate: "15 de fevereiro de 2026",
  sections: [
    {
      title: "1. Introdução",
      content: `Esta Política de Privacidade descreve como ${company.tradeName} ("nós", "nosso" ou "empresa") coleta, usa e protege as informações pessoais dos usuários de nosso site e serviços.`
    },
    {
      title: "2. Informações que Coletamos",
      content: `Coletamos as seguintes informações:
      
- **Informações fornecidas voluntariamente**: Nome, e-mail, telefone e mensagens enviadas através de formulários de contato.
- **Informações de navegação**: Endereço IP, tipo de navegador, páginas visitadas e tempo de permanência (através de cookies e ferramentas de análise).
- **Informações de contato comercial**: Dados empresariais compartilhados durante negociações ou prestação de serviços.`
    },
    {
      title: "3. Como Usamos suas Informações",
      content: `Utilizamos suas informações para:

- Responder solicitações e dúvidas enviadas através de formulários de contato.
- Prestar serviços contratados e manter comunicação sobre projetos em andamento.
- Enviar informações sobre nossos serviços (apenas se você consentir).
- Melhorar a experiência de navegação no site através de análises estatísticas.
- Cumprir obrigações legais e contratuais.`
    },
    {
      title: "4. Cookies",
      content: `Nosso site utiliza cookies para:

- **Cookies essenciais**: Garantir o funcionamento básico do site.
- **Cookies analíticos**: Entender como os visitantes interagem com o site (Google Analytics ou similar).

Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.`
    },
    {
      title: "5. Compartilhamento de Dados",
      content: `Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:

- Quando necessário para prestação de serviços contratados (ex: fornecedores de hospedagem).
- Para cumprir obrigações legais ou ordens judiciais.
- Com seu consentimento explícito.`
    },
    {
      title: "6. Segurança",
      content: `Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração. No entanto, nenhum sistema é 100% seguro e não podemos garantir segurança absoluta.`
    },
    {
      title: "7. Seus Direitos (LGPD)",
      content: `De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:

- Acessar seus dados pessoais que possuímos.
- Corrigir dados incompletos ou desatualizados.
- Solicitar a exclusão de seus dados (quando aplicável).
- Revogar consentimento para uso de dados.
- Portabilidade de dados para outro fornecedor.

Para exercer esses direitos, entre em contato através de ${company.contact.email}.`
    },
    {
      title: "8. Retenção de Dados",
      content: `Mantemos suas informações apenas pelo tempo necessário para as finalidades descritas nesta política, ou conforme exigido por lei.`
    },
    {
      title: "9. Alterações nesta Política",
      content: `Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível nesta página, com a data da última atualização.`
    },
    {
      title: "10. Contato",
      content: `Para dúvidas sobre esta política ou sobre como tratamos seus dados, entre em contato:

**${company.legalName}**  
E-mail: ${company.contact.email}  
Endereço: ${company.address.street}, ${company.address.city} - ${company.address.state}, ${company.address.cep}`
    }
  ]
};

export const termsOfUse = {
  title: "Termos de Uso",
  lastUpdate: "15 de fevereiro de 2026",
  sections: [
    {
      title: "1. Aceitação dos Termos",
      content: `Ao acessar e usar este site, você concorda com estes Termos de Uso. Se não concordar com qualquer parte destes termos, não utilize nosso site.`
    },
    {
      title: "2. Descrição dos Serviços",
      content: `${company.tradeName} oferece serviços de automação de processos, integrações de sistemas e consultoria técnica. Este site tem caráter informativo e serve como canal de contato inicial.`
    },
    {
      title: "3. Uso Adequado",
      content: `Você concorda em usar este site apenas para fins lícitos e de acordo com estes termos. É proibido:

- Violar leis ou regulamentos aplicáveis.
- Tentar acessar áreas restritas do site sem autorização.
- Transmitir vírus, malware ou códigos maliciosos.
- Fazer uso comercial não autorizado do conteúdo.
- Realizar web scraping ou coleta automatizada de dados.`
    },
    {
      title: "4. Propriedade Intelectual",
      content: `Todo o conteúdo deste site (textos, imagens, logos, código) é propriedade de ${company.legalName} ou de seus licenciadores, protegido por leis de direitos autorais.

Você não pode copiar, reproduzir, distribuir ou criar trabalhos derivados sem autorização expressa por escrito.`
    },
    {
      title: "5. Limitação de Responsabilidade",
      content: `${company.tradeName} não se responsabiliza por:

- Interrupções temporárias ou erros no site.
- Decisões tomadas com base em informações do site.
- Danos indiretos, incidentais ou consequentes relacionados ao uso do site.
- Conteúdo de links externos (não controlamos sites de terceiros).

As informações do site são fornecidas "como estão", sem garantias de qualquer tipo.`
    },
    {
      title: "6. Links para Sites Externos",
      content: `Este site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou práticas de privacidade desses sites.`
    },
    {
      title: "7. Contratação de Serviços",
      content: `A contratação de serviços da ${company.tradeName} está sujeita a acordo comercial específico, com termos e condições próprios que serão fornecidos durante o processo de negociação.`
    },
    {
      title: "8. Alterações nos Termos",
      content: `Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações entram em vigor imediatamente após publicação nesta página.`
    },
    {
      title: "9. Lei Aplicável",
      content: `Estes termos são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas serão submetidas ao foro da comarca de ${company.address.city} - ${company.address.state}.`
    },
    {
      title: "10. Contato",
      content: `Para dúvidas sobre estes Termos de Uso, entre em contato:

**${company.legalName}**  
E-mail: ${company.contact.email}  
Endereço: ${company.address.street}, ${company.address.city} - ${company.address.state}, ${company.address.cep}`
    }
  ]
};
