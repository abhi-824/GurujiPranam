let roar = document.querySelector('.roar');
let cards = document.querySelector('.card');
let baby = document.querySelector('.image_primary');

let tasks = [];

roar.addEventListener('click', ror_pls);

document.querySelector('.add-task').addEventListener('click', function (e) {
	console.log('hello');
	e.preventDefault();
	let name_str = document.querySelector('.task').value;
	let time = document.querySelector('.start_time').value;
	// let priority=document.querySelector(".task").value;
	let duration = document.querySelector('.duration').value;
	let strictness = document.querySelector('.slider').value;
	if (name_str === '' || time === '' || duration === '') {
		alert('Come on man!! Am I a joke to you?');
	} else {
		let task = new Object();
		task.name = name_str;
		task.duration = duration;
		task.strictness = strictness;
		task.start_time = time;
		tasks.push(task);
		let naya_bacha = document.createElement('div');
		naya_bacha.innerHTML = `
        <h2>${name_str}</h2>
        <h2>${duration}</h2>
        <h2>${time}</h2>
        `;

		naya_bacha.classList.add('naya_bacha');
		document.querySelectorAll('.section1')[1].appendChild(naya_bacha);
		document.querySelector('.task').value = '';
		document.querySelector('.start_time').value = '';
		document.querySelector('.duration').value = '';
		roar.style.cursor = 'pointer';
		console.log(tasks);
		e.preventDefault();
		e.preventDefault();
	}
	e.preventDefault();
});
function ror_pls() {
	var load_kkk = document.querySelector('.load-kro2');
	load_kkk.classList.remove('hidden');
	document.querySelector('.section1').remove();
	document.querySelector('.inner-card').remove();
	document.querySelector('.imga').remove();
	document.querySelector('.roar').remove();
	document.querySelector('.section1').innerHTML = `
    <div class="section1">
			<div class="image_secondary">
				<img src="res/pngfuel.com.png" alt="" class="image_sec  />
			</div>
			<div class="comments">
				<div class="comment_box">
					<div class="content">
						You Think you are tired? Think Again and have some sleep
					</div>
				</div>
				<div class="comment_box">
					<div class="content">
						If you think you are done, just take a nap and think again!
					</div>
				</div>
				<div class="comment_box">
					<div class="content">
						A fun Fact! You are giving your orders now, cap!
					</div>
				</div>
			</div>
		</div>
    `;
	document.body.style = 'display:grid;grid-template-columns: 2.6fr 0.5fr;';
	setTimeout(() => {
		load_kkk.classList.add('disapper');
	}, 1000);
	document.querySelector('.section2').innerHTML = `
    <div class="image_boy">
    <img src="res/baby2.png"  alt="">
</div>
<div class="chat_messages">
    <div class="chat">
        <p class="msg">Hey, I think you are all set for the day. Remember, I am here to watch you and you, be a good boy and without further shit, let’s start this.</p>
    </div>
</div>
    `;
	document.querySelector('.section2').style = `
    background:linear-gradient(0deg, rgba(211, 64, 64, 0.68), rgba(211, 64, 64, 0.68));
    display:grid;
    grid-template-columns:7fr 13fr ;
   `;
	speak_out(document.querySelector('.msg').innerHTML);
	// setTimeout(()=>{
	//     let str=`So, what you are waiting for? Your first task ${}`
	//     make_messages();
	// },2000)
}

function speak_out(str) {
	var synth = window.speechSynthesis;

	var inputForm = document.querySelector('form');
	var inputTxt = str;
	var voiceSelect = 'Google US English (en-US)';

	var pitchValue = 0.7;

	var rateValue = 1.1;

	var utterThis = new SpeechSynthesisUtterance(inputTxt);
	// utterThis.voice=voiceSelect;
	// var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
	// for (i = 0; i < voices.length; i++) {
	// 	if (voices[i].name === selectedOption) {
	// 		utterThis.voice = voices[i];
	// 	}
	// }
	utterThis.pitch = pitchValue;
	utterThis.rate = rateValue;
	synth.speak(utterThis);
}
function make_messages() {
	let msg1 = document.createElement('div');
}
let quotes;
fetch('https://type.fit/api/quotes')
	.then(function (response) {
        return response.json();
	})
	.then(function (data) {
        quotes=data;
		console.log(data);
	});
// console.log(quotes)