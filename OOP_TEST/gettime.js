function generateUUID(formatString, baseNumber) {
    var d = new Date().getTime();
    var uuid = formatString.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*baseNumber)%baseNumber | 0;
        d = Math.floor(d/baseNumber);
        return (c=='x' ? r : (r&0x3|0x8)).toString(baseNumber);
    });
    return uuid;
};

while (true) {
//console.log(generateUUID('xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx', 36));
console.log(generateUUID('xxxxxxxx', 36));
}


//function zeroPad(num, places) {
//  var zero = places - num.toString().length + 1;
//  return Array(+(zero > 0 && zero)).join("0") + num;
//}

//while (true) {
	//var timeNow = new Date();
	//console.log(timeNow.getSeconds() + " " + timeNow.getMilliseconds());
	
	
//}

//	var now = new Date();
//	var year = now.getFullYear();
//	var month = now.getDate();
//	var date = now.getDate();

//	var hour = now.getHours();
//	var minutes = now.getMinutes();
//	var seconds = now.getSeconds();
//	var milliSeconds = now.getMilliseconds();

//	var dateString = "" + year + zeroPad(month, 4) +  zeroPad(date, 2);
//	var timeString = "" + zeroPad(hour, 2) + zeroPad(minutes, 2) + zeroPad(seconds, 2) + zeroPad(milliSeconds, 3);
//	var dateInteger = parseInt(dateString);
//	var timeInteger = parseInt(timeString)
	
//	var randoms = [];
	
//	for (var i = 0; i < 4; i++) {
//		randoms[i] = Math.random() * 255;
//	}

//	console.log(randoms[0].toString(36) + "-" + randoms[1].toString(36) + "-" + randoms[2].toString(36) + "-" + randoms[3].toString(36) + "-" + dateInteger.toString(36) + timeInteger.toString(36));
//}
//console.log(month + "/" + date + "/" + year + " " + hour + ":" + minutes + ":" + seconds);