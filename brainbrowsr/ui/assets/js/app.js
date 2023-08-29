'use strict';

let io = new IO();
let stimuli = document.getElementsByClassName('stim');

const CALIBRATION_RUNS = 1;
//const CALIBRATION_DURATION = 5000;
const CALIBRATION_DURATION = 1000;
const CALIBRATION_EVENT_DELAY = 1000;

const delay = ms => new Promise(res => setTimeout(res, ms));

io.subscribe('events');
io.on('events', handlePredict);


async function handlePredict(data,meta){
	console.log(data);
	console.log(meta);
}

async function calibrate(){
	console.log('========== Start calibration ==========');
	io.event('calibration_start', 100);
	for (var run=0; run<CALIBRATION_RUNS; run++){
		const perm = Array.from(stimuli).sort((a,b)=>0.5-Math.random());
		for (const stim of perm) {
			console.log("Calibrating target " + stim.id);
			stim.style.border = '5px solid yellow';
			await delay(CALIBRATION_EVENT_DELAY);
			io.event('stim', stim.id)
			await delay(CALIBRATION_DURATION-CALIBRATION_EVENT_DELAY);
			stim.style.border = 'initial';
		}
	}
	io.event('calibration_stop', 101);
}
