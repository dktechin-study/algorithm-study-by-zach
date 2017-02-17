const getGCD: (a: number, b: number) => number = (a, b) => {
    let rest = a%b;
    if(rest == 0){
        return b;
    }
    return getGCD(b, rest);
};

export const getAllFractions: (n: number, cnt?: number) => any = (n, cnt = 0) => {
    let result: string[] = [];
    let len = n + 1;
    for (let i = 1 ; i < len ; i++) {
        for (let j = 0 ; j <= i; j++) {
            if(getGCD(j, i) == 1){
                result.push(`${j}/${i}`);
            }
        }
    }
    return result;
};