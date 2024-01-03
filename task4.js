function addZero(unit) {
    return unit < 10 ? '0' + unit : unit; 
}

function time() {
    const now = new Date();
    const hours = addZero(now.getHours());
    const minutes = addZero(now.getMinutes());
    const seconds = addZero(now.getSeconds());

    const currentTime = `${hours}:${minutes}:${seconds}`;
    console.log(currentTime);
}

setInterval(time, 1000);
