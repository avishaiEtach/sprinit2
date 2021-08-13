var gimgs = _crateImgs();
var gCanvas = document.querySelector('.meme-canvas')
var gCtx = gCanvas.getContext('2d')
var gCurrrctImg
var gfont = 'IMPACT';
var gstrock = 0
var glineMunber = 0


function init() {
    renderImges()
}

function onToggleManu() {
    document.body.classList.toggle('manu-open');
}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function changeStrock() {
    if (gstrock === 1) {
        gstrock = 0
    } else {
        gstrock = 1;
    }
    renderCanvas()
}

function changeFont() {
    var elTxt = document.querySelector('[name=fonts]')
    gfont = elTxt.value
    renderCanvas()
}


function renderImges() {
    var strHtmls = gimgs.map(function (img) {
        return `<img src="${img.url}" alt="img" title="${img.keywords}" onclick="showCanvas(this)" data-id="${img.id}">`
    })
    document.querySelector('.gallery').innerHTML = strHtmls.join('')

}


function closeCanvas() {
    document.querySelector('.gallery').style.display = 'grid'
    document.querySelector('.info').style.display = 'flex'
    document.querySelector('.meme-maker').style.display = 'none'
}


function showCanvas(el) {
    // document.querySelector('.filter-bar').style.display = 'none'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.info').style.display = 'none'
    document.querySelector('.meme-maker').style.display = 'block'
    gCurrrctImg = el
    renderCanvas()

}

function getTxt(el) {
    if (!el) return
    if (gMeme.selectedLineIdx != -1) {
        gMeme.lines[(gMeme.selectedLineIdx)].txt = el.value
        renderCanvas()
    } else {
        OnAddtext()
    }
}

function colorPiker(el) {
    gMeme.lines[gMeme.selectedLineIdx].color = el.value
    renderCanvas()
}




function renderCanvas() {
    gCtx.drawImage(gCurrrctImg, 0, 0, gCanvas.width, gCanvas.height)
    gMeme.lines.forEach(line => {
        drawText(line.txt, line.x, line.y, line.size, line.align, line.color, line.font)
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
    addTxtToInput();
    glineMunber++
    renderCanvas()
}



function drawText(txt, x, y, size, align, color,) {
    gCtx.beginPath();
    if (gfont === 'Arial' || gfont === 'comic-neue') {
        gCtx.textAlign = `${align}`
        gCtx.font = `${size}px ${gfont}`;
        gCtx.fillText(txt, x, y);
        gCtx.lineWidth = 2
        gCtx.strokeStyle = `${color}`
        gCtx.fillStyle = `${color}`
        gCtx.fillText(txt, x, y)
        gCtx.strokeText(txt, x, y)
    } else {
        gCtx.textAlign = `${align}`
        gCtx.font = `${size}px ${gfont}`;
        gCtx.fillText(txt, x, y);
        gCtx.lineWidth = 2
        if (gstrock === 1) {
            gCtx.strokeStyle = 'black'
        } else {
            gCtx.strokeStyle = 'white'
        }
        gCtx.fillStyle = `${color}`
        gCtx.font = `${size}px ${gfont}`
        gCtx.fillText(txt, x, y)
        gCtx.strokeText(txt, x, y)
    }

}



