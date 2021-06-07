const listElements = document.querySelector('#list');
const searchInput = document.querySelector('#search');
const languegeSelect = document.querySelector('#language-tags');
// linguagem padrao
let languegeTag = 'EN-US'

// lista com oa informações
let listItens = [
    {name:'javaScript 1', create_at: '2020-07-25T20:10:50Z',fork: 15300},
    {name:'javaScript 2', create_at: '2020-07-25T20:10:50Z', fork: 18300},
    {name:'javaScript 3', create_at: '2020-07-25T20:10:50Z', fork: 2570}
]

// atualizando a linguamgem padrao para a selecionada na tag selected
languegeSelect.addEventListener('change', changeLanguage);
function changeLanguage(){
    languegeTag = languegeSelect.value
    render()
    
}
// atualizando para o navegador as informações
function render(){
    let html = '';
    // formatando os valores de acordo com a linguagem
    const numberFormatter = new Intl.NumberFormat(languegeTag);
    const dataFormatter = new Intl.DateTimeFormat(languegeTag, {week:'long', year:'numeric',month:'long',day:'numeric'});
    // criando a lista
    listItens.forEach(item => {
        const fork = numberFormatter.format(item.fork)
        const createdAt = dataFormatter.format(new Date(item.create_at));
        html += `
        <li>
            <div>
                <b>Name</b> ${item.name}
            </div>
            <div>
                <b>Create AT:</b> ${createdAt}
            </div>
            <div>
                <b>Forks</b> ${fork}
            </div>
        </li>
        `
    })
    // adcionando a lista para o navegador
    listElements.innerHTML = html
}
render()