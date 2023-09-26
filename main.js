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

let trash = document.createElement("div");
trash.className = "Trash";
trash.style.width = "0%";
trash.style.minHeight = "100vh";
trash.style.backgroundColor = "white";
trash.style.position = "relative";
trash.style.left = "0";
let trashicon = document.createElement("div");
document.body.appendChild(trash);
trashicon.style.width = "3rem";
trashicon.style.height = "4rem";
trashicon.style.position = "absolute";
trashicon.style.right = "-3rem";
trashicon.style.top = "50%";
trashicon.style.transform = "translateY(-50%)";
// trashicon.style.backgroundColor="white";
trashicon.style.backgroundImage = "url('./remove.svg')";
trashicon.style.backgroundSize = "contain";
trashicon.style.backgroundPosition = "center center";
trashicon.style.backgroundRepeat = "no-repeat";
trashicon.style.color = "white";
trashicon.style.marginLeft = "10px";
trashicon.style.cursor = "pointer";
trash.appendChild(trashicon);
trashicon.addEventListener("click", opentrash, false);

let done1 = document.createElement("div");
done1.className = "completed";
done1.style.width = "0%";
done1.style.minHeight = "100vh";
done1.style.backgroundColor = "white";
done1.style.position = "absolute";
done1.style.right = "0";
done1.style.top = "0";
let doneicon = document.createElement("div");
done1.appendChild(doneicon);
document.body.appendChild(done1);
doneicon.style.width = "3rem";
doneicon.style.height = "4rem";
doneicon.style.position = "absolute";
doneicon.style.left = "-3rem";
doneicon.style.top = "50%";
doneicon.style.transform = "translateY(-50%)";
doneicon.style.backgroundImage = "url('./done.svg')";
doneicon.style.backgroundSize = "contain";
doneicon.style.backgroundPosition = "center center";
doneicon.style.backgroundRepeat = "no-repeat";
doneicon.style.marginRight = "10px";
doneicon.style.color = "white";
doneicon.style.cursor = "pointer";
doneicon.addEventListener("click", opendone, false);

function opentrash() {
  if (trash.style.width === "0%") {
    trash.style.width = "20%";
    var list = document.querySelectorAll(".trashlist");
    list.forEach((element) => {
      element.style.visibility = "visible";
    });
  } else {
    trash.style.width = "0%";
    var list = document.querySelectorAll(".trashlist");
    list.forEach((element) => {
      element.style.visibility = "hidden";
    });
  }
}
function opendone() {
  if (done1.style.width === "0%") {
    done1.style.width = "20%";
    var list = document.querySelectorAll(".donelist");
    list.forEach((element) => {
      element.style.visibility = "visible";
    });
  } else {
    done1.style.width = "0%";
    var list = document.querySelectorAll(".donelist");
    list.forEach((element) => {
      element.style.visibility = "hidden";
    });
  }
}

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
      var list = document.querySelectorAll(".donelist");

      for (let i = 0; i < list.length; i++) {
        if (list[i].textContent === input.value) {
          window.alert("this task is already done before");
          flag = true;
          break;
        }
      }
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
    if (flag === false) {
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
elemns.addEventListener("mousemove", mmove, false);
function mmove(event) {
  if (event.target.classList.contains("added")) {
    var p = event.target.parentElement;
    var index = Array.prototype.indexOf.call(p.children, event.target);
    let comp = document.getElementsByClassName("done");
    let dele = document.getElementsByClassName("delet");
    comp[index].style.cursor = "pointer";
    dele[index].style.cursor = "pointer";
    comp[index].style.visibility = "visible";
    dele[index].style.visibility = "visible";
    event.target.style.color = "black";
    comp[index].addEventListener("click", function (e) {
      let completed = document.createElement("div");
      completed.className = "donelist";
      completed.style.width = "90%";
      completed.style.height = "5rem";
      completed.style.display = "flex";
      completed.style.alignItems = "center";
      completed.style.justifyContent = "center";
      completed.style.backgroundColor = "#00800074";
      completed.style.color = "black";
      completed.style.margin = "auto";
      completed.style.marginTop = "2.5rem";
      completed.style.borderRadius = "20px";
      completed.style.visibility = "hidden";
      completed.textContent = this.parentNode.textContent;
      done1.appendChild(completed);
      this.parentNode.remove();
    });
    dele[index].addEventListener("click", function (e) {
      let completed = document.createElement("div");
      completed.className = "trashlist";
      completed.style.width = "90%";
      completed.style.height = "5rem";
      completed.style.display = "flex";
      completed.style.alignItems = "center";
      completed.style.justifyContent = "center";
      completed.style.backgroundColor = "red";
      completed.style.color = "black";
      completed.style.margin = "auto";
      completed.style.marginTop = "2.5rem";
      completed.style.borderRadius = "20px";
      completed.style.marginLeft = "1rem";
      completed.style.visibility = "hidden";
      completed.style.position = "absolute";
      completed.textContent = this.parentNode.textContent;
      let overlay = document.createElement("div");
      completed.appendChild(overlay);
      overlay.className = "overlay";
      overlay.style.position = "relative";
      overlay.style.width = "20%";
      overlay.style.height = "100%";
      overlay.style.right = "-70px";
      overlay.style.backgroundColor = "blanchedalmond";
      overlay.style.backgroundImage = "url('./arrow-.svg')";
      overlay.style.backgroundSize = "contain";
      overlay.style.backgroundPosition = "center right";
      overlay.style.backgroundRepeat = "no-repeat";
      overlay.style.cursor = "pointer";
      overlay.addEventListener("click", returnback, false);
      trash.appendChild(completed);
      this.parentNode.remove();
    });
  }
}
function returnback(e) {
  let added = document.createElement("div");
  added.className = "added";
  added.textContent = e.target.parentElement.textContent;
  let done = document.createElement("div");
  let delet = document.createElement("div");
  done.className = "done";
  delet.className = "delet";
  added.appendChild(done);
  added.appendChild(delet);
  todo.appendChild(added);
  style = added.style;
  this.parentElement.remove();
}

elemns.addEventListener("mouseleave", mleave, true);
function mleave(event) {
  if (event.target.classList.contains("added")) {
    var p = event.target.parentElement;
    var index = Array.prototype.indexOf.call(p.children, event.target);
    let comp = document.getElementsByClassName("done");
    let dele = document.getElementsByClassName("delet");
    comp[index].style.visibility = "hidden";
    dele[index].style.visibility = "hidden";
    event.target.style.color = "white";
  }
}
