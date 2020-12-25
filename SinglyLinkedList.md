
<h1 id="Singly-Linked-List">Singly Linked List</h1>

<p>The Singly Linked List is basically what I have described before [here](LinkedList.md), we can have to approaches, the first one could be implementating with an array and the onether is using the Linked approach where we will have a node structure that will allow us to store a ref of the others nodes in the linked list approach..</p>

<p>When we want to insert a stuff on our Linked List we just put it on the back(the last position avaible on the array) and when we want to remove a item on it we basically need to know that if we don't specify a specific position of the item that we want to remove we basically remove the first one and if we specify we remove that position, but notice that when we are removing a stuff from our list we need to return(give back or give a feedback) to the user of what item we removed.</p>

<p>One more think that I didn't comment before, do you remember how we add a item on the list, I pretty sure that you remember, but the thing that I didn't talk about was, if the list or the array is full of items what we do if we want to add one more item, the most common approach is to create a new array bigger than the array that we have normally is the double of the past array, and after this copy all the items from the original array to the new array and after this add the new Item</p>

<h2>Linked Operations</h2>
We could have lots of operations at this data structure 

<h3>Linked Implementation</h3>

<p>In Linked Implementation we don't use array instead of it we use nodes.</p>
<p>But what does mean node? What is it?</p>
<p>A node in my own words is a individual element that has a information stored in and also have connections with other nodes if needed.</p>
<p>Usually in this approach we have a class named Node that inside of it we going to have normally 2 attributes, one is the actual data and other is the pointer to the next node(after the actual node).</p>

<p>One more thing, usually when we implement a Singly linked list like we gonna do, we have at the structure a node that refers to the head of the List. </p>

<h4>Why do we need a head node at the List?</h4>
<p>You could ask this and in my own words I say "If do you wanna visit things that are connected you have a start point and in Singly Linked List this start point" and the head is the start point because from the head we can go to the next node and from the next node we can go to another.</p>

<h4>What do we earn if we implement the Singly Linked List at this way?</h4>
<p>We earn a better memory use, because in this case we just need to have a individual space to each node instead of the array implementation because at that implementation when the List is full we duplied the size of the array only to add a item and it's not good in terms of memorym and we also win at other aspects from Singly Linked List.</p>


<h3>Array Implementation</h3>

Implementing in this way we are going to have the same methods but we a different approach than the Linked Implementation.


You can see the actual code in the links below:
[Array Implementation](SinglyLinkedListArrayImplementation.md)
[Linked Implemetation](SinglyLinkedListLinkedImplementation.md)