var brightnessBtn = document.getElementById('btn--brightness');
var contrastBtn = document.getElementById('btn--contrast');
var sepiaBtn = document.getElementById('btn--sepia');
var invertBtn = document.getElementById('btn--invert');
var monochromeBtn = document.getElementById('btn--monochrome');
var resetBtn = document.getElementById('btn--reset');

function brightnessClick() {
    chrome.tabs.executeScript({
        code: "document.body.style['filter'] = 'brightness(1.3)'"
    });
 
    window.close();
}

function contrastClick() {
    chrome.tabs.executeScript({
        code: "document.body.style['filter'] = 'contrast(2)'"
    });

    window.close();
}

function sepiaClick() {
    chrome.tabs.executeScript({
        code: "document.body.style['filter'] = 'sepia(0.8)'"
    });

    window.close();
}

function invertClick() {
    chrome.tabs.executeScript({
        code: "document.body.style['filter'] = 'invert(1)'"
    });

    window.close();
}

function monochromeClick() {
    chrome.tabs.executeScript({
        code: "document.body.style['filter'] = 'grayscale(1)', document.body.style.backgroundColor = 'black', document.body.style.color = 'white'"
    });

    window.close();
}

function resetClick() {
    chrome.tabs.executeScript({
        code: "document.body.style=''"
    });

    window.close();
}

brightnessBtn.addEventListener('click', brightnessClick);
contrastBtn.addEventListener('click', contrastClick);
sepiaBtn.addEventListener('click', sepiaClick);
invertBtn.addEventListener('click', invertClick);
monochromeBtn.addEventListener('click', monochromeClick);
resetBtn.addEventListener('click', resetClick);