const btn = document.createElement('button');
btn.textContent = 'Click Here';
btn.className = 'btn1';

const division = document.querySelector('div');
division.appendChild(btn);

//document.querySelector('h2').remove();

const p = document.querySelector('p');
p.addEventListener('mouseover', () => {
    p.style.backgroundColor = 'yellow';
});
function clickPara(name){
    console.log(name + 'Para Clicked');
}