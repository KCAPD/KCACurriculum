const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu-button');const nav=document.querySelector('#main-nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.querySelectorAll('.skill-placeholders button').forEach((button,index)=>button.addEventListener('click',()=>{button.textContent=`Skill ${String(index+1).padStart(2,'0')} · progression coming next`;button.style.background='#ffd84d';}));
