window.onload = function () {
    // 상단 스크롤 기능
    const header = document.querySelector(".header");
    const mbt = document.querySelector(".mbt");
    let scy = 0;
    // 새로 고침 / URL 입력해서 html 출력시
    // 1. 스크롤바의 픽셀 위치값을 파악해서
    scy = window.document.documentElement.scrollTop;
    // 2. class 적용 여부결정
    if (scy > 0) {
      // 스크롤이 된 상태로 새로고침 됨.
      header.classList.add("active");
      mbt.classList.add("active");
    }
  
    window.addEventListener("scroll", function () {
      // 스크롤 이동 픽셀값
      scy = this.document.documentElement.scrollTop;
      if (scy > 0) {
        // 스크롤이 되었다면
        header.classList.add("active");
        mbt.classList.add("active");
      } else {
        // 스크롤이 되지 않은 상태이면서 !!!!!!
        const state = navMb.classList.contains("active");
        if (state) {
          // 만약에 모바일 메뉴가 펼쳐진 상태라면
          header.classList.add("active");
          mbt.classList.add("active");
        } else {
          // 그렇지 않다면 원래대로 처리하고..
          header.classList.remove("active");
          mbt.classList.remove("active");
        }
      }
    });
  
    // 모바일 메뉴 클릭 처리
    const htmlRoot = document.querySelector("html");
    const navMb = document.querySelector(".nav-mb");
  
    mbt.addEventListener("click", function () {
      // 현재 ani 클래스가 있는지 없는지 파악
      const state = this.classList.contains("ani");
      if (state) {
        this.classList.remove("ani");
        // 윈도우에 스크롤바가 나타난다.
        htmlRoot.classList.remove("active");
        // 모바일 메뉴 숨기기
        navMb.classList.remove("active");
        if (scy > 0) {
          header.classList.add("active");
          mbt.classList.add("active");
        } else {
          header.classList.remove("active");
          mbt.classList.remove("active");
        }
      } else {
        this.classList.add("ani");
        // 윈도우에 스크롤바가 없어진다.
        htmlRoot.classList.add("active");
        // 모바일 메뉴 보이기
        navMb.classList.add("active");
        // 헤더 모양 변경 css 적용
        header.classList.add("active");
        mbt.classList.add("active");
      }
    });
  
    // 반응형 처리
    // 모바일 버튼 모양 초기화
    // 모바일 메뉴 초기화
    let winW = window.innerWidth;
    window.addEventListener("resize", function () {
      // 웹브라우저 안쪽 너비
      winW = window.innerWidth;
      // mobile ===> pc 전환
      if (winW > 1024) {
        mbt.classList.remove("ani");
        htmlRoot.classList.remove("active");
        navMb.classList.remove("active");
  
        if (scy > 0) {
          // 스크롤이 된 상태에서 화면 리사이징..
          header.classList.add("active");
          mbt.classList.add("active");
        } else {
          // 스크롤 안됨. 화면 리사이징..
          header.classList.remove("active");
          mbt.classList.remove("active");
        }
      }
    });

    // 비주얼 슬라이드
    const swiper = new Swiper(".sw-visual", {
      effect:"fade",
      loop: "true",
      speed: 1000,
      autoplay: {
        delay: 1800,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".sw-visual-next",
        prevEl: ".sw-visual-prev",
      },
      fadeEffect: {
        crossFade: true
      },
      
     
    });
  };