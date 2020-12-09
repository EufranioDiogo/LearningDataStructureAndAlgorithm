class SinglyLinkedList {
    constructor(size) {
        let array = new Array(size);
        let arraySize = size;
        let indexOfNextInsert = 0;
    }

    add(item) {
        if (this.indexOfNextInsert < this.arraySize) {
            this.array[this.indexOfNextInsert] = item;
        } else {
            auxArray = new Array(self.arraySize * 2);

            for (let i = 0; i < self.arraySize; i++) {
                auxArray[i] = this.array[i];
            }
            this.array[this.indexOfNextInsert] = item;
        }
        this.indexOfNextInsert++;
    }

    add(index, item) {
        if (index < this.indexOfNextInsert) {
            for (let i = this.indexOfNextInsert; i > index; i--) {
                this.array[i] = this.array[i - 1];
            }
            this.array[index] = item;
            this.indexOfNextInsert++;
        } else {
            this.add(item);
        }
    }

    isEmpty() {
        return this.indexOfNextInsert == 0;
    }

    remove() {
        let aux = null;

        if (!this.isEmpty()) {
            aux = this.array[0];

            for (let i = 0; i < this.indexOfNextInsert; i++) {
                this.array[i] = this.array[i + 1];
            }
            this.indexOfNextInsert--;
        }
        return aux;
    }

    remove(index) {
        let aux = null;

        if (index < this.indexOfNextInsert) {
            aux = this.array[index];

            for (let i = index; i < this.indexOfNextInsert; i++) {
                this.array[index] = this.array[index + 1];
            }
            this.indexOfNextInsert--;
        }
        return aux;
    }

    size() {
        return this.indexOfNextInsert;
    }

    search(item) {
        for (let i = 0; i < this.indexOfNextInsert; i++) {
            if (this.array[i] == item) {
                return true;
            }
        }
        return false;
    }
}