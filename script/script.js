let slide = 1;
var widthis;
var mslider = window.document.getElementById("mainSlider");
window.document.getElementById("sliderbtn1").checked = true;
var sideMenu = 0;
var sliderloop = setInterval(function(){nextImage()}, 6000);
function clickslide(is){//Atualização manual do Slider
  slide = is
  clearInterval(sliderloop);/*Reinicializador de tempo após clicar manualmente*/
  sliderloop = setInterval(function(){nextImage()}, 6000);
}
function nextImage(){
    if(slide>3){slide=1}else{slide++}//funçao automatica do Slider
    window.document.getElementById("sliderbtn"+slide).checked = true;
}
function clickthrow(valbutton){
  if(valbutton===0){
    window.document.getElementById("htmlSet").style.overflowY = "scroll";
    window.document.querySelector(".shadowBox").style="display: none;"
    if(sideMenu===1){
      window.document.querySelector(".left_menuBar").style="animation-name: menuClose;"
    }else if(sideMenu===2){
      window.document.querySelector(".right_cartShop").style="animation-name: cartClose;"
    }else if(sideMenu===3){
      window.document.querySelector(".center_connectPlus").style="display: none;"
    }
    sideMenu = 0
  }else{
    window.scrollTo(0,0)//x,y
    if(valbutton===1){
      sideMenu = 1
      window.document.getElementById("htmlSet").style.overflowY = "hidden";
      window.document.querySelector(".shadowBox").style="display: block;"
      window.document.querySelector(".left_menuBar").style="animation-name: menuOpen;"
    }else if(valbutton===2){
      sideMenu = 2
      window.document.getElementById("htmlSet").style.overflowY = "hidden";
      window.document.querySelector(".shadowBox").style="display: block;"
      window.document.querySelector(".right_cartShop").style="display: block;animation-name: cartOpen;"
    }else if(valbutton===3){
      sideMenu = 3
      window.document.getElementById("htmlSet").style.overflowY = "hidden";
      window.document.querySelector(".shadowBox").style="display: block;"
      window.document.querySelector(".center_connectPlus").style="display: block;"
    }
  }
}

/*
function widthResizer(){
    
}
  // Coleta width da tela ao carregar
  widthResizer()
  
  // Coleta o width da tela ao ser redimensionada
window.addEventListener('resize', widthResizer)
*/