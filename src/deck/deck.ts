export default class Deck {
    numbers = [1,2,3,4,5,6,7,8,9];
    symbols = ['+','-','*','/'];

    pick3Nums() {
        let nums = [];
        for (let x=0; x<3; x++) {
            nums.push(this.numbers[Math.floor(Math.random() * this.numbers.length)]);
        }
        return nums;
    }

    pick2Symbols() {
        let syms = [];
        for (let x=0; x<2; x++) {
            syms.push(this.symbols[Math.floor(Math.random() * this.symbols.length)]);
        }
        return syms;
    }

    dealHand():any[] {
        return this.pick2Symbols().concat(this.pick3Nums());
    }
}