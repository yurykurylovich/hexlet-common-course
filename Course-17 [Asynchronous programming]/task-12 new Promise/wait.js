

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time))

wait(5000).then(() => console.log('Time is over!'));
