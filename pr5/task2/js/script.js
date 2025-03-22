let remaining_time = 0;
let timeout_time = 10;
let isTimeout = false;

let interval = setInterval(() => {
    remaining_time = timeout_time--;
    if(remaining_time > 0){

        document.querySelector("#timer").innerText = `${Math.floor(timeout_time/3600/24)} днів, ${Math.floor(timeout_time/60/60 % 24)} годин,` +
            `${Math.floor(timeout_time/60 % 60)} хвилин, ${timeout_time % 60} секунд`
    }

    else if (remaining_time == 0) {
        clearInterval(interval);
        document.querySelector("#button").disabled = true;
    }
}, 1000);

function SubscribeOnClick(){
        alert(`Дякуємо за підписку! Ви встигли! До завершення підписки залишалося ${remaining_time} c.`);
}