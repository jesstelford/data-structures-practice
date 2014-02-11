var Lists = require("./lists.js"),
    assert = require("assert");

describe('Linked Lists', function() {

	describe('Singly Linked', function() {

		describe('Finding Mth Last Element', function() {

			beforeEach(function() {
				this.list = new Lists.LinkedList();
			});

			it('returns null when no elements exist', function() {

				assert.equal(null, this.list.findMthLast(0));
				assert.equal(null, this.list.findMthLast(1));
				assert.equal(null, this.list.findMthLast(4));

			});

			it('returns first element when list contains single element', function() {

				this.list.push(10);

				assert.equal(10, this.list.findMthLast(0));
				assert.equal(null, this.list.findMthLast(1));
				assert.equal(null, this.list.findMthLast(4));

			});

			it('returns correct elements at start, end, and within list', function() {

				this.list.push(10);
				this.list.push(11);
				this.list.push(12);
				this.list.push(13);
				this.list.push(14);
				this.list.push(15);
				this.list.push(16);

				assert.equal(10, this.list.findMthLast(0));
				assert.equal(11, this.list.findMthLast(1));
				assert.equal(14, this.list.findMthLast(4));
				assert.equal(16, this.list.findMthLast(6));
				assert.equal(null, this.list.findMthLast(7));

			});
		})
	});

	describe('Doubly Linked', function() {

		beforeEach(function() {
			this.doubleList = new Lists.DoublyLinkedList();
		});

		describe('construction', function() {

			it('points both head and tail at single item', function() {

				this.doubleList.push(10);

				assert.equal(10, this.doubleList.head.value);
				assert.equal(10, this.doubleList.tail.value);

			});

			it('points head and tail at correct items when 2 items in list', function() {

				this.doubleList.push(10);
				this.doubleList.push(11);

				assert.equal(11, this.doubleList.head.value);
				assert.equal(10, this.doubleList.tail.value);

			});

			it('inserts item at back correctly', function() {

				this.doubleList.push(10);
				this.doubleList.push(11);
				this.doubleList.pushBack(9);

				assert.equal(11, this.doubleList.head.value);
				assert.equal(10, this.doubleList.head.next.value);
				assert.equal(10, this.doubleList.tail.prev.value);
				assert.equal(9, this.doubleList.tail.value);

			});
		});

		describe('cycle checking', function() {

			var forceCircular = function(list) {
				list.tail.next = list.head;
				list.head.prev = list.tail;
			}

			it('has no cycle when empty', function() {
				assert.equal(false, this.doubleList.hasCycle());
			});

			it('has no cycle when single item pushed', function() {
				this.doubleList.push(10);
				assert.equal(false, this.doubleList.hasCycle());
			});

			it('correcrly detects cycle on single item', function() {
				this.doubleList.push(10);
				forceCircular(this.doubleList);
				assert.equal(true, this.doubleList.hasCycle());
			});

			it('detects circular cycle on multiple items list', function() {

				this.doubleList.push(10);
				this.doubleList.push(11);
				this.doubleList.push(12);
				this.doubleList.push(13);
				forceCircular(this.doubleList);
				assert.equal(true, this.doubleList.hasCycle());
			});

			it('detects partial cycle on multiple items list', function() {
				this.doubleList.push(10);
				this.doubleList.push(11);
				this.doubleList.push(12);
				this.doubleList.push(13);

				this.doubleList.tail.next = this.doubleList.head.next.next;
				assert.equal(true, this.doubleList.hasCycle());
			});
		});
	});

});
