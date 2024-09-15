function insertSorted(st, data) {
    if(st.empty()) {
        st.push(data);
        return st;
    }
    if(st.top() >= data) {
        st.push(data);
        return st;
    }
    let temp = st.top();
    st.pop();
    insertSorted(st, data);
    st.push(temp);
    return st;
}

function sortStack(st) {
    if(st.empty()) {
        return;
    }
    let temp = st.top();
    st.pop();
    sortStack(st);
    st = insertSorted(st, temp);
    return st;
}

let st = [7,11,3,5,9];
Array.prototype.top = function() {
    return this[this.length - 1];
};
Array.prototype.empty = function() {
    return this.length === 0;
};
console.log(sortStack(st));