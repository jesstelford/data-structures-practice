!function(module) {
	'use strict';

	var ListItem = function() {

		ListItem.prototype.data = null;
		ListItem.prototype.next = null;

		// hoisted
		function ListItem(data) {
			this.data = typeof data !== 'undefined' ? data : null;
		};

		return ListItem;

	}();

	var LinkedList = function() {

		List.prototype.head = null
		List.prototype.tail = null

		List.prototype.push = function(data) {

			var item = new ListItem(data);
			item.next = this.head;
			this.head = item;

			// single item case
			if (!this.tail) {
				this.tail = this.head;
			}
		};

		List.prototype.findMthLast = function(m) {
			var dist,
					foundElem,
			    elem;

			if (!this.head) {
				// empty list case
				return null;
			}

			foundElem = this.head;
			elem = this.head.next;
			dist = 0;

			while (elem) {
				if (dist === m) {
					foundElem = foundElem.next;
				} else {
					dist++;
				}
				elem = elem.next;
			}

			if (dist === m) {
				return foundElem.data;
			} else {
				return null;
			}

		}

		// hoisted
		function List() {};

		return List;
	}();

	var DoubleListItem = function() {

		DoubleListItem.prototype.value = null;
		DoubleListItem.prototype.next = null;
		DoubleListItem.prototype.prev = null;
		DoubleListItem.prototype.child = null;

		// hoisted
		function DoubleListItem(value, child) {
			this.value = typeof value !== 'undefined' ? value : null;
			this.child = typeof child !== 'undefined' ? child : null;
		}
		return DoubleListItem;
	}();

	var DoublyLinkedList = function() {
		
		Module.prototype.head = null;
		Module.prototype.tail = null;

		Module.prototype.push = function(value, childList) {
			var elem = new DoubleListItem(value, childList);
			elem.next = this.head;

			if (this.head) {
				// When there is an existing element, point back to the new one
				this.head.prev = elem;
			} else {
				// When there is no existing element, the new one is both head and tail
				this.tail = elem;
			}
			this.head = elem;
		}

		Module.prototype.pushBack = function(value, childList) {
			var elem = new DoubleListItem(value, childList);
			elem.prev = this.tail;

			if (this.tail) {
				this.tail.next = elem;
			} else {
				this.head = elem;
			}

			this.tail = elem;
		}

		Module.prototype.flatten = function() {
			var elem = this.head;

			while (elem) {

				if (elem.child instanceof Module && elem.child.head) {
					this.tail.next = elem.child.head;
					this.tail.next.prev = this.tail;
					this.tail = elem.child.tail;

					// Clean up floating references, so they can be GC'd
					elem.child.head = null;
					elem.child.tail = null;
					elem.child = null;
				}

				elem = elem.next;
			}
		}

		Module.prototype.hasCycle = function() {

			if (!this.head) {
				return false;
			}

			var slowElem = this.head,
			    fastElem = this.head.next;

			while (fastElem && fastElem.next) {

				if (fastElem === slowElem || fastElem.next === slowElem) {
					return true;
				}

				fastElem = fastElem.next.next;
				slowElem = slowElem.next;
			}

			return false;

		}

		// hoisted
		function Module() {};

		return Module;
	}();

	module.exports = {
		LinkedList: LinkedList,
		DoublyLinkedList: DoublyLinkedList
	};

}.call(this, module)
