/*
	Given two strings s and t, determine if they are isomorphic.
	Two strings s and t are isomorphic if the characters in s can be replaced to get t.
	All occurrences of a character must be replaced with another character while preserving the order of characters. 
	No two characters may map to the same character, but a character may map to itself.

	Example 1:
	Input: s = "egg", t = "add"
	Output: true
	
	Example 2:
	Input: s = "foo", t = "bar"
	Output: false
	
	Example 3:
	Input: s = "paper", t = "title"
	Output: true
*/

class IsIsomorphicString{
    constructor(private s:string, private t:string){
        this.s = s;
        this.t = t;
    }

    solution(){
        let strHash:Record<string, any> = {};
        if(this.s.length !== this.t.length) return false;
        for(let i=0; i<this.s.length; i++){
            if(!Object.keys(strHash).includes(this.s.charAt(i))){
                if(Object.values(strHash).includes(this.t.charAt(i))){
                    return false;
                }
                strHash[this.s[i]] = this.t[i];
            }else{
                if(strHash[this.s[i]] !== this.t[i]){
                    return false;
                }
            }
        }
        return true;
    }
}

const isIsomorphicObj = new IsIsomorphicString('title', 'paper');
console.log(isIsomorphicObj.solution());