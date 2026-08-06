const yearData = {
  "Nursery": {
    "title": "Growing, exploring and belonging",
    "desc": "Playful foundations for communication, curiosity, confidence and early learning.",
    "questions": [
      "Who am I?",
      "What can I discover?",
      "How do we care for one another?",
      "What changes around us?",
      "How can stories take us somewhere new?",
      "What can I create?"
    ]
  },
  "Reception": {
    "title": "A year of wonder and growing independence",
    "desc": "Children build secure foundations through purposeful play, stories, talk, exploration and memorable shared experiences.",
    "questions": [
      "What makes me unique?",
      "How do stories help us understand?",
      "What changes around us?",
      "How can we care for living things?",
      "Where can our imagination take us?",
      "How have I grown?"
    ]
  },
  "Year 1": {
    "title": "Building strong foundations",
    "desc": "In Year 1, children build strong foundations through six connected learning journeys. Each unit begins with a memorable experience and culminates in a presentation for a real audience.",
    "questions": [
      "Where does our food come from?",
      "What shapes our identity?",
      "How can we use materials to solve problems?",
      "What can I observe in the natural world?",
      "What makes our homes special?",
      "What features make where we live unique?"
    ]
  },
  "Year 2": {
    "title": "Growing curiosity and confidence",
    "desc": "Children begin to connect ideas across subjects and communicate their learning with increasing independence.",
    "questions": [
      "How can a community change?",
      "Why do people tell stories?",
      "What makes somewhere special?",
      "How do living things survive?",
      "How have inventions changed life?",
      "How can we protect our world?"
    ]
  },
  "Year 3": {
    "title": "Making connections",
    "desc": "Year 3 connects local, national and global learning. Children investigate London, journeys, prehistory, water, climate and Ancient Egypt before sharing their learning with authentic audiences.",
    "questions": [
      "What changes can I observe in London?",
      "How do different types of journeys affect us?",
      "What do I know about the Stone Age?",
      "How does the water cycle impact the world?",
      "How are climates around the world different?",
      "What do I know about the Ancient Egyptians?"
    ]
  },
  "Year 4": {
    "title": "Deepening knowledge and independence",
    "desc": "Children investigate increasingly complex ideas, make connections across disciplines and communicate with confidence.",
    "questions": [
      "How does power shape communities?",
      "What can journeys teach us?",
      "Why do civilisations grow?",
      "How does energy change our lives?",
      "What connects people and places?",
      "How can creativity influence change?"
    ]
  },
  "Year 5": {
    "title": "Investigating the world",
    "desc": "Year 5’s curriculum moves between natural disasters, early British history, global environments, mythology, space and Tudor England. Every unit has a distinct audience and final presentation.",
    "questions": [
      "What do I know about volcanoes and earthquakes?",
      "Who were the Anglo-Saxons and what impact did they have on life today?",
      "What relationship do animals, including humans, have with nature?",
      "What have humans discovered about Earth and Space?",
      "How can we look after our Earth and Space?",
      "Why is Tudor history so significant?"
    ]
  },
  "Year 6": {
    "title": "Leading learning and preparing for the future",
    "desc": "Year 6 brings together ambitious historical, geographical and scientific learning with increasingly sophisticated writing and presentation. The year culminates in transition and a final performance.",
    "questions": [
      "What do we know about the Benin Kingdom?",
      "Why did people leave their homes in the Caribbean to come to Britain?",
      "What did the world learn from World War 1?",
      "How did the community handle the impact of World War 2?",
      "How did the community handle the impact of World War 2?",
      "How can I prepare for my future?"
    ]
  }
};
const presentations=["Gallery or exhibition","Performance for an audience","Published writing","Debate or speech","Film or digital showcase","Celebration of learning"];
const grid=document.getElementById('questions-grid');
function renderYear(year){const d=yearData[year];document.getElementById('year-kicker').textContent=`${year} Curriculum`;document.getElementById('year-title').textContent=d.title;document.getElementById('year-description').textContent=d.desc;const slug=year.toLowerCase().replace(' ','-');const link=document.getElementById('year-page-link');if(link)link.href=`year-groups/${slug}.html`;grid.innerHTML=d.questions.map((q,i)=>`<article class="question-card"><span class="term-tag">${['Autumn 1','Autumn 2','Spring 1','Spring 2','Summer 1','Summer 2'][i]}</span><h4>${q}</h4><p>Subjects, key texts, experiences and knowledge will be added here.</p><span class="presentation-label">Final outcome: ${presentations[i]}</span></article>`).join('')}
renderYear('Nursery');
document.querySelectorAll('.year-tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.year-tabs button').forEach(b=>b.setAttribute('aria-selected','false'));btn.setAttribute('aria-selected','true');renderYear(btn.dataset.year)}));
const subjects=[
  ['English','english'],['Mathematics','mathematics'],['Science','science'],['History','history'],['Geography','geography'],['Art','art'],['Design & Technology','design-technology'],['Music','music'],['Religious Education','religious-education'],['Computing','computing'],['PSHE','pshe'],['Physical Education','physical-education'],['French','french'],['British Sign Language','british-sign-language']
];
document.getElementById('subjects-grid').innerHTML=subjects.map(([name,slug])=>`<article class="subject-card"><h3>${name}</h3><p>Subject vision, intent, progression and curriculum documents.</p><a href="subjects/${slug}.html">Explore subject →</a></article>`).join('');


const fundamentalStages = {
  "Nursery": {
    title: "The starting points for confident learning",
    description: "Children begin by developing the physical control and confidence needed to communicate meaning through marks and early writing.",
    current: ["Make meaningful marks", "Write my name", "Grip a pencil"],
    prior: [], image: "stage-01.jpg"
  },
  "Reception": {
    title: "Turning early marks into purposeful writing",
    description: "Children apply their early physical skills as they begin to form letters and numbers, spell phonetically and compose simple sentences.",
    current: ["Formation of letters and numbers is mostly correct", "Make phonetically plausible attempts at spelling", "Finger spaces", "Write simple sentences"],
    prior: ["Make meaningful marks", "Write my name", "Grip a pencil"], image: "stage-02.jpg"
  },
  "Year 1": {
    title: "Establishing clear and consistent writing habits",
    description: "Children strengthen sentence punctuation, letter formation and the organisation of written mathematics.",
    current: ["Capital letter at the beginning of a sentence", "Full stops", "Finger spaces", "Letters are correctly formed and sit on the line", "In maths, one number per box"],
    prior: ["Phonetically plausible spelling", "Write simple sentences", "Mostly correct letter and number formation"], image: "stage-03.jpg"
  },
  "Year 2": {
    title: "Building control across sentences",
    description: "Children use a wider range of sentence conventions and begin to maintain tense consistently across their writing.",
    current: ["Capital letters for sentences, names and ‘I’", "Full stops", "Finger spaces", "Conjunctions: and / but / so / because", "Consistent past and present tense", "Letters correctly formed and sitting on the line", "In maths, one number per box"],
    prior: ["Capital letter at the beginning of a sentence", "Full stops", "Finger spaces", "Secure letter formation"], image: "stage-04.jpg"
  },
  "Year 3": {
    title: "Organising and connecting ideas",
    description: "Children build longer pieces of writing using paragraphs, commas and simple and compound sentence structures.",
    current: ["Capital letters", "Full stops", "Finger spaces", "Simple and compound sentences (FANBOYS)", "Consistent past and present tense", "Commas in lists", "Paragraphs", "Letters correctly formed and sitting on the line"],
    prior: ["Conjunctions: and / but / so / because", "Consistent verb tense", "Secure sentence punctuation"], image: "stage-05.jpg"
  },
  "Year 4": {
    title: "Developing fluency and grammatical range",
    description: "Children extend sentence control, begin joined handwriting and use speech punctuation, apostrophes and standard English forms.",
    current: ["Capital letters", "Full stops", "Finger spaces", "Consistent verb tense", "Commas in lists", "Paragraphs", "Simple and compound sentences (FANBOYS)", "Apostrophes for contraction", "Joined handwriting", "Standard English forms", "Inverted commas to mark speech"],
    prior: ["Simple and compound sentences", "Paragraphs", "Commas in lists", "Secure letter formation"], image: "stage-06.jpg"
  },
  "Year 5": {
    title: "Writing with increasing sophistication",
    description: "Children combine sentence forms, use punctuation for a wider range of purposes and sustain accurate standard English.",
    current: ["Capital letters", "Full stops", "Finger spaces", "Consistent verb tenses", "Commas for lists and fronted adverbials", "Paragraphs", "Simple, compound and complex sentences (FANBOYS and ISAWAWABUB)", "Apostrophes for contractions and possession", "Joined handwriting", "Standard English forms", "Inverted commas with appropriate punctuation"],
    prior: ["Apostrophes for contraction", "Joined handwriting", "Speech punctuation", "Simple and compound sentences"], image: "stage-07.jpg"
  },
  "Year 6": {
    title: "Writing with precision, control and purpose",
    description: "Children select language and punctuation deliberately, adapting register and sentence structure to suit audience and purpose.",
    current: ["Capital letters", "Full stops", "Finger spaces", "Consistent verb tenses", "Commas for lists, fronted adverbials, clauses and parenthesis", "Paragraphs", "Simple, compound and complex sentences (FANBOYS and ISAWAWABUB)", "Apostrophes for contractions and possession", "Inverted commas with appropriate punctuation", "Joined handwriting", "Standard English forms", "Correct formal and informal register"],
    prior: ["Complex sentence structures", "Apostrophes for possession", "Appropriate speech punctuation", "Commas for fronted adverbials"], image: "stage-08.jpg"
  }
};

function renderFundamentalStage(stageName) {
  const stage = fundamentalStages[stageName];
  if (!stage) return;
  document.getElementById('fundamental-stage-kicker').textContent = `Fundamental Skills · ${stageName}`;
  document.getElementById('fundamental-stage-title').textContent = stage.title;
  document.getElementById('fundamental-stage-description').textContent = stage.description;
  document.getElementById('fundamental-current-skills').innerHTML = stage.current.map(skill => `<span>${skill}</span>`).join('');
  const priorSection = document.getElementById('fundamental-prior-section');
  document.getElementById('fundamental-prior-skills').innerHTML = stage.prior.map(skill => `<span>${skill}</span>`).join('');
  priorSection.hidden = stage.prior.length === 0;
}

document.querySelectorAll('.tree-stage').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tree-stage').forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
    renderFundamentalStage(button.dataset.stage);
  });
});
renderFundamentalStage('Nursery');

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


const experienceFilters=document.querySelectorAll('.experience-filter');
const experienceItems=document.querySelectorAll('.experience-item');
experienceFilters.forEach(button=>button.addEventListener('click',()=>{
  experienceFilters.forEach(item=>{item.classList.remove('active');item.setAttribute('aria-pressed','false')});
  button.classList.add('active');button.setAttribute('aria-pressed','true');
  const filter=button.dataset.filter;
  experienceItems.forEach(card=>{
    const audiences=(card.dataset.audience||'').split(' ');
    card.hidden=filter!=='all'&&!audiences.includes(filter);
  });
}));
