class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function print(head) {
    let temp = head;
    let output = [];
    do {
        output.push(temp.data);
        temp = temp.next;
    } while(temp.next !== head);
    output.push(temp.data);
    console.log(output.join(" "));
}

function findLength(head) {
    let temp = head;
    let count = 1;
    do {
        count++;
        temp = temp.next;
    } while(temp.next !== head);
    return count;
}

function insertAtTail(head, tail, data) {
    const newNode = new Node(data);
    if(head === null) {
        head = tail = newNode;
        tail.next = head;
        return {head, tail};
    }
    let len = findLength(head);
    let count = 1;
    let temp = head;
    while(count < len) {
        temp = temp.next;
        count++;
    }
    temp.next = newNode;
    newNode.next = head;
    tail = newNode;
    return {head, tail};
}

function findLoopInLinkedList(head) {
    let slow = head, fast = head;
    let temp = head;
    let loopExist = false;
    do {
        temp = temp.next;
        slow = slow?.next;
        fast = fast.next?.next;
        if(slow === fast) {
            loopExist = true;
            break;
        }
    } while(slow !== fast);
    return loopExist;
}

let head = null;
let tail = null;
({head, tail} = insertAtTail(head, tail, 1));
({head, tail} = insertAtTail(head, tail, 2));
({head, tail} = insertAtTail(head, tail, 3));
({head, tail} = insertAtTail(head, tail, 4));
({head, tail} = insertAtTail(head, tail, 5));
console.log(findLoopInLinkedList(head));
print(head);