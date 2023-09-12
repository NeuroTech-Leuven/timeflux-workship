'use strict';

let io = new IO();
let stimuli = document.getElementsByClassName('stim');

const CALIBRATION_RUNS = 1;
//const CALIBRATION_DURATION = 5000;
const CALIBRATION_DURATION = 1000;
const CALIBRATION_EVENT_DELAY = 1000;

const delay = ms => new Promise(res => setTimeout(res, ms));

io.subscribe('events');
io.on('events', handleEvent);

function handleEvent(data,meta){
	for (const key of Object.keys(data)){
		const eventType = data[key]['label']
		if (eventType === 'predict'){
			const prediction = JSON.parse(data[key]['data'])['result'];
			for (const stim of stimuli){
				stim.style.border = 'initial';
				if (stim.id === prediction){
					stim.style.border = '5px solid green';
					stim.click()
				}

			}
		}
	}
}

async function calibrate(){
	console.log('========== Start calibration ==========');
	io.event('calibration_start', 100);
	for (var run=0; run<CALIBRATION_RUNS; run++){
		const perm = Array.from(stimuli).sort((a,b)=>0.5-Math.random());
		for (const stim of perm) {
			console.log("Calibrating target " + stim.id);
			stim.style.border = '5px solid yellow';
			await delay(CALIBRATION_DURATION);
			console.log(stim);
			io.event('stim', stim.id)
			await delay(CALIBRATION_EVENT_DELAY);
			stim.style.border = 'initial';
		}
	}
	console.log('========== Stop calibration ==========');
	io.event('calibration_stop', 101);
}

const contentFrame = document.getElementByClassName('_10b4')[0];

var powerState = false;
function selectUp() {
	console.log('up');
    //myIframe.contentWindow.scrollTo(xcoord,ycoord);
}
function selectDown(){
	console.log('down');
}
function selectOn(){
	if(powerState){
		console.log('off');
		powerState = false;
	}else{
		console.log('on');
		powerState = true;
	}
}
function selectLike(){
	console.log('like');
}
