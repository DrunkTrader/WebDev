const startTime = Date.now();  // Capture the start time

setTimeout(() => {
    const endTime = Date.now();  // Capture the time when the callback is executed
    const elapsedTime = endTime - startTime;  // Calculate the difference
    console.log(`Elapsed time: ${elapsedTime} ms`);
}, 1000);  // 1000 ms (1 seconds) delay
