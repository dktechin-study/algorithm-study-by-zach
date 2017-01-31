class Node <T> {
	public data: T
	public next: any
    constructor(data: T){
        this.data = data;
        this.next = null;
    }
}

export default Node