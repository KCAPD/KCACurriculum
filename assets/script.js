const yearData = {
  "Reception": {title:"A year of curiosity, stories and discovery", desc:"Children build the foundations of communication, early reading, number, creativity and understanding the world.", questions:["Who am I and where do I belong?","What changes around us?","How do stories help us imagine?","What makes something grow?","Where could a journey take us?","How can we celebrate together?"]},
  "Year 1": {title:"Building strong foundations", desc:"Children strengthen early knowledge and begin to make purposeful links between subjects.", questions:["What makes a place feel like home?","How has childhood changed?","Why do seasons matter?","What can we learn from animals?","How do people tell stories?","How can we make a difference?"]},
  "Year 2": {title:"Exploring people, places and change", desc:"Children deepen their knowledge through carefully connected enquiries and experiences.", questions:["How do communities grow?","What makes someone brave?","Why does our world change?","How do living things survive?","What can objects tell us?","How should we care for our planet?"]},
  "Year 3": {title:"Making connections across the curriculum", desc:"Children encounter increasingly complex ideas and communicate their learning with confidence.", questions:["What makes a civilisation powerful?","How does belief shape life?","Why do people move?","What lies beneath our feet?","How does creativity change minds?","What does it mean to belong?"]},
  "Year 4": {title:"Thinking deeply and questioning the world", desc:"Children build detailed subject knowledge and use it to explain, compare and create.", questions:["How do societies rise and fall?","Can one voice create change?","How does energy shape our lives?","What makes a place unique?","How do ideas travel?","What should we protect?"]},
  "Year 5": {title:"Applying knowledge with growing independence", desc:"Children tackle challenging questions and draw together learning from across the curriculum.", questions:["What drives people to explore?","How does power affect people?","Can progress cost too much?","Why do environments matter?","How do stories shape identity?","What is our responsibility to others?"]},
  "Year 6": {title:"Preparing children to understand and influence the world", desc:"Children consolidate powerful knowledge, develop independence and present sophisticated final outcomes.", questions:["How can one person change the world?","What makes leadership effective?","How does conflict shape history?","Can science solve every problem?","Whose story gets remembered?","What legacy will we leave?"]}
};
const presentations=["Gallery or exhibition","Performance for an audience","Published writing","Debate or speech","Film or digital showcase","Celebration of learning"];
const grid=document.getElementById('questions-grid');
function renderYear(year){const d=yearData[year];document.getElementById('year-kicker').textContent=`${year} Curriculum`;document.getElementById('year-title').textContent=d.title;document.getElementById('year-description').textContent=d.desc;const slug=year.toLowerCase().replace(' ','-');const link=document.getElementById('year-page-link');if(link)link.href=`year-groups/${slug}.html`;grid.innerHTML=d.questions.map((q,i)=>`<article class="question-card"><span class="term-tag">${['Autumn 1','Autumn 2','Spring 1','Spring 2','Summer 1','Summer 2'][i]}</span><h4>${q}</h4><p>Subjects, key texts, experiences and knowledge will be added here.</p><span class="presentation-label">Final outcome: ${presentations[i]}</span></article>`).join('')}
renderYear('Reception');
document.querySelectorAll('.year-tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.year-tabs button').forEach(b=>b.setAttribute('aria-selected','false'));btn.setAttribute('aria-selected','true');renderYear(btn.dataset.year)}));
const subjects=['English','Mathematics','Science','Art & Design','Computing','Design & Technology','Geography','History','Music','Physical Education','Personal Development','Religious Education','Languages','British Sign Language','Oracy & Drama','Early Years'];
document.getElementById('subjects-grid').innerHTML=subjects.map(s=>`<article class="subject-card"><h3>${s}</h3><p>Intent, progression, end points and curriculum documentation.</p><a href="#" aria-disabled="true">Download coming soon</a></article>`).join('');
document.querySelectorAll('.skill-card').forEach(card=>card.addEventListener('click',()=>{
  document.querySelectorAll('.skill-card').forEach(c=>c.classList.remove('active'));
  card.classList.add('active');
  const n=card.dataset.skill;
  document.getElementById('skill-preview-title').textContent=`Fundamental Skill ${n}`;
  document.getElementById('skill-preview-copy').textContent='The selected skill will show how expectations build in clear, child-friendly steps from Reception through to Year 6.';
}));

const pillarData={
  1:{
    title:'Teaching pupils how to learn',
    intro:'We explicitly teach children the habits, strategies and language that help them become increasingly independent learners.',
    why:'Children make stronger progress when they understand how learning works, can select useful strategies and reflect honestly on what helps them improve.',
    practice:['Retrieval and deliberate practice that strengthen memory','Clear modelling, scaffolding and gradual release towards independence','Metacognition, reflection and purposeful learning talk','Opportunities to plan, monitor and evaluate learning'],
    links:['Fundamental skills','Daily teaching','Big questions','Learning presentations']
  },
  2:{
    title:'Supporting children to discover their interests',
    intro:'Our curriculum opens doors to subjects, ideas, people and experiences that children may not otherwise encounter.',
    why:'Discovering a genuine interest can transform confidence, motivation and future ambition. Every child should have opportunities to find the areas in which they can flourish.',
    practice:['A broad and balanced subject entitlement','Rich encounters with art, music, sport, drama, science and technology','Visits, visitors and partnerships with specialist organisations','Choice and agency within carefully designed learning'],
    links:['Art Week','Bright Futures Festival','Clubs and enrichment','Trips and partnerships']
  },
  3:{
    title:'Building cross-curricular skills into a creative curriculum',
    intro:'We create meaningful connections between subjects while protecting the distinctive knowledge, vocabulary and methods of each discipline.',
    why:'Children understand more deeply when they can recognise relationships, transfer useful skills and apply knowledge in purposeful contexts.',
    practice:['Half-termly big questions that give learning coherence','Authentic links between subjects rather than superficial themes','Repeated opportunities to communicate, create, research and solve problems','Final outcomes that draw together learning from across a unit'],
    links:['Big questions','Subject knowledge','Fundamental skills','Learning presentations']
  },
  4:{
    title:'Fostering a culture where lifelong learning is embraced',
    intro:'We nurture curiosity, resilience and the belief that learning is an ongoing and rewarding part of life.',
    why:'Children need the confidence to respond to challenge, remain curious and continue developing long after a particular lesson or stage of education has ended.',
    practice:['Adults modelling curiosity and continued professional learning','Questions that invite investigation, debate and reflection','A culture in which effort, revision and improvement are valued','Celebrating the process of learning as well as final achievement'],
    links:['School values','Pupil reflection','Independent learning','Community learning']
  },
  5:{
    title:'Creating a technology-rich environment',
    intro:'Technology is used thoughtfully as a tool for creativity, communication, research, problem-solving and access.',
    why:'Digital confidence is an essential part of modern life, but children also need the judgement to choose technology purposefully, responsibly and safely.',
    practice:['High-quality computing knowledge and digital literacy','Technology used to enhance learning rather than replace strong teaching','Creative digital outcomes, including film, audio, coding and presentation','Explicit teaching about online safety, responsibility and critical evaluation'],
    links:['Computing','Digital literacy','Online safety','Learning presentations']
  }
};

const pillarDialog=document.getElementById('pillar-dialog');
const pillarClose=document.querySelector('.pillar-dialog-close');
function openPillar(card){
  const data=pillarData[card.dataset.pillar];
  if(!data)return;
  document.getElementById('dialog-title').textContent=data.title;
  document.getElementById('dialog-intro').textContent=data.intro;
  document.getElementById('dialog-why').textContent=data.why;
  document.getElementById('dialog-practice').innerHTML=data.practice.map(item=>`<li>${item}</li>`).join('');
  document.getElementById('dialog-links').innerHTML=data.links.map(item=>`<span>${item}</span>`).join('');
  pillarDialog.dataset.pillar=card.dataset.pillar;
  if(typeof pillarDialog.showModal==='function') pillarDialog.showModal();
}
document.querySelectorAll('[data-pillar]').forEach(card=>card.addEventListener('click',()=>openPillar(card)));
pillarClose.addEventListener('click',()=>pillarDialog.close());
pillarDialog.addEventListener('click',event=>{
  const rect=pillarDialog.getBoundingClientRect();
  const inside=event.clientX>=rect.left&&event.clientX<=rect.right&&event.clientY>=rect.top&&event.clientY<=rect.bottom;
  if(!inside) pillarDialog.close();
});
pillarDialog.addEventListener('cancel',event=>{event.preventDefault();pillarDialog.close();});

const skillDialog=document.getElementById('skill-dialog');
const skillClose=document.querySelector('.skill-dialog-close');
if(skillClose&&skillDialog)skillClose.addEventListener('click',()=>skillDialog.close());

const menu=document.querySelector('.menu-button'),nav=document.querySelector('.site-nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});document.querySelectorAll('.site-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
