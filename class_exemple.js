class Student {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  printCredentialsArrowFunc() {
    setTimeout(()=> {
      console.log( 'Arrow: ' + this.first_name)
      console.log( 'Arrow: ', this.last_name)
    }, 100)
  }

  printCredentialsFunc() {
    setTimeout(()=> {
      console.log( 'Func: ' + this.first_name)
      console.log( 'Func: ', this.last_name)
    }, 100)
  }
}

let student = new Student('Aleksey')
student.printCredentialsArrowFunc()
student.printCredentialsFunc()
console.log(this.first_name)
console.log(this.last_name)