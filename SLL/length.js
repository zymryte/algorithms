function length() {
    var current = this.head
    var count = 0;
    while (current) {
        count++
        current = current.next
    }

    return this
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