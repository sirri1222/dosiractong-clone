window.onload =function(){

    // 상단 스크롤 기능
    const header = document.querySelector(".header");
    const mbt = document.querySelector(".mbt");

    let scy = 0; 
    window.addEventListener("scroll", function(){

        scy = this.document.documentElement.scrollTop;
        if(scy > 0) {
            header.classList.add("active");
            mbt.classList.add("active");


        }else{
            header.classList.remove("active");
            mbt.classList.remove("active");

        }
    });


// 모바일 메뉴 클릭처리
mbt.addEventListener("click", function(){

// 현재 ani클래스가 있는지 없는지파악
const state = this.classList.contains("ani")
if(state) {
    this.classList.remove("ani")
    // 윈도우에 스크롤바가 없어진다
    document.querySelector("html").classList.add("active");
}else{
    this.classList.add("ani")
    // 윈도우에 스크롤 바가 나타난다
}
});

// 반응형처리
// 모바일 버튼모양초기화
// 모바일 메뉴 초기화
let winW = window.innerWidth;
window.addEventListener("resize", function(){
    winW =window.innerWidth;

    if(winW > 1024) {
        mbt.classList.remove("ani");
        HTMLOptGroupElement.classList.remove("active");
    }

});


    
};
