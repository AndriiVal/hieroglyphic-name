let filter = 'abcdefghijklmnopqrstuvwxyz';
function showHieroglyph(){
	$('#hieroglyph').html('');
	var str = $('#name').val();
	str = str.toLowerCase();
	for (let i = 0; i < str.length; i++) {
		if (filter.indexOf(str[i]) !== -1) {
			if (window.matchMedia("(orientation: portrait)").matches) {
				$('#hieroglyph').append(`<p><img src="img/${str[i]}.png" style="width:200px"></p>`);
			} else{
				$('#hieroglyph').append(`<img src="img/${str[i]}.png" style="width:100px">`);
			}
		}
	}
}

window.onresize = function (event) {
	showHieroglyph();
}
