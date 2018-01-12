let style = document.createElement("style");
let currentThemeIndex = 0;  // <-- Default colorscheme index

function genRandom(range = 10, offset = 0) {
    return Math.floor((Math.random() * range + offset));
}

class Colorscheme {
	constructor(bgcolor, fgcolor, font = "Overpass Mono", addon = "empty") {
		this.bgcolor = bgcolor;
		this.fgcolor = fgcolor;
        this.font = font;
        this.addon = addon;
	}
}

function generateThemeCSS(_colorscheme) {
    return "body {" + 
    "background-color:" + _colorscheme.bgcolor + ";" +
    "color:" + _colorscheme.fgcolor + ";" +
    "font-family:'" + _colorscheme.font + "','Overpass Mono',monospace;" +
    (_colorscheme.addon=="empty" ? "" : _colorscheme.addon) +
    "}";
}

function applyTheme(_colorscheme) {
    console.log("changing theme of " + style + " to: " + _colorscheme);
    style.innerHTML = generateThemeCSS(_colorscheme);
    document.querySelector('meta[name="theme-color"]').setAttribute("content", _colorscheme.bgcolor);
}

function applyRandomTheme() {
    let rand = genRandom(colorschemes.length);
    console.log(rand);
    while (rand == currentThemeIndex) {
        rand = genRandom(colorschemes.length);
    }
    currentThemeIndex = rand;
    console.log(rand);
    applyTheme(colorschemes[rand]);
}





// Define colorscheme array
let colorschemes = [];

// Push colorschemes to the colorscheme array -- ADD HERE YOUR OWN COLORSCHEMES!
colorschemes.push(new Colorscheme("#9bbc0f", "#306230", "Fixedsys Excelsior 3.01", "text-shadow: #84a40e 4px 4px 0;"));
colorschemes.push(new Colorscheme("#8bac0f", "#306230"));//, "Futura Md BT"));
colorschemes.push(new Colorscheme("#f99593", "#734948"));
colorschemes.push(new Colorscheme("#8f99ad", "#273043"));

// Apply the theme
applyTheme(colorschemes[currentThemeIndex]);
document.head.appendChild(style);
