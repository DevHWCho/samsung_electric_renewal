// autoBanner.js

/* 오토배너 */
const slide = document.querySelector(".slide_wrap li");
let firstNum=0; //배너번호

function moveBanner(list, i){
  list.forEach(el=>{
    el.classList.remove("on", "active");
  })
  list[i].classList.add("on", "active");
}

// 오토배너 5초마다 움직이게
function autoBanner(){
  // next버튼 눌렀을 때
  moveBanner(firstNum, slide);
  autoBnn = setTimeout(autoBanner,5000);//재귀함수
}

let autoBnn = setTimeout(autoBanner,5000);//최초호출