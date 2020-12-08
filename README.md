# Learning Data Structure And Algorithm

|Languages|Avability|
|---------|---------|
|[English]() | Beta |
|[Português]() | Beta |

***

It's a repo that I really would love to do, I really want to get better in data structure and algorithm because I think that's a really good skill to have in my skill set as future software engineer.

# Content table

1. Linked List {#Linked-List}
   1. Simply Linked List {#Simply-Linked-List}
   2. Doubly Linked List {#Doubly-Linked-List}
   3. Simply Circular Linked List {#Simply-Circular-Linked-List}
   4. Doubly Circular Linked List {#Doubly-Circular-Linked-List}
2. Stack




<h1 id="Linked-List">Linked List</h1>

<p>I think that Linked List is one of the most simple and at the same time a complex data structure that we need to know of to deal with it.</p>

<p>Before of all I would like to give a brief overview around this data structure, usually I like to see it like a List of things that I want to buy to my home office or my buggest that I want to buy, and in this list I have basically some basic operations like: remove(because I already bought it or I don't buy it), add a new stuff to my List, search at the list and see if I already have that item on it, count how many itens I have on that.</p>

<p>Basically it's what a Linked List has as operations but on each type of Linked List the operations are performed in different way than others and cause of it I'll go through and try to get the better that I can in this road, let's go on.</p>

<h2 id="Simply-Linked-List">Simply Linked List</h2>

<p>The Simply Linked List is basically what I have described before but for implement it we can have 2 approaches, 1º have a array that will work like a Linked List where you only can do the List operations and we do not allow other operations by putting our array as private variable don't allowing to get direct access on it.</p>

<p>When we want to insert a stuff on our Linked List we just put it on the back(the last position avaible on the array) and when we want to remove a item on it we basically need to know that if we don't specify a specific position of the item that we want to remove we basically remove the first one and if we specify we remove that position, but notice that when we are removing a stuff from our list we need to return(give back or give a feedback) to the user of what item we removed.</p>

<p>One more think that I didn't comment before, do you remember how we add a item on the list, I pretty sure that you remember, but the thing that I didn't talk about was, if the list or the array is full of items what we do if we want to add one more item, the most common approach is to create a new array bigger than the array that we have normally is the double of the past array, and after this copy all the items from the original array to the new array and after this add the new Item</p>

<h3>Implementations details</h3>
<ul>
   <li>We gonna have a class named SimplyLinkedList</li>
   <li>Inside of this class we going to have a array to simulate our SimplyLinkedList</li>
   <li>We will also have a controller to notice what the position that we will add the new item.</li>
   <li>Some Methods:</li>
   <ul>
      <li><strong>add(item)</strong> -> Add new item at the end of the list.</li>
      <li><strong>add(index, item)</strong> -> Add new item at specific index.</li>
      <li><strong>isEmpty()</strong> -> Return true if it's empty and false if it's not.</li>
      <li><strong>remove()</strong> -> Remove the first item.</li>
      <li><strong>remove(index)</strong> -> Remove a specific item by his index.</li>
      <li><strong>size()</strong> -> Return the size of the list.</li>
      <li><strong>search(item)</strong> -> Search if the item is on the list.</li>
   </ul>
</ul>

<h3>Implementations</h3>

```js
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
      if (index < this.arraySize) {
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

      if (! this.isEmpty()) {
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
```