type fv = string | number | boolean;

const formatValue = (value: fv): fv => {

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

const getLength = (arr: rsize): number => {
    if (typeof arr === "string") {
        return arr.length;
    } else if (Array.isArray(arr)) {
        return arr.length;
    } else {
        return 0;
    }
}






class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails = (): string => {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}




type bfr = {
    title: string;
    rating: number;
}

const filterByRating = (arr: bfr[]): string[] => {
    let arr2: any[] = []

    arr.forEach(book => {
        if (book.rating >= 4) {
            arr2.push(book);
        }
    })

    return arr2;

}




type fau = {
    id: number,
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (arr: fau[]): string[] => {
    let arr2: any[] = []

    arr.forEach(usr => {
        if (usr.isActive == true) {
            arr2.push(usr);
        }
    })

    return arr2;

}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (obj: Book): void => {
    const ter = `Title: ${obj.title}, Author: ${obj.author}, Published: ${obj.publishedYear}, Available: ${obj.isAvailable}`
    console.log(ter);
}





type vvv = string[] | number[]

const getUniqueValues = (arr1: vvv, arr2: vvv) => {
    const readyForReturn: (string | number)[] = []
    const fullArray = arr1.concat(arr2);

    fullArray.forEach((item) => {
        let isFound = false;
        if (readyForReturn.length == 0) {
            readyForReturn.push(item)
        } else {
            for (const chk in readyForReturn) {
                if (item == chk) {
                    isFound = true;
                    break;
                }
            }
        }
        if (!isFound == true) readyForReturn.push(item)

    })
    return readyForReturn;
}




interface productList {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: productList[]) => {
    let totalPrice = 0;
    products.forEach((product) => {
        const { discount, price, quantity } = product;
        if (discount == undefined || discount <= 0) {
            totalPrice = totalPrice + (price * quantity)
        } else {
            const cutoff = price * (discount / 100)
            totalPrice = totalPrice + ((price - cutoff) * quantity)
        }
    })
    return totalPrice;
}

