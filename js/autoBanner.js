// autoBanner.js

/* 오토배너 */
const btnNext = document.querySelector(".slide_arr>.btn_next");
const btnPrev = document.querySelector(".slide_arr>.btn_prev");
const slide = document.querySelectorAll(".slide_wrap li"); // 0,1,2
const slideRoll = document.querySelectorAll('.slide_roll li'); // 0,1,2
const btnPlay = document.querySelector(".btn_play");

let firstNum=0; //배너번호
let lastNum = document.querySelectorAll(".slide_wrap > li").length-1;//배너 마지막 번호

function moveBanner(list, i){
  list.forEach(el=>{
    el.classList.remove("on", "active");
  })
  list[i].classList.add("on", "active");
}

// 오토배너 롤링 방식
// ################# 순서 돌아가는 것 체크해서 첫 시작 번호, 마지막 번호 먼저 구하고 if문 작성 ##################

// next 버튼
// li.slide.active
// .slide_roll>ul>li.on>a

// 0->1->2->0->1->2....
btnNext.addEventListener('click',e=>{
  e.preventDefault();
  firstNum++;
  if(firstNum>lastNum) firstNum = 0;
  moveBanner(slide, firstNum);
  moveBanner(slideRoll, firstNum);
})

// prev 버튼

// 0->2->1->0->2->1->0->2....
btnPrev.addEventListener('click',e=>{
  e.preventDefault();
  firstNum--;
  if(firstNum<0) firstNum = lastNum;
  moveBanner(slide, firstNum);
  moveBanner(slideRoll, firstNum);
})

// 오토배너 5초마다 움직이게
function autoBanner(){
  // next버튼 눌렀을 때
  firstNum++;
  if(firstNum>lastNum) firstNum=0;
  moveBanner(firstNum, slide);
  moveBanner(firstNum, slideRoll);
  autoBnn = setTimeout(autoBanner,5000);//재귀함수
}

let autoBnn = setTimeout(autoBanner,5000);//최초호출

// 배너 재생 멈춤 버튼
// 배너 멈추고 이미지 바뀌고
// 배너 재생 이미지 바뀌고

let trigger = true;

btnPlay.addEventListener("click",e=>{
  e.preventDefault();
  if(trigger){//멈춤
    btnPlay.classList.add('on');
    clearTimeout(autoBnn);
    trigger=false;
  }else{//재생
    btnPlay.classList.remove('on');
    autoBnn = setTimeout(autoBanner,5000);
    trigger=true;
  }
})


// 롤링 버튼 클릭
// 해당 배너로 이동

slideRoll.forEach((slideP, index)=>{
  slideP.addEventListener('click', e=>{
    e.preventDefault();
    moveBanner(slide, index);
    moveBanner(slideRoll, index);
  })
})