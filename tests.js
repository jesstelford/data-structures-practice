Lists = require("./lists.js");

var list = new Lists.LinkedList();

console.log(list.findMthLast(0)); // null
console.log(list.findMthLast(1)); // null
console.log(list.findMthLast(4)); // null

list.push(10);

console.log(list.findMthLast(0)); // 10
console.log(list.findMthLast(1)); // null
console.log(list.findMthLast(4)); // null

list.push(11);
list.push(12);
list.push(13);
list.push(14);
list.push(15);
list.push(16);

console.log(list.findMthLast(0)); // 10
console.log(list.findMthLast(1)); // 11
console.log(list.findMthLast(4)); // 14
console.log(list.findMthLast(6)); // 16
console.log(list.findMthLast(7)); // null

console.log("---- Doubly Linked Lists ----");

var doubleList = new Lists.DoublyLinkedList();

doubleList.push(10);

console.log(doubleList.head.value); // 10
console.log(doubleList.tail.value); // 10

doubleList.push(11);

console.log(doubleList.head.value); // 11
console.log(doubleList.tail.value); // 10

doubleList.pushBack(9);

console.log(doubleList.head.value); // 11
console.log(doubleList.head.next.value); // 10
console.log(doubleList.tail.prev.value); // 10
console.log(doubleList.tail.value); // 9

console.log("---- Doubly Linked Lists Cycle Checking ----");

var cycleList = new Lists.DoublyLinkedList();

console.log(cycleList.hasCycle()); // false

cycleList.push(10);

console.log(cycleList.hasCycle()); // false

cycleList.tail.next = cycleList.head;

console.log(cycleList.hasCycle()); // true

cycleList.tail.next = null;
cycleList.push(11);
cycleList.push(12);
cycleList.push(13);
cycleList.tail.next = cycleList.head;

console.log(cycleList.hasCycle()); // true

cycleList.tail.next = cycleList.head.next.next;

console.log(cycleList.hasCycle()); // true
