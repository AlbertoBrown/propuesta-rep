const modal=document.querySelector('#lead-modal');
document.querySelectorAll('[data-open-modal]').forEach(btn=>btn.addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));
document.querySelectorAll('[data-close-modal]').forEach(btn=>btn.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open')){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}});
document.querySelectorAll('[data-choice]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-choice]').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected')}));
document.querySelector('.modal-submit')?.addEventListener('click',()=>alert('Propuesta visual: aquí se enlazaría el flujo real de contratación con Repsol.'));
