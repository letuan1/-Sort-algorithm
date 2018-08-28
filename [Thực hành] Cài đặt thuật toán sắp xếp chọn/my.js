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
            retstr += this.dataStore[i] + "";
            if(i>0 && i%10==0){
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

    this.selectionSort = function () {
        var min, temp;
        for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
            min = outer;
            for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
            }
            this.swap(this.dataStore, outer, min);
            document.write(this.toString() + "<br/>");
        }
    }
};

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
myNums.selectionSort ();
document.write("<br>");
document.write(myNums.toString() + "<br>");
