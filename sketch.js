var x = 90       // RECT do menu
var y = 100 ;    // RECT do menu 
var xf = 200     // persomagem principal fase 1
var yf = 350     //personagem principal fase 2
var x1 = 200 ;   //personagem principal fase 1
var y1 = 350 ;   //personagem principal fase 1
var x2 = 20;    // inimigo fase 1
var y2 = 30;     // inimigo fase 1
var x3 = 350;   // inimigo fase 1
var y3 = 140;   //inimigo fase 1
var x4 = 0   // inimigo fase 2
var y4 = 160    // inimigo fase 2
var x5 = 350   // inimigo fase 2
var y5 = 228  // inimigo fase 2
var x6 = 350  // inimigo fase 2
var y6 = 50   // inimigo fase 2
var x7 = 350   // inimigo fase 2
var y7 = 178  // inimigo fase 2
var xf3 = 200 //personagem principal 
var yf3 = 350 //personagem principal 
var x8 = 0
var y8 = 180
var x9 = 0
var y9 = 220
var x11 = 0
var y11=  80
var x12 = 330
var y12 = 80
var opcao = 1;
var tela = 0; 
var vidas = 3 ;
var vidas2 = 3
var nivel = 1 ; 
var pontos = 0; 
var raiop = 23;
var raioO = 23;
var raiof1 = 23;
var raiof2 = 23;
var raiof3 = 23;
var raiof4 = 23;
var som;
var slider;
var img = []

function preload() {
   img[0] = loadImage('ninja 1.png'); //perso
   img[1] = loadImage('bloco.png');   //construção
 img[2] = loadImage('inimigo.png');    //inimigo1
  img[3] = loadImage('inimigo2.png');  //inimigo2
  //myfoto = loadImage('minha foto.png');
  img[4] = loadImage('fundo.png');     //fundo 
  img[5] =loadImage('myfoto2.png');    //minha foto
  img[6] = loadImage('fotodolu.png'); //foto do licenciado
  som = loadSound('ove.mp3');         
  
} 
 
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0,1,0.5,0.01);
  som.play();
 
}

function draw() {
 background(0,240,255);
  som.setVolume(slider.value());
  if (tela==0) 
    menu(); 
  if (tela==1) 
    fase1(); 
  if (tela==2) 
    instruções();
  if (tela==3)
    créditos();
  if (tela==4)
    fase2();
  if (tela==5)
    fase3(); 
  if (tela==6)
  final();
}
  
  function menu(){
     
  image(img[4],0,0,400,400)
  fill(255,255,0)
  rect(x,y,190,45);

    textSize(45) 
    fill(255,0,0)
   text("Porrajmos",100,50); 
    fill(0)
    textSize(40);
    text("jogar",90,130);
    text("instruções",90,230);
    text("créditos",90,330);
} 
  
   function fase1(){
    textSize(30);
  background(80)
  //movimento personagem principal
     
     
  if (keyIsDown(LEFT_ARROW)) {
    if(x1>0)
    x1 = x1-5
  }

  if (keyIsDown(RIGHT_ARROW)) {
    if(x1<350)
    x1 = x1+5
  }

  if (keyIsDown(UP_ARROW )) {
    if(y1>0 )
    y1 = y1-5
  }

  if (keyIsDown(DOWN_ARROW)) {
    if(y1<340)
    y1 = y1+5
  }  
     

    textSize(20);
     fill(255,0,0)
    text("vidas:" +" "+ vidas, 40, 30); 
    text("nível:"+" "+ nivel,180,30); 
    text("pontos:"+" "+pontos,300,30);
     
     
     
     image (img[0],x1,y1,2*raiop,2*raioO);//personagem
     image (img[1],330,250,70,50); //obstaculo
     image (img[1],262,250,70,50); //obstaculo
     image (img[1],126,250,70,50); //obstaculo
     image (img[1],58,250,70,50); //obstaculo
     image (img[1],0,250,60,50);//obstaculo
     image (img[1],0,80,70,50); //obstaculo
     image (img[1],68,80,70,50); //obstaculo
     image (img[1],136,80,70,50); //obstaculo
     image (img[1],272,80,70,50); //obstaculo
     image (img[1],340,80,60,50); //obstaculos
     image (img[2],x2,y2,50,50); // inimigo de cima
     image (img[3],x3,y3,50,50);  // inimigo de baixo
     
     //movimentação dos inimigos 
     if(key=="ArrowUp"){
     }
       x2 = x2+2; 
       if(x2>400){
         x2=0;
         }
    
     
      
    if ( key=="ArrowUp"){
    }
      x3 = x3-3 ;
       if(x3<0){
         x3=400;
       }
         //pontos 
     if(y1<y3){
       pontos = 50
     } 
     if(y1<y2){
       pontos = 100
     } 
     
     //GAME OVER
    if (dist(x1, y1, x2, y2) < raiop + raioO ){ 
      x1 = 200 
      y1 = 300 
      vidas = vidas-1 
      if(vidas ==0){
        tela=0;
        vidas =3;
      }
    }
     
     if (dist(x1, y1, x3, y3) < raiop + raioO ){ 
      x1 = 200 
      y1 = 300 
      //GAME OVER 
       vidas = vidas-1 
      if(vidas ==0){
        tela=0;
        vidas =3;
      } 
      } 
       if (pontos==100) 
        tela=4;
 }                         
    
    function fase2(){
       background(80);
       textSize(20);
        fill(255,0,0); 
       
         nivel = 2 ; 
  
  //movimento personagem principal
     
     
  if (keyIsDown(LEFT_ARROW)) {
    if(xf>0)
    xf = xf-5
  }

  if (keyIsDown(RIGHT_ARROW)) { 
    if(xf<350)
    xf = xf+5
  }

  if (keyIsDown(UP_ARROW )) {
    if(yf>0 )
    yf = yf-5
  }

  if (keyIsDown(DOWN_ARROW)) {
    if(yf<340)
    yf = yf+5
  }  
  
      
        
     
    text("vidas:" +" "+ vidas, 40, 30); 
    text("nível:"+" "+ nivel,160,30); 
    text("pontos:"+" "+pontos,280,30); 
      
  
     image (img[0],xf,yf,2*raiof1,2*raiof2);//personagem principal 
     image (img[1],0,270,50,50); //obstaculo
     image (img[1],48,270,50,50); //obstaculo
     image (img[1],96,270,50,50); //obstaculo
     image (img[1],192,270,50,50); //obstaculo
     image (img[1],240,270,50,50); //obstaculo
     image (img[1],288,270,50,50); //obstaculo
     image (img[1],336,270,65,50); //obstaculo
     image (img[1],0,100,50,50);  //obstaculo
     image (img[1],48,100,50,50); //obstaculo
     image (img[1],96,100,50,50); //obstaculo
     image (img[1],192,100,50,50); //obstaculo
     image (img[1],240,100,50,50); //obstaculo
     image (img[1],288,100,50,50); //obstaculo
     image (img[1],336,100,65,50); //obstaculo
     image (img[2],x4,y4,50,40);  //inimigo 
     image (img[3],x5,y5,50,40); //inimigo
     image (img[3],x6,y6,50,40);  //inimigo
     image (img[2],x7,y7,50,40); //inimigo 
      
      //movimentação dos inimigos 
      if(key=="ArrowUp"){
     }
       x4 = x4+2; 
       if(x4>400){
         x4=0;
         }
    
     
      
    if ( key=="ArrowUp"){
    }
      x5 = x5-2 ;
       if(x5<0){
         x5=400;
       } 
         if ( key=="ArrowUp"){
    }
      x6 = x6-1 ;
       if(x6<0){
         x6=400;
       } 
       if ( key=="ArrowUp"){
    }
        x7 = x7-3;
       if(x7<0){
         x7=400;
       } 
      
      //pontos 
       if(yf<y4){
         pontos=150
       }
      if(yf<y6){
        pontos=200
      }
      
        //GAME OVER  
       if (dist(xf, yf,x5, y5) < raiof1 + raiof2 ){ 
          xf = 200
          yf = 350  
         vidas = vidas -1 
         if(vidas ==0){
           tela=0;
           vidas =3;
      }
         
          }
    
      if(dist(xf,yf,x4,y4) < raiof1+raiof2){
         xf = 200 
         yf = 350 
        vidas = vidas -1 
        if(vidas ==0){
        tela=0;
        vidas =3;
      }
      }
        if(dist(xf,yf,x6,y6) < raiof1+raiof2){
         xf = 200 
         yf = 350  
          vidas = vidas -1 
          if(vidas ==0){
        tela=0;
        vidas =3;
      }
      }
      
      if(dist(xf,yf,x7,y7) < raiof1+raiof2){
         xf = 200 
         yf = 350 
        vidas = vidas -1 
        if(vidas ==0){
        tela=0;
        vidas =3;
        
      }
      }
      
       if(pontos==200)  
         tela=5;
       
         
       
    } 
     
function fase3(){ 
       nivel = 3 
       background(80)
       textSize(20);
        fill(255,0,0);
       text("vidas:" +" "+ vidas, 40, 30); 
       text("nível:"+" "+ nivel,160,30); 
       text("pontos:"+" "+pontos,280,30); 
       
    //movimento personagem principal
     
     
  if (keyIsDown(LEFT_ARROW)) {
    if(xf3>0)
    xf3 = xf3-5
  }

  if (keyIsDown(RIGHT_ARROW)) { 
    if(xf3<350)
    xf3 = xf3+5
  }

  if (keyIsDown(UP_ARROW )) { 
    if(yf3>0 )
    yf3 = yf3-5
  }

  if (keyIsDown(DOWN_ARROW)) {
    if(yf3<340)
    yf3 = yf3+5
  }  
  
       
       image (img[0],xf3,yf3,2*raiof3,2*raiof4);//personagem principal
       image (img[1],0,260,50,50)//obstaculo
       image (img[1],48,260,50,50)//obstaculo
       image (img[1],144,260,50,50)//obstaculo
       image (img[1],192,260,50,50)//obstaculo 
       image (img[1],240,260,50,50)//obstaculo
       image (img[1],288,260,50,50)//obdtaculo
       image (img[1],336,260,65,50)//obstaculo 
       image (img[1],0,130,50,50)//obstaculo
       image (img[1],48,130,50,50)//obstaculo
       image (img[1],144,130,50,50)//obstaculo
       image (img[1],192,130,50,50)//obstaculo 
       image (img[1],240,130,50,50)//obstaculo
       image (img[1],288,130,50,50)//obdtaculo
       image (img[1],336,130,65,50)//obstaculo 
       image (img[2],x8,y8,50,40)//inimigo
       image (img[2],x9,y9,50,40)//inimigo 
       image (img[3],x11,y11,50,40)//inimigo
       image (img[2],x12,y12,50,40)//inimigo
       
       
        //movimentação dos inimigos 
      if(key=="ArrowUp"){
     }
       x8= x8+4; 
       if(x8>400){
         x8=0;
         }
    
     
      
    if ( key=="ArrowUp"){
    }
      x9 = x9-3 ;
       if(x9<0){
         x9=400;
       } 
         
       if ( key=="ArrowUp"){
    }
        x11 = x11+4;
       if(x11>400){
         x11=0; 
       } 
         if ( key=="ArrowUp"){
    }
        x12= x12-2;
       if(x12<0){
         x12=400;
       } 
      
      //GAME OVER  
       if (dist(xf3, yf3,x8, y8) < raiof1 + raiof2 ){ 
          xf3 = 200
          yf3 = 350  
         vidas = vidas -1 
         if(vidas ==0){
           tela=0;
           vidas =3;
      }
         
          }
    
      if(dist(xf3,yf3,x9,y9) < raiof1+raiof2){
         xf = 200 
         yf = 350 
        vidas = vidas -1 
        if(vidas ==0){
        tela=0;
        vidas =3;
      }
      }
        if(dist(xf3,yf3,x11,y11) < raiof1+raiof2){
         xf3 = 200 
         yf3 = 350 
          vidas = vidas -1 
          if(vidas ==0){
        tela=0;
        vidas =3;
      }
      }
      
      if(dist(xf3,yf3,x12,y12) < raiof1+raiof2){
         xf3 = 200 
         yf3 = 350 
        vidas = vidas -1 
        if(vidas ==0){
        tela=0;
        vidas =3;
        
      }
      
      }
       
        //pontos 
       if(yf3<y9){
         pontos=250
       }
      if(yf3<y11){ 
        pontos=300
      }
        if(pontos==300)
          tela=6
          
       }
    
         function final(){
           background(0) 
           textSize(25)
           fill(0,255,255) 
           text("Parabén você conseguiu escapar!",4,80)
           textSize(20)
           fill(0,255,255)
           text("Agora sua missão é lembrar ao mundo  que"+"\n"+"a intolerância e a violência nunca serão"+"\n"+"uma opção valída para deixar de lado"+"\n"+" toda e Qualquer diferença!"+"\n"+"As nossas diferenças são aquilo"+"\n"+" que nos tornam seres únicos!",0,150)
         }
  
    function instruções(){
      background(0)
    fill(0,255,255) 
    textSize(20);
    text("9°:Ano fundamental"+"\n"+"História : Habilidade (EF09HI13)",5,80);
      text("“Porrajmos”. Palavra romani que significa"+"\n"+"devoração. Foi o termo encontrado pelos ci"+"\n"+"ganos rons para referir-se a perseguição his"+"\n"+"tórica e às políticas de genocídio dos ciga"+"\n"+"nos nos campos de concentração nazistas"+"\n"+" no século XX.",3,150);
      text("No game você esta na pele de um cigano te"+"\n"+"ntando escapar de um campo de concentra"+"\n"+"ção NAZISTA. Seja furtivo.",5,320)
  } 
   
function créditos(){
  background(0)
  fill(0,255,255);
textSize(20);
    text("pedro victor : programador",160,75); 
  image(img[5],0,1,150,150); 
  text("lucas vale : licenciado",160,280); 
  image(img[6],0,200,150,150);
  
}

function keyPressed(){
    if (key=="ArrowUp"&& y>130){
      y = y-100;
     opcao--;
    }
    if (key=="ArrowDown"&& y<300){
      y = y+100;
      opcao++;
   }  
    if(key=="Enter"){
      tela=opcao
    } 
     if (key=="Escape"){
       tela=0 ;
     }
  }
