let chess = []


function draw (){
    let out = '';

for (let i=0; i < 8; i++){
    let arr = chess[i];
  for (let j=0; j < 8; j++){
        
        if ((i+j)%2===0){
            out+=`<div class='chess--block' data-x="${j}" data-y="${i}"></div>`
        } else {out+=`<div class='chess--block bg-black' data-x="${j}" data-y="${i}"></div>`}
        }
        document.querySelector('#field').innerHTML=out;
        document.querySelectorAll('.chess--block').forEach(function(element){
           element.onclick = horse;
        })
    }

}
draw();

function horse(){
    document.querySelectorAll('.chess--block').forEach(function(element){
        element.classList.remove('green');
         element.classList.remove('horse');
        

    })
    this.classList.add('horse');

    let x = +this.dataset.x
    let y = +this.dataset.y

    let dx = [2,2,-2,-2,1,1,-1,-1]
    let dy = [1,-1,1,-1,2,-2,2,-2]

    for(let i=0; i < 8; i++){
        let xx = x + dx[i];
        let yy = y + dy[i];

        if (xx>=0 && xx<8 && yy>=0 && yy<8){
            document.querySelector('.chess--block[data-x="' +xx+ '"][data-y="' +yy+ '"]').classList.add('green')
        }
    }

}