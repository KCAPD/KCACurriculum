const subjectSlug=document.body.dataset.subject;
const all=window.KCA_EXPERIENCES||[];
const matches=all.filter(x=>(x.subjects||[]).includes(subjectSlug));
const grid=document.getElementById('subject-experience-grid');
const empty=document.getElementById('subject-experience-empty');
if(grid){grid.innerHTML=matches.map(x=>`<article class="subject-experience-card"><div class="subject-experience-top"><span>${x.icon}</span><small>${x.audience}</small></div><h3>${x.title}</h3><p>${x.summary}</p>${x.partner?`<strong>With ${x.partner}</strong>`:''}</article>`).join('');}
if(empty)empty.hidden=matches.length>0;

// v3.32 — curriculum-page sections appear only when real documents are present.
document.querySelectorAll('[data-document-section]').forEach(section=>{
  const hasDocument=Boolean(section.querySelector('a[data-document-link], a[href$=".pdf"], a[href*=".pdf?"]'));
  section.hidden=!hasDocument;
});

document.querySelectorAll('.content').forEach(content=>{
  const visible=[...content.querySelectorAll(':scope > article')].filter(article=>!article.hidden);
  content.classList.toggle('has-two-sections',visible.length===2);
  content.classList.toggle('has-one-section',visible.length===1);
});
