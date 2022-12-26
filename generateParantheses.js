function generateParantheses(n){
    if(!n || n<0 || !Number.isInteger(n)){ // invalid input
        return;
    }
    const result=[];
    bfs("",0,0); // starting from l=0,r=0
    return result;

    function bfs(str, l, r){ // bfs
        if( l === n && r === n ) { // if open & closing number of brackets are same
            result.push(str);
            return;
        }
        if( l !== n ){
            bfs(str+"(", l+1, r); // add '(' opening bracket first into the string
        }
        if( l > r ){
            bfs(str+")", l,r+1); // add ')' closing bracket when opening number is greater than closing number of brackets
        }
    }
}
// test cases
console.log(generateParantheses('a')); // invalid input
console.log(generateParantheses(0)); // invalid input
console.log(generateParantheses(1));
console.log(generateParantheses(3));