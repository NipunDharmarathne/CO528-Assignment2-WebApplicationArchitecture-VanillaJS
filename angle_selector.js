// angle_selector.js
const angleInput = document.getElementById('angleInput');
const angleSlider = document.getElementById('angleSlider');
const commonAngles = document.querySelectorAll('input[name="commonAngles"]');

// Initialize with default value
let currentAngle = 0;
updateUI();

// Event listeners
angleInput.addEventListener('input', handleAngleInputChange);
angleSlider.addEventListener('input', handleSliderChange);
commonAngles.forEach((radio) => radio.addEventListener('change', handleCommonAngleChange));

function handleAngleInputChange() {
    currentAngle = parseInt(angleInput.value);
    updateUI();
}

function handleSliderChange() {
    currentAngle = parseInt(angleSlider.value);
    updateUI();
}

function handleCommonAngleChange(event) {
    currentAngle = parseInt(event.target.value);
    updateUI();
}

function updateUI() {
    angleInput.value = currentAngle;
    angleSlider.value = currentAngle;
    commonAngles.forEach((radio) => {
        radio.checked = parseInt(radio.value) === currentAngle;
    });
}
