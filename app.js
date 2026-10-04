const children={jack:{rate:12,days:3},orla:{rate:14.4,days:3}};
const money=value=>`£${value.toFixed(2)}`;
function updateSummary(){document.querySelectorAll('.day-control').forEach(control=>{const child=children[control.dataset.child];control.querySelector('.days').textContent=child.days});const fullCost=Object.values(children).reduce((total,child)=>total+child.rate*child.days,0);const discounted=fullCost*.85;const deposit=discounted*.8;const topup=discounted*.2;document.querySelector('#deposit').textContent=money(deposit);document.querySelector('#discounted').textContent=money(discounted);document.querySelector('#topup').textContent=money(topup)}
document.querySelectorAll('.stepper').forEach(button=>{button.addEventListener('click',()=>{const control=button.closest('.day-control');const child=children[control.dataset.child];child.days=button.dataset.action==='increase'?child.days+1:Math.max(0,child.days-1);updateSummary()})});
updateSummary();
