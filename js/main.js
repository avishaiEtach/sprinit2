'use strict'





var gimgs = _crateImgs();
var gCanvas = document.querySelector('.meme-canvas')
var gCtx = gCanvas.getContext('2d')
var gx = 10
var gy = 40
var gidx = 0;

function init() {
    renderImges()
}



function renderImges() {
    var strHtmls = gimgs.map(function (img) {
        return `<img src="${img.url}" alt="img" title="${img.keywords}" onclick="showCanvas(this)" data-id="${img.id}">`
    })
    document.querySelector('.gallery').innerHTML = strHtmls.join('')

}


function showCanvas(el) {
    document.querySelector('.filter-bar').style.display = 'none'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.info').style.display = 'none'
    document.querySelector('.meme-maker').style.display = 'block'
    var imgId = el.dataset.id
    getImageId(imgId)
    renderCanvas()

}




function renderCanvas() {
    drawImg2(gimgs[gMeme.selectedImgId])
}


function OnAddtext() {
    var elTxt = document.querySelector('[name=txt-input-first]')
    var txt = elTxt.value
    addtext(txt, gidx)
    renderCanvas()
}


function OnAddtextToSecound() {
    var elTxt = document.querySelector('[name=txt-input-secound]')
    var txt = elTxt.value
    gidx = 1
    addtext(txt, gidx)
    gCtx.save()
    gCtx.fillText(gMeme.lines[gidx].txt, 0, 100)
    gCtx.strokeText(gMeme.lines[gidx].txt, 0, 100)
    renderCanvas()
}

function upPos() {
    gy--
    renderCanvas()
}

function downPos() {
    gy++
    renderCanvas()
}



function drawImg2(selectImg) {
    var img = new Image()
    img.src = selectImg.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(gMeme.lines[gidx].txt, gx, gy)

    }
}


function drawText(txt, x, y) {
    gCtx.font = `${gMeme.lines[gidx].size}px IMPACT`;
    gCtx.fillText(txt, x, y);
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = 'white'
    gCtx.font = `${gMeme.lines[gidx].size}px IMPACT`
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}



