import Node from './node'

export default class BST {
	constructor(){
		this.root = null;
		this.isBalanced = false;
	}

	insert(data){
		let n = new Node(data, null, null);
		if(this.root == null){
			this.root = n;
			return;
		}
		let current = this.root;
		let parent;
		while(true){
			parent = current;
			if(data < current.data){
				current = current.left;
				if(current == null){
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if(current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}

	inorder(node){
		if( node != null ) {
			this.inorder(node.left);
			console.log(node.show());
			this.inorder(node.right);
		}
	}

	preorder(node){
		if( node != null ) {
			console.log(node.show());
			this.inorder(node.left);
			this.inorder(node.right);
		}
	}

	postorder(node){
		if( node != null ) {
			this.inorder(node.left);
			this.inorder(node.right);
			console.log(node.show());
		}
	}
}

let nums = new BST();
nums.insert(123);
nums.insert(12);
nums.insert(40);
nums.insert(20);
nums.insert(7);
nums.insert(1);
// nums.inorder(nums.root);
// nums.preorder(nums.root);
nums.postorder(nums.root);
