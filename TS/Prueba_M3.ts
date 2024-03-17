
interface Employee {
    name: string,
    surname: string,
    email: string,
    birthDate: Date
}

class EmpleadoVentas implements Employee {
    name: string;
    surname: string;
    email: string;
    birthDate: Date;
    sdUnit: string;
    area: string;

    constructor(name: string, surname: string, email: string, birthDate: Date, sdUnit: string, area: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthDate = birthDate;
        this.sdUnit = sdUnit;
        this.area = area;

    }

    getName(){
        return this.name;
    }
    setName(name: string){
        this.name = name;
    }

    getSurname(){
        return this.surname;
    }
    setSurname(surname: string){
        this.surname = surname;
    }

    getEmail(){
        return this.email;
    }
    setEmail(email: string){
        this.email = email;
    }

    getBirthDate(){
        return this.birthDate;
    }
    setBirthDate(birthDate: Date){
        this.birthDate = birthDate;
    }

    getSdUnit(){
        return this.sdUnit;
    }
    setSdUnit(sdUnit: string){
        this.sdUnit = sdUnit;
    }

    getArea(){
        return this.area;
    }
    setArea(area: string){
        this.area = area;
    }

    logEmployee()  {
        console.log("Name: " + this.name);
        console.log("Surname: " + this.surname);
        console.log("Email: " + this.email);
        console.log("Birth Date: " + this.birthDate);
        console.log("SD Unit: " + this.sdUnit);
        console.log("Area: " + this.area);
    }

}

// let EmpleadoVentasIn = new EmpleadoVentas('Yue', 'Zhang', 'Yuethedoggy@email.com', new Date('17-03-2021'), '€', 'Belfast'); // --> objeto instanciado

// console.log(EmpleadoVentasIn.getEmail()); --> Prueba

function addEmployee(): EmpleadoVentas {

    let employeeName = (<HTMLInputElement>document.getElementById('name')).value;
    let employeeSurname = (<HTMLInputElement>document.getElementById('surname')).value;
    let employeeEmail = (<HTMLInputElement>document.getElementById('email')).value;
    let employeeBirthDate = (<HTMLInputElement>document.getElementById('birthDate')).value;
    let employeeSdUnit = (<HTMLInputElement>document.getElementById('sdUnit')).value;
    let employeeArea = (<HTMLInputElement>document.getElementById('area')).value;        
    // console.log(employeeName);
    const newEmployee = new EmpleadoVentas(employeeName, employeeSurname, employeeEmail, new Date(employeeBirthDate), employeeSdUnit, employeeArea);

    newEmployee.logEmployee();

    return newEmployee;
};


// const newEmployee = addEmployee("Happy", "Cute", "Happytheddoggy@email.com", new Date('01-04-2015'), "$", "Barcelona"); --> Lo usé para comprobar que funcionaba

// newEmployee.logEmployee();
