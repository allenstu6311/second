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
