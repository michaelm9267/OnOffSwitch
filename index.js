let switchOn = false;

const swtch = document.querySelector(".switch");
const swtchCnt = document.querySelector(".swtchCnt");
const onOff = document.querySelector('.onOff')
const body = document.querySelector(".body")

const toggleSwtch = () => {
    switchOn = !switchOn;
    if (switchOn) {
        swtch.style.left = "calc(100% - 53%)"; // Adjust this value based on switch width and padding
        swtchCnt.style.backgroundColor = "blue"
        body.style.backgroundColor = 'rgba(68, 60, 60, 0.959)'
        onOff.innerText = "On"
        onOff.style.color = 'white'

    } else {
        swtch.style.left = "3px";
        swtchCnt.style.backgroundColor = "black"
        body.style.backgroundColor = 'white'
        onOff.innerText = "Off"
        onOff.style.color = 'black'
    }
};

// Initial position update
toggleSwtch(); // This ensures the initial position is set based on the switchOn state
