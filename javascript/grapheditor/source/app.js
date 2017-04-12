const {dialog} = require('electron').remote;
const fs = require('fs');

const metrics = window["metrics"] = {
	to: "px",
	baseSize: {}
};

const imgDraw = document.getElementById("editor-img-checked");
const inputWidth = document.getElementById("info-img-width");
const inputHeight = document.getElementById("info-img-height");

function openFile () {
 dialog.showOpenDialog({ filters: [{name: 'Images', extensions: ['jpg', 'png', 'gif']}]}, (fileNames) => {
  if (fileNames === undefined) return;
  let fileName = fileNames[0];
  let typeFile = fileName.split('.').pop();

  fs.readFile(fileName, {encoding: 'base64'}, (err, base64data) => {
	imgDraw.src = `data:image/${typeFile};base64,${base64data}`;

	imgDraw.removeAttribute("width");
	imgDraw.removeAttribute("height");
	imgDraw.removeAttribute("style");

	metrics.to = "px";
	document.getElementById("dropdown").selectedIndex = 0;

	inputWidth.value = metrics.baseSize.width = imgDraw.offsetWidth;
	inputHeight.value = metrics.baseSize.height = imgDraw.offsetHeight;
  });

 }); 
}


function onChangeMetrics(value) {

	metrics.to = value;

	let toFixed = 0; 

	if (value === "percent") {
		inputWidth.value = (100 * imgDraw.offsetWidth) / metrics.baseSize.width;
		inputHeight.value = (100 * imgDraw.offsetHeight) / metrics.baseSize.height;
	} 

	if (value === "px") {
		inputWidth.value = imgDraw.offsetWidth;
		inputHeight.value = imgDraw.offsetHeight;
	}

	if (value === "cm") {
		inputWidth.value = convertPxToCm(imgDraw.offsetWidth);
		inputHeight.value = convertPxToCm(imgDraw.offsetHeight);
		toFixed = 2;
	}


	inputWidth.value = parseFloat(inputWidth.value).toFixed(toFixed);
	inputHeight.value = parseFloat(inputHeight.value).toFixed(toFixed);

}


function recalculate(value, property) {

	let result = null;
	if (metrics.to === "percent") {
		let x = (value * metrics.baseSize[property]) / 100;
		result = +x.toFixed(0);
	}

	if (metrics.to === "px") {
		result = value;
	}


	if (metrics.to === "cm") {
		result = convertCmToPx(value);
	}


	return result;

}



function onChangeWidth(value, stopRecalculate) {
	setSizeProperty("width", value);
	
	if (!stopRecalculate) {
		onChangeHeight(inputHeight.value, true);
	}
}


function onChangeHeight(value, stopRecalculate) {
	setSizeProperty("height", value);

	if (!stopRecalculate) {
		onChangeWidth(inputWidth.value, true);
	}
}


function setSizeProperty(property, value) {
	if (!value) return;

	let newSize = recalculate(value, property); // px
	imgDraw.setAttribute(property, newSize);
}


function onChangeDegree(value) {
	imgDraw.style["transform"] = `rotate(${value}deg)`;
}

function setDefault(){
	inputWidth.value = imgDraw.offsetWidth = metrics.baseSize.width;
	inputHeight.value = imgDraw.offsetHeight = metrics.baseSize.height;
	clearSize();
}

function clearSize() {
	imgDraw.removeAttribute("width");
	imgDraw.removeAttribute("height");
	imgDraw.removeAttribute("style");

	metrics.to = "px";
	document.getElementById("dropdown").selectedIndex = 0;
}

function convertPxToCm(px) {
	return px * 0.02645833;
}

function convertCmToPx(cm) {
	return cm / 0.02645833;
}