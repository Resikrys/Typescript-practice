var EmpleadoVentas = /** @class */ (function () {
    function EmpleadoVentas(name, surname, email, birthDate, sdUnit, area) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthDate = birthDate;
        this.sdUnit = sdUnit;
        this.area = area;
    }
    EmpleadoVentas.prototype.getName = function () {
        return this.name;
    };
    EmpleadoVentas.prototype.setName = function (name) {
        this.name = name;
    };
    EmpleadoVentas.prototype.getSurname = function () {
        return this.surname;
    };
    EmpleadoVentas.prototype.setSurname = function (surname) {
        this.surname = surname;
    };
    EmpleadoVentas.prototype.getEmail = function () {
        return this.email;
    };
    EmpleadoVentas.prototype.setEmail = function (email) {
        this.email = email;
    };
    EmpleadoVentas.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    EmpleadoVentas.prototype.setBirthDate = function (birthDate) {
        this.birthDate = birthDate;
    };
    EmpleadoVentas.prototype.getSdUnit = function () {
        return this.sdUnit;
    };
    EmpleadoVentas.prototype.setSdUnit = function (sdUnit) {
        this.sdUnit = sdUnit;
    };
    EmpleadoVentas.prototype.getArea = function () {
        return this.area;
    };
    EmpleadoVentas.prototype.setArea = function (area) {
        this.area = area;
    };
    EmpleadoVentas.prototype.logEmployee = function () {
        console.log("Name: " + this.name);
        console.log("Surname: " + this.surname);
        console.log("Email: " + this.email);
        console.log("Birth Date: " + this.birthDate);
        console.log("SD Unit: " + this.sdUnit);
        console.log("Area: " + this.area);
    };
    return EmpleadoVentas;
}());
// let EmpleadoVentasIn = new EmpleadoVentas('Yue', 'Zhang', 'Yuethedoggy@email.com', new Date('17-03-2021'), '€', 'Belfast'); // --> objeto instanciado
// console.log(EmpleadoVentasIn.getEmail()); --> Prueba
function addEmployee() {
    var employeeName = document.getElementById('name').value;
    var employeeSurname = document.getElementById('surname').value;
    var employeeEmail = document.getElementById('email').value;
    var employeeBirthDate = document.getElementById('birthDate').value;
    var employeeSdUnit = document.getElementById('sdUnit').value;
    var employeeArea = document.getElementById('area').value;
    // console.log(employeeName);
    var newEmployee = new EmpleadoVentas(employeeName, employeeSurname, employeeEmail, new Date(employeeBirthDate), employeeSdUnit, employeeArea);
    newEmployee.logEmployee();
    return newEmployee;
}
;
// const newEmployee = addEmployee("Happy", "Cute", "Happytheddoggy@email.com", new Date('01-04-2015'), "$", "Barcelona"); --> Lo usé para comprobar que funcionaba
// newEmployee.logEmployee();
