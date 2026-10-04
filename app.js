const children={jack:{rate:12,days:3},orla:{rate:14.4,days:3}};
const money=value=>`£${value.toFixed(2)}`;
function updateSummary(){document.querySelectorAll('.day-control').forEach(control=>{const child=children[control.dataset.child];control.querySelector('.days').textContent=child.days});const jackDue=children.jack.rate*children.jack.days*.85;const orlaDue=children.orla.rate*children.orla.days*.85;document.querySelector('#jack-amount').textContent=money(jackDue);document.querySelector('#orla-amount').textContent=money(orlaDue);document.querySelector('#jack-deposit').textContent=money(jackDue*.8);document.querySelector('#orla-deposit').textContent=money(orlaDue*.8)}
document.querySelectorAll('.stepper').forEach(button=>{button.addEventListener('click',()=>{const control=button.closest('.day-control');const child=children[control.dataset.child];child.days=button.dataset.action==='increase'?child.days+1:Math.max(0,child.days-1);updateSummary()})});
updateSummary();
