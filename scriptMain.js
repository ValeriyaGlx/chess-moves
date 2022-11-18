const chessPiece = document.querySelectorAll('.chess--piece');

chessPiece.forEach(key => {
    key.addEventListener('click', function(){key.classList.add('playing')})
});



chessPiece.forEach(key => { key.addEventListener('transitionend', function(e){
    if(e.propertyName === "transform") {
    key.classList.remove('playing');
    if(e.target.id === "knight"){window.location.href = "./knight/index.html"}
    if(e.target.id === "king"){window.location.href = "./king/index.html"}
    if(e.target.id === "bishop"){window.location.href = "./bishop/index.html"}
    if(e.target.id === "rook"){window.location.href = "./rook/index.html"}
    if(e.target.id === "pawn"){window.location.href = "./pawn/index.html"}
    if(e.target.id === "queen"){window.location.href = "./queen/index.html"}
    } else {return}
}
)})
