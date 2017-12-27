var isDark = false;

const toggleTheme = () => {
    const isCurrentlyLight = (isDark ^= 1);
    var _hexcolor;
    var _csscolor;
    if (isCurrentlyLight) {
    	_hexcolor = "#333333";
    	_csscolor = "darktheme";
    } else {
    	_hexcolor = "#EEEEEE";
    	_csscolor = "lighttheme";
    }
	document.body.className = _csscolor;
    document.querySelector('meta[name="theme-color"]').setAttribute("content", _hexcolor);
    const list = document.getElementsByTagName("path");
    for (var i = 0; i < list.length; i++) {
        list[i].className = _csscolor;
        console.log(list[i]);
    };
}
