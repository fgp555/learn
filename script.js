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
function DisplayList(list_1, ul_1, rows_1, pag_1) {
    ul_1.innerHTML = '';
    pag_1--;

    let start = rows_1 * pag_1; // 2 * 0 = 0
    let end = start + rows_1; // 0 + 2 = 2

    let listSlice = list_1.slice(start, end);
    
    for (let i = 0; i < listSlice.length; i++) {
        let item = listSlice[i];
        // console.log(list_1[i])

        let createLi = document.createElement('li');
        createLi.innerText = item;

        ul_1.appendChild(createLi);
    }
}
DisplayList(list, ul, rows, pag)
// ========== function 1 DisplayList. ==========

// ========== functio 2 CreatePags... ==========
function CreatePags(list_2, nav_2, rows_2) {
    nav_2.innerHTML = '';

    let list_rows = list_2.length / rows_2;
    let mathCeil = list_rows;

    for (let i = 1; i < mathCeil + 1; i++){
        // console.log(i);
        let btn = DisplayBtn(i, list_2);
        nav_2.appendChild(btn)
    }
}
CreatePags(list, nav, rows)
// ========== functio 2 CreatePags. ==========

// 

// ========== function 3 DisplayBtn... ==========
function DisplayBtn(pageNum, items) {
    let createBtn = document.createElement('button');
    createBtn.innerText = pageNum;

    if (pag == pageNum) createBtn.classList.add('active');

    // ========== function 4 ClickBtn...  ==========
    createBtn.addEventListener('click', function () {
        pag = pageNum;
        DisplayList(items, ul, rows, pag)

        // classList...
        let btnActive = document.querySelector('.pags button.active');
        btnActive.classList.remove('active');

        createBtn.classList.add("active")
        // classList.
    })
    // ========== function 4 ClickBtn.  ==========
    

    return createBtn;
}
// ========== function 3 DisplayBtn. ==========

