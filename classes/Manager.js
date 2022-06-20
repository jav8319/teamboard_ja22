

const Employee = require('./employee');
const fs = require('fs');


class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name,id,email);
    this.officeNumber=officeNumber
  };

  getDataManager(){

    const contentM= 
    `
    <section>
    <h1>
    &#x2615;Role:Manager
    </h1>
    <h2>
    name:${this.name}
    </h2>
    <h2>
    id:${this.id}
    </h2>
    <h2>
    email:<a>${this.email}</a>
    </h2>
    <h2>
    office number:${this.officeNumber}
    </h2>
    </section>
    `;
    
          
    fs.appendFile("./html_tempfile/roles.html", contentM, (err) =>
    // Ternary operator takes in a condition followed by a question mark (?)
    // then an expression to execute if the condition is truthy followed by a colon (:)
    // and finally the expression to execute if the condition is falsy.
    // This operator is frequently used as a shortcut for the if statement.
    err ? console.error(err) : console.log('Commit logged!'));
    
  }


}

module.exports = Manager;

