function calculate(){

    let tbody = document.getElementById("tb")
    let prices = document.querySelectorAll("td:nth-child(4)");
    let numbers = tbody.querySelectorAll("td:nth-child(5)>input[type=number]")
    let checkboxes = tbody.querySelectorAll("th:nth-child(1)>input")
    console.log(prices)

var total = 0;
for(let i=0;i<prices.length;i++){
    if(checkboxes[i].checked){
        total+=parseInt(prices[i].innerText)*parseInt(numbers[i].value)
    }
}
    document.getElementById("total").innerText=total;
}
// ================================================總價計算


//移除商品  parentNode?
function del(me){console.log(me)
    let tr = me.parentNode.parentNode;
    let tbody = tr.parentNode;
    tbody.removeChild(tr);
    calculate();
}

//增加商品
function jia(me){
    let td = me.parentNode;
    let inputs = td.getElementsByTagName("input");//找到td以下所有的input標籤
    inputs[1].value = parseInt(inputs[1].value)+1;
    calculate();

}
//減少數量
function jian(me){
    let td = me.parentNode;
    let num = td.querySelector("input[type=number]");//只查詢有type=number屬性的input標籤
    let r = num.value -1;
    if(r>=1){//只有減的結果大於等於1的情況下才會改變文字框的值
        num.value = r;
        calculate();
    }
}
//改變複選框的選種狀態
function check(me){
    let tbody = document.getElementById("tb")
    let inputs = tbody.querySelectorAll("th input");
    for(let i = 0;i<inputs.length;i++){
        inputs[i].checked=me.checked;
    }
    calculate();
}
//新增商品
function add(me){
    alert("放入購物車")
    let tbody = document.getElementById("tb");
    let div = me.parentNode;
    let spans = div.getElementsByTagName("span")//獲得商品名稱、價格的span
    let name = spans[0].innerText;//獲得商品名子

    let col_1 = tbody.querySelectorAll("td:nth-child(2)");//
    let found = null;//found 變數代表購物車找到的td
    for(let i = 0;i<col_1.length;i++){
        if(col_1[i].innerText==name){
            found = col_1[i]
            break; 
        }
       
    }
   
    if(found!=null){//商品名子存在//修改數量found是找到的td
        
        let tr = found.parentNode;
        let input = tr.querySelector("td:nth-child(5)>input:last-child");
        jia(input)
    }else{//商品名子原本不存在 (新增商品)
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        th.innerHTML = `<input type=checkbox checked onclick="calculate()">`;

        let td1 = document.createElement("td")
        td1.innerText = spans[0].innerText;

        let td2 = document.createElement("td")
        let img = document.createElement("img")
        img.src = div.getElementsByTagName("img")[0].src;
        td2.appendChild(img);
        img.width="100"

        let td3 = document.createElement("td")
        td3.innerText = spans[1].innerText;

        
        let td4 = document.createElement("td")
        td4.innerHTML = '<input type="button" value="-" onclick="jian(this)"><input type="number" value="1" onclick="jian(this)"><input type="button" value="+" onclick="jia(this)">' 

        
        let td5 = document.createElement("td")
        td5.innerHTML ='<input type="button" value="移除" onclick="del(this)">'

        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.appendChild(tr);
        calculate();
    }
}
    // let buyClose = document.getElementById("buy-close");
    // let buyContainer = document.getElementById("buy-container");
    // console.log(buyContainer)
    // buyClose.addEventListener("click",function(e){
    //     e.target.style.opacity=0
    // })
    $("#buy-container").hide()
    $(".off").click(function(){
        $("#buy-container").hide()
    })

    $(".car").click(function(){
        $("#buy-container").show()
    })