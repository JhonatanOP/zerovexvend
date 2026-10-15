const D=[
 ["Apartments","Residents are home around the clock, so a machine becomes a late-night amenity that costs the property nothing.","Chips, candy, cookies, instant noodle cups, soda, water, sparkling water, juice","Property and community managers get a low-effort perk for residents."],
 ["Warehouses & factories","Long shifts and short breaks call for filling, affordable food and lots of water. We time restocks to your shifts, overnight included.","Jerky, meat sticks, big-bag chips, hearty items, energy and sports drinks, water, coffee","Plant managers and safety coordinators get fewer off-site food runs."],
 ["Construction sites","Crews need fast fuel and hydration. We plan placement, access and power with your site lead and move machines as the project moves.","Water and electrolytes, energy drinks, jerky, peanut butter crackers, candy bars, coffee","Site managers get a simple break-area upgrade with no purchase."],
 ["Schools & colleges","We follow your nutrition and vendor rules and tailor the menu to meet them.","Compliant snacks, fruit, baked chips, whole-grain bars, water, ramen cups for dorms, study-night snacks","Facilities and student affairs get a compliant, student-friendly option."],
 ["Gyms & studios","Members buy hydration and recovery items. We build the machine around that, with an optional branded wrap.","Protein bars and shakes, electrolytes, coconut water, water, nuts, fruit snacks, low-sugar drinks","Owners get a member convenience with no work on their end."],
 ["Offices","Steady weekday traffic and often no food nearby. We survey your team first so the machine carries what they like.","Nuts, protein bars, popcorn, dark chocolate, cold brew, tea, water, sparkling water","Office managers get a managed break-room perk with zero extra work."]
];
const t=document.getElementById('tabs'),pb=document.getElementById('pb');
if(t&&pb){
function show(i){
  [...t.children].forEach((b,j)=>b.setAttribute('aria-selected',i===j));
  const d=D[i];
  pb.style.animation='none';pb.offsetHeight;pb.style.animation='';
  pb.innerHTML=`<div><h3>${d[0]}</h3><p>${d[1]}</p><h4>What the host gets</h4><p>${d[3]}</p></div><div><h4 style="margin-top:0">Typical menu</h4><ul>${d[2].split(', ').map(x=>`<li>${x}</li>`).join('')}</ul><p class="note" style="margin-top:1rem">Final menu is chosen with your survey results.</p></div>`;
}
D.forEach((d,i)=>{const b=document.createElement('button');b.className='tab';b.role='tab';b.textContent=d[0];b.onclick=()=>show(i);t.appendChild(b)});
show(0);
}
const mb=document.getElementById('mb'),nl=document.getElementById('nl');
mb.onclick=()=>{const o=nl.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
nl.addEventListener('click',e=>{if(e.target.tagName==='A')nl.classList.remove('open')});
document.getElementById('yr').textContent=new Date().getFullYear();
// Contact form: opens an email draft. To collect submissions on the site instead, replace with a form service (e.g. Formspree) action.
const fm=document.getElementById('f');
if(fm)fm.addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.target),g=k=>f.get(k)||'';
  const body=`Name: ${g('name')}\nBusiness: ${g('biz')}\nEmail: ${g('email')}\nPhone: ${g('phone')}\nLocation type: ${g('type')}\nPeople on site: ${g('people')}\n\n${g('msg')}`;
  location.href='mailto:hello@yourdomain.com?subject='+encodeURIComponent('Vending request: '+g('biz'))+'&body='+encodeURIComponent(body);
});
