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
}

window.onload = init;