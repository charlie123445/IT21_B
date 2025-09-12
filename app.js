class Person{
    name;
    age;
    occupation;
    messages;

    constractor(name, age, occupation, message){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.message = message;
    }

    displayInfo(){
        console.log("name: "+ this.name);
        console.log("Age:"+ this.age);
        console.log("occupation:"+ this.occupation);
        console.log("message"+ this.message);
        console.log("-----------------------");
    }

    showName(){
        console.log(this.name);
    }

    showMessage(){
        console.log(this.message);
    }
}

const person1 = new person("coco Martin",24,"Masahista","ser tapos na po");
const person2 = new person("Victor Magtanggol",24,"superhero","Arjooooooo");

person1.displayInfo();
person2.displayInfo();