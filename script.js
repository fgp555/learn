// unordered list
const list = [
    'list item a',
    'list item b',
    'list item c',
    'list item d',
    'list item e',
]

const ul = document.querySelector('.pags ul');
const nav = document.querySelector('.pags nav');

let pag = 1;
let rows = 2;

// ========== function 1 DisplayList... ==========
function DisplayList(list_1, ul_1, row_1, pag_1) {
    ul_1.innerHTML = '';
    pag_1--;

    let start = row_1 * pag_1; // 2 * 0 = 0
    let end = start + row_1; // 0 + 2 = 2

    let listSlice = list_1.slice(start, end);
    
    for (let i = 0; i < listSlice.length; i++) {
        let item = listSlice[i];
        console.log(list_1[i])

        let createLi = document.createElement('li');
        createLi.innerText = item;

        ul_1.appendChild(createLi);
    }
}
DisplayList(list, ul, rows, pag)
// ========== function 1 DisplayList. ==========
