class School{
    constructor(name, numberOfStudents){
        this._name = name;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    quickFacts(){
        console.log(this._name + ' educates ' + this._numberOfStudents + ' students at the ' + this._level + ' school level.')
    }
    static pickSubstituteTeacher(substituteTeachers){
        let randnum = Math.floor(Math.random() * substituteTeachers.length)
        return substituteTeachers[randnum];
    }
    set numberOfStudents(num){
        if(isNan(numberOfStudents)){
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }else{this._numberOfStudents=this.numberOfStudents;}
    }
}

class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy, ){
        super(name, numberOfStudents);
        this._pickupPolicy = pickupPolicy;
        this._level = 'primary';
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }

}

class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
        super(name, numberOfStudents, sportsTeams)
        this._sportsTeams = sportsTeams;
        this._level = 'high';
    }
    get sportsTeams(){
        console.log(this._sportsTeams);
    }

}

const lorraineHansbury = new PrimarySchool('Lorraine hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13 ',)
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;