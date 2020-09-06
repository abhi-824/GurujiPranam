let roar = document.querySelector('.roar');
let cards = document.querySelector('.card');
let baby = document.querySelector('.image_primary');
var today = new Date();
document.querySelector('.start_time').value =
	today.getHours() + ':' + today.getMinutes();
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
		let hours = duration / 60;
		let min = duration % 60;

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
	tasks.sort(function (a, b) {
		var dateA = a.start_time,
			dateB = b.start_time;
		return dateA > dateB; //sort by date ascending
	});

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
	document.querySelector('.section2').remove();
	document.querySelector('.section2').classList.remove('hidden');

	document.querySelector('.section2').style = `
    background:linear-gradient(0deg, rgba(211, 64, 64, 0.68), rgba(211, 64, 64, 0.68));
    display:grid;
    grid-template-columns:7fr 13fr ;
   `;
	speak_out(document.querySelector('.msg').innerHTML);
	let j = 0;
	console.log(tasks[0]);
	let LALA = window.setInterval(function () {
		let date = new Date();
		// console.log(tasks[j].start_time)
		console.log(date.getHours());
		let hours = tasks[j].start_time;
		let hour = '';
		let min = '';
		for (let i = 0; i < hours.length; i++) {
			if (hours[i] === ':') {
				hour = hours.slice(0, i);
				min = hours.slice(i + 1, hours.length);
				break;
			}
		}
		// console.log(hour);
		let prop_hor = date.getHours().toString();
		let prop_min = date.getMinutes().toString();
		// console.log(typeof(prop_hor))
		let kk = 1;
		if (
			prop_hor === hour &&
			(min == prop_min || min == prop_min + 1 || min == prop_min - 1)
		) {
			if (kk) {
				document.querySelector('.chat').classList.add('animated');
				document.querySelector('.chat').classList.add('bounceOutLeft');
				console.log(tasks.length);
				console.log(j);
				let duu = tasks[j].duration;
				duu = duu / 20;
				let str = `So, what you are waiting for? Your task is to complete what you assigned to yourself:${tasks[j].name}. You have ${tasks[j].duration} minutes to complete it and you must complete it by ${tasks[j].start_time}. I will remind you every ${duu} minutes. `;
				make_messages(str);
				kk = 0;
				check_for_single(tasks, j);
				j++;
				if (j == tasks.length) {
					clearInterval(LALA);
				}
			}
		}
	}, 3000);
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
function make_messages(str) {
	let msg1 = document.createElement('div');
	msg1.classList.add('chat');
	let p = document.createElement('p');
	p.classList.add('msg');
	p.innerHTML = str;
	msg1.appendChild(p);
	document.querySelector('.chat_messages').appendChild(msg1);
	speak_out(str);
}
function check_for_single(tasks, j) {
	let duu = tasks[j].duration;
	let hours = tasks[j].start_time;
	let hour = '';
	let min = '';
	for (let i = 0; i < hours.length; i++) {
		if (hours[i] === ':') {
			hour = hours.slice(0, i);
			min = hours.slice(i + 1, hours.length);
			break;
		}
	}
	let hr = parseInt(hour);
	let hrs = parseInt(hour);
	let mn = parseInt(min);
	let mns = parseInt(min);
	hr += duu / 60;
	mn += duu % 60;
	let tl = (hr - hrs) * 60 + (mn - mns);
	window.setInterval(() => {
		document.querySelector('.chat').classList.add('animated');
		document.querySelector('.chat').classList.add('bounceOutLeft');
		let str = `You got ${tl} minutes left bro. Come on let's try to do it faster. The closer you look, the lesser you see.`;
		make_messages(str);
		tl-=duu;
	}, duu * 4000);
	// let end_time=
}
let quotes;
fetch('https://type.fit/api/quotes')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		quotes = data;

		console.log(data);
	});
// console.log(quotes)
