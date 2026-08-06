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



const experienceData = [{"title": "Bright Futures Festival", "icon": "💼", "audience": "Whole school", "tags": ["whole-school", "leadership"], "summary": "A school-wide careers festival connecting learning with future possibilities.", "detail": "Children meet professionals from a wide range of industries, take part in practical workshops and explore how knowledge, interests and personal qualities can shape future pathways.", "pillars": ["Discovering interests", "Technology-rich learning"], "values": ["Aspiration", "Courage"]}, {"title": "Bright Futures Academy", "icon": "🧑‍💼", "audience": "Year 6", "tags": ["year-6", "leadership"], "summary": "A real-world job and leadership scheme for our oldest pupils.", "detail": "Pupils prepare applications, attend interviews and take on meaningful responsibilities across school, developing organisation, teamwork, reliability and professional confidence.", "pillars": ["Learning how to learn", "Discovering interests"], "values": ["Integrity", "Aspiration"]}, {"title": "Arts Week", "icon": "🎨", "audience": "Whole school", "tags": ["whole-school", "performance"], "summary": "A celebration of creativity culminating in an exhibition at Central Saint Martins.", "detail": "Children work across visual art, music, drama and dance before sharing ambitious outcomes with families and the wider community in a professional gallery setting.", "pillars": ["Discovering interests", "Cross-curricular skills"], "values": ["Aspiration", "Courage"]}, {"title": "Anti-Bullying Week", "icon": "🤝", "audience": "Whole school", "tags": ["whole-school", "leadership"], "summary": "A focused week developing respectful, safe and inclusive relationships.", "detail": "Assemblies, workshops and class activities help pupils recognise bullying, understand its impact and practise the words and actions that make our community safe and kind.", "pillars": ["Lifelong learning"], "values": ["Respect", "Kindness", "Courage"]}, {"title": "Songs Under the Tree", "icon": "🎄", "audience": "Key Stage 2", "tags": ["year-3", "year-4", "year-5", "year-6", "performance"], "summary": "A festive concert beneath the Christmas tree in Coal Drops Yard.", "detail": "Key Stage 2 pupils perform for families, visitors and the local community, developing ensemble discipline, confidence and the joy of shared musical performance.", "pillars": ["Discovering interests", "Cross-curricular skills"], "values": ["Courage", "Kindness"]}, {"title": "Christmas Productions", "icon": "⭐", "audience": "EYFS & Key Stage 1", "tags": ["nursery", "reception", "year-1", "year-2", "performance"], "summary": "Joyful productions that build voice, teamwork and stage confidence.", "detail": "Our youngest pupils sing, speak and perform for families, learning how rehearsal, cooperation and courage combine to create a memorable shared outcome.", "pillars": ["Learning how to learn", "Discovering interests"], "values": ["Courage", "Endurance"]}, {"title": "Year 6 Production", "icon": "🎭", "audience": "Year 6", "tags": ["year-6", "performance"], "summary": "A full-scale musical production involving every Year 6 pupil.", "detail": "Acting, singing, dancing and backstage responsibilities combine in an unforgettable final shared achievement that celebrates pupils' creativity and confidence.", "pillars": ["Cross-curricular skills", "Lifelong learning"], "values": ["Courage", "Endurance", "Aspiration"]}, {"title": "Annual West End Musical", "icon": "🎟️", "audience": "Whole school", "tags": ["whole-school", "performance", "trip"], "summary": "Every pupil experiences the excitement of a professional musical.", "detail": "A whole-school theatre visit enriches storytelling, music, performance and cultural understanding while giving children access to world-class live theatre.", "pillars": ["Discovering interests"], "values": ["Aspiration", "Respect"]}, {"title": "Online Safety Day", "icon": "🔒", "audience": "Whole school", "tags": ["whole-school", "stem"], "summary": "Practical learning for safe, responsible and confident digital lives.", "detail": "Age-appropriate workshops and family learning help children understand digital risks, make thoughtful choices online and know when and how to seek support.", "pillars": ["Technology-rich learning"], "values": ["Integrity", "Respect"]}, {"title": "World Book Day & Author Visit", "icon": "📚", "audience": "Whole school", "tags": ["whole-school"], "summary": "A joyful celebration of books, authors and reading identities.", "detail": "Children celebrate stories through costumes, shared reading and workshops with a published author, discovering the craft behind books and strengthening their identity as readers and writers.", "pillars": ["Learning how to learn", "Discovering interests"], "values": ["Aspiration", "Kindness"]}, {"title": "Science Week", "icon": "🔬", "audience": "Whole school", "tags": ["whole-school", "stem"], "summary": "Investigations and challenges that put scientific enquiry centre stage.", "detail": "Practical experiments and STEM challenges encourage curiosity, collaboration and disciplined enquiry as pupils test ideas and communicate findings.", "pillars": ["Learning how to learn", "Cross-curricular skills"], "values": ["Endurance", "Aspiration"]}, {"title": "Instrumental Tuition", "icon": "🎼", "audience": "Years 4–6", "tags": ["year-4", "year-5", "year-6", "performance"], "summary": "Fully funded instrumental learning for every pupil in Years 4–6.", "detail": "Regular tuition develops musical knowledge, disciplined practice, ensemble skills and the confidence to perform for others.", "pillars": ["Discovering interests", "Lifelong learning"], "values": ["Endurance", "Aspiration"]}, {"title": "LAMDA Examinations", "icon": "🎤", "audience": "Years 3–5", "tags": ["year-3", "year-4", "year-5", "performance"], "summary": "Fully funded speaking and performance qualifications.", "detail": "Structured teaching and nationally recognised examinations develop voice, interpretation, communication and confident public performance.", "pillars": ["Learning how to learn", "Cross-curricular skills"], "values": ["Courage", "Endurance"]}, {"title": "Swimming", "icon": "🏊", "audience": "Every year group", "tags": ["whole-school", "nursery", "reception", "year-1", "year-2", "year-3", "year-4", "year-5", "year-6"], "summary": "Progressive swimming provision across every year group.", "detail": "Children build water confidence, technique and essential safety knowledge through regular high-quality instruction across their journey through KCA.", "pillars": ["Lifelong learning"], "values": ["Courage", "Endurance"]}, {"title": "Year 6 Residential to France", "icon": "🇫🇷", "audience": "Year 6", "tags": ["year-6", "trip", "leadership"], "summary": "An immersive international residential developing independence and resilience.", "detail": "Pupils travel to France, experience another culture and build confidence through shared challenges, new responsibilities and memorable experiences with classmates.", "pillars": ["Lifelong learning", "Discovering interests"], "values": ["Courage", "Respect", "Endurance"]}, {"title": "Outdoor Classroom Day", "icon": "🌳", "audience": "Whole school", "tags": ["whole-school", "stem"], "summary": "A day when every class takes purposeful learning outdoors.", "detail": "The school grounds and local environment become spaces for observation, enquiry, creativity and collaboration across the curriculum.", "pillars": ["Cross-curricular skills", "Lifelong learning"], "values": ["Kindness", "Respect"]}, {"title": "Kentish Town City Farm", "icon": "🐑", "audience": "Year 1", "tags": ["year-1", "trip", "stem"], "summary": "First-hand learning about animals, farming and where food comes from.", "detail": "Pupils encounter a working city farm, ask questions and connect classroom learning about food, animals and habitats with direct observation.", "pillars": ["Discovering interests", "Cross-curricular skills"], "values": ["Respect", "Kindness"]}, {"title": "St Pancras Church Visit", "icon": "⛪", "audience": "Year 1", "tags": ["year-1", "trip"], "summary": "A local visit supporting learning about faith, community and belonging.", "detail": "Children explore a place of worship, observe its features and learn how religious communities gather, celebrate and care for one another.", "pillars": ["Cross-curricular skills"], "values": ["Respect", "Kindness"]}, {"title": "London Zoo: ZooTown", "icon": "🦁", "audience": "Year 1", "tags": ["year-1", "trip", "stem"], "summary": "A living-world experience focused on animals, habitats and care.", "detail": "Children observe animals directly and deepen scientific understanding through discussion, classification and questions about habitats and conservation.", "pillars": ["Discovering interests", "Learning how to learn"], "values": ["Respect", "Aspiration"]}, {"title": "Great Fire of London Workshop", "icon": "🔥", "audience": "Year 1", "tags": ["year-1", "trip", "performance"], "summary": "An immersive drama workshop bringing a major historical event to life.", "detail": "Through role play, storytelling and historical detail, pupils explore the events and human experiences of the Great Fire of London.", "pillars": ["Cross-curricular skills"], "values": ["Courage", "Endurance"]}, {"title": "Water Safety Theatre", "icon": "🛟", "audience": "Year 2", "tags": ["year-2", "trip", "performance"], "summary": "A theatre experience combining storytelling with essential water safety.", "detail": "Pupils learn practical safety messages through an engaging performance in the local community, helping important knowledge become memorable.", "pillars": ["Lifelong learning", "Cross-curricular skills"], "values": ["Courage", "Respect"]}, {"title": "Canal Walk & Workshop", "icon": "🚤", "audience": "Year 2", "tags": ["year-2", "trip", "stem"], "summary": "Local fieldwork exploring waterways, place and change.", "detail": "Children investigate the Regent's Canal through observation and guided activities, connecting geography, history and the local environment.", "pillars": ["Cross-curricular skills", "Learning how to learn"], "values": ["Respect", "Aspiration"]}, {"title": "British Library: Voyage into Maps", "icon": "🗺️", "audience": "Year 3", "tags": ["year-3", "trip"], "summary": "A library workshop exploring maps, journeys and how places are represented.", "detail": "Pupils work with collections and expert educators to interpret maps and deepen understanding of journeys, scale and place.", "pillars": ["Learning how to learn", "Discovering interests"], "values": ["Aspiration", "Respect"]}, {"title": "Islington Synagogue", "icon": "✡️", "audience": "Year 3", "tags": ["year-3", "trip"], "summary": "A visit supporting respectful understanding of Jewish faith and practice.", "detail": "Children explore a synagogue, learn from members of the community and connect classroom RE with a living place of worship.", "pillars": ["Cross-curricular skills"], "values": ["Respect", "Kindness"]}, {"title": "London Canal Museum", "icon": "🏛️", "audience": "Year 3", "tags": ["year-3", "trip"], "summary": "Local history and geography explored through London's canal story.", "detail": "Pupils investigate how canals shaped movement, work and communities, linking museum evidence with their water-cycle and local-area learning.", "pillars": ["Cross-curricular skills", "Discovering interests"], "values": ["Aspiration", "Respect"]}, {"title": "London Wetland Centre", "icon": "🦆", "audience": "Year 3", "tags": ["year-3", "trip", "stem"], "summary": "Fieldwork exploring habitats, water and environmental systems.", "detail": "Children observe wetland environments, gather evidence and connect science and geography through first-hand ecological study.", "pillars": ["Learning how to learn", "Cross-curricular skills"], "values": ["Respect", "Endurance"]}, {"title": "St Pancras Gardens", "icon": "🌿", "audience": "Year 4", "tags": ["year-4", "trip", "stem"], "summary": "Local fieldwork using a historic green space as a learning resource.", "detail": "Pupils observe, record and interpret features of the local environment while making links across history, geography and science.", "pillars": ["Cross-curricular skills"], "values": ["Respect", "Aspiration"]}, {"title": "Neasden Temple", "icon": "🛕", "audience": "Year 4", "tags": ["year-4", "trip"], "summary": "An immersive visit deepening understanding of Hindu belief and practice.", "detail": "Children learn from the architecture, objects and community of the temple, building respectful religious literacy through direct experience.", "pillars": ["Discovering interests", "Cross-curricular skills"], "values": ["Respect", "Kindness"]}, {"title": "Eden Project Workshop", "icon": "🌱", "audience": "Year 4", "tags": ["year-4", "stem"], "summary": "Expert-led environmental learning connected to sustainability.", "detail": "An interactive workshop helps pupils explore ecosystems, human impact and practical responses to environmental challenges.", "pillars": ["Technology-rich learning", "Cross-curricular skills"], "values": ["Aspiration", "Integrity"]}, {"title": "Natural History Museum", "icon": "🌋", "audience": "Year 5", "tags": ["year-5", "trip", "stem"], "summary": "Museum learning focused on volcanoes, earthquakes and our changing planet.", "detail": "Pupils encounter geological evidence and collections that deepen their understanding of natural disasters and Earth processes.", "pillars": ["Discovering interests", "Learning how to learn"], "values": ["Aspiration", "Endurance"]}, {"title": "British Museum", "icon": "🏺", "audience": "Year 5", "tags": ["year-5", "trip"], "summary": "World-class collections supporting historical enquiry and interpretation.", "detail": "Children examine artefacts as evidence, ask historical questions and connect their curriculum learning with objects of global significance.", "pillars": ["Learning how to learn", "Discovering interests"], "values": ["Respect", "Aspiration"]}, {"title": "National Portrait Gallery", "icon": "🖼️", "audience": "Year 5", "tags": ["year-5", "trip"], "summary": "Portraiture, identity and history explored through a national collection.", "detail": "Pupils study artistic choices and the stories portraits tell, enriching both art and Tudor learning through direct engagement with significant works.", "pillars": ["Cross-curricular skills", "Discovering interests"], "values": ["Aspiration", "Respect"]}, {"title": "Windrush Voices at the British Library", "icon": "🎙️", "audience": "Year 6", "tags": ["year-6", "trip"], "summary": "Archive voices and stories deepen learning about the Windrush generation.", "detail": "Pupils engage with first-hand testimony and historical sources, developing empathy and a richer understanding of migration and modern Britain.", "pillars": ["Learning how to learn", "Cross-curricular skills"], "values": ["Respect", "Integrity", "Kindness"]}, {"title": "Camden Junior Citizenship", "icon": "🏙️", "audience": "Year 6", "tags": ["year-6", "trip", "leadership"], "summary": "Practical preparation for safe and responsible independence.", "detail": "Interactive scenarios help pupils develop decision-making, personal safety and civic responsibility as they prepare for secondary school and greater independence.", "pillars": ["Lifelong learning"], "values": ["Integrity", "Courage", "Respect"]}, {"title": "World War I Experience Day", "icon": "🪖", "audience": "Year 6", "tags": ["year-6", "performance"], "summary": "An immersive day exploring the realities and legacies of the First World War.", "detail": "Role, artefacts and structured activities help pupils connect historical knowledge with the experiences and choices of people living through conflict.", "pillars": ["Cross-curricular skills"], "values": ["Courage", "Respect", "Endurance"]}, {"title": "World War II Evacuation Day", "icon": "🧳", "audience": "Year 6", "tags": ["year-6", "performance"], "summary": "A day in role exploring evacuation, community and wartime childhood.", "detail": "Pupils use historical detail and drama to understand how children and communities responded to the pressures of the Second World War.", "pillars": ["Cross-curricular skills", "Learning how to learn"], "values": ["Courage", "Kindness", "Endurance"]}, {"title": "Whole-School Pantomime", "icon": "🎪", "audience": "Whole school", "tags": ["whole-school", "trip", "performance"], "summary": "A shared visit to a professional seasonal production at Hackney Empire.", "detail": "The whole school enjoys live theatre together, building cultural entitlement and shared memories through a high-quality professional performance.", "pillars": ["Discovering interests"], "values": ["Kindness", "Aspiration"]}];

const experienceGallery=document.getElementById('experience-gallery');
const experienceCount=document.getElementById('experience-count');
const experienceButtons=document.querySelectorAll('.experience-filter');
const experienceDialog=document.getElementById('experience-dialog');
const experienceDialogClose=document.querySelector('.experience-dialog-close');
let activeExperienceFilter='all';
function renderExperiences(){
  if(!experienceGallery)return;
  const filtered=activeExperienceFilter==='all'?experienceData:experienceData.filter(item=>item.tags.includes(activeExperienceFilter));
  experienceCount.textContent=`Showing ${filtered.length} of ${experienceData.length} experiences`;
  experienceGallery.innerHTML=filtered.map(item=>`<button class="experience-card" type="button" data-experience="${experienceData.indexOf(item)}"><span class="experience-card-top"><span class="experience-card-icon" aria-hidden="true">${item.icon}</span><span class="experience-card-phase">${item.audience}</span></span><h3>${item.title}</h3><p>${item.summary}</p><span class="experience-card-action">Explore experience →</span></button>`).join('');
  experienceGallery.querySelectorAll('[data-experience]').forEach(card=>card.addEventListener('click',()=>openExperience(experienceData[Number(card.dataset.experience)])));
}
function openExperience(item){
  document.getElementById('experience-dialog-icon').textContent=item.icon;
  document.getElementById('experience-dialog-audience').textContent=item.audience;
  document.getElementById('experience-dialog-title').textContent=item.title;
  document.getElementById('experience-dialog-description').textContent=item.summary;
  document.getElementById('experience-dialog-detail').textContent=item.detail;
  document.getElementById('experience-dialog-pillars').innerHTML=item.pillars.map(x=>`<span>${x}</span>`).join('');
  const values=document.getElementById('experience-dialog-values'); values.classList.add('values'); values.innerHTML=item.values.map(x=>`<span>${x}</span>`).join('');
  if(typeof experienceDialog.showModal==='function')experienceDialog.showModal();
}
experienceButtons.forEach(button=>button.addEventListener('click',()=>{
  experienceButtons.forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false')});
  button.classList.add('active');button.setAttribute('aria-pressed','true');activeExperienceFilter=button.dataset.filter;renderExperiences();
  const windowEl=document.querySelector('.experience-scroll-window');if(windowEl)windowEl.scrollTop=0;
}));
if(experienceDialogClose&&experienceDialog)experienceDialogClose.addEventListener('click',()=>experienceDialog.close());
if(experienceDialog)experienceDialog.addEventListener('click',event=>{const r=experienceDialog.getBoundingClientRect();if(!(event.clientX>=r.left&&event.clientX<=r.right&&event.clientY>=r.top&&event.clientY<=r.bottom))experienceDialog.close()});
if(experienceDialog)experienceDialog.addEventListener('cancel',event=>{event.preventDefault();experienceDialog.close()});
renderExperiences();
