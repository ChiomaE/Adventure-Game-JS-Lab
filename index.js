//Part 1

/* const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ['sword', 'potion', 'artifact'],
    companion: {
        name: 'Leo',
        type: 'Cat',
        companion: {
            name: 'Frank',
            type: 'Flea',
            inventory: ['small hat', 'sunglasses']
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random()*20) +1 + mod;
        console.log(`${this.name} rolled a ${result}`);
    }
}

 adventurer.roll();
adventurer.roll();
adventurer.roll();  */

/* let item;
for(let i=0; i<adventurer.inventory; i++){
    item = adventurer.inventory[i];
    console.log(item);
}

console.log(adventurer.inventory[0]); */

//Part 2

class Character {
    constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    
    }
    static MAX_HEALTH = 100;
    roll (mod = 0) {
        const result = Math.floor(Math.random()*20) +1 + mod;
        console.log(`${this.name} rolled a ${result}`);
    }
}

/* const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();
robin.companion.roll();
robin.companion.companion.roll(); 
 */
//Part 3

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      /* if(role != ROLES){
        console.log("This is not a designated role.")
      } */
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
      //Part 4
    static ROLES = 'Fighter';
    static ROLES = 'Healer';
    static ROLES = 'Wizard';
    static ROLES = 'Ranger';
    static ROLES = 'Rouge';
    static ROLES = 'Cleric';
    static ROLES = 'Bezerker';
    static ROLES = 'Paladin';
    static ROLES = 'Warlock';
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    duel (Adventurer) {
        let duelRole = super.roll();
        //Compare roles
        console.log(duelRole);
    }
  }

  class Companion extends Character {
    constructor(name, role){
        super(name);
      // Adventurers have specialized roles.
      this.role = role;
      this.inventory.push('healing potion');
    }

    makeJokes () {
        console.log(`${this.name} made a joke.`);
        let funRoll = super.roll();
        if(funRoll <= 14){
            console.log(`The party laughs`);
        } else {
            console.log('Crickets...');
        }
    }
  }

/*   const robin = new Adventurer("robin");
  const leo = new Companion("leo");
  const frank = new Companion("frank"); */

//Part 5 - Factories??

class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }
    generate (name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex(index) {
        return this.adventurers[index];
    }
    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

/* Now, we can create many “healers” using the healer factory, and conveniently find them using the factory’s methods. We can also add additional convenience methods to the factory as the requirements of the program expand. */

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");

//Part 6

const Devin = new Adventurer("Devin", "Fighter");
const Cronelia= new Adventurer("Cronelia", "Healer");
const Beebo= new Companion("Beebo");

Devin.duel(Cronelia);
// Beebo.makeJokes();
