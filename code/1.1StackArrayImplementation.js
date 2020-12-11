class Stack {
    constructor(size) {
        this.stackArray = new Array(size);
        this.topStack = 0;
        this.totalSize = size;
    }

    push(item) {
        if (this.topStack < this.totalSize) {
            this.stackArray[this.topStack] = item;
            this.topStack++;
        }
    }

    pop() {
        if (this.topStack > 0) {
            let aux = this.stackArray[this.topStack - 1];
            this.topStack--;

            return aux;
        }
    }

    peek() {
        if (this.topStack > 0) {
            return this.stackArray[this.topStack - 1];
        }
    }

    size() {
        return this.topStack;
    }

    isEmpty() {
        return this.topStack == 0;
    }
}