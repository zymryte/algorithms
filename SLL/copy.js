// Given a pointer to a singly linked list, return a copy of that list. 
// Do not return the same list, but instead make a copy of each node in the list and connect them in the same order 
// as the original.

copy() {
        var new_list = new SLL()
        if (this.head != null) {

            var runner = this.head
            while (runner) {
                new_list.addBack(runner.value)
                runner = runner.next
            }
        }
        return new_list
    }
    // Given a headNode, a lowVal and a highVal, remove from the list any nodes that have values less than lowVal or
    //  higher than highVal. Return the new list.


filterNode(high, low) {
    if (this.head != null) {
        var runner = this.head

        while (runnner) {
            if (runner == this.head && runner.next.value > high || runner.next.value < low) {
                this.head = this.head.next
            }
            if (runner.next.value > high || runner.next.value < low) {
                runner.next = runner.next.next
                runner = runner.next
            }

        }

    }
}

// Create ListNode method removeSelf() to disconnect (remove) itself from linked lists that include it. 
// Note: the node might be the first in a list (it won’t be the last), and you do NOT have a pointer to the previous node.
//  Also, don’t lose any subsequent nodes pointed to by .next.