class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor(root=null){
       this.root = root;
   }

   insert(val, root=this.root) {
    let node = new TreeNode(val);
    if (!this.root){
        this.root = node;
    }else{
        if (val < root.val){
            if (!root.left) root.left = node;
            else this.insert(val, root.left);
        }else{
            if (!root.right) root.right = node;
            else this.insert(val, root.right);
        }
    }   
   }

   searchRecur(val, root=this.root) {
    if (!root) return false; 

    if (root.val > val){
        return this.searchRecur(val, root.left);
    }
    else if (root.val < val){
        return this.searchRecur(val, root.right);
    }else return true;
   }

   getInorder(root = this.root) {
    let arr = [];
    let current = root;

    if (current.left) arr = arr.concat(this.getInorder(current.left)); 
    arr.push(current.val);
    if (current.right) arr = arr.concat(this.getInorder(current.right)); 

    return arr;
   }

   searchIter(val) {
       if (!this.root) return false;
       if (this.root.val === val) return true;
       let arr = this.getInorder();

       let mid = Math.floor(arr.length / 2);

       if (arr[mid] === val) return true;
       else if (arr[mid] > val){
           for (let i=0; i<mid; i++){
               if (arr[i] === val)return true;
           }
       }
       else if (arr[mid] < val){
           for (let i=mid+1; i<arr.length; i++){
               if (arr[i] === val)return true;
           }
       }
       return false;
   }
}

module.exports = {
    TreeNode,
    BST
};