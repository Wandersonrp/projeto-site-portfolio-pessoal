function digitarLetras(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(() => elemento.innerHTML += letra, 60 * i);
    });
}

const senai = document.querySelector('#senai');
const dioDotNet = document.querySelector('#dio');
const fadivale = document.querySelector('#fadivale');

digitarLetras(senai);
setInterval(() => { digitarLetras(senai)}, 10000);

digitarLetras(dioDotNet);
setInterval(() => { digitarLetras(dioDotNet)}, 10000);

digitarLetras(fadivale);
setInterval(() => { digitarLetras(fadivale)}, 10000);