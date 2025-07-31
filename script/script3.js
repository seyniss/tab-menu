const navList = document.querySelectorAll('.nav-list li')
const content = document.querySelectorAll('.content_list li')

let i = 0;
init(i);

function init(q){
    navList[q].classList.add('on')
    content[q].classList.add('active')
    
}

function reset(){
    for(let i=0;i<navList.length;i++){
        navList[i].classList.remove('on')
        content[i].classList.remove('active')
        
    }
}

navList.forEach((tab,index)=>{
    tab.addEventListener('click',(e)=>{
        e.preventDefault()  //이전과 같은거 눌렀을 때 이벤트 중복 방지
        reset()
        console.log(index)
        init(index)
    })
})
