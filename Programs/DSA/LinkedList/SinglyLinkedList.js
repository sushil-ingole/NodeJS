class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function findLength(head) {
    let len = 0;
    while(head) {
        len++;
        head = head.next;
    }
    return len;
}

function print(head, before, func) {
    let temp = head;
    if (head == null)
    {
        console.log("Nothing to print. LL is empty.");
        return;
    }
    let output = [];
    while(temp) {
        output.push(temp.data);
        temp = temp.next;
    }
    if(func === "deleteNode") {
        if(before) {
            console.log(`Before deleting node ${nodeToDelete} => ` + output.join(" , "));
        } else {
            console.log(`After  deleting node ${nodeToDelete} => ` + output.join(" , "));
        }
        return;
    }
    console.log(output.join(" , "));
}

function insertAtHead(head, data) {
    const newNode = new Node(data);
    if(head === null) {
        head = newNode;
        tail = newNode;
    } else {
        newNode.next = head;
        head = newNode;
    }
    return head;
}

function insertAtTail(head, tail, data) {
    const newNode = new Node(data);
    if(head === null) {
        head = newNode;
        tail = newNode;
    } else {
        tail.next = newNode;
        tail = newNode;
    }
    return {head, tail};
}

function insertAtPosition(head, tail, data, pos) {
    const newNode = new Node(data);
    if(pos <= 1) {
        head = insertAtHead(head, data);
        if (tail === null) tail = head;
        return {head, tail};
    }
    let length = findLength(head);
    if(pos > length) {
        ({head, tail} = insertAtTail(head, tail, data));
        return {head, tail};
    }
    let prev = head;
    let count = 1;
    while(pos <= length && count < pos-1) {
        count++;
        prev = prev.next;
    }
    const curr = prev.next;
    newNode.next = curr;
    prev.next = newNode;
    return {head, tail};
}

function deleteNode(pos, head, tail) {
    if(head === null) {
        console.log("Can't delete as Linked List is empty.");
        return {head, tail};
    }
    if(pos <= 1) {
        let deletedNode = head;
        head = head.next;
        deletedNode = null;
        return {head, tail};
    }
    const len = findLength(head);
    if(pos >= len) {
        let i = 1;
        let prev = head;
        while(i < len-1) {
            i++;
            prev = prev.next;
        }
        prev.next = null;
        tail = prev;
        return {head, tail};
    }
    let i = 1;
    let prev = head;
    while(i < pos-1) {
        i++;
        prev = prev.next;
    }
    let curr = prev.next;
    prev.next = curr.next;
    return {head, tail};
}

let head = null;
let tail = null;
head = insertAtHead(head, 3);
head = insertAtHead(head, 2);
head = insertAtHead(head, 1);
({head, tail} = insertAtTail(head, tail, 4));
({head, tail} = insertAtTail(head, tail, 5));
({head, tail} = insertAtPosition(head, tail, 100, 7));
({head, tail} = insertAtPosition(head, tail, 101, 3));
let nodeToDelete = -1;
print(head, true, "deleteNode");
({head, tail} = deleteNode(nodeToDelete, head, tail));
print(head, false, "deleteNode");