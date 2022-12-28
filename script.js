// unordered list
const list = ["list item 1", "list item 2", "list item 3", "list item 4", "list item 5", "list item 6", "list item 7", "list item 8", "list item 9", "list item 0"];

const ul = document.querySelector(".pags ul");
const nav = document.querySelector(".pags nav");

let pag = 1;
let rows = 3;

// ========== function 1 DisplayList... ==========
function DisplayList(list_1, pag_1) {
  ul.innerHTML = "";
  pag_1--;

  let start = rows * pag_1; // 2 * 0 = 0
  let end = start + rows; // 0 + 2 = 2

  let listSlice = list_1.slice(start, end);

  for (let i = 0; i < listSlice.length; i++) {
    let item = listSlice[i];
    // console.log(list_1[i])

    let createLi = document.createElement("li");
    createLi.innerText = item;

    ul.appendChild(createLi);
  }
}
DisplayList(list, pag);
// ========== function 1 DisplayList. ==========

// ========== functio 2 CreatePags... ==========
function CreatePags() {
  nav.innerHTML = "";

  let list_rows = list.length / rows;
  //   console.log(list_rows);
  //   let mathCeil = Math.ceil(list_rows);
  let mathCeil = list_rows;
  //   console.log(mathCeil);

  for (let i = 1; i < mathCeil + 1; i++) {
    // console.log(i);
    let btn = DisplayBtn(i);
    nav.appendChild(btn);
  }
}
CreatePags();
// ========== functio 2 CreatePags. ==========

//

// ========== function 3 DisplayBtn... ==========
function DisplayBtn(pageNum) {
  let createBtn = document.createElement("button");
  createBtn.innerText = pageNum;

  if (pag == pageNum) createBtn.classList.add("active");

  // ========== function 4 ClickBtn...  ==========
  createBtn.addEventListener("click", function () {
    pag = pageNum;
    DisplayList(list, pag);

    // classList...
    let btnActive = document.querySelector(".pags button.active");
    btnActive.classList.remove("active");

    createBtn.classList.add("active");
    // classList.
  });
  // ========== function 4 ClickBtn.  ==========

  return createBtn;
}
// ========== function 3 DisplayBtn. ==========
