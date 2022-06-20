


const Employee = require('./employee');
const fs = require('fs');

class Intern extends Employee {
  constructor(name, id, email, school){
    super(name,id,email);
    this.school=school;
  };

  getDataIntern(){

    const contentI= 
    `
    <section>
    <h1>
    &#127891;Role:Intern
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
    School:${this.school}
    </h2>
    </section>
    `;
    
          
    fs.appendFile("./html_tempfile/roles.html", contentI, (err) =>
    // Ternary operator takes in a condition followed by a question mark (?)
    // then an expression to execute if the condition is truthy followed by a colon (:)
    // and finally the expression to execute if the condition is falsy.
    // This operator is frequently used as a shortcut for the if statement.
    err ? console.error(err) : console.log('Commit logged!'));
    
  }



}

module.exports = Intern;

//   In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`