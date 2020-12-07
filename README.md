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




<h2 id="Linked-List">Linked List</h2>

<p>I think that Linked List is one of the most simple and at the same time a complex data structure that we need to know of to deal with it.</p>

<p>Before of all I would like to give a brief overview around this data structure, usually I like to see it like a List of things that I want to buy to my home office or my buggest that I want to buy, and in this list I have basically some basic operations like: remove(because I already bought it or I don't buy it), add a new stuff to my List, search at the list and see if I already have that item on it, count how many itens I have on that.</p>

<p>Basically it's what a Linked List has as operations but on each type of Linked List the operations are performed in different way than others and cause of it I'll go through and try to get the better that I can in this road, let's go on.</p>

<h3 id="Simply-Linked-List">Simply Linked List</h3>

<p>The Simply Linked List is basically what I have described before but for implement it we can have 2 approaches, 1º have a array that will work like a Linked List where you only can do the List operations and we do not allow other operations by putting our array as private variable don't allowing to get direct access on it.</p>

<p>When we want to insert a stuff on our Linked List we just put it on the back(the last position avaible on the array) and when we want to remove a item on it we basically need to know that if we don't specify a specific position of the item that we want to remove we basically remove the first one and if we specify we remove that position, but notice that when we are removing a stuff from our list we need to return(give back or give a feedback) to the user of what item we removed.</p>

<p>One more think that I didn't comment before, do you remember how we add a item on the list, I pretty sure that you remember, but the thing that I didn't talk about was, if the list or the array is full of items what we do if we want to add one more item, the most common approach is to create a new array bigger than the array that we have normally is the double of the past array, and after this copy all the items from the original array to the new array and after this add the new Item</p>

<h4>Implementations details</p>
<ul>
   <li>We gonna have a class named SimplyLinkedList</li>
   <li>Inside of this class we going to have a array to simulate our SimplyLinkedList</li>
   <li>We will also have a controller to notice what the position that we will add the new item.</li>
   <li>Some Methods:</li>
   <ul>
      <li><strong>add(item)</strong> -> Add new item at the end of the list.</li>
      <li><strong>add(index, item)</strong> -> Add new item at specific index.</li>
      <li><strong>remove()</strong> -> Remove the first item.</li>
      <li><strong>remove(index)</strong> -> Remove a specific item by his index.</li>
      <li><strong>size()</strong> -> Return the size of the list.</li>
      <li><strong>search(item)</strong> -> Search if the item is on the list.</li>
   </ul>
</ul>

<h4>Implementations</h4>

```python
class SimplyLinkedList:
   def __init__(self, size):
      self.__array = [0 for i in range(size)]
      self.index_of_next_insert = 0
      self.real_size_of_array = size

   def size(self):
      return self.index_of_next_insert

   def add(self, item):
      if self.index_of_next_insert < self.real_size_of_array:
         self.__array[self.index_of_next_insert] = item
      else:
         aux_array = [0 for i in range(self.real_size_of_array * 2)]

         for i in range(self.real_size_of_array):
            aux_array[i] = self.__array[i]
   
         self.__array[self.index_of_next_insert] = item
         self.real_size_of_array = self.real_size_of_array * 2

      self.index_of_next_insert += 1

   def add(self, index, item):
      if index <= self.size():

```