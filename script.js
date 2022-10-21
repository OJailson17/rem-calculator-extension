const form = document.querySelector('form');
const inputPxValue = document.querySelector('#px');
const resultContainer = document.querySelector('.rem-result');

const PX_REFERENCE = 16;

onload = () => inputPxValue.focus();

form.addEventListener('submit', event => {
	event.preventDefault();

	convertPxToRem(inputPxValue.value);
});

const convertPxToRem = pxValue => {
	const rem = Number(pxValue) / PX_REFERENCE;

	resultContainer.innerHTML = `${rem}rem`;
};
