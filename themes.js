let style = document.createElement("style");
let currentTheme = 0;

function genRandom(x = 10, offset = 0) {
    return Math.floor((Math.random() * x + offset));
}

class Colorscheme {
	constructor(bgcolor, fgcolor) {
		this.bgcolor = bgcolor;
		this.fgcolor = fgcolor;
	}
	// TODO: IMPLEMENT BACKGROUNDS
}

function generateThemeCSS(_colorscheme) {
    return "body {" + 
    "background-color:"  + _colorscheme.bgcolor +
    ";color: " + _colorscheme.fgcolor + "}";
}

function applyTheme(_colorscheme) {
    document.body.style.color = _colroscheme.fgcolor;
    document.body.style.backgroundColor = _colorscheme.bgcolor;
}

function applyRandomTheme() {
    let rand = genRandom(colorschemes.length);
    while (rand=currentTheme) {
        rand = genRandom(colorschemes.length);
    }
    style.innerHTML = generateThemeCSS(colorschemes[rand]);
    
}

let colorschemes = [];

colorschemes.push(new Colorscheme("#8bac0f", "#306230"));
colorschemes.push(new Colorscheme("#f99593", "#734948")); //a06968
colorschemes.push(new Colorscheme("#8f99ad", "#273043")); //1f2d3d

// Apply the theme
style.innerHTML = generateThemeCSS(colorschemes[0]);
document.head.appendChild(style);
