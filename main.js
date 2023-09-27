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
remo.innerHTML = "click the 'trash icon' to remove the item from your list";
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
// trash.style.backgroundColor = "white";
trash.style.position = "absolute";
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
var tex;
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var arr = document.querySelectorAll(".todo");
    var flag = false;
    if (input.value === null || input.value === "") {
      tex = "the Task cannot be empty !!";
      errorss(tex);
      flag = true;
    }
    if (flag === false) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].textContent === input.value) {
          tex = "this task is already added before";
          errorss(tex);
          flag = true;
          break;
        }
      }
    }
    if (flag === false) {
      var list = document.querySelectorAll(".donelist");
      for (let i = 0; i < list.length; i++) {
        if (list[i].textContent === input.value) {
          tex = "this task is already done before";
          errorss(tex);
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
elemns.addEventListener("mouseenter", mmove, true);
function mmove(event) {
  if (event.target.classList.contains("added")) {
    let comp = event.target.getElementsByClassName("done");
    let dele = event.target.getElementsByClassName("delet");
    event.target.style.color = "black";
    comp[0].style.cursor = "pointer";
    dele[0].style.cursor = "pointer";
    comp[0].style.visibility = "visible";
    dele[0].style.visibility = "visible";
    elemns.addEventListener("mouseleave", mleave, true);
    comp[0].addEventListener("click", function (e) {
      var hascreated = false;
      var ddlist = document.getElementsByClassName("donelist");
      for (let i = 0; i < ddlist.length; i++) {
        if (ddlist[i].textContent === event.target.textContent) {
          hascreated = true;
        }
      }
      if (hascreated === false) {
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
      }
      this.parentNode.remove();
    });
    dele[0].addEventListener("click", function (e) {
      var hascreated = false;
      var ddlist = document.getElementsByClassName("trashlist");
      for (let i = 0; i < ddlist.length; i++) {
        if (ddlist[i].textContent === event.target.textContent) {
          hascreated = true;
        }
      }
      if (hascreated === false) {
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
        completed.style.position = "relative";
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
      }
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

function mleave(event) {
  if (event.target.classList.contains("added")) {
    let comp = event.target.getElementsByClassName("done");
    let dele = event.target.getElementsByClassName("delet");
    comp[0].style.visibility = "hidden";
    dele[0].style.visibility = "hidden";
    event.target.style.color = "white";
  }
}
function errorss(text) {
  var back = document.createElement("div");
  back.style.width = "100%";
  back.style.height = "100%";
  back.style.position = "absolute";
  back.style.backgroundColor = "#000000a8";
  back.className = "popup";
  var errorbox = document.createElement("div");
  errorbox.className = "error";
  errorbox.style.backgroundColor = "white";
  errorbox.style.width = "25%";
  errorbox.style.height = "25%";
  errorbox.style.borderRadius = "20px";
  errorbox.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px;";
  errorbox.style.display = "flex";
  errorbox.style.alignItems = "center";
  errorbox.style.justifyContent = "center";
  errorbox.style.flexFlow = "column nowrap";
  errorbox.style.position = "absolute";
  errorbox.style.left = "50%";
  errorbox.style.top = "20%";
  errorbox.style.zIndex = "1";
  errorbox.style.transform = "translate(-50%,-20%)";
  var h = document.createElement("h1");
  h.textContent = "ERROR";
  h.style.color = "red";
  h.style.position = "relative";
  var para = document.createElement("p");
  para.style.color = "#1E3050";
  para.textContent = text;
  para.style.position = "relative";
  var errorimg = document.createElement("div");
  errorimg.style.backgroundImage = "url('./error.svg')";
  errorimg.style.backgroundSize = "contain";
  errorimg.style.backgroundPosition = "center right";
  errorimg.style.backgroundRepeat = "no-repeat";
  errorimg.style.position = "relative";
  errorimg.style.width = "15%";
  errorimg.style.height = "25%";
  var p = document.createElement("p");
  p.style.color = "#2fdd3c";
  p.textContent = "Right click mouse to continue";
  p.style.position = "relative";
  errorbox.appendChild(errorimg);
  errorbox.appendChild(h);
  errorbox.appendChild(para);
  errorbox.appendChild(p);
  back.appendChild(errorbox);
  document.body.appendChild(back);
  back.addEventListener("click", closepopup, false);
  function closepopup(e) {
    this.style.visibility = "hidden";
  }
}
