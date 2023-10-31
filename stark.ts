

class Stack{
    public stack: Array<number>;

    constructor() {
        this.stack = [];
    }

    addValue(val:number) {
        this.stack.push(val)

        return this.stack
    }

    removeValue() {
        this.stack.pop();

        return this.stack
    }

    size() {
        return this.stack.length;
    }

    peek() {
        return this.stack[this.stack.length -1]
    }

    isEmpty(){
        if(this.size() === 0){
            return true;
        } else {
            return false
        }
    }

    isRev(x:string){
        // let z = x
        // z = this.stack.toString().split(" ").reverse()
    }
}


let stack = new Stack();

stack.addValue(4)
stack.addValue(5)
stack.addValue(7)
stack.addValue(2)

// console.log(stack)
// console.log(stack.isRev("lagos weather"))


const number:number = 3343567
const nxt = () =>{
    let r = number.toString().split("")
    let q: string = ""
    while(r.length !== 0){
        let p = r.pop()
        q += ` ${p}`
    }
    return q
}

   let numbers:Array<number> = [3,3,4,3,5,6,7]
   numbers.sort((a, b) => b - a)
   

console.log(nxt())
console.log(numbers[0])