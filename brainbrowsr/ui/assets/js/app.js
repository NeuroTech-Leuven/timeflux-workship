'use strict';

let io = new IO();
let stimuli = document.getElementsByClassName('stim');

const delay = ms => new Promise(res => setTimeout(res, ms));

async function calibrate(){
	console.log('========== Start calibration ==========');
	for (var stim=0; stim<stimuli.length; stim++) {
		console.log("Calibrating target " + stim);
		stimuli[stim].style.border = '5px solid yellow';
		io.event('calibration_'+(stim+1), stim+10+1)
		await delay(8000);
		stimuli[stim].style.border = 'initial';
	}
}
