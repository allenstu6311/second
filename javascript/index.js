window.onload = function(){

    let slide = document.getElementById("slide")
    let slideImg = document.getElementsByClassName("slide-img")
    let slideRight = document.getElementById("slide-right")
    let slideLeft = document.getElementById("slide-left")

    let count = 1;
    let size = slideImg[0].clientWidth;
   
        console.log(size)
   

    slideRight.addEventListener("click",function(){
        slide.style.transition="0.4s"
        slide.style.transform = "translateX("+(-size*count)+"px)";
        count++;
        if(count>3){
            count=0
        }
     
    })

    slideLeft.addEventListener("click",function(){
        slide.style.transition="0.4s"
        slide.style.transform = "translateX("+(-size*count)+"px)";
        count--;
        if(count==0){
            count=4
        }
     
  })
  timerd = setInterval(function(){
        slideRight.click();
  },5000)
    
    }
    // ================================輪播圖1

    $(function(){
       let carwidth = $(".carousel-total").width()
       let imgCount = $(".carousel li").length

       for(let i=0;i<10;i++){
        $(".carousel-control").append("<li></li>")
       }

    $(".carousel-control li:first").addClass("clicked")
       $(".carousel li").width(carwidth/4)
       $(".carousel").width(carwidth*imgCount)
       

       setInterval(timerd,3000)
       let index = 0;
       $(".carousel-control li").click(function(){
        index  = $(this).index()

        $(".carousel").animate({
            left:carwidth/4*index*-1
       })

       $(this).addClass("clicked");
       $(".carousel-control li").not(this).removeClass("clicked")

       clearInterval(timerd)

     

       })
       function timerd(){
        index++;
        if(index==9){
            index=0
        }
        $(".carousel").animate({
            left:carwidth/4*index*-1
       })

       $(".carousel-control li").eq(index).addClass("clicked")

       $(".carousel-control li").not(`:eq(${index})`).removeClass("clicked")

   }
    })

    // ================================輪播圖2
   



    $(function(){
        
    // $(".star-card-1").show().nextAll().hide()

    $(".star-card-1").fadeOut(3000)
    $(".star-card-1").delay(28000) .fadeIn(3000)
   

    $(".star-card-2").delay(4000).fadeIn(3000)
    $(".star-card-2").fadeOut(3000)

    $(".star-card-3").delay(14000).fadeIn(3000)
    $(".star-card-3").fadeOut(3000)

    $(".star-card-4").delay(21000).fadeIn(3000)
    $(".star-card-4").fadeOut(3000)
  


        $(".star-card-1").show().nextAll().hide()

    setInterval(function(){
     
    $(".star-card-1").fadeIn(3000)
    $(".star-card-1").delay(1000) .fadeOut(3000)
   

    $(".star-card-2").delay(8000).fadeIn(3000)
    $(".star-card-2").fadeOut(3000)

    $(".star-card-3").delay(15000).fadeIn(3000)
    $(".star-card-3").fadeOut(3000)

    $(".star-card-4").delay(24000).fadeIn(3000)
    $(".star-card-4").fadeOut(3000)
   
       },33000)
       
    })

    // ========================================明星
    function change(){
        let showPic = document.getElementById("show-pic") 
        let showTxt = document.getElementById("show-txt")
        let miniPic = document.getElementsByClassName("mini-pic")   
        let miniTxt = document.getElementsByClassName("mini-txt") 

        let cakeNameBox=
        [
            "黑森林", "芒果夏洛特","芒果奶霜","虎你心願","粉愛粉愛你","德國黑森林","靜岡抹茶蕨餅生乳捲","原味生乳捲","雙捲禮盒-原味+特黑","新鮮芒果生乳捲",

        ]
        let cakePostBox=
        [
            "將比利時苦甜巧克力慕斯、巧克力蛋糕與可可粉完美搭配，苦甜的滋味以多樣形式展現出深層風味夾層裡的焦糖南瓜子畫龍點睛，值得巧克力控細細品味。",

            "香氣濃郁甘甜的新鮮芒果，充滿夏天該有的陽光心情。蓬鬆酥香的手指餅乾搭配柔軟的泡芙 蛋糕、滑順的奶霜與芒果，鮮甜宜人。",

            "新鮮芒果的濃郁果香與北海道奶霜融合，口口清爽、鮮嫩甘甜；隱藏其中的百香芒果凍滑嫩 Q 彈，增加了咀嚼的獨特口感與餘韻。",
            
            "師傅們一筆筆勾勒出可愛的外表讓你目不轉睛，鬆軟 Q 彈的蛋糕藏匿著滑嫩百香果凍，搭配芒果奶霜與芒果醬，酸酸甜甜，絕妙滋味虎你好心願。",

            "嚴選了口味清爽的義大利馬斯卡彭乳酪(Mascarpone Cheese)和濃郁的澳大利亞奶油乳酪(Cream Cheese)  蛋糕碎粒乳酪幕思細膩, 入口即化，充滿草莓酸甜滋味，濃郁細膩的草莓巴斯克；具口感的草莓磅蛋糕，一層一層堆疊出細膩變化可以感受到滿滿「濃郁草莓奶香」",

            "大人小孩都喜愛蛋糕膨鬆柔軟也很濕潤，有很濃的巧克力香氣。遇上夾層中的碎櫻桃鮮奶油餡後，整個口感更加輕盈，鼻間飄散著很輕很輕的櫻桃酒香。一點也不甜膩。",

            "奢侈地使用天皇杯受賞的靜岡抹茶粉與北海道奶霜的細膩，入口盡是濃厚的抹茶滋味，搭配滑溜爽口的日式蕨餅，形成獨特的絕妙口感。",

            "嚴選保濕性絕佳的日本昭和蛋糕專用麵粉，麵糰經過「燙麵」改變筋性，讓蛋糕口感柔軟不失彈性，潤口不黏膩，剛剛好的蛋糕厚度與北海道奶霜完美融合，引領絕佳口感。",

            "來自北海道的乳源，成就豐厚芳醇的自然風味，再搭配上昭和蛋糕專用麵粉製成的蛋糕，以絕佳比例引領平衡口感。一口咬下可以馬上感受到北海道奶霜入口即化的輕盈口感，就像現飲一杯來自北海道香醇又新鮮的牛乳，與柔軟Ｑ彈的蛋糕完美融合，在嘴裡很快就化開。",

            "在 Q 彈柔軟的蛋糕裡捲入一整顆甘甜新鮮芒果與北海道奶霜，恣意享受夏天專屬的輕盈美味，果肉細嫩多汁、濃郁甜美，溶入北海道奶霜的清爽，爽朗的美味輕盈消暑。"


        ]
    
        for(let i=0;i<miniPic.length;i++){
            miniPic[i].onclick = function(e){
                showPic.childNodes[1].src = e.target.src;
               
                
                if(e.target.src=="https://photo.yannick.com.tw/photo/2013017/%E6%B2%99%E5%93%88%E5%85%AC%E7%88%B5.jpg"){
                    $('#show-txt h3').text(cakeNameBox[0])
                    $('#show-txt p').text(cakePostBox[0])
                  
                }
              
                 if(e.target.src=="https://photo.yannick.com.tw/photo/2013016/%E8%8A%92%E6%9E%9C%E5%A4%8F%E6%B4%9B%E7%89%B92022.jpg"){
                    $('#show-txt h3').text(cakeNameBox[1])
                    $('#show-txt p').text(cakePostBox[1])
                }

                if(e.target.src=="https://photo.yannick.com.tw/photo/0201089/%E8%8A%92%E6%9E%9C%E5%A5%B6%E9%9C%9C.jpg"){
                    $('#show-txt h3').text(cakeNameBox[2])
                    $('#show-txt p').text(cakePostBox[2])
                 }

                 if(e.target.src=="https://photo.yannick.com.tw/photo/0201087/%E8%99%8E%E4%BD%A0%E5%BF%83%E9%A1%98.jpg"){
                    $('#show-txt h3').text(cakeNameBox[3])
                    $('#show-txt p').text(cakePostBox[3])
                 }

                 if(e.target.src=="https://photo.yannick.com.tw/photo/0201085/%E8%8D%89%E8%8E%93%E9%9B%99%E8%B5%B7%E5%8F%B8.jpg"){
                    $('#show-txt h3').text(cakeNameBox[4])
                    $('#show-txt p').text(cakePostBox[4])
                 }

                 if(e.target.src=="https://photo.yannick.com.tw/photo/2011009/%E5%B7%A7%E9%BA%A5.jpg"){
                    $('#show-txt h3').text(cakeNameBox[5])
                    $('#show-txt p').text(cakePostBox[5])
                 }
                 if(e.target.src=="https://photo.yannick.com.tw/photo/0101139/1.jpg"){
                    $('#show-txt h3').text(cakeNameBox[6])
                    $('#show-txt p').text(cakePostBox[6])
                 }
                 if(e.target.src=="https://photo.yannick.com.tw/photo/20200001/%E5%8E%9F%E5%91%B3%E7%94%9F%E4%B9%B3%E6%8D%B2.jpg"){
                    $('#show-txt h3').text(cakeNameBox[7])
                    $('#show-txt p').text(cakePostBox[7])
                 }
                 if(e.target.src=="https://photo.yannick.com.tw/photo/20200013/1.jpg"){
                    $('#show-txt h3').text(cakeNameBox[8])
                    $('#show-txt p').text(cakePostBox[8])
                 }
                 if(e.target.src=="https://photo.yannick.com.tw/photo/2011002/1111.jpg"){
                    $('#show-txt h3').text(cakeNameBox[9])
                    $('#show-txt p').text(cakePostBox[9])
                 }
               
              
            }
        
        }
       
           
      
    }
    change();
 
     // ================================蛋糕介紹
   
