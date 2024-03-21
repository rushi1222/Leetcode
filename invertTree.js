var invertTree = function(root) {
    // Base case: if root is null, stop recursion
    if (root === null) {
        return null;
    }
    
    let temp = root.right;
    root.right = root.left;
    root.left = temp;

    // Continue with the inversion on both sides
    invertTree(root.right);
    invertTree(root.left);

    return root;
};
