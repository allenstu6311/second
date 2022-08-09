
$(".answerall").hide() 
 $(".list-nav-control").click(function(){
    $('.list-nav-ul').slideToggle();
  
}).click(function(){
    $("#add").stop().text("-")

})

$(".answer").click(function(){
    $(this).next().slideToggle();
})
// ============================

$(".answerall").hide()

$(window).resize(function(){
    let winWidth = $(window).width();
    
    if(winWidth<1024){
        $(".list-nav-ul").hide()

    }
    else{
       
        $(".list-nav-ul").show()
        
    }
    
})

// ==============================

let problem1 = document.getElementById("problem1")
let problem2 = document.getElementById("problem2")
let problem3 = document.getElementById("problem3")


// problem1.addEventListener("click",function(){

//     let xhr = new XMLHttpRequest()
    
//    xhr.onreadystatechange = function(){
//         if(xhr.readyState==4 && xhr.status==200){
//             document.getElementById("question").innerHTML = xhr.response;
//             // var data = JSON.parse({
                
//             // })
//             // alert(data)
//         }
//    }
//    xhr.open("GET","problem-1.html",true)
//    xhr.send()
// })
$('#problem1').click(function(){
    $.ajax({
        url: 'problem-1.html',
        success(res){
            // $('.answerAll').css('display','none')
            $(res).find('.answerall li').css('display','none')
            // console.log($(res).find('.answerall '));
            $('#question').html(res)
        }
    })
})

problem2.addEventListener("click",function(){
    
    let xhr = new XMLHttpRequest()
    
   xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            document.getElementById("question").innerHTML = xhr.response;
          
        }
   }
   xhr.open("GET","problem-2.html",true)
   xhr.send()
})


problem3.addEventListener("click",function(){
    
    let xhr = new XMLHttpRequest()
    
   xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            document.getElementById("question").innerHTML = xhr.response;
            
        }
   }
   xhr.open("GET","problem-3.html",true)
   xhr.send()
})










