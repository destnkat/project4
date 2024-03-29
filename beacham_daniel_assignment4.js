var SDI = {

    /**
     *  Checks to see if array value is a number and adds to running total
     */
    totalNumbersValue: function(arr) {
        var total = 0;

        for (var i = 0; i < arr.length; i++) {
            if (!isNaN(arr[i])) {
                total = total + parseInt(arr[i], 10);
            }
        }

        return total;
    },
    /**
     * Sorts a number array ascending and returns the first instance where the number is greater than the "magic number"
     */
    getSmallestNumberValue: function(arr, smallestPossible) {
        arr.sort(function(a,b) {
            return a - b;
        });

        for (var i=0; i < arr.length; i++) {
            if (arr[i] > smallestPossible) {
                return arr[i];
            }
        }
    },
    /**
     * Creates Two Date Objects and calculates the difference in days/hours depening on user input
     * default is to calculate hours
     */

    dateDifference : function(date1, date2, hrsOrDays) {
        var date1Time = new Date(date1).getTime();
        var date2Time = new Date(date2).getTime();
        var dateDiff = date1Time - date2Time;

        if (hrsOrDays.toLowerCase() === 'days') {
            return dateDiff / (24*3600*1000); //Return Days
        }

        return dateDiff / (24*3600); // Return Hours

    },
    /**
     * Takes a string and parses it to an integer base 10 value
     */
    getParsedNumberValue: function(num) {
        if (isNaN(num)) {
            return parseInt(num, 10);
        } else {
            return num;
        }
    },
    /**
     * Validates an email address for proper format
     */
    isValidEmail: function(email) {
        var emailRx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRx.test(email);

    },
    /**
     * Replaces a string delimiter with a new user defined delimiter
     */
    replaceDelimiter: function(string, newDelimiter) {
        return string.replace(/,/g, newDelimiter);
    }
}

function init() {
    var sdi = SDI;;

    //Test Data
    var smallNumberArr = [0, 15, 32, 50, 65];
    var numbersArrayTest = [15, 25, "test", 65];

    //Outputs
    console.log(sdi.totalNumbersValue(numbersArrayTest)); //105
    console.log(sdi.getSmallestNumberValue(smallNumberArr, 22)); //32
    console.log(sdi.dateDifference('August 15, 2012', 'May 20, 2013', 'days'));
    console.log(sdi.getParsedNumberValue('62'));  //outputs 62
    console.log(sdi.isValidEmail('test@yahoo'));   // False
    console.log(sdi.isValidEmail('test@yahoo.com')); //True
    console.log(sdi.replaceDelimiter('test, a new string,with commas, but will output differently', '?'));
}

window.onload = init;