function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  //this is the method to calculate the time the stopwatch starts counting
  this.start = function() {
    //if we run the start function the second time when its already running, we throw an error
    if (running) throw new Error("Stopwatch already running");
    startTime = new Date();
    running = true;
  };
  //this is the method to calculate the time the stopwatch stops counting
  this.stop = function() {
    //if we stop function the second time when it has stopped already, we throw an error or trying to stop when we didnt start first
    if (!running) throw new Error("Stopwatch has not started");
    running = false;
    endTime = new Date();

    //here we use this formular to calculate the number of seconds from the startTime to the stopTime
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    //duration = duration + seconds (0 + seconds)
    duration += seconds;
  };
  //The "reset" property is a function that resets all properties to default
  this.reset = function() {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };
  //Currently, all our properties "startTime, endTime, duration & running" are hidden outside the Stopwatch function but we need to be able to read the value of "duration" to calculate the total duration so we need to set this to read only using the "defineProperty" to be able to do this.
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

// We do not need to read the values of other hidden variables here so they remain hidden with abstraction. We only need the duration
const sw = new Stopwatch();

const sw = new Stopwatch();

/*RESULT: -
 sw.start()
undefined

sw.stop()
undefined

sw.duration
5.575
*/

//confirming the validation
/*
sw.stop()
Uncaught Error: Stopwatch has not started


sw.start()
undefined

sw.start()
Uncaught Error: Stopwatch already running
*/

/*Testing for reset

sw.start()
undefined

sw.reset()
undefined

sw.start()
undefined

sw.stop()
undefined

sw.duration
7.465

We were able to call "start" again after calling reset*/
