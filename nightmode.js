var isDark = false;

const toggleTheme = () => {
	document.body.className = (isDark ^= 1) ? "darktheme" : "lighttheme";
}
