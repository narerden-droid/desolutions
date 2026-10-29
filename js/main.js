(function(){
var b=document.querySelector('.burger'),n=document.querySelector('.nav');
if(b)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('.form').forEach(function(f){
f.addEventListener('submit',function(e){e.preventDefault();
var m=f.querySelector('.msg'),n=f.name.value.trim(),p=f.phone.value.replace(/[^\d+]/g,'');
function bad(t){m.className='msg er';m.textContent=t}
if(n.length<2)return bad('Укажите имя.');
if(p.replace(/\D/g,'').length<10)return bad('Укажите телефон полностью, например +7 707 000 00 00.');
if(!f.consent.checked)return bad('Подтвердите согласие на обработку данных.');
var btn=f.querySelector('button');btn.disabled=true;
fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}}).then(function(r){
if(r.ok){m.className='msg ok';m.textContent='Заявка отправлена. Мы свяжемся с вами в рабочее время.';f.reset()}else{throw 0}
}).catch(function(){bad('Не удалось отправить. Позвоните нам: +7 707 300 00 93.')}).finally(function(){btn.disabled=false})})})})();
(function(){document.documentElement.className+=' js';document.querySelectorAll('.tab').forEach(function(t){t.addEventListener('click',function(){document.querySelectorAll('.tab,.panel').forEach(function(x){x.classList.remove('on')});t.classList.add('on');document.getElementById('p'+t.dataset.t).classList.add('on')})})})();