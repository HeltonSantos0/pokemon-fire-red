  var dx
  var dy
  var px 
  var py
  var vel
  var red = document.querySelector('#red');
  var tmp
  
  let cima = document.querySelector('#cima')
  let left = document.querySelector('#left')
  let bottom = document.querySelector('#bottom')
  let right = document.querySelector('#right')
  
  var Body = document.getElementById('Body');
  
 


 function mover () {
      dx = 0
      dy = 0
      px = 414
      py = 1010
      vel = 2
      //px 11 py 17 29
      tmp = setInterval(enterFrame,20);
      
 }
 cima.addEventListener('touchstart', ()=>{
      dy=-2;
      red.src = 'redyA.gif'
         
     
 })
 bottom.addEventListener('touchstart', ()=>{
      dy=2;
      red.src = 'red-yA.gif'
 })
 left.addEventListener('touchstart', ()=>{
      dx=-2;
      red.src = 'red-xA.gif'
 })
 right.addEventListener('touchstart', ()=>{
      dx=2;
      red.src = 'redxA.gif'
 })
 
 
 cima.addEventListener('touchend', ()=>{
      dy=0;
      red.src = 'redy.png' })
 bottom.addEventListener('touchend', ()=>{
      dy=0;
      red.src = 'red-y.png'
 })
 left.addEventListener('touchend', ()=>{
      dx=0;
      red.src = 'red-x.png'
 })
 right.addEventListener('touchend', ()=>{
      dx=0;
      red.src = 'redx.png'
 })
 
  

 function enterFrame(){
      px+=dx*vel
      py+=dy*vel
      
      

 
 if (py == 2260 && px == 198) { 
      Body.style.overflowY = "auto";
      Body.scrollBy(0, 1000000); 
      
  }
      
   let y = red.getBoundingClientRect().y;
  if (y >= 400 && y < 1000) { 
      Body.style.overflowY = "auto";
      Body.scrollBy(0, 5); 
      
  }else if (y >= 1000) {
      Body.style.overflowY = "hidden"; 
      
  } else if (y <= 300) { 
      Body.style.overflowY = "auto"; Body.scrollBy(0, -5);
      
  } else { 
      Body.style.overflowY = "hidden";
  }
 



 
 /*  let y = red.getBoundingClientRect().y;
     if (y >= 700 && y < 1000) {
      Body.style.overflowY = "auto";
       Body.scrollBy(0, 5); 
       
       
    } else { Body.style.overflowY = "hidden"; 
      
 }

 
 if (py >= 700) {
      Body.style.overflowY = "auto"; 
      Body.scrollBy(0, 5);
      
      if(Body >= 1000){
           Body.style.overflowY = "hidden";
      }
             	
 }  if (py <= 650) { 
  // Rola a div para o topo
      let pos = Body.scrollTop; 
      let speed = 5; 
	    let targetPos = 30 * document.body.scrollHeight; 
      let animation = window.requestAnimationFrame(scroll);
       
  function scroll() { 
      pos -= speed;
      Body.scrollTop = pos; 
      
  if (pos > targetPos) {
       animation = window.requestAnimationFrame(scroll);
        } 
     }
   }
   
   
          //casa 1
         //lado esquerdo
      
         //cima
      if (py == 2026 && px >= 135 && px <= 382) {
           py = 0;
           py = red.offsetTop;
      }   //baixo
      if (px >= 135 && px < 270 && py == 505) {
           py = 0;
           py = red.offsetTop;
      }   //baixo
      if (px >= 305 && px <= 555 && py == 505) {
           py = 0;
           py = red.offsetTop;
      }   //porta
      if (px > 260 && px < 305 && py < 505 && py >180) {
           window.open('casaRed.html')
      }   //lado direito
      if (py >= 180 && py <= 505 && px == 555) {
           px = 0;
           px = red.offsetLeft;
      }
      
      //casa 2
      //lado esquerdo
      if (py >= 180 && py <= 505 && px == 775) {
           px = 0;
           px = red.offsetLeft;
      }
      //left 775 top 175 top 510
      
      if (px >= 690 && px <=780 && py < 90) {
           Body.style.backgroundPosition = 'top center'
          // py = red.offsetTop = 440
      }*/
      
      
      
       
       
       red.style.left=px+'px'
       red.style.top=py+'px'
       
         
      
  }
 window.addEventListener('load',mover);


