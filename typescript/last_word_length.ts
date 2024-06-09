class LastWordLength{
    constructor(private readonly s:string){
        this.s = s
    }

    lastLength(){
        let length: number = 0;
        for(let i=this.s.length -1; i>0; --i){
            if(this.s[i] !== ' ') length += 1
            if(length > 0 && this.s[i] === ' ') return length
        }
        return length
    }
}

const lengthObj = new LastWordLength('   Hello    World  hello  ')
console.log(lengthObj.lastLength())