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
        element.classList.remove('king')
        element.classList.remove('green')
    })

   this.classList.add('king')

   let dx = [1,1,1,-1,-1,-1,0,0]
   let dy = [-1,0,1,-1,0,1,1,-1]

   let x = +this.dataset.x;
   let y = +this.dataset.y;

   for (let i=0; i<8; i++){
    let xx = x + dx[i];
    let yy = y + dy[i];
    if (xx >=0 && yy >=0 && xx < 8 && yy < 8){
    document.querySelector('.chess--block[data-x="' + xx + '"][data-y="' + yy + '"]').classList.add('green');
    }}
}