/**
 * Countdown timer that counts down from 30 to 0.
 * Logs the current countdown value to the console every second.
 * Stops and logs "Countdown finished!" when the countdown reaches 0.
 *
 * @constant {number} countdown - The starting value of the countdown.
 * @constant {number} interval - The interval in milliseconds (1000 ms = 1 second).
 * @function setInterval - Executes a function repeatedly, with a fixed time delay between each call.
 * @function clearInterval - Stops the repeated execution of a function set by setInterval.
 */
//Create a counter in javascript (count down from 30 to 0).
let countdown = 30;

const timer = setInterval(() => {
    console.log(countdown);
    countdown--;

    if (countdown < 0) {
        clearInterval(timer);  // Stop the countdown when it reaches 0
        console.log("Countdown finished!");
    }
}, 1000);  // 1000 ms = 1 second
