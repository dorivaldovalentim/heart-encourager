/**
 * JS principal e único do projecto
 */

let container = document.querySelector('section');

window.addEventListener('load', function() {
	// Preparação das variáveis de interação
	$yes = document.querySelector('#yes');
	$think = document.querySelector('#think');
	$no = document.querySelector('#no');
	$back = document.querySelector('#back');


	// Trabalhando o listener de click do botão de aceitação

	$yes.addEventListener('click', function(e) {
		e.preventDefault();

		$yes.innerHTML = '😍😍';
		$yes.style.width = '50%';
		$no.style.display = 'none';
		$think.style.display = 'none';

		document.querySelector('.title').innerHTML = "💖 Eu te amo 💖";
		document.querySelector('.heart').innerHTML = "💝";

		$back.style.display = 'block';
		document.querySelector('.heart').classList.remove('animation-none');
	});


	// Trabalhando o listener de click do botão de preciso de tempo para pensar

	$think.addEventListener('click', function(e) {
		e.preventDefault();

		$yes.style.display = 'block';
		$think.style.display = 'none';
		$no.innerHTML = '<span class="fa fa-close"></span> <span>Não</span>';

		document.querySelector('.title').innerHTML = "❔ Será ❓";
		document.querySelector('.heart').innerHTML = "🤔";
		document.querySelector('.heart').classList.add('animation-none');
	});


	// Trabalhando o listener de click do botão de negação

	$no.addEventListener('click', function(e) {
		e.preventDefault();
		$confirm = confirm("Tens a certeza?");

		if ($confirm) {
			$yes.style.display = 'none';
			$no.innerHTML = '😭';

			document.querySelector('.title').innerHTML = "💘 Ainda te amo e espero que isso não destrua nossa amizade 💔";
			document.querySelector('.heart').innerHTML = "💘";
			$back.style.display = 'block';
		}
	});


	// Trabalhando no listener de mouseenter do botão de negação

	$no.addEventListener('mouseenter', function(e) {
		let random_position = {
			x: Math.floor(Math.random() * (container.offsetWidth - 100)),
			y: Math.floor(Math.random() * (container.offsetHeight - 100))
		}

		console.log(random_position);

		this.style.position = 'absolute';
		this.style.left = `${random_position.x}px`;
		this.style.top = `${random_position.y}px`;
	});
});