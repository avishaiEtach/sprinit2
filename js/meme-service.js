
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter text',
            size: 40,
            align: 'left',
            color: 'red'
        },
        {
            txt: 'Enter text',
            size: 40,
            align: 'left',
            color: 'red'
        }
    ]

}


function getImageId(id) {
    gMeme.selectedImgId = id - 1
}

function addtext(txt, idx) {
    if (!txt) return gMeme.lines[idx].txt = ''
    return gMeme.lines[idx].txt = txt
}

function upSize() {
    gMeme.lines[gidx].size++
    renderCanvas()
}

function downSize() {
    gMeme.lines[gidx].size--
    renderCanvas()
}










