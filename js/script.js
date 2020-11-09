let filter = 'abcdefghijklmnopqrstuvwxyz';
function translate(){
	document.getElementById('hieroglyph').innerHTML =``;
	var str = document.getElementById('name').value;
	str = str.toLowerCase();
	for (let i = 0; i < str.length; i++) {
		if (filter.indexOf(str[i]) !== -1) {
			document.getElementById('hieroglyph').innerHTML +=`<img src="img/${str[i]}.png" style="width:100px">`;
		}
	}
}