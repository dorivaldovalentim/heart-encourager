/**
 * JS principal e único do projecto
 */

window.addEventListener('load', function() {
	// Preparação das variáveis de interação
	$yes = document.querySelector('#yes');
	$think = document.querySelector('#think');
	$no = document.querySelector('#no');
	$back = document.querySelector('#back');


	// Trabalhando o listener do botão de aceitação

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

		console.log('sim');
	});


	// Trabalhando o listener do botão de preciso de tempo para pensar

	$think.addEventListener('click', function(e) {
		e.preventDefault();

		$yes.style.display = 'block';
		$think.style.display = 'none';
		$no.innerHTML = '<span class="fa fa-close"></span> <span>Não</span>';

		document.querySelector('.title').innerHTML = "❔ Será ❓";
		document.querySelector('.heart').innerHTML = "🤔";
		document.querySelector('.heart').classList.add('animation-none');
	});


	// Trabalhando o listener do botão de negação

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

		console.log($confirm)
	});
});