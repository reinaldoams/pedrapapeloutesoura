const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");
const arr = [pedra, papel, tesoura];
const img = document.getElementById('resultado');

handleClick = (e) => {
    if (e.target.id == 'pedra') {
        let x = Math.floor(Math.random() * 3);
        resultado.src = `/img/${x}.jpg`;
    } else if (e.target.id == 'papel') {
        let x = Math.floor(Math.random() * 3) + 3;
        resultado.src = `/img/${x}.jpg`
    } else if (e.target.id == 'tesoura') {
        let x = Math.floor(Math.random() * 3) + 6;
        resultado.src = `/img/${x}.jpg`
    }
    setTimeout(function () {
        resultado.src = `/img/interrogacao.jpg`;
    }, 1000);
}

for (let item of arr) {
    item.addEventListener('click', handleClick);
}