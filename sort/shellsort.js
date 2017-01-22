const shellsort = (arr, gaps = [5, 3, 1]) => {
	for(let g = 0; g < gaps.length; ++g){
		for(let i = gaps[g]; i < arr.length; ++i){
			let tmp = arr[i];
			for(var j = i ; j >= gaps[g] && arr[j-gaps[g]] > tmp; j-=gaps[g]){
				arr[j] = arr[j - gaps[g]];
			}
			arr[j] = tmp;
		}
	}
	
	return arr;
};

console.log(shellsort([5, 7 ,8 , 999, 93, 2341, 44, 12, 1, 4]));