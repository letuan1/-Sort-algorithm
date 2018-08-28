var CArray = function (numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }

    this.setData = function () {
        for (var i = 0; i < this.numElements; i++) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
            document.write(this.dataStore[i])
        }
    };

    this.clear = function () {
        for (var i = 0; i < this.dataStore.length; i++) {
            this.dataStore[i] = 0;
        }
    };

    this.insert = function (element) {
        this.dataStore[this.pos] = element;
        this.pos++;
    };

    this.toString = function () {
        var retstr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retstr += this.dataStore[i] + " " + "<br>";
            if(i>0&&i%10==0){
                retstr += "\n";
            }
        }
        return retstr;
    };

    this.swap = function (arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };
};

var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
document.write(myNums.toString());