var foto;
window.onload = function(){
    foto = new Foto();
}
function selectImage(){
    document.getElementById("foto-file").click();
}
function makeGrayScale(){
    foto.makeGrayScale();
}
function makeBright(){
    foto.makeBright();
}
function makeDarker(){
    foto.makeDarker();
}
function makeBlur(){
    foto.applyBlurFilter();
}
function makeEmboss(){
    foto.applyEmbossFilter();
}
function makeSharp(){
    foto.applySharpFilter();
}
function download(){
    foto.export();
}