'use strict';
import Gladiators from './gladiator.js'
export default class Arena {
    constructor(name , gladiators= []){
       const  capName = name.charAt(0).toUpperCase() + name.slice(1);
        this.name=capName;
        this.gladiator=gladiator;
        
    }  addGlaidiator(fighterGladiator){
        if(this.gladiators.length < 2){
             this.gladiators.push(fighterGladiator);
        }else 
        {
             console.log(" they can't have more than 2 gladiators in it at a time")
        }

} fight(){

if ((this.gladiator[0].weapon== "Spear") && (this.gladiator[1].weapon== "Tirdent")){
   
    return this.gladiators[1].name; // Trident beats Spear 
    this.gladiators.shift(); // to remove   
} else if ((this.gladiator[0].weapon== "Spear") && (this.gladiator[1].weapon== "Club")){
    return this.gladiators[0].name; // Spear beats Club
    this.gladiators.pop(); 
}else if ((this.gladiator[0].weapon== "Club") && (this.gladiator[1].weapon== "Trident")){ 
    return this.gladiators[0].name;  //Club beats Trident
    this.gladiators.shift(); 
} else  ((this.gladiator[0].weapon== "Spear") && (this.gladiator[1].weapon== "Spear") ||
            (this.gladiator[0].weapon== "Tirdent") && (this.gladiator[1].weapon== "Tirdent") ||
            (this.gladiator[0].weapon== "Club") && (this.gladiator[1].weapon== "Club")) 
            {
                return this.gladiators=gladiators=[] ;   
            }

} // fight() method i hope it's correct 
} // i did't try in console -_- 




