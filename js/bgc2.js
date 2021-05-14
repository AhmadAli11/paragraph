let
	buttonW = document.getElementById('cl1'),
	buttonB = document.getElementById('cl2');

buttonW.onclick = () => {
    document.body.style.backgroundColor = '#fff';
	document.getElementById('slash').style.color = '#131313';
	document.getElementById('f').style.backgroundColor = '#fff';
};

	buttonB.onclick = () => {
	document.body.style.backgroundColor = '#131313';
	document.getElementById('slash').style.color = '#fff';
	document.getElementById('f').style.backgroundColor = '#131313';
	};
