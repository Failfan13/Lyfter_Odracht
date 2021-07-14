let myStr = `><Hello#521paddawan2==)
Today---you0[]learn.,.-important.stuff

*&Episode238I(&
#$--THE33PHANTOM]}]MENACE[[

&^%$Turmoil32<<has!-engulfed#2the:
))-Galactic-3-0Republic.2€The8&&taxation
@)of#)#trade^@#*routes""{}to}}[outlying239{star
13-systems%%$is@%^in!235%dispute.23

<,<Hoping><>#to81*resolve*--_the(-)matter*!*#
with??a??.blockade;\;of*&^*deadly??
battleships,@#%99the158*greedy%@*)Trade]}0-
Federation@#%3has@#@%3"stopped>?>all<#4
shipping9(8to(*&the&&$small$!@planet$#*
#@#T&of!?Naboo.$

While38*the-Congress==+of#&&@the!#@
Republic$@:;endlessly?%#debates|}[
this235#%$^alarming_()8chain&)(@$of*&events,3
{[{--the0Supreme--=+Chancellor+09*has]
secretly@#]dispatched!!two%%$Jedi%:;
Knights,%the::guardians*&of+-
peace()and][3justice)&^}in@{the^}$
galaxy,8to##settle%@the@#%conflict....`

for(var i=0;i<=1;i++){
	let span = document.createElement('span');
	span.id = "span"+i;
	span.className = "span";
	document.body.appendChild(span);
}

// ------------- Manier 1 ------------
// regular expressions, alleen lukt het mij niet om de extra spaties
// weg te halen zonder /s te gebruiken die gelijk de linebrake weg haalt

{
	myStr = myStr.replace(/[^\w.]|\d|_|\.[a-z]/g,' ');
	myStr = myStr.replace(/\s(\.)?\s+(\.)?/g, ' ');
	console.log(myStr)
	document.getElementById('test-1').innerHTML=myStr;
}

	// ----Ontvangen van de inputs----
	document.getElementById('snel_btn').addEventListener('click', () => {
		while (document.getElementById('test-2').firstChild){
			document.getElementById('test-2').removeChild(document.getElementById('test-2').firstChild);
		}
		let input0 = document.getElementById('text_input0').value.trim();
		let input1 = document.getElementById('text_input1').value.trim();
		input(input0,input1)
	})

	// ----Maken van de Fizz Buzz functie----
let input =(fizz,buzz) =>{
	let i=1;
	while(fizz != ""&&buzz != ""&&i<=100){
		// ----Checked of i % fizz ook echt 0 kan worden----
		if(i % fizz == 0){
			visueel('F');
		// ----Checked of i % buzz ook echt 0 kan worden----
		}else if(i % buzz == 0){
			visueel('B');
		// ----Als geen van beide mogelijk is log dan het nummer----
		}else{
			// ----String van gemaakt dan stapeld hij niet----
			visueel(i.toString());
		}
		i++;
	}
};

let visueel = (num) => {
	let elm = document.createElement('p');
	elm.innerHTML= num;
	document.getElementById('test-2').appendChild(elm);
}

	//----Inputs door geven aan de Fizz Buzz functie----
	//input(input0,input1)