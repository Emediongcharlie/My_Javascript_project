class Stack{
    constructor(){
        this.items = [];
    }

    push(item){
       this.items.push(item);
    }

    pop(item){
        this.items.pop();
    }

    getStack(){
        return this.items;
    }

}

module.exports = {Stack}