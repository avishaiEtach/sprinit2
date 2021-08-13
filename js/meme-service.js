
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
    if (glineMunber === 0) {
        var line = {
            txt: txt,
            size: 30,
            align: 'center',
            color: 'black',
            x: Math.floor(gCanvas.width / 2),
            y: 30
        }
    }
    else if (glineMunber === 1) {
        var line = {
            txt: txt,
            size: 30,
            align: 'center',
            color: 'black',
            x: Math.floor(gCanvas.width / 2),
            y: gCanvas.height - 10
        }
    } else {
        var line = {
            txt: txt,
            size: 30,
            align: 'center',
            color: 'black',
            x: Math.floor(gCanvas.width / 2),
            y: Math.floor(gCanvas.height / 2)
        }
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
    gMeme.lines[gMeme.selectedLineIdx].align = 'left'
    gMeme.lines[gMeme.selectedLineIdx].x = 0
    renderCanvas()
}


function alignToCenter() {
    if (gMeme.selectedLineIdx === -1)
        return
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
    gMeme.lines[gMeme.selectedLineIdx].x = gCanvas.width / 2
    renderCanvas()
}


function alignToRight() {
    if (gMeme.selectedLineIdx === -1)
        return
    gMeme.lines[gMeme.selectedLineIdx].align = 'right'
    gMeme.lines[gMeme.selectedLineIdx].x = gCanvas.width
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
    gCtx.rect(x, y, gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx]).width, gMeme.lines[gMeme.selectedLineIdx].size)
    gCtx.strokeStyle = 'rgb(0,0,255)'
    gCtx.stroke()
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




