const pelis = [
    {titulo:'Star wars', anio:1976},
    {titulo:'ETE wars', anio:1986},
    {titulo:'su madre', anio:1976},
    {titulo:'la vuestra', anio:1996}
]


function addPelis(idTemplate){
    const listPelis = document.getElementById('pelis');
    const fragmento = document.getElementById(idTemplate);

    listPelis.innerHTML = '';
   

    pelis.forEach(element => {

        const item = document.importNode(fragmento.content, true);
        item.querySelector('.titulo').innerHTML = element.titulo;
        item.querySelector('.anyo').innerHTML = element.anio;
        listPelis.appendChild(item);
    })
}

document.getElementById('selector').addEventListener('change', evt => {
    addPelis(evt.target.value)
})

addPelis('uno')
