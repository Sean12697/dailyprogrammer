class PriorityQueue {
    constructor() {
        this.items = [];
    }

    Enqueue(string, priorityValueA, priorityValueB) {
        this.items.push({ string, priorityValueA, priorityValueB, index: this.items.length });
    }

    DequeueA() {
        return this._dequeueX("priorityValueA");
    }

    DequeueB() {
        return this._dequeueX("priorityValueB");
    }

    _dequeueX(property) {
        let result = this._sortSlice(this.items, property, -1, "index", 1);
        this.items = result.sortedArray;
        return result.item;
    }

    _sortSlice(array, propertyA, sortA, propertyB, sortB) {
       let sortedArray = array.sort((a,b) => (a[propertyA] - b[propertyA]) * sortA || (a[propertyB] - b[propertyB]) * sortB), item = sortedArray.shift();
       return { sortedArray, item };
    }

    Count() {
        return this.items.length;
    }

    Clear() {
        this.items = [];
    }
}

exports.PriorityQueue = PriorityQueue;