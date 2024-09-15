class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function print(head) {
    let output = [];
    while(head) {
        output.push(head.data);
        head = head.next;
    }
    console.log(output.join(" "));
}

function rotateSinglyLinkedList(head, k){
    // Take variable current = head.
    // Traverse current to kth node.
    // If current becomes null then we don't need to rotate.
    // If current found, store it in kthNode variable.
    // Now traverse current to last node of linked list.
    // Now make current.next = head.
    // Make head = kthNode.next.
    // And kthNode.next = null.

    if(k <= 0) return head;

    let current = head;
    let tempK = k-1;
    while(tempK && current) {
        current = current.next;
        tempK--;
    }
    if(!current) return head;
    let kthNode = current;
    while(current.next) {
        current = current.next;
    }
    current.next = head;
    head = kthNode.next;
    kthNode.next = null;
    return head;
}

let head = null;
let tail = null;
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;

head = one; tail = six;

print(head);
head = rotateSinglyLinkedList(head, 4);
print(head);

// OUTPUT:-
// 1 2 3 4 5 6
// 5 6 1 2 3 4