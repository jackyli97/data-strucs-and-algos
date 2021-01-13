class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
    constructor(){
        this.root = new Node();
    }

    insertRecur(word, root=this.root) {
        let letter = word[0];

        if (!(letter in root.children)){
            root.children[letter] = new Node();
        }

        if (word.length === 1) root.children[letter].isTerminal = true;
        else this.insertRecur(word.slice(1), root.children[letter]);
    }

    insertIter(word) {
        let node = this.root;
        let letter;

        while(!node.isTerminal){
            letter = word[0];
            if (!(letter in node.children)){
                node.children[letter] = new Node();
            }
            if (word.length === 1)node.children[letter].isTerminal = true;
            word = word.slice(1);
            node = node.children[letter];
        }
    }

    searchRecur(word, root=this.root) {
        
        if (word.length === 0){
            return root.isTerminal;
        }

        let letter = word[0];

        if (!(letter in root.children)) return false;
        return this.searchRecur(word.slice(1), root.children[letter]);
    }

    searchIter(word) {
        let node = this.root;
        let letter;
        while (word.length > 0){
            letter = word[0];
            if (!(letter in node.children)) return false;
            word = word.slice(1);
            node = node.children[letter];
        }
        return node.isTerminal;
    }

    wordsWithPrefix(prefix='', root=this.root) {
        let arr = [];     
        if (root.isTerminal && prefix.length === 0) arr.push('');
        let recurrArr;
        let children = Object.keys(root.children);
        for (let i=0; i<children.length; i++){
            if (prefix.length === 0){
                recurrArr = this.wordsWithPrefix(prefix, root.children[children[i]]);
                recurrArr.forEach(word=>arr.push(children[i] + word));
            }else{
                if (prefix[0] === children[i]){                                                                                                                                                            
                    recurrArr = this.wordsWithPrefix(prefix.slice(1), root.children[children[i]]);
                    recurrArr.forEach(word=>arr.push(children[i] + word));
                }
            }
            // console.log(arr)
        }
        return arr;
    }

}

module.exports = {
    Node,
    Trie
};