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
        element.classList.remove('rook')
        element.classList.remove('green')
    })

   this.classList.add('rook')

   let dx = [1,2,3,4,5,6,7,8,-1,-2,-3,-4,-5,-6,-7,-8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
   let dy = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-2,-3,-4,-5,-6,-7,-8,1,2,3,4,5,6,7,8]

   let x = +this.dataset.x;
   let y = +this.dataset.y;

   for (let i=0; i<dx.length; i++){
    let xx = x + dx[i];
    let yy = y + dy[i];
    if (xx >=0 && yy >=0 && xx < 8 && yy < 8){
    document.querySelector('.chess--block[data-x="' + xx + '"][data-y="' + yy + '"]').classList.add('green');
    }}
}