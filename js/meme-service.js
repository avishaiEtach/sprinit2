
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: -1,
    lines: [


    ]

}


function changeTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    // gMeme.lines[gMeme.selectedLineIdx] = getLineObj(txt);
}

function getLineObj(txt) {

    var line = {
        txt: txt,
        size: 30,
        align: 'left',
        color: 'black',
        x: gx,
        y: gy
    }
    return line

}


function changeLine() {

    var elTxt = document.querySelector('[name=txt-input-first]')
    if (gMeme.lines.length === 0) {
        OnAddtext()
    }

    if (gMeme.selectedLineIdx < gMeme.lines.length - 1) {
        gMeme.selectedLineIdx++
    }
    else {
        gMeme.selectedLineIdx = 0
    }

    elTxt.value = gMeme.lines[gMeme.selectedLineIdx].txt
    console.log(gMeme.selectedLineIdx)

}

function AddSize() {
    if (gMeme.selectedLineIdx === -1)
        return
    gMeme.lines[gMeme.selectedLineIdx].size++
    renderCanvas()
}

function downSize() {
    if (gMeme.selectedLineIdx === -1)
        return

    gMeme.lines[gMeme.selectedLineIdx].size--
    renderCanvas()
}


function upPos() {
    if (gMeme.selectedLineIdx === -1)
        return

    gMeme.lines[gMeme.selectedLineIdx].y -= 10
    renderCanvas()
}

function downPos() {
    if (gMeme.selectedLineIdx === -1)
        return

    gMeme.lines[gMeme.selectedLineIdx].y += 10
    renderCanvas()
}

function alignToLeft() {
    if (gMeme.selectedLineIdx === -1)
        return
    gMeme.lines[gMeme.selectedLineIdx].x = 10
    gMeme.lines[gMeme.selectedLineIdx].align = 'left'
    renderCanvas()
}


function alignToCenter() {
    if (gMeme.selectedLineIdx === -1)
        return
    gMeme.lines[gMeme.selectedLineIdx].x = Math.floor(gCanvas.width / 2)
    gMeme.lines[gMeme.selectedLineIdx].y = Math.floor(gCanvas.height / 2)
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
    renderCanvas()
}


function alignToRight() {
    if (gMeme.selectedLineIdx === -1)
        return
    gMeme.lines[gMeme.selectedLineIdx].x = gCanvas.width - 100
    gMeme.lines[gMeme.selectedLineIdx].align = 'right'
    renderCanvas()
}





function removeLine() {
    if (gMeme.selectedLineIdx === -1)
        return

    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx = gMeme.lines.length - 1
    } else {
        gMeme.selectedLineIdx--
    }
    addTxtToInput()
    renderCanvas()
}


function drawRect(x, y) {
    gCtx.beginPath()
    gCtx.rect(x - 10, y - 40, gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx]).width, 50)
    gCtx.strokeStyle = 'rgb(0,0,255)'
    gCtx.stroke()
}


function clearCanvas(x, y) {
    gCtx.clearRect(x, y, gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx]).width, 50)

}




function addTxtToInput() {
    var elTxt = document.querySelector('[name=txt-input-first]')
    if (gMeme.selectedLineIdx > - 1) {
        elTxt.value = gMeme.lines[gMeme.selectedLineIdx].txt
    }
    else {
        elTxt.value = ''
    }
}

