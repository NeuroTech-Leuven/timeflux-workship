'use strict';

// ========== Calibration and event handling ==========
let io = new IO();
let stimuli = document.getElementsByClassName('stim');

const CALIBRATION_RUNS = 5;
const CALIBRATION_DURATION = 5000;
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
				if (stim.id === prediction){
					stim.click()
				}
			}
		}
	}
}

async function calibrate(){
	io.event('calibration_start', 100);
	for (var run=0; run<CALIBRATION_RUNS; run++){
		const perm = Array.from(stimuli).sort((a,b)=>0.5-Math.random());
		for (const stim of perm) {
			stim.style.border = '5px solid yellow';
			await delay(CALIBRATION_DURATION);
			io.event('stim', stim.id)
			await delay(CALIBRATION_EVENT_DELAY);
			stim.style.border = 'initial';
		}
	}
	io.event('calibration_stop', 101);
}

// ========== Interface operation ==========
var powerState = false;
var currentPost = 0;

function selectUp() {
    if (!powerState)
        return
	console.log('up');
    const posts = getPosts();
    currentPost = Math.max(currentPost-1, 0);
    console.log(currentPost);
    posts[currentPost].scrollIntoView();
}

function selectDown(){
    if (!powerState)
        return
	console.log('down');
    const posts = getPosts();
    currentPost = Math.min(currentPost+1, posts.length-1);
    posts[currentPost].scrollIntoView();
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
    if (!powerState)
        return
	console.log('like');
    const posts = getPosts();
    //getLikeButton(posts[currentPost]).click();
}

function getPosts(){
    const contentFrame = document.getElementsByTagName('iframe')[0];
    const contentFrameBox = contentFrame.contentDocument.getElementsByClassName('_10b4')[0];
    const posts = contentFrameBox.getElementsByClassName('_4-u2');
    return posts;
}

function getLikeButton(post){
    return post.getElementsByClassName('_2pi4')[0];
}
