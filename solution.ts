type fv = string | number | boolean;

const formatValue = (value: fv) : fv => {

    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else if (typeof value === "boolean") {
        return !value;
    } else {
        return "Invalid Input: Please insert string, number or boolean";
    }
}





type rsize = string | any[]

const getLength = (arr : rsize): number=> {
    if (typeof arr === "string") {
        return arr.length;
    } else if (Array.isArray(arr)) {
        return arr.length;
    } else {
        return 0;
    }
}






class Person {
   name : string;
   age : number ;
   constructor (name : string, age :number ){
    this.name = name;
    this.age = age;
   }

   getDetails = () : string => {
    return `'Name: ${this.name}, Age: ${this.age}'`
   }
}




