console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML ='Jay Chapala';
var img=document.getElementById('madi');
function moveRight(){
    marginLeft += 10;
    img.style.marginLeft=marginLeft +"px";
}
img.onClick =function(){
    var interval= setInterval(moveRight,100);
};