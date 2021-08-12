var gimgs = _crateImgs();
var gCanvas = document.querySelector('.meme-canvas')
var gCtx = gCanvas.getContext('2d')
var gx = 10
var gy = 40
var gidx = 0;
var gCurrrctImg

function init() {
    renderImges()
    var elTxt = document.querySelector('[name=txt-input-first]')
    elTxt.addEventListener('input', function (evt) {
        if (gMeme.selectedLineIdx != -1) {
            gMeme.lines[(gMeme.selectedLineIdx)].txt = elTxt.value
            renderCanvas()
        } else {
            OnAddtext()
        }
    });
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
    gCurrrctImg = el
    renderCanvas()

}




function renderCanvas() {
    gCtx.drawImage(gCurrrctImg, 0, 0, gCanvas.width, gCanvas.height)
    gMeme.lines.forEach(line => {
        drawText(line.txt, line.x, line.y, line.size)
    })

}



function OnAddtext() {
    //var elTxt = document.querySelector('[name=txt-input-first]')
    //var txt = elTxt.value
    var txt = ''
    gMeme.lines.push(
        getLineObj(txt)
    )
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    aaaaaa();
    renderCanvas()
}



function drawText(txt, x, y, size) {
    gCtx.beginPath();
    gCtx.font = `${size}px IMPACT`;
    gCtx.fillText(txt, x, y);
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = 'white'
    gCtx.font = `${size}px IMPACT`
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}



