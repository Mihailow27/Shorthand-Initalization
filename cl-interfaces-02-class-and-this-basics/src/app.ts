class Department {
  //private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    //this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}):${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Doby')
accounting.addEmployee('Mihaela')
//accounting.employees[2]='Aneta'
//accounting.employees[3]='Aleksandar'
accounting.describe();
accounting.printEmployeeInformation()

//const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
//accountingCopy.describe();