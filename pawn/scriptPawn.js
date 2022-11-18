let chess = []


function draw (){
    let out = '';

for (let i=0; i < 8; i++){
    let arr = chess[i];
  for (let j=0; j < 8; j++){

    if((i+j)%2===0){out +=`<div class='chess--block' data-x="${i}" data-y="${j}"></div>`} else {
        out +=`<div class='chess--block bg-black' data-x="${i}" data-y="${j}"></div>`
    }
     
     }
     document.querySelector('#field').innerHTML=out;
     document.querySelectorAll('.chess--block').forEach(function(element){
        element.onclick=king;
     })
}
}
draw();

function king(){
    document.querySelectorAll('.chess--block').forEach(function(element){
        element.classList.remove('pawn')
        element.classList.remove('green')
        element.classList.remove('red')
    })

   this.classList.add('pawn')

   let dx = [-2,-1]
   let dy = [0,0]

   let x = +this.dataset.x;
   let y = +this.dataset.y;

   let j=0
   if(x !== 6){j=1}
   for (let i=j; i<8; i++){
    let xx = x + dx[i];
    let yy = y + dy[i];
   

    
    //

    if (xx >=0 && yy >=0 && xx < 8 && yy < 8){
    if(x===7){this.classList.add('red')} else {
    
    document.querySelector('.chess--block[data-x="' + xx + '"][data-y="' + yy + '"]').classList.add('green');}
    }}
}