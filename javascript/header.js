let nav = document.getElementById("nav");
let btn = document.getElementById("header-btn")
btn.addEventListener("click",function(){
    nav.classList.toggle("show")
})
// ================================

function openCover(){
    let headerLogin = document.getElementById("header-login")
    let cover = document.getElementById("cover");
    let coverClose = document.getElementById("cover-close");
    cover.style.display = "block";
    loginout.style.display= "none";


    if(document.getElementById("header-member").innerText.indexOf("歡迎")>0){
        headerLogin.onclick =loginOpen;
        cover.style.display = "none";
    }
}

// ==================================


creat.addEventListener("click",member,false);
let creatBtn = document.getElementById("creat-btn")

function member(){
    let creatMember = document.getElementById("creat-member")
    creatMember.style.display="block"
}

let txt =["860714"];
let web =["850914"];


creatBtn.addEventListener("click",function(){
    let creatUserName = document.getElementById("creat-user-name").value
    let creatPassward = document.getElementById("creat-passward").value
    
    txt.push(creatUserName);
    web.push(creatPassward);

    alert(txt)
    alert(web)
    

})

//===================================



let coverBtn = document.getElementById("cover-btn")

let cycle = document.getElementById("cycle")
let headerMember = document.getElementById("header-member")

coverBtn.addEventListener("click",function(){
    let userName = document.getElementById("user-name").value
    let passWard = document.getElementById("passward").value
    console.log(txt)
    console.log(userName)
    
    console.log(txt.indexOf(userName))
    console.log(txt.indexOf(userName))
    if(txt.indexOf(userName)!=-1 && web.indexOf(passWard)!=-1){
        alert("登入成功")
        cover.style.display = "none";
        headerMember.innerHTML="俊彥歡迎";
        cycle.style.display="block";
    }
    else{
        alert("帳號或密碼錯誤")
        alert(txt[1])
    }

    
    // if(userName==txt&&passWard==web){
    //     alert("登入成功")
    //     cover.style.display = "none";
    //     headerMember.innerHTML="俊彥歡迎"
    //     cycle.style.display="block";
    // }
    // else{
    //     alert("帳號或密碼錯誤")
     
    // }
})


// ======================================
function closeCover(){
    let loginout  = document.getElementById("loginout");
    let headerLogin = document.getElementById("header-login")
    let cover = document.getElementById("cover");
    let coverClose = document.getElementById("cover-close");
    headerLogin.onclick = openCover;
    cover.style.display = "none";
    loginout.style.display= "none"

}
function loginOpen(){
    let loginout  = document.getElementById("loginout");
    let loginoutHv  = document.getElementById("loginout-hv");
    let loginBtn  = document.getElementById("loginout-btn");
    let loginClose = document.getElementById("loginout-close")

    loginout.style.display="block";
    loginBtn.onclick = loginOut
    loginClose.onclick = openCover
    headerMember.onclick=closeCover
    // if(document.getElementById("headerMember").innerText.indexOf("登入")>0){
    //     headerMember.onclick=openCover
    //     loginout.style.display="none"
     
    // }
}

// ==================================

function loginOut(){
    alert("登出成功")
    cover.style.display = "none";
    headerMember.innerHTML="登入"
    cycle.style.display="none";
    loginout.style.display="none"
}






window.addEventListener("load",closeCover)


