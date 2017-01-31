export default class Node {
	public data: number;
	public left: any;
	public right: any;

	constructor(data:number, left:any, right:any){
		this.data = data;
		this.left = left;
		this.right = right;
	}

	show(): number{
		return this.data;
	}
}
