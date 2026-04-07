// create node as object with value and left and right pointers
function createNode(value) {
    return { value, left: null, right: null }
}

// Returns a new (or existing) node
// Recursively walks the tree, when it hits null (empty spot), it creates new node there
// Takes current node we're looking at and the value we want to insert 
function insert(node, value) {
    // If there's an empty spot, create and return new node there
    if (node === null) return createNode(value);
    // If the value is smaller than current node, it belongs to left
    // We call insert again, but passing left child as starting point
    // We keep doing this until we hit null 
    if (value < node.value) {
        node.left = insert(node.left, value);
        return node;
    }
    // Repeat on the right if value is bigger 
    if (value > node.value) {
        node.right = insert(node.right, value);
        return node;
    }
    // If we get here, the value already exists in the tree, so we return it (no dupes)
    return node;
}

// Search returns true/false 
// Recursively walks left or right dependeing on whether the target is smaller/larger than nodes current value
function search(node, value) {
    if (node === null) return false;
    if (value === node.value) return true; 
    // Is the value smaller? If so, check if the left node matches the value
    if (value < node.value) return search(node.left, value);
    // If we reach here, the value must be larger so go right
    return search(node.right, value)
}

let tree = null;
tree = insert(tree, 10);
tree = insert(tree, 5);
tree = insert(tree, 15);
tree = insert(tree, 3);
tree = insert(tree, 7);

console.log(search(tree, 7));
console.log(search(tree, 42));
console.log(tree);