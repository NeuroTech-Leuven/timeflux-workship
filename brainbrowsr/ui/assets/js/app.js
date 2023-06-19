'use strict';

let io = new IO();
let stimuli = document.getElementsByClassName('stim');
const CALIBRATION_RUNS = 1;

const delay = ms => new Promise(res => setTimeout(res, ms));

async function calibrate(){
	console.log('========== Start calibration ==========');
	io.event('calibration_start', 100);
	for (var run=0; run<CALIBRATION_RUNS; run++){
		const perm = Array.from(Array(stimuli.length).keys()).sort((a,b)=>0.5-Math.random());
		for (var i=0; i<stimuli.length; i++) {
			const stim = perm[i];
			console.log("Calibrating target " + stim);
			stimuli[stim].style.border = '5px solid yellow';
			await delay(1000);
			io.event('stim', stim+1)
			await delay(2000);
			stimuli[stim].style.border = 'initial';
		}
	}
	io.event('calibration_stop', 101);
}
