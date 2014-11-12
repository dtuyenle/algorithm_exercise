
		
		//http://www.geeksforgeeks.org/program-for-nth-fibonacci-number/

		function Fabonacci() {

			this.recurseNoOptimize = function(n) {
				if(n <= 1)
					return 1
				return this.recurseNoOptimize(n-1) + this.recurseNoOptimize(n-2)
			};

			this.recurseOptimize = function(n,cache) {
				if(n <= 1)
					return 1
				if(typeof(cache[n]) === 'undefined') {
					cache[n] = this.recurseOptimize(n-1,cache) + this.recurseOptimize(n-2,cache);					
				}
				return cache[n]
			};

			this.dynamicProgramming = function(n) {
				var arr = [1,1];
				for(i = 2; i <= n; i++) {
					arr[i] = arr[i-1] + arr[i-2];
				}
				return arr[n]
			};

			this.spaceComplexity = function(n) {
				var a = 1, b = 1, c = 0;
				for(var i = 2; i <= n; i++) {
					c = a + b;
					a = b;
					b = c;
				}
				return c
			};

			this.powerOfMatrix = function(n) {
				return Math.round( ( 1/Math.sqrt(5) ) * ( Math.pow( (1 + Math.sqrt(5))/2, n + 1) - Math.pow( (1 - Math.sqrt(5))/2, n + 1) ) )
			}

			this.powerOfMatrixLogN = function(n) {
				return Math.round( ( Math.pow( (1 + Math.sqrt(5))/2, n + 1) * 1/Math.sqrt(5) ) + 0.5 )
			};

			this.checkTime = function(call,n) {
				var start = new Date().getMilliseconds();
				console.log(call.apply(this,n));
				var end = new Date().getMilliseconds();
				var time = end - start;
				console.log('Took: ' + time + ' milliseconds to run.')
			}

		}



		var test = new Fabonacci();
		var n = 30;

		console.log('recurseNoOptimize');
		test.checkTime(test.recurseNoOptimize,[n]);
		console.log('recurseOptimize');
		test.checkTime(test.recurseOptimize,[n,[]]);
		console.log('dynamicProgramming');
		test.checkTime(test.dynamicProgramming,[n]);
		console.log('spaceComplexity');
		test.checkTime(test.spaceComplexity,[n]);
		console.log('powerOfMatrix');
		test.checkTime(test.powerOfMatrix,[n]);
		console.log('powerOfMatrixLogN');
		test.checkTime(test.powerOfMatrixLogN,[n]);






