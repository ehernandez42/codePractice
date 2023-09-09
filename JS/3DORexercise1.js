//exercise 1 off of 30 days of React
//starting examples
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

// 1. Declare an empty array

  const emptyArr = []
  console.log(emptyArr)
  //result from console
  //(0) []


// 2. Declare an array with more than 5 number of elements

const fiveItems = [1, "hi", 3, "Teaching", true]
console.log(fiveItems) 
//results
// (5) [1, 'hi', 3, 'Teaching', true]

// 3. Find the length of your array
console.log(fiveItems.length)
//results - 5

// 4. Get the first item, the middle item and the last item of the array
const [first, second, third, fourth, fifth] = fiveItems;
console.log(first, third, fifth)
//result: 1 3 true

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'exam', true, false, 3.44, 'frank']
console.log(mixedDataTypes.length)
//result: 6

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 7. Print the array using console.log()

console.log(itCompanies)
//results: (7) ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//8. Print the number of companies in the array

console.log(itCompanies.length)
//results: 7

// 9. Print the first company, middle and last company

const firstCompany = itCompanies[0]

const lastCompany = itCompanies[itCompanies.length - 1]

console.log("first company: " + firstCompany)
console.log("last company: " + lastCompany)
//results: first company: Facebook
//last company: Amazon

// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

/*
Results:
Facebook
Google
Microsoft
Apple
IBM
Oracle
Amazon
*/
console.log("--")
console.log("--")
// 11. Change each company name to uppercase one by one and print them out


for(let i = 0; i < itCompanies.length; i++) {
  let upperCaseComp = itCompanies[i].toString()
  console.log(upperCaseComp.toUpperCase());
}

/*
Results:
FACEBOOK
GOOGLE
MICROSOFT
APPLE
IBM
ORACLE
AMAZON
*/

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// 14. Filter out companies which have more than one 'o' without the filter method
// 15. Sort the array using sort() method
// 16. Reverse the array using reverse() method
// 17. Slice out the first 3 companies from the array
// 18. Slice out the last 3 companies from the array
// 19. Slice out the middle IT company or companies from the array
// 20. Remove the first IT company from the array
// 21. Remove the middle IT company or companies from the array
// 22. Remove the last IT company from the array
// 23. Remove all IT companies

//try to reverse this string using recursion; Apple recursion problem
  const str = "hello"

  function recursionProblem (str) {
    //base case
    if (str.length === 0) return ""
    
    //recursion
    return str[str.length -1 ] +
    recursionProblem(str.slice(0, str.length-1))

  }

  console.log(recursionProblem(str))


//hash table implementation 

//storing the information before it gets hashed

class HashNode {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
}

//the size initiialization?
class HashMap { 
  constructor() {
    this.capacity = 20;
    this.size = 0;
    this.arr = new Array(this.capacity);
  
  //set values as NULL
  for (let i = 0; i < this.capacity; i++) {
    this.arr[i] = null;
  }

  //dummy node is needed for other nodes to built off of
 this.dummy = new HashNode(-1, -1);
  }

  //implements hash function
  hashCode(key) {
    return key % this.capacity;
  }

  //add a node into the hash table

  insertNode(key, value) {
    //initialize node
    const temp = new HashNode(key, value);

    //initialize hashcode
    let hashIndex = this.hashCode(key);

    //finds free space
    while (
      this.arr[hashIndex] !== null &&
      this.arr[hashIndex].key !== key &&
      this.arr[hashIndex].key !== -1
    ) {
      hashIndex++;
      hashIndex %= this.capacity;
    }

    if (
      this.arr[hashIndex] === null ||
      this.arr[hashIndex] === -1) 
    {
      this.size++
    }
    this.arr[hashIndex] = temo;
  }
  
  //deleteNode function 

  deleteNode(key) {

    let hashIndex = this.hashCode(key);

    while (this.arr[hashIndex] !== null) {
        //if the node exists
        if (this.arr[hashIndex].key === key) {
          const temp = this.arr[hashIndex];

          this.arr[hashIndex] = this.dummy;

          this.size--;
          hashIndex %= this.capacity;
        }
        hashIndex++
        hashIndex %= this.capacity;
    }
    return null;
  }
  //function to get key from hash table
  get(key) {
    let hashIndex = this.hashCode(key);
    let counter = 0;

    while (this.arr[hashIndex] !== null) {
      if (counter++ > this.capacity) {
        return 0
      }

      if (this.arr[hashIndex].key === key) {
        return this.arr[hashIndex].value;
      }
      hashIndex++;
      hashIndex %= this.capacity;
    }
    return 0
  }

  sizeofMap() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  display() {
    for (let i = 0; i < this.capacity; i++) {
        if (this.arr[i] !== null && this.arr[i].key !== -1) {
        console.log(`key=${this.arr.key} value=${this.arr.value}`)
        }
      }
    }
  }

