// Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. 
// Given a ListNode pointer and a val, return whether val is found in any node in the list.



contains(value) {
    var current = this.head
    var count = 0

    while (current) {
        if (count == value) {
            return true
        }
        count += 1
        current = current.next

    }
    return this

}