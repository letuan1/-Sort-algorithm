var CArray = function (numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }

    this.setData = function () {
        for (var i = 0; i < this.numElements; i++) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
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
        var restr = "";
        for (var i = 0; i < this.dataStore.length; i++) {
            restr += this.dataStore[i] + "";
            if (i > 0 && i % 10 == 0) {
                restr += "\n";
            }
        }
        return restr;
    };

    this.swap = function (arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };

    this.bubbleSort = function () {
        var numElements = this.dataStore.length;
        var temp;
        for (var outer = numElements; outer >= 2; --outer) {
            for (var inner = 0; inner <= outer-1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner+1]) {
                    this.swap(this.dataStore, inner, inner+1);
                }
            }
            document.write(this.toString() + "<br>");
        }
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

var numElements = 1000;
var myNums = new CArray(numElements);
myNums.setData();
myNums.bubbleSort();
myNums.selectionSort ();
document.write(mynums.toString());