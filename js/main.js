// main.js
window.addEventListener('load',()=>{
  const gnbList = document.querySelectorAll("nav.gnb>ul>li");
  const gnbMenu = document.querySelectorAll("nav.gnb>ul>li");
  const headerWrap = document.querySelector(".header_wrap");
  
  const btnSrch = document.querySelector(".btn_srch");
  const srchWrap = document.querySelector(".srch_wrap");
  const btnSrchClose = document.querySelector(".btn_srch_close");
  const topMenues = document.querySelector(".topmenu");
  const snsBtn = document.querySelector(".topMenu>dd:nth-of-type(2)>ul");
  const langBtn = document.querySelector(".topMenu>dd:nth-of-type(3)>ul");
  
  for(var i=0; i<gnbMenu.length; i++){
    gnbMenu[i].addEventListener("mouseover",e=>{
      e.currentTarget.classList.add("on");
      var ht = e.currentTarget.children[1].offsetHeight;
      headerWrap.style.height = `${70+ht}px`
    })
    gnbMenu[i].addEventListener("mouseleave",e=>{
      e.currentTarget.classList.remove("on");
      headerWrap.style.height = `70px`
    })
    gnbMenu[i].children[0].addEventListener("focus",e=>{
      e.currentTarget.parentElement.classList.add('on');
      var ht = e.currentTarget.nextElementSibling.offsetHeight;
      headerWrap.style.height = `${70+ht}px`;
    })
    gnbMenu[i].children[0].addEventListener("blur",e=>{
      e.currentTarget.parentElement.classList.remove('on');
      headerWrap.style.height = `70px`;
    })
  }
  
  
  /* 검색박스 */
  btnSrch.addEventListener("click",e=>{
    e.preventDefault();
    srchWrap.classList.add("on");
    document.body.style.overflow = `hidden`; // 모달창 배경 스크롤 없애기
  })
  
  btnSrchClose.addEventListener("click",e=>{
    e.preventDefault();
    srchWrap.classList.remove("on");
    document.body.style.overflow = `unset`; // 스크롤 살리기
  })
  
  const btnTop = document.querySelector("a.btn_top");
  // top 버튼
  // 클릭하면 스크롤이 맨 위로 올라감
  btnTop.addEventListener("click",e=>{
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
  
  
  // 스크롤을 움직이면 스크롤 위치에 따라서 top 버튼이 바뀜
  let scrollH = window.pageYOffset;
  console.log(scrollH)
  window.addEventListener("scroll",e=>{
    if(scrollY<=0){
      btnTop.classList.remove("on", "ab")
    }
    else if(4350<scrollY){
      btnTop.classList.add("ab");
      btnTop.classList.add("on");
    }else{
      btnTop.classList.remove("ab");
      btnTop.classList.add("on");
    }
  })
  
  // Step1
  const step1List = document.querySelectorAll(".step1>ul>li>a");
  
  step1List.forEach((step,i)=>{
    step.addEventListener("click",e=>{
      e.preventDefault();
      activation(step1List, i)
    })
  })
  
  let activation = (list, i)=>{
    for(let el of list){
      el.style.backgroundColor = ``;
      el.style.backgroundImage = ``;  
      el.style.color = ``;
    }
    list[i].style.backgroundColor = `#043285`;
    list[i].style.backgroundImage = `url(images/ico_inquiry_on_0${i+1}.png)`;  
    list[i].style.color = `#fff`;
  }

});
