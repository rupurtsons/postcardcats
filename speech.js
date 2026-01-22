function setupSpeechToText(startButtonId, resultBoxId) {
    const startButton = document.getElementById(startButtonId);
    const resultBox = document.getElementById(resultBoxId);

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (typeof window.SpeechRecognition === 'undefined') {
        resultBox.textContent = "i cant hear u";
        startButton.disabled = true;
        return;
    }

    const recognition = new window.SpeechRecognition();
    recognition.continuous = true; 
    recognition.interimResults = true; 
    recognition.lang = 'en-US'; 

    let isRecording = false;

    startButton.addEventListener('click', () => {
        if (isRecording) {
            recognition.stop();
            startButton.textContent = `Start Listening (${startButtonId.includes('Left') ? 'Left' : 'Right'})`;
        } else {
            recognition.start();
            startButton.textContent = `Stop Listening (${startButtonId.includes('Left') ? 'Left' : 'Right'})`;
        }
        isRecording = !isRecording;
    });

    recognition.addEventListener('result', (event) => {
        const transcript = Array.from(event.results)
            .map((result) => result[0].transcript)
            .join('');
        resultBox.textContent = transcript;
    });

    recognition.addEventListener('end', () => {
        if (isRecording) {
            recognition.start();
        }
    });

    recognition.addEventListener('error', (event) => {
        console.error('Speech recognition error:', event.error);
        startButton.textContent = `Start Listening (${startButtonId.includes('Left') ? 'Left' : 'Right'})`;
        isRecording = false;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupSpeechToText('startButtonLeft', 'resultLeft');
    setupSpeechToText('startButtonRight', 'resultRight');
});






// const textDisplay = document.getElementById('overlay');
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.interimResults = true;
//     recognition.continuous = true;
//     recognition.onresult = function(event) {
//     const transcript = event.results[event.results.length - 1][0].transcript;
//     textDisplay.textContent = transcript;
//     };
//     recognition.onerror = function(event) {
//     console.error('Speech recognition error:', event.error);
//     };
//  recognition.start();

//  const element = document.getElementById('myElementId');
//  element.classList.add('center-text');



