$(function(){

    $(window).resize(function(){
        let winWidth = $(window).width()
        console.log(winWidth)
        if(winWidth<1024){
    
            let student = document.getElementById("student")
            let studentCard = document.getElementsByClassName("student-card")
            let left = document.getElementById("left")
            let right = document.getElementById("right")
            
            
            let count = 1;
            let size =studentCard[0].clientWidth+(studentCard[0].clientWidth/5);
            console.log(count)
            left.addEventListener("click",function(){
                count++;
                student.style.transition = "0.4s"
                student.style.left = -size*count+"px";
              
            })
            
            right.addEventListener("click",function(){
                count--;
                student.style.transition = "0.4s"
                student.style.left = (-size*count+"px")
                console.log(size)
            })
            
           
        }
        if(winWidth>1024){
            $("#student").css("left","0")
        }
    
    })
   
})

// ===================================文章
let messageList = document.getElementById("message-list");
let text = document.getElementById("text")
let messageBtn = document.getElementById("message-btn")

function post(){

    messageBtn.addEventListener("click",function(){
      
        
        messageList.innerHTML = messageList.innerHTML+`    <div id="message-list">
       
        <div id="list-post">
        <div id="message-list-pic">
        <img src="https://picsum.photos/40/40/?random=10">
    </div>
            <p>${text.value}</p>
    </div>        
    </div> `
    text.value="";

 
    })
}
post();

$(function(){
    let textmax = 70;
    $("#font-math").html(`<span style=color:red>字數上限${textmax}</span>`)
    $("#text").keyup(function(){
        let textlength = $(this).val().length;
        $("#font-math").html(`<span style=color:red>字數上限${textmax-textlength}</span>`)

    })
   
})
