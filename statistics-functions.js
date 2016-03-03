function calculateStatistics(dataObj) {
  try{
	  var dataArray = dataObj.dataArray;

	  dataObj.count  = dataArray.length;
	  dataObj.sum    = sum(dataArray);
	  dataObj.max    = max(dataArray);
	  dataObj.min    = min(dataArray);
	  dataObj.mean3  = mean3(dataObj.sum, dataObj.count);
	  dataObj.median = median(dataArray);
	  dataObj.mode   = mode(dataArray);

	  dataObj.range  = range(dataArray);
	  
	  var freqDist = frequencyDistribution(dataArray);

	  dataObj.freqDist = freqDist;
	  
  } catch(exception) {
      console.log(exception);
  }
}

function sort(array) {
	array.sort(function(v1, v2) { return v1 - v2;});
}

function sum(array) {
	var sum = 0;
	for(var i=0; i<array.length; i++){
		sum += array[i];
	}
	
	sum *= 1000;
	sum = Math.round(sum);
	sum /=1000;
	return sum;	
}

function max(array) {
	var max    = 0;
	var maxSet = false;
	for(var i=0; i<array.length; i++) {
	  if(!maxSet || max < array[i]){
		max = array[i];
		maxSet = true;
	  }
	}
    return max;
}

function min(array) {
	var min    = 0;
	var minSet = false;
	for(var i=0; i<array.length; i++) {
	  if(!minSet || min > array[i]){
		min = array[i];
		minSet = true;
	  }
	}
    return min;
}

function mean3(sum, count) {
	var mean = sum / count;
	var mean3 = mean * 1000;
	mean3 = Math.round(mean3);
	mean3 = mean3 / 1000;
	return mean3;
}

function median(array) {
	sort(array);
	if(array.length % 2 == 0) {
		var midIndex = array.length / 2;
		return (array[midIndex - 1] + array[midIndex]) / 2;
	} else {
		var midIndex = Math.round(array.length / 2);
		return array[midIndex];
	}	  
}

function mode(array) {
	var freqDist = frequencyDistribution(array);
	
	var modeVal = 0;
	var modeFrequency = 0;
	var modeSet = false;
	
	for(var i=0; i<=array.length; i++){
		var val = array[i];
		var modeFreq = freqDist[val];
		if(modeFreq == null){ continue; }
		if(!modeSet || modeFreq > modeFrequency) {
			modeFrequency = modeFreq;
			modeVal = val;
			modeSet = true;
		}
	}
	return modeVal;
	
}

function frequencyDistribution(array){
	var freqDist = {};
	
	for(var i=0; i<array.length; i++){
		var val = array[i];
		if(freqDist[val] == null){
			freqDist[val] = 0;
		}
		freqDist[val]++;
	}
	return freqDist;
}

function range(array){
	return max(array) - min(array);
}

