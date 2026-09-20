const subjectSlug=document.body.dataset.subject;
const all=window.KCA_EXPERIENCES||[];
const maxYear=Number(document.body.dataset.maxYear||0);
const matches=all.filter(x=>{
  if(!(x.subjects||[]).includes(subjectSlug)) return false;
  if(!maxYear) return true;
  // Some subject curricula end before Year 6. On those pages, show only
  // experiences whose stated age range sits within that curriculum range.
  // Whole-school experiences are intentionally omitted because they extend beyond it.
  const tags=x.tags||[];
  const yearTags=tags.filter(tag=>/^year-\d+$/.test(tag));
  const hasEarlyYears=tags.includes('nursery')||tags.includes('reception');
  if(tags.includes('whole-school')) return false;
  if(yearTags.some(tag=>Number(tag.slice(5))>maxYear)) return false;
  return hasEarlyYears||yearTags.length>0;
});
const grid=document.getElementById('subject-experience-grid');
const empty=document.getElementById('subject-experience-empty');
if(grid){grid.innerHTML=matches.map(x=>`<article class="subject-experience-card"><div class="subject-experience-top"><span>${x.icon}</span><small>${x.audience}</small></div><h3>${x.title}</h3><p>${x.summary}</p>${x.partner?`<strong>With ${x.partner}</strong>`:''}</article>`).join('');}
if(empty)empty.hidden=matches.length>0;
