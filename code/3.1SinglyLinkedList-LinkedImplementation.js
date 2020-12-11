class Node {
   constructor(item) {
      this.data = item;
      this.next = null;
   }
}

class SinglyLinkedList1 {
   constructor() {
      this.head = null;
   }

   add(item) {
      let newNode = new Node(item);

      console.log(this.head);
      if (this.head == null) {
         this.head = newNode;
      } else {
         let auxNodeTraverse = this.head;

         while (auxNodeTraverse.next != null) {
            auxNodeTraverse = auxNodeTraverse.next;
         }
         auxNodeTraverse.next = newNode;
      }
   }

   add(index, item) {
      /*if (index < this.SinglyLinkedListze()) {
         let newNode = new Node(item);

         if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
         } else {
            let auxNodeTraverse = this.head;
            let auxNodeTraversePrevious = null;

            while (index > 0) {
               auxNodeTraversePrevious = auxNodeTraverse;
               auxNodeTraverse = auxNodeTraverse.next;
               index--;
            }
            newNode.next = auxNodeTraverse;
            auxNodeTraversePrevious.next = newNode;
         }
      } else {
         this.add(item);
      }*/
   }

   remove() {
      let auxData = null;

      if (this.head != null) {
         auxData = this.head.data;

         this.head = this.head.nexNode;
         return auxData;
      }
      return auxData;
   }

   remove(index) {
      let auxData = null;

      if (index < this.SinglyLinkedListze()) {
         if (index == 0) {
            auxData = this.head.data;
            this.head = this.head.next;
         } else {
            let auxNodeTraverse = this.head;
            let auxNodeTraversePrevious = null;

            while (index > 0) {
               auxNodeTraversePrevious = auxNodeTraverse;
               auxNodeTraverse = auxNodeTraverse.next;
               index--;
            }
            auxData = auxNodeTraverse.data;
            auxNodeTraversePrevious.next = auxNodeTraverse.next;
         }
      }
      return auxData;
   }

   size() {
      if (this.head != null) {
         let auxNodeTraverse = this.head;
         let counter = 0;

         while (auxNodeTraverse != null) {
            auxNodeTraverse = auxNodeTraverse.next;
            counter++;
         }
         return counter;
      }
      return 0;
   }

   search(item) {
      if (this.head != null) {
         let auxNodeTraverse = this.head;

         while (auxNodeTraverse != null) {
            if (auxNodeTraverse.data == item) {
               return item;
            }
            auxNodeTraverse = auxNodeTraverse.next;
         }
      }
      return null;
   }

   isEmpty() {
      return false;
   }
   
   printList() {
      console.log("Entrou")

      if(this.head != null) {
         let quantElements = this.size();
         let auxNode;

         while(quantElements > 0) {
            auxNode = this.remove();
            console.log(auxNode.data);
            this.add(auxNode.data);
            quantElements--;
         }
      }
   }

}

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

let list = new SinglyLinkedList1();

list.add(5);
list.add(4);
list.add(3);
list.add(2);
list.add(1);

list.printList();