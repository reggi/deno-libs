/**
 * This is a code example of the 100 Prisoner Problem.
 * 
 * There are 100 prisoners in solitary cells. There's a central living room 
 * with one light bulb; this bulb is initially off. No prisoner can see the 
 * light bulb from his or her own cell. Everyday, the warden picks a prisoner 
 * equally at random, and that prisoner visits the living room. While there, 
 * the prisoner can toggle the bulb if he or she wishes. Also, the prisoner 
 * has the option of asserting that all 100 prisoners have been to the living 
 * room by now. If this assertion is false, all 100 prisoners are shot. 
 * However, if it is indeed true, all prisoners are set free. Thus, the 
 * assertion should only be made if the prisoner is 100% certain of its 
 * validity. The prisoners are allowed to get together one night in the 
 * courtyard, to discuss a plan. What plan should they agree on, so that 
 * eventually, someone will make a correct assertion?
 * 
 * Source: http://www.cut-the-knot.org/Probability/LightBulbs.shtml
 * 
 */

export class Room {
    light: boolean;
    constructor () {
        this.light = false;
    }
    turnLightOn () {
        this.light = true;
    }
    turnLightOff () {
        this.light = false;
    }
}

export class Prisoner {
    name: string;
    roomVisits: number;
    isLeader: boolean;
    constructor (name: string, leader: boolean) {
        this.name = name;
        this.roomVisits = 0;
        this.isLeader = leader
    }
}

export class Problem {
    makeClaim: boolean;
    visitCount: number;
    prisoners: Prisoner[];
    room: Room;
    constructor (prisoners: Prisoner[]) {
        this.makeClaim = false;
        this.visitCount = 0;
        this.prisoners = prisoners;
        this.room = new Room();
    }
    getRandomPrisonerNumber () {
        return (Math.round((Math.random() * 99 + 0)));
    }
    getRandomPrisoner () {
        return this.prisoners[this.getRandomPrisonerNumber()];
    }
    visit () {
        this.visitCount = this.visitCount + 1;
        const prisoner = this.getRandomPrisoner();
        if (prisoner.isLeader && prisoner.roomVisits === 99) this.makeClaim = true;
        if (!prisoner.isLeader && !prisoner.roomVisits && !this.room.light) this.room.turnLightOn();
        if (prisoner.isLeader && this.room.light) this.room.turnLightOff();
        prisoner.roomVisits = prisoner.roomVisits + 1;
    }
    allVisits () {
        while(this.makeClaim === false) {
            this.visit();
        }
    }
}

export const people = [
    'Jacob',
    'Michael',
    'Joshua',
    'Matthew',
    'Christopher',
    'Andrew',
    'Daniel',
    'Ethan',
    'Joseph',
    'William',
    'Anthony',
    'Nicholas',
    'David',
    'Alexander',
    'Ryan',
    'Tyler',
    'James',
    'John',
    'Jonathan',
    'Brandon',
    'Christian',
    'Dylan',
    'Zachary',
    'Noah',
    'Samuel',
    'Benjamin',
    'Nathan',
    'Logan',
    'Justin',
    'Jose',
    'Gabriel',
    'Austin',
    'Kevin',
    'Caleb',
    'Robert',
    'Elijah',
    'Thomas',
    'Jordan',
    'Cameron',
    'Hunter',
    'Jack',
    'Angel',
    'Isaiah',
    'Jackson',
    'Evan',
    'Luke',
    'Jason',
    'Isaac',
    'Mason',
    'Aaron',
    'Connor',
    'Gavin',
    'Kyle',
    'Jayden',
    'Aidan',
    'Juan',
    'Luis',
    'Charles',
    'Aiden',
    'Adam',
    'Brian',
    'Eric',
    'Lucas',
    'Sean',
    'Nathaniel',
    'Alex',
    'Adrian',
    'Carlos',
    'Bryan',
    'Ian',
    'Jesus',
    'Owen',
    'Julian',
    'Cole',
    'Landon',
    'Diego',
    'Steven',
    'Chase',
    'Timothy',
    'Jeremiah',
    'Sebastian',
    'Xavier',
    'Devin',
    'Cody',
    'Seth',
    'Hayden',
    'Blake',
    'Richard',
    'Carter',
    'Wyatt',
    'Dominic',
    'Antonio',
    'Jaden',
    'Miguel',
    'Brayden',
    'Patrick',
    'Alejandro',
    'Carson',
    'Jesse',
    'Tristan',
];
