/**
 * Created by Odee on 5/31/15.
 */

//no more global variable
(function(){ //IIFE: Immediately Invoked Function Expression "iffy"

var createWorker = function(){

	var workCount:number = 0;

	//private implementation
	var task1 = function(){
		workCount++;
		console.log("task1 workCount: " + workCount);
	};

	var task2 = function(){
		workCount++;
		console.log("task2 workCount: " + workCount);
	};

	//return an object to the outside world.
	return {
		//key points to value
		job1: task1,
		job2: task2
	};

};

var worker = createWorker();

worker.job1();
worker.job2();
worker.job2();
worker.job2();

}()); //The "()" immediately invoked the function