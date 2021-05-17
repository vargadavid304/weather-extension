console.log("AHOJ, ja som content script")

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        if (message.type === 'color-elements') {
            colorElements(message.color, message.elementName)
        }
    }
)

function colorElements (color, elementName){
    const elements = document.getElementsByTagName(elementName)
    for(let e of elements){
        e.style['background-color'] = color
    }
}