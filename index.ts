class Noded{
    public val: number;
    public next: Node | null | any

    constructor(val:number){
        this.val = val,
        this.next = null
    }
}

class Linklist{
    public head: Noded| null| any;
    public tail:Noded| null | any;
    public lenght: number

    constructor(){
        this.head = null;
        this.tail = null;
        this.lenght = 0
    }



    addTail(val:number) {
        let node = new Noded(val)

        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        }else{
            this.tail.next = node;
            this.tail = node
        }

        this.lenght++;
        return this;
    }



    addHead(val:number){
        let node = new Noded(val)

        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        }else{
           node.next = this.head
           this.head = node;
        }
        this.lenght++;
        return this;
    }



    removeTail(){
      if(!this.head){
        return undefined
      } else {
        let current = this.head;
        let newTail = current;

        while(current.next){
          newTail = current;
          current = current.next
        }

        this.tail = newTail;
        this.tail.next = null
        this.lenght--;
        return this
      }
    }



    removeHead(){
        if(!this.head){
           return console.log("cannot remove head")
        }else{
            let current = this.head;
            this.head = current.next;

            this.lenght--;
            return this
        }
    }



    get(index:number) {
        if(index < 0 || index > this.lenght){
            return undefined;
        }else {
           let count:number = 0;
           let current = this.head;

           while(index !== count){
            current = current.next;
            count++
           }
           return current;
        }
    };



    set(index:number, val:number) {
       let node = this.get(index);

       if(node) {
        node.val = val;
        return true;
       } else {
        return false
       }
    }




    insert(index:number, val:number){
       let node = new Noded(val)

       if(index < 0 || index > this.lenght) return undefined;
       if(index === 0) return this.addHead(val)
       if (index === this.lenght) return !!this.addTail(val)

       let prev = this.get(index - 1);
       let temp = prev.next;

       prev.next = node;
       node.next = temp;

       this.lenght++;
       return true
    }




    remove(index:number){
 
        if(index < 0 || index > this.lenght) return undefined;
        if(index === 0) return this.removeHead()
        if (index === this.lenght) return !!this.removeTail()
 
        let prev = this.get(index - 1);
        let temp = prev.next;
 
        prev.next = temp.next;
 
        this.lenght--;
        return true
     }
}

const link = new Linklist()

console.log(link.addHead(7))
console.log(link.addTail(2))
console.log(link.addTail(8))
console.log(link.addTail(5))
console.log(link.addTail(1))
// console.log(link.removeTail())
// console.log(link.removeHead())
// console.log(link.set(4, 10))
// console.log(link.get(4))
// console.log(link.insert(5, 10))
console.log(link.insert(0, 90))
console.log(link.remove(0))
