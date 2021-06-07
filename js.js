const listElements = document.querySelector('#list');
const searchInput = document.querySelector('#search');

let listItens = [
    {name:'javaScript 1', create_at: '2020-07-25T20:10:50Z',fork: 15300},
    {name:'javaScript 2', create_at: '2020-07-25T20:10:50Z', fork: 18300},
    {name:'javaScript 3', create_at: '2020-07-25T20:10:50Z', fork: 2570}
]
function render(){
    let html = '';
    listItens.forEach(item => {
        html += `
        <li>
            <div>
                <b>Name</b> ${item.name}
            </div>
            <div>
                <b>Create AT:</b> ${item.create_at}
            </div>
            <div>
                <b>Forks</b> ${item.fork}
            </div>
        </li>
        `
    })
    listElements.innerHTML = html
}
render()