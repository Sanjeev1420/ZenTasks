
class person{
    constructor(name,dob,mobile,email,address){
        this.name = name;
        this.dob = dob;
        this.mobile = mobile;
        this.email = email;
        this.address = address;
    }

    getDetails(det){
        return this[det];
    }

    setDetails(det,value){
        this[det] = value;
    }

    getAge(){
        const born_date = new Date(this.dob);
        const today = new Date();
        
        return today.getFullYear() - born_date.getFullYear();
    }

    getPersonalDet(){
        return `Name : ${this.name} / DOB : ${this.dob} / Age : ${this.getAge()}`;
    }

    getContacts() {
        return `Mobile : ${this.mobile} and Email : ${this.email}`;
    }
}

const p1 = new person("sanjeev","2002-12-14","1234567890","sanjeev@gmail.com","123 erode");
p1.setDetails("name","SanjeevRaj S P");
console.log(`Name of p1 instance => ${p1.getDetails("name")}`);


console.log(`Age of p1 => ${p1.getAge()}`);

console.log(`Personal Details of p1 => ${p1.getPersonalDet()}`);

console.log(`Contacts of p1 => ${p1.getContacts()}`);