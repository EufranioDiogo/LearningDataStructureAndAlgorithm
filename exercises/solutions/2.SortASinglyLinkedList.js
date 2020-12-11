function orderSinglyLinkedList(head) {
    if (head != null) {
        let quantNodes = 0;
        let auxNodeTrasverse = head;

        while(auxNodeTrasverse != null) {
            quantNodes += 1;
            auxNodeTrasverse = auxNodeTrasverse.next;
        }

        let auxArray = new Array(quantNodes);
        let i = 0;
        auxNodeTrasverse = head;

        while(i < quantNodes) {
            auxArray[i] = auxNodeTrasverse.data;
            auxNodeTrasverse = auxNodeTrasverse.next;
            i++;
        }

        i = 0;
        let flagSwap = false;
        let auxSwap;

        for (; i < auxArray.length - 1; i++) {
            min_index = i;

            for(let j = i + 1; j < auxArray; j++) {
                if(auxArray[min_index] > auxArray[j]) {
                    min_index = j;
                    flagSwap = true;
                }
            }
            if(flagSwap == true) {
                auxSwap = auxArray[i];
                auxArray[i] = auxArray[min_index];
                auxArray[min_index] = auxSwap;
            }
            flagSwap = false;
        }

        i = 1;
        head = new Node(auxArray[0]);
        let auxNode = head;

        for (; i < quantNodes; i++) {
            auxNode.next = new Node(auxArray[i]);
            auxNode = auxNode.next;
        }
    }
}