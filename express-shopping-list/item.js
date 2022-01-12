const items = require('./fakeDb')

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this);
    }

    static findAll(){
        return items;
    }
    // update found item with matching name to data
    static update(name, data){
        let foundItem = Item.find(name);
        if(foundItem === undefined) {
            throw {message: "Not Found", status: 404}
        }
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    // find and return item with matching name.
    static find(name) {
        const foundItem = items.find(v => v.name === name);
        if(foundItem === undefined) {
            throw {message: "Not Found", status: 404}
        }
        return foundItem;
    }

    static remove(name) {
        let foundIdx = items.findIndex(v => v.name === name);
        if (foundIdx  === -1) {
            throw {message: "Not Found", status: 404}
        }
        items.splice(foundIdx, 1);
    }
}



module.exports = Item;