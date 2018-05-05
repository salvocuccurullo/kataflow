
function add(numbers){
	if (numbers.length==0)
		return 0;
		
	var sum = 0;
	var delim = ",";
	var neg_numbers = [];
	
	if (numbers.indexOf("//")==0){
		delim = numbers.split("\n")[0].replace("//","");
		if (delim.lenght==0)
			return 0;
		console.log("Delimiter found! " + delim);
		numbers = numbers.split("\n")[1];
		console.log("new string to parse with delimiter: " + numbers);
	}
	
	var splitted = numbers.replace("\n",delim).split(delim);
	for (i=0; i<splitted.length; i++){
		
		var num = Number(splitted[i]);
		
		if (num > 1000)
			continue;
		
		if ( num < 0 ){
			 neg_numbers.push(num);
			 continue;
		}
		else
			sum += num;
	}

	if (neg_numbers.length > 0)
		throw "negatives not allowed: " + neg_numbers;
		
	return sum
}

function test(numbers){
	try {
		console.log("==================");
		console.log("Testing [" + JSON.stringify(numbers) + "]...");
		x = add(numbers);
		console.log("Result: " + x);
	}
	catch(e) {
		console.log(e);
	}	
}

test("");
test("5");
test("2,4");
test("1,2,3");
test("1,-2,-3");
test("1,4,7,10,");
test("1,1005,3");
test("2,1000,3");
test("4,5\n6");
test("//;\n1;3;5");
test("//\n\n1\n3\n5");




/*
  		console.log(splitted[i].replace("\n","."));
		console.log(Number( splitted[i] ));
		console.log("=======================");
		//sum += Number( splitted[i].replace("\\n","") );
 */
