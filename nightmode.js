var isDark = false;

const toggleTheme = () => {
    const isCurrentlyLight = (isDark ^= 1);
	document.body.className = isCurrentlyLight ? "darktheme" : "lighttheme";
    var classn = isCurrentlyLight ? "darktheme" : "lighttheme";
    const list = document.getElementsByTagName("path");
    for (var i = 0; i < list.length; i++) {
        list[i].className = classn;
        console.log(list[i]);
    };
}
