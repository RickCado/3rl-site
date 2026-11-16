  (function(){
    if(location.pathname!=="/" && location.pathname!=="/index.html") return;
    var map={"#maturidade":"/ferramentas/teste-de-seguranca","#verificador":"/ferramentas/verificador-de-email","#calculadora":"/ferramentas/calculadora-de-automacao"};
    if(map[location.hash]) location.replace(map[location.hash]);
  })();
  const FLAG_UK = '<svg viewBox="0 0 60 30" aria-hidden="true"><clipPath id="uk-s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="uk-t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#uk-s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#uk-t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>';
  const FLAG_BR = '<svg viewBox="0 0 30 21" aria-hidden="true"><rect width="30" height="21" fill="#009c3b"/><path d="M15 2.5 27.5 10.5 15 18.5 2.5 10.5z" fill="#ffdf00"/><circle cx="15" cy="10.5" r="4.6" fill="#002776"/><path d="M10.6 9.6c3-.6 6.2-.2 8.9 1.2" stroke="#fff" stroke-width=".8" fill="none"/></svg>';

  const T = {
    en: {
      navAg:"Anti-scam", tl1:"Email checker", tl1d:"See in seconds whether the company's email is protected against spoofing.", tl2:"Security test", tl2d:"13 questions to find the points that expose your company the most.", tl3:"Automation calculator", tl3d:"What your team's repetitive tasks cost you per year.", tl4:"Password generator", tl4d:"Strong passwords in one click, created on your device. Works offline.", tlGo:"Use it free →", htEyebrow:"Free tools", htTitle:"Test your company's technology now", htSub:"Free, no sign-up, right in your browser.", htAll:"See all tools", haEyebrow:"Anti-Scam Training", haTitle:"Does your team recognize a scam?", haSub:"A talk and a hands-on simulation so nobody pays a fake invoice, changes a supplier's bank details at a scammer's request or hands over passwords.", haGo:"See the training →", hubTitle:"Tools to test your company's technology", hubSub:"Free, no sign-up. Everything runs in your browser: nothing you type is stored.", crumbTools:"Free tools", moreTools:"Other free tools", agEyebrow:"Anti-Scam Training for companies", agTitle:"Does your team recognize <em>a scam?</em>", agSub:"Hands-on training so nobody in your company pays a fake invoice, changes a supplier's bank details at a scammer's request or hands over passwords.", agCta:"I want the training", agCta2:"Take the free test", agS1:"of Brazilians were victims of fraud in the past year.", agS2:"of companies reported financial fraud, such as payments diverted to fake accounts.", agSrc:"Source: Serasa Experian, <a href=\"https://www.serasaexperian.com.br/sala-de-imprensa/prevencao-a-fraude/mais-da-metade-dos-brasileiros-ja-foi-vitima-de-fraude-e-20-deles-perderam-ate-rdollar-5-mil-revela-estudo-inedito-da-serasa-experian/\" rel=\"noopener\" target=\"_blank\">Identity and Fraud Report 2025</a> and <a href=\"https://www.serasaexperian.com.br/sala-de-imprensa/prevencao-a-fraude/fraudes-transacionais-e-vazamentos-de-dados-sao-as-principais-ocorrencias-em-empresas-brasileiras-aponta-pesquisa-da-serasa-experian/\" rel=\"noopener\" target=\"_blank\">company survey (Dec 2025)</a>.", agG:"The scams that hit companies most", agG1:"Tampered invoice (boleto)", agG2:"Fake supplier asking to change bank details", agG3:"Fake boss or director on WhatsApp", agG4:"Fake email from a bank or government agency", agG5:"Fake customer service line", agI:"What the training includes", agI1:"Hands-on talk with real scam examples", agI2:"Fake email simulation, authorized by the company", agI3:"A simple rule to confirm payments and bank detail changes", agI4:"Report with the points your team should watch", agFEyebrow:"Formats", agFTitle:"The way that works for you", agF1t:"In-company session", agF1d:"Talk and simulation for your team, with a final report.", agF2t:"Business associations", agF2d:"Open talk for member companies, organized with the association.", agF3t:"On site or online", agF3d:"On site in the Alto Vale do Itajaí region or online anywhere.", agEndTitle:"Shall we talk?", agEndSub:"Tell us your team size and preferred date. We reply by email.", pvEyebrow:"Privacy", pvTitle:"Privacy policy", pvDate:"Updated on November 16, 2026.", pv1t:"Summary", pv1:"This site uses no cookies, has no tracking or analytics tools and shows no ads. We do not ask you to sign up.", pv2t:"Free tools", pv2:"The security test, the calculator and the password generator run entirely in your browser: what you type is not sent to or stored by 3RL.", pv3:"The email checker looks up public records of the domain you type. To do so, the domain name is sent to the public DNS lookup services of Google and Cloudflare. 3RL does not receive or keep that lookup.", pv4t:"Contact by email", pv4:"When you write to adm@3rl.com.br, we use your data only to reply and handle your request. We do not sell or share it.", pv5t:"Hosting and local storage", pv5:"The site is hosted on GitHub Pages, which may log technical access data, such as the IP address, for security and operation. Fonts are served by the site itself. Your browser only stores your language choice.", pv6t:"Your rights", pv6:"You can ask to access, correct or delete your data under Brazil's General Data Protection Law (Law 13.709/2018) by writing to adm@3rl.com.br.", nfTitle:"Page not found", nfSub:"The address may have changed. Start from the home page or the free tools.", nfHome:"Home page", fCompany:"Company", fAg:"Anti-Scam Training", fPriv:"Privacy",
      nav1:"Services", navCalc:"Calculator", navPacks:"Solutions", navTools:"Tools", nav2:"How we work", nav3:"Contact",
      packsEyebrow:"Solutions", packsTitle:"Ready-to-start packages", packsSub:"Clear scopes, so you know exactly what you will get. Each package is tailored to your business.",
      price:"Custom quote", packBtn:"Request a quote", k1badge:"Starting point",
      k1t:"Digital Presence", k1d:"Everything your company needs to look professional online.", k1i1:"Domain registration and setup", k1i2:"Business email protected against spoofing", k1i3:"Responsive company website in Portuguese and English", k1i4:"Google setup so you show up in searches",
      k2t:"Secure Email", k2d:"Protect your brand from fake emails and scams that use your company's name.", k2i1:"Full check of your email protection", k2i2:"Fixes to your domain settings", k2i3:"Two-step verification on accounts", k2i4:"Team guidance",
      k3t:"Essential Automation", k3d:"One manual routine turned into a reliable automated workflow.", k3i1:"Mapping of the current process", k3i2:"Automation of spreadsheets, reports or alerts", k3i3:"Testing and documentation", k3i4:"Follow-up after delivery",
      k4t:"Management Dashboard", k4d:"Your business's key numbers in one place.", k4i1:"Definition of key indicators", k4i2:"Integration of data sources", k4i3:"Always up-to-date visual dashboard", k4i4:"Access from computer and phone",
      k5t:"Privacy & LGPD", k5d:"Data protection best practices to operate more safely.", k5i1:"Mapping of personal data processed", k5i2:"Privacy policy for the website", k5i3:"Security and access best practices", k5i4:"Team guidance",
      k6t:"Ransomware-proof Backup", k6d:"Your files back, even after an attack.", k6i1:"Automatic copies of important files and systems", k6i2:"One protected copy, out of attackers' reach", k6i3:"Recovery test with report", k6i4:"Monthly follow-up", k7t:"Secure Access", k7d:"Only the right people get in, and each sees only what they need.", k7i1:"Phone confirmation on key accounts", k7i2:"Password vault for the team", k7i3:"Review of who can access what", k7i4:"Routine for staff joining and leaving", k8t:"Anti-Scam Training", k8d:"Your team ready to spot scams before they cost you.", k8i1:"Hands-on talk with real scam examples", k8i2:"Fake email simulation, authorized by the company", k8i3:"Rule to confirm payments and bank detail changes", k8i4:"Report with the points to watch", k9t:"Incident Plan", k9d:"Clear rules and a ready plan to act if something goes wrong.", k9i1:"Security policy in plain language", k9i2:"Step-by-step for attacks and data leaks", k9i3:"Defined contacts and responsibilities", k9i4:"Yearly plan review", m1:"Do email and system accounts ask for phone confirmation in addition to the password?", m2:"Does each person have their own login, with no shared passwords?", m3:"Are the team's passwords kept in a password vault, not on paper or spreadsheets?", m4:"When someone leaves the company, is their access removed the same day?", m5:"Do important files and systems have automatic backups?", m6:"Is one of the copies kept separate, out of reach of an attack on the network?", m7:"Have you tested restoring a backup in the last 6 months?", m8:"Has the team been trained on email, WhatsApp and fake invoice scams?", m9:"Is there a rule for confirming payment requests or bank detail changes?", m10:"Do company computers and phones get updates automatically?", m11:"Is there a written plan for what to do in case of an attack or data leak?", m12:"Is the company's email protected against spoofing?", m13:"Do you know which customer personal data you keep and who can access it?", mEyebrow:"Free test", mTitle:"How secure is your company?", mSub:"Answer 13 quick questions and find the points that expose your business the most. It takes about 2 minutes.", mYes:"Yes", mPart:"Partly", mNo:"No or not sure", mResLabel:"Your result", mCta:"I want to improve these points", mReset:"Retake the test", mNote:"Indicative result, calculated only from your answers. Nothing is sent or stored.",
      vEyebrow:"Free tool", vTitle:"Is your company's email protected?", vSub:"Enter your domain and see in seconds whether it has the protections that stop scammers from sending fake emails in your company's name.",
      vBtn:"Check now", vHint:"We only check public records. Nothing is stored.", pwT:"Secure password generator", pwD:"Strong passwords in one click, created on your device. Free, no sign-up, works offline.", pwB:"Open generator →",
      calcEyebrow:"Calculator", calcTitle:"What do manual tasks cost you?", calcSub:"Find out how much time and money your team spends on repetitive tasks, the kind that could be automated.",
      fPeople:"People on the team", fHours:"Hours per week, per person, on repetitive tasks", fHoursHint:"E.g. copying data between systems, building reports, checking spreadsheets, answering standard emails.",
      fCost:"Average cost of one work hour", fCostHint:"Include salary and overhead. If unsure, use a rough figure.", fAuto:"Share you believe could be automated",
      rYear:"Yearly cost of repetitive tasks", rHours:"Hours per month", rDays:"Work days per month", rFreeH:"Hours freed per year", rSave:"Potential per year",
      calcCta:"Let's talk about it", calcNote:"Illustrative estimate, calculated only from the numbers you entered. Not a promise of results: real potential depends on each process.",
      navContact:"Contact us", pill:"Remote service worldwide",
      h1:'Technology serving <em>your next step</em>.',
      lead:"Consulting, automation, technology and development for those who want to make better decisions, work with less friction and grow safely.",
      cta1:"Get in touch", cta2:"Our services",
      t1:"Assessment and planning", t2:"Less manual work", t3:"Secure, scalable foundation", t4:"Custom solutions",
      svcEyebrow:"Services", svcTitle:"What we do", svcSub:"Hands-on work, from assessment to delivery, focused on practical results.",
      s1t:"Consulting", s1d:"Assessment and planning so you can decide with confidence where and how to invest in technology.",
      s1b1:"Assessment of current processes, systems and tools", s1b2:"Action plan and technology roadmap", s1b3:"Selection of platforms, vendors and solutions", s1b4:"Data-driven decision support",
      s2t:"Automation", s2d:"We eliminate manual, repetitive work so your team can focus on what really matters.",
      s2b1:"Automation of routines and workflows", s2b2:"Integration between systems, spreadsheets and email", s2b3:"Automatic reports, alerts and notifications", s2b4:"AI assistants and agents for internal routines",
      s3t:"Technology", s3d:"A well-configured, secure technology foundation, ready to grow with your business.",
      s3b1:"Domain, business email and cloud services", s3b2:"Information security and best practices", s3b3:"Rollout of productivity and AI tools", s3b4:"Ongoing technical guidance and support",
      s4t:"Development", s4d:"We build custom digital solutions, from your company website to the system that organizes your operation.",
      s4b1:"Company websites and landing pages", s4b2:"Custom web systems and applications", s4b3:"Dashboards and internal tools", s4b4:"Custom APIs and integrations",
      howEyebrow:"Process", howTitle:"How we work", howSub:"A simple, transparent process.",
      p1t:"Assessment", p1d:"We understand your challenge, its context and what needs to change.",
      p2t:"Proposal", p2d:"We present the path, scope and timeline clearly.",
      p3t:"Execution", p3d:"We put it into practice and follow up until results show.",
      ctEyebrow:"Contact", ctTitle:"Let's talk?", ctSub:"Tell us about your challenge. We reply by email.",
      world:"Remote service for clients worldwide", ctBtn:"Send an email",
      foot:"Consulting, automation, technology and development"
    }
  };
  const pt = {};
  document.querySelectorAll("[data-i18n]").forEach(e=>pt[e.dataset.i18n]=e.textContent);
  document.querySelectorAll("[data-i18n-html]").forEach(e=>pt[e.dataset.i18nHtml]=e.innerHTML);
  T.pt = pt;

  const langBtn = document.getElementById("langBtn");
  let lang = "pt";
  function apply(l){
    lang = l;
    document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=T[l][e.dataset.i18n]);
    document.querySelectorAll("[data-i18n-html]").forEach(e=>e.innerHTML=T[l][e.dataset.i18nHtml]);
    document.documentElement.lang = l==="pt" ? "pt-BR" : "en";
    langBtn.innerHTML = l==="pt" ? FLAG_UK+"EN" : FLAG_BR+"PT";
    langBtn.setAttribute("aria-label", l==="pt" ? "Switch to English" : "Mudar para português");
    try{localStorage.setItem("lang",l)}catch(e){}
    if(window.calc) window.calc();
    if(window.vRender) window.vRender();
    if(window.packLinks) window.packLinks();
    if(window.mRender) window.mRender();
  }
  langBtn.addEventListener("click",()=>apply(lang==="pt"?"en":"pt"));
  langBtn.innerHTML = FLAG_UK+"EN";
  try{
    const saved = localStorage.getItem("lang");
    if(saved==="en" || (!saved && !(navigator.language||"").toLowerCase().startsWith("pt"))) apply("en");
  }catch(e){}

  // vitrine deslizante
  const track = document.getElementById("track");
  if(track){
  const slides = [...track.children];
  const dotsBox = document.getElementById("dots");
  const pad = () => parseFloat(getComputedStyle(track).paddingLeft) || 0;
  const pos = i => slides[i].offsetLeft - slides[0].offsetLeft;
  const maxScroll = () => track.scrollWidth - track.clientWidth;
  function lastIndex(){ for(let i=0;i<slides.length;i++) if(pos(i) >= maxScroll()-2) return i; return slides.length-1; }
  function current(){
    if(track.scrollLeft >= maxScroll()-2) return lastIndex();
    let best=0, d=Infinity;
    slides.forEach((_,i)=>{ const x=Math.abs(pos(i)-track.scrollLeft); if(x<d){d=x;best=i;} });
    return best;
  }
  function buildDots(){
    dotsBox.innerHTML="";
    for(let i=0;i<=lastIndex();i++){
      const b=document.createElement("button"); b.className="dot"; b.type="button"; b.setAttribute("aria-label","Slide "+(i+1));
      b.onclick=()=>{ go(i); restart(); }; dotsBox.appendChild(b);
    }
    mark();
  }
  function go(i){ const L=lastIndex(); if(i>L) i=0; if(i<0) i=L; track.scrollTo({left:Math.min(pos(i),maxScroll())}); }
  function mark(){ const c=current(); [...dotsBox.children].forEach((d,i)=>d.classList.toggle("on",i===c)); }
  track.addEventListener("scroll",()=>requestAnimationFrame(mark),{passive:true});
  window.addEventListener("resize",buildDots);
  document.getElementById("next").onclick=()=>{ go(current()+1); restart(); };
  document.getElementById("prev").onclick=()=>{ go(current()-1); restart(); };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timer=null, paused=false;
  function restart(){ clearInterval(timer); if(!reduce) timer=setInterval(()=>{ if(!paused && !document.hidden) go(current()+1); },5000); }
  track.addEventListener("mouseenter",()=>paused=true);
  track.addEventListener("mouseleave",()=>paused=false);
  track.addEventListener("touchstart",()=>{paused=true;},{passive:true});
  track.addEventListener("touchend",()=>{ setTimeout(()=>paused=false,4000); },{passive:true});
  buildDots(); restart();
  }



  // pacotes: link de orçamento
  window.packLinks=function(){
    document.querySelectorAll("[data-pack]").forEach(a=>{
      const el=document.querySelector(`[data-i18n="${a.dataset.pack}t"]`); if(!el) return; const name=el.textContent;
      const en=lang==="en";
      a.href="mailto:adm@3rl.com.br?subject="+encodeURIComponent((en?"Quote - ":"Orçamento - ")+name)+"&body="+encodeURIComponent(en?`Hello! I would like a quote for the "${name}" package.\n\nCompany:\nWebsite/domain:\nDetails:`:`Olá! Gostaria de um orçamento do pacote "${name}".\n\nEmpresa:\nSite/domínio:\nDetalhes:`);
    });
  };
  window.packLinks();

  // verificador de e-mail
  (function(){
    const $=id=>document.getElementById(id);
    if(!$("vForm")) return;
    const SEL=["google","default","selector1","selector2","zmail","k1","k2","k3","s1","s2","dkim","mail","smtp","mx","sig1","titan1","hostinger","locaweb","kinghost","umbler","mandrill","mailjet","sendgrid","s1024","everlytickey1","protonmail","fm1","dkim1","key1"];
    async function dns(name,type){
      const urls=["https://dns.google/resolve?name="+encodeURIComponent(name)+"&type="+type,"https://cloudflare-dns.com/dns-query?name="+encodeURIComponent(name)+"&type="+type];
      for(const u of urls){ try{ const r=await fetch(u,{headers:{accept:"application/dns-json"}}); if(r.ok) return await r.json(); }catch(e){} }
      throw new Error("dns");
    }
    const txts=j=>(j.Answer||[]).filter(a=>a.type===16).map(a=>{const m=String(a.data).match(/"((?:[^"\\]|\\.)*)"/g);return m?m.map(x=>x.slice(1,-1)).join(""):String(a.data);});
    function clean(v){
      v=(v||"").trim().toLowerCase();
      if(v.includes("@")) v=v.split("@").pop();
      v=v.replace(/^[a-z]+:\/\//,"").split(/[\/?#:\s]/)[0].replace(/\.$/,"");
      if(v.startsWith("www.")) v=v.slice(4);
      return /^(?=.{4,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/.test(v)?v:null;
    }
    const PROV=[[/google|googlemail/,"Google Workspace"],[/outlook\.com|office365|protection\.outlook/,"Microsoft 365"],[/zoho/,"Zoho Mail"],[/titan\.email/,"Titan"],[/locaweb/,"Locaweb"],[/hostinger/,"Hostinger"],[/kinghost/,"KingHost"],[/umbler/,"Umbler"],[/secureserver/,"GoDaddy"],[/protonmail|proton\.ch/,"Proton Mail"],[/uol\.com\.br|uolhost/,"UOL Host"],[/hostgator/,"HostGator"],[/icloud/,"iCloud"],[/yahoo/,"Yahoo"],[/registro\.br/,"Registro.br"]];
    let last=null;
    const L={
      pt:{
        mx_ok:p=>["Recebimento de e-mail",p?`Provedor identificado: ${p}.`:"Servidores de e-mail encontrados."],
        mx_none:["Recebimento de e-mail","Nenhum servidor de e-mail encontrado para este domínio."],
        spf_good:["Autorização de envio ativa","O domínio define quais servidores podem enviar e-mails em seu nome."],
        spf_all:["Autorização de envio permissiva","A configuração atual libera qualquer servidor para enviar e-mails em nome do domínio."],
        spf_noall:["Autorização de envio incompleta","A configuração não define o que fazer com servidores não autorizados."],
        spf_multi:["Autorização de envio em conflito","Há configurações duplicadas, o que invalida a proteção."],
        spf_none:["Autorização de envio ausente","Qualquer servidor pode tentar enviar e-mails em nome do domínio."],
        dkim_good:s=>["Assinatura digital ativa","Os e-mails do domínio saem com assinatura digital."],
        dkim_unk:["Assinatura digital não confirmada","Não conseguimos confirmar a assinatura digital dos e-mails. Vale uma verificação mais detalhada."],
        dmarc_good:p=>["Bloqueio de e-mails falsos ativo","E-mails falsos em nome do domínio são bloqueados ou vão para o spam."],
        dmarc_none:["Bloqueio de e-mails falsos desligado","O domínio apenas monitora: e-mails falsos ainda chegam ao destinatário."],
        dmarc_miss:["Bloqueio de e-mails falsos ausente","Os provedores não sabem o que fazer com e-mails falsos em nome do domínio."],
        v_good:["Bem protegido","O domínio tem as três proteções principais ativas."],
        v_warn:["Proteção parcial","Existem pontos que deixam brechas para e-mails falsos."],
        v_bad:["Vulnerável a falsificação","Golpistas podem enviar e-mails se passando pela empresa."],
        cta_fix:"Quer que a 3RL corrija isso? O pacote E-mail Seguro resolve esses pontos.",
        cta_ok:"Tudo certo por aqui. Quer revisar outras áreas de tecnologia da empresa?",
        btn_fix:"Quero corrigir", btn_ok:"Falar com a 3RL",
        bad_domain:"Digite um domínio válido, por exemplo: suaempresa.com.br",
        nx:"Este domínio não existe ou não está publicado.",
        err:"Não foi possível fazer a verificação agora. Tente novamente em instantes.",
        checking:"Verificando…", subj:"Verificação de e-mail - ",
        body:(d,r)=>`Olá! Usei o verificador de e-mail do site da 3RL.\n\nDomínio: ${d}\n${r}\n\nGostaria de ajuda para corrigir.`
      },
      en:{
        mx_ok:p=>["Incoming email",p?`Provider detected: ${p}.`:"Mail servers found."],
        mx_none:["Incoming email","No mail server found for this domain."],
        spf_good:["Sender authorization active","The domain defines which servers may send email on its behalf."],
        spf_all:["Permissive sender authorization","The current setup lets any server send email on behalf of the domain."],
        spf_noall:["Incomplete sender authorization","The setup does not say what to do with unauthorized servers."],
        spf_multi:["Conflicting sender authorization","Duplicate settings cancel out the protection."],
        spf_none:["Sender authorization missing","Any server can try to send email on behalf of the domain."],
        dkim_good:s=>["Digital signature active","Emails from the domain are digitally signed."],
        dkim_unk:["Digital signature not confirmed","We could not confirm a digital signature on the emails. It is worth a closer look."],
        dmarc_good:p=>["Fake email blocking active","Fake emails using the domain are blocked or sent to spam."],
        dmarc_none:["Fake email blocking off","The domain only monitors: fake emails still reach recipients."],
        dmarc_miss:["Fake email blocking missing","Mail providers do not know what to do with fake emails using the domain."],
        v_good:["Well protected","The domain has all three main protections active."],
        v_warn:["Partially protected","There are gaps that let fake emails through."],
        v_bad:["Open to spoofing","Scammers can send emails pretending to be the company."],
        cta_fix:"Want 3RL to fix this? The Secure Email package covers these points.",
        cta_ok:"All good here. Want to review other technology areas of your company?",
        btn_fix:"Fix it for me", btn_ok:"Talk to 3RL",
        bad_domain:"Enter a valid domain, e.g. yourcompany.com",
        nx:"This domain does not exist or is not published.",
        err:"The check could not be completed right now. Please try again shortly.",
        checking:"Checking…", subj:"Email check - ",
        body:(d,r)=>`Hello! I used the email checker on the 3RL website.\n\nDomain: ${d}\n${r}\n\nI would like help fixing it.`
      }
    };
    const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
    const ICON={good:"✓",warn:"!",bad:"✕",unk:"?",info:"i"};
    function msg(t){ $("vOut").innerHTML=`<div class="vrow s-info"><div class="dot2">i</div><div><span>${esc(t)}</span></div></div>`; }
    window.vRender=function(){
      if(!last) return;
      const T=L[lang];
      if(last.kind==="msg"){ msg(T[last.key]); return; }
      const r=last, rows=[];
      const row=(st,[t,d],code)=>rows.push({st,t,d,code});
      row(r.spf.st, T["spf_"+r.spf.k], r.spf.rec);
      row(r.dkim.st, r.dkim.st==="good"?T.dkim_good(r.dkim.sel.join(", ")):T.dkim_unk, null);
      row(r.dmarc.st, r.dmarc.k==="good"?T.dmarc_good(r.dmarc.p):T["dmarc_"+r.dmarc.k], r.dmarc.rec);
      row(r.mx.ok?"info":"warn", r.mx.ok?T.mx_ok(r.mx.prov):T.mx_none, null);
      const v=T["v_"+r.verdict];
      const resumo=rows.slice(0,3).map(x=>`- ${x.t}`).join("\n");
      const href="mailto:adm@3rl.com.br?subject="+encodeURIComponent(T.subj+r.domain)+"&body="+encodeURIComponent(T.body(r.domain,resumo));
      $("vOut").innerHTML=
        `<div class="verdict v-${r.verdict}"><div class="vi">${ICON[r.verdict]}</div><div><h3>${esc(v[0])} · ${esc(r.domain)}</h3><p>${esc(v[1])}</p></div></div>`+
        `<div class="vrows">`+rows.map(x=>`<div class="vrow s-${x.st}"><div class="dot2">${ICON[x.st]}</div><div><b>${esc(x.t)}</b><span>${esc(x.d)}</span></div></div>`).join("")+`</div>`+
        `<div class="vcta"><p>${esc(r.verdict==="good"?T.cta_ok:T.cta_fix)}</p><a class="btn" href="${href}">${esc(r.verdict==="good"?T.btn_ok:T.btn_fix)}</a></div>`;
    };
    async function check(domain){
      const [root,mx,dm]=await Promise.all([dns(domain,"TXT"),dns(domain,"MX"),dns("_dmarc."+domain,"TXT")]);
      if(root.Status===3 && mx.Status===3) return {kind:"msg",key:"nx"};
      const spfs=txts(root).filter(t=>/^v=spf1(\s|$)/i.test(t));
      let spf;
      if(!spfs.length) spf={st:"bad",k:"none"};
      else if(spfs.length>1) spf={st:"bad",k:"multi",rec:spfs.join(" | ")};
      else{ const t=spfs[0].toLowerCase().trim(), fin=t.split(/\s+/).pop();
        if(/^[+?]?all$/.test(fin)) spf={st:"warn",k:"all",rec:spfs[0]};
        else if(/^[-~]all$/.test(fin)||/redirect=/.test(t)) spf={st:"good",k:"good",rec:spfs[0]};
        else spf={st:"warn",k:"noall",rec:spfs[0]}; }
      const dms=txts(dm).filter(t=>/^v=dmarc1/i.test(t));
      let dmarc;
      if(!dms.length) dmarc={st:"bad",k:"miss"};
      else{ const p=((dms[0].match(/(?:^|;)\s*p\s*=\s*(\w+)/i)||[])[1]||"none").toLowerCase();
        dmarc=(p==="quarantine"||p==="reject")?{st:"good",k:"good",p,rec:dms[0]}:{st:"warn",k:"none",p,rec:dms[0]}; }
      const sels=await Promise.all(SEL.map(async s=>{ try{ const j=await dns(s+"._domainkey."+domain,"TXT"); const a=j.Answer||[];
        return a.some(x=>x.type===5||/p=/i.test(String(x.data)))?s:null; }catch(e){return null;} }));
      const found=sels.filter(Boolean);
      const dkim=found.length?{st:"good",sel:found}:{st:"unk"};
      const mxs=(mx.Answer||[]).filter(a=>a.type===15).map(a=>String(a.data).toLowerCase());
      let prov=null; for(const [re,n] of PROV){ if(mxs.some(m=>re.test(m))){prov=n;break;} }
      const sts=[spf.st,dmarc.st,dkim.st];
      const verdict=sts.includes("bad")?"bad":(sts.every(x=>x==="good")?"good":"warn");
      return {kind:"res",domain,spf,dkim,dmarc,mx:{ok:mxs.length>0,prov},verdict};
    }
    $("vForm").addEventListener("submit",async e=>{
      e.preventDefault();
      const d=clean($("vDomain").value), btn=$("vBtn");
      if(!d){ last={kind:"msg",key:"bad_domain"}; window.vRender(); return; }
      $("vDomain").value=d;
      const label=btn.textContent; btn.disabled=true; btn.innerHTML=`<span class="spin"></span>${esc(L[lang].checking)}`;
      try{ last=await check(d); }catch(err){ last={kind:"msg",key:"err"}; }
      btn.disabled=false; btn.textContent=label; window.vRender();
    });
  })();

  // calculadora
  (function(){
    if(!document.getElementById("qPeople")) return;
    const pairs=[["qPeople","nPeople"],["qHours","nHours"],["qCost","nCost"],["qAuto","nAuto"]].map(([r,n])=>[document.getElementById(r),document.getElementById(n)]);
    const $=id=>document.getElementById(id);
    const paint=r=>r.style.setProperty("--p",((r.value-r.min)/(r.max-r.min)*100)+"%");
    pairs.forEach(([r,n])=>{
      r.addEventListener("input",()=>{n.value=r.value;paint(r);window.calc();});
      n.addEventListener("input",()=>{const v=parseFloat(n.value);if(!isNaN(v)){r.value=Math.min(Math.max(v,+r.min),+r.max);paint(r);}window.calc();});
      paint(r);
    });
    const num=id=>{const v=parseFloat($(id).value);return isNaN(v)||v<0?0:v;};
    window.calc=function(){
      const en=lang==="en", loc=en?"en-US":"pt-BR", cur=en?"USD":"BRL";
      $("cur").textContent=en?"$":"R$";
      const money=v=>new Intl.NumberFormat(loc,{style:"currency",currency:cur,maximumFractionDigits:0}).format(v);
      const int=v=>new Intl.NumberFormat(loc,{maximumFractionDigits:0}).format(v);
      const p=num("nPeople"), h=num("nHours"), c=num("nCost"), a=Math.min(num("nAuto"),100)/100;
      const hYear=p*h*52, hMonth=hYear/12, cYear=hYear*c, cMonth=cYear/12;
      $("oYear").textContent=money(cYear);
      $("oMonthLine").textContent=(en?"That is about ":"Isso dá cerca de ")+money(cMonth)+(en?" per month.":" por mês.");
      $("oHours").textContent=int(hMonth)+" h";
      $("oDays").textContent=int(hMonth/8);
      $("oFreeH").textContent=int(hYear*a)+" h";
      $("oSave").textContent=money(cYear*a);
      const subj=en?"Automation - calculator":"Automação - calculadora";
      const body=en
        ?`Hello! I used the calculator on the 3RL website.\n\nTeam: ${p} people\nRepetitive tasks: ${h} h/week per person\nCost per hour: ${money(c)}\nEstimated yearly cost: ${money(cYear)}\n\nI would like to talk about automating these tasks.`
        :`Olá! Usei a calculadora do site da 3RL.\n\nEquipe: ${p} pessoas\nTarefas repetitivas: ${h} h/semana por pessoa\nCusto da hora: ${money(c)}\nCusto estimado por ano: ${money(cYear)}\n\nGostaria de conversar sobre a automação dessas tarefas.`;
      $("calcCta").href="mailto:adm@3rl.com.br?subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(body);
    };
    window.calc();
  })();

  // teste de maturidade
  const PACK_NAMES={"k2": {"pt": "E-mail Seguro", "en": "Secure Email"}, "k5": {"pt": "Privacidade e LGPD", "en": "Privacy & LGPD"}, "k6": {"pt": "Backup contra Ransomware", "en": "Ransomware-proof Backup"}, "k7": {"pt": "Acesso Seguro", "en": "Secure Access"}, "k8": {"pt": "Treinamento Antigolpe", "en": "Anti-Scam Training"}, "k9": {"pt": "Plano de Incidentes", "en": "Incident Plan"}};
  (function(){
    const form=document.getElementById("mForm"); if(!form) return;
    const qs=[...form.querySelectorAll(".mq")];
    const RISK={"k7": {"pt": "Contas sem proteção extra são a porta de entrada mais comum de invasões.", "en": "Accounts without extra protection are the most common way in for intruders."}, "k6": {"pt": "Sem cópias protegidas e testadas, um ataque pode apagar anos de trabalho.", "en": "Without protected and tested copies, an attack can wipe out years of work."}, "k8": {"pt": "Golpes que enganam a equipe causam prejuízo direto, sem invadir nada.", "en": "Scams that fool the team cause direct losses without breaking into anything."}, "k9": {"pt": "Sem regras e sem plano, um incidente vira improviso e o dano cresce.", "en": "Without rules or a plan, an incident turns into improvisation and damage grows."}, "k2": {"pt": "Golpistas podem enviar e-mails falsos em nome da empresa.", "en": "Scammers can send fake emails in the company's name."}, "k5": {"pt": "Dados pessoais sem controle trazem risco de vazamento e de sanções da LGPD.", "en": "Uncontrolled personal data brings leak risk and LGPD penalties."}};
    const $=id=>document.getElementById(id);
    const esc=t=>t.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
    window.mRender=function(){
      const en=lang==="en";
      let tw=0,got=0,answered=0; const gaps={};
      qs.forEach(q=>{
        const w=+q.dataset.w, c=q.querySelector("input:checked");
        q.classList.toggle("done",!!c);
        tw+=w;
        if(c){answered++; const v=+c.value; got+=w*v; if(v<1){const p=q.dataset.pack; gaps[p]=(gaps[p]||0)+w*(1-v);}}
      });
      $("mBar").style.width=(answered/qs.length*100)+"%";
      const out=$("mOut"), cta=$("mCta"), rs=$("mReset");
      if(answered<qs.length){
        out.innerHTML='<p class="r-sub">'+(en?`${answered} of ${qs.length} answered. Answer all questions to see your score.`:`${answered} de ${qs.length} respondidas. Responda todas para ver a sua nota.`)+'</p>';
        cta.hidden=true; rs.hidden=answered===0; return;
      }
      const score=Math.round(got/tw*100);
      const lvl=score>=75?(en?"Well on track":"Bem encaminhada"):score>=45?(en?"Evolving":"Em evolução"):(en?"Exposed":"Exposta");
      const lvlTxt=score>=75?(en?"Good foundations. A few adjustments make the company even harder to hit.":"Boa base. Alguns ajustes deixam a empresa ainda mais difícil de atingir.")
        :score>=45?(en?"There is protection, but with gaps that attackers often exploit.":"Existe proteção, mas com brechas que os golpistas costumam explorar.")
        :(en?"The company is exposed to the most common attacks and scams.":"A empresa está exposta aos ataques e golpes mais comuns.");
      const top=Object.entries(gaps).sort((a,b)=>b[1]-a[1]).slice(0,3);
      const name=k=>PACK_NAMES[k][en?"en":"pt"];
      let h=`<div class="big">${score}<span style="font-size:.45em">/100</span></div><div class="mlvl">${esc(lvl)}</div><p class="r-sub">${esc(lvlTxt)}</p>`;
      if(top.length){
        h+=`<ul class="mpri">`+top.map(([k])=>`<li><b>${esc(name(k))}</b>${esc(RISK[k][en?"en":"pt"])} <a href="/#solucoes">${en?"See package →":"Ver pacote →"}</a></li>`).join("")+`</ul>`;
      }
      out.innerHTML=h;
      const subj=(en?"Security test - score ":"Teste de segurança - nota ")+score;
      const body=en
        ?`Hello! I took the security test on the 3RL website.\n\nScore: ${score}/100 (${lvl})\nPriorities: ${top.map(([k])=>name(k)).join(", ")||"-"}\n\nCompany:\nNumber of employees:\n\nI would like to talk about improving these points.`
        :`Olá! Fiz o teste de segurança no site da 3RL.\n\nNota: ${score}/100 (${lvl})\nPrioridades: ${top.map(([k])=>name(k)).join(", ")||"-"}\n\nEmpresa:\nNúmero de colaboradores:\n\nGostaria de conversar sobre como melhorar esses pontos.`;
      cta.href="mailto:adm@3rl.com.br?subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(body);
      cta.hidden=false; rs.hidden=false;
    };
    form.addEventListener("change",window.mRender);
    $("mReset").addEventListener("click",()=>{form.reset();window.mRender();form.scrollIntoView({behavior:"smooth",block:"start"});});
    window.mRender();
  })();

  // animação de entrada
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }),{threshold:.12}) : null;
  document.querySelectorAll(".reveal").forEach(el=> io ? io.observe(el) : el.classList.add("in"));

  document.getElementById("yr").textContent = new Date().getFullYear();
