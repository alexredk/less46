// function myTima(){
//     let a = prompt('a=')
// }
// let a = document.getElementById("inp1")

// function starWars(){
//     alert("привет")
// }
// function star2Wars(){
//     alert("kak dela")
// }
// a.addEventListener("click",starWars)
// a.addEventListener("click ",star2Wars)

// let b = document.getElementById("but")
// class button {
//     starWars(event){
//         switch(event.type){
//             case "mousedown":
//                 but.innerHTML="кнопка нажата";
//                 break;
//                 case "mouseup":
//                     but.innerHTML="кнопка выключена";
//         }
//     }
// }
// let c = new Button();
// b.addEventListener("mousedown", Button);
// b.addEventListener("mouseup", Button);
class Button {
    handleEvent(event) {
     
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }

    onMousedown() {
      elem.innerHTML = "Кнопка мыши нажата";
    }

    onMouseup() {
      elem.innerHTML += "...и отжата.";
    }
  }

  let menu = new Button();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);
