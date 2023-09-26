let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
let head = document.createElement("h1");
head.className = "header";
head.textContent = "work to-dos";
container.appendChild(head);
let desc = document.createElement("h3");
desc.className = "descrip";
desc.textContent = "enter text into the input field to add items to your list";
let desc1 = document.createElement("h3");
desc1.className = "descrip1";
desc1.textContent = "click on the item to mark it as complete";
let remo = document.createElement("p");
remo.className = "remo";
remo.innerHTML = "click the 'X' to remove the item from your list";
container.appendChild(desc);
container.appendChild(desc1);
container.appendChild(remo);
let input = document.createElement("input");
input.type = "text";
input.className = "input";
input.value = "add item ";
container.appendChild(input);
let todo = document.createElement("div");
todo.className = "todo";
container.appendChild(todo);
input.addEventListener("focus", function (e) {
  e.target.value = "";
});
input.addEventListener("blur", function (e) {
  e.target.value = "add item";
});
var style;
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    let arr = document.getElementsByClassName("todo");
    let arr1 = arr[0];
    var flag = false;
    if (input.value === null || input.value === "") {
      window.alert("the Task cannot be empty !!");
      flag = true;
    }
    if (flag === false) {
      for (let i = 0; i < arr1.childNodes.length; i++) {
        console.log(arr1.childNodes[i].innerText);
        if (arr1.childNodes[i].innerText === input.value) {
          window.alert("this task is already added before");
          flag = true;
          break;
        }
      }
    }
    if (flag == false) {
      let added = document.createElement("div");
      added.className = "added";
      added.innerText = input.value;
      let done = document.createElement("div");
      let delet = document.createElement("div");
      done.className = "done";
      delet.className = "delet";
      added.appendChild(done);
      added.appendChild(delet);
      todo.appendChild(added);
      style = added.style;
    }
    input.value = "";
  }
});

let elemns = document.querySelector(".todo");
elemns.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("added")) {
    var p = event.target.parentElement;
    var index = Array.prototype.indexOf.call(p.children, event.target)
    let comp = document.getElementsByClassName("done");
    let dele = document.getElementsByClassName("delet");
    comp[index].style.display = "block";
    comp[index].style.cursor = "pointer";
    dele[index].style.cursor = "pointer";
    dele[index].style.display = "block";
    event.target.style.color = "black";
    comp[index].addEventListener('click',function(e){
        this.parentNode.remove();
    });
    dele[index].addEventListener('click',function(e){
        this.parentNode.remove();
    });
  }
});
elemns.addEventListener("mouseout", function (event) {
  if (event.target.classList.contains("added")) {
    var p = event.target.parentElement;
    var index = Array.prototype.indexOf.call(p.children, event.target)
    let comp = document.getElementsByClassName("done");
    let dele = document.getElementsByClassName("delet");
    comp[index].style.display = "none";
    dele[index].style.display = "none";
    event.target.style.color = "white";
  }
});
