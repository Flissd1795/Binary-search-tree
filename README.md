# Binary-search-tree

Tree vs Binary Search Tree
- A tree is a data structure made up of nodes, where each node holders a value and can point to child nodes
- A normal tree has no rules about how values are arranged e.g. a node can have any number of children in any order
- A BST is a special type of tree with two rules: 
    - 1. Every node can have at most 2 children (left and right)
    - 2. All values to the left of a node are smaller, all values to the right are larger 

Why are BST's useful?
- Due to ordering rule, you can eliminate half the tree at every step when searching (never need to check both sides)
- Much faster to search than a normal tree or array

Time Complexity
- O(log n) average: each step halves the remaining nodes to consider 