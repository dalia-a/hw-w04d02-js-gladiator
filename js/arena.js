'use strict';
import Gladiators from './gladiator.js'
export default class Arena {
    constructor(name , gladiator= []){
        this.name=name.charAt(0).toUpperCase() + name.slice(1);
        this.gladiator=gladiator;
        
    }  addGlaidiator(gladiator){
        if(this.gladiators.length < 2){
        this.gladiators.push(gladiator);
        }
}
}

// const colosseum = new Arena("Colosseum");
// console.log(colosseum.gladiators); // => []


// const max = new Gladiator("Maximus","Trident");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// console.log(colosseum.gladiators); // => [Gladiator]


