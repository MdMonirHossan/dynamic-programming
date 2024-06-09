class RemoveElement{
    constructor(private readonly nums:number[], private readonly val:number){
        this.nums = nums
        this.val = val
    }

    elements(){
        let k: number = 0;

        for(let i=0; i<this.nums.length; i++){
            if(this.nums[i] !== this.val ){
                this.nums[k] = this.nums[i]
                k += 1
            }
        }
        return k
    }
}

const elementsObj = new RemoveElement([0, 1, 2, 4, 5, 2, 4, 2], 2)
console.log(elementsObj.elements())