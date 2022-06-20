


const Employee = require('./employee');
const fs = require('fs');

class Engineer extends Employee {
  constructor(name, id, email, githubusername){
    super(name,id,email);
    this.githubusername=githubusername;
  };
  getDataEngineer(){

    const contentE= 
    `
    <section>
    <h1>
    &#x1F4C8;Role:Engineer
    </h1>
    <h2>
    name:${this.name}
    </h2>
    <h2>
    id:${this.id}
    </h2>
    <h2>
    email:<a>${this.email}</a>
    <h2>
    Github:<a src="https://github.com/${this.githubusername}">https://github.com/${this.githubusername}</a>
    </h2>
    </section>
    `;
    
          
    fs.appendFile("./html_tempfile/roles.html", contentE, (err) =>
    // Ternary operator takes in a condition followed by a question mark (?)
    // then an expression to execute if the condition is truthy followed by a colon (:)
    // and finally the expression to execute if the condition is falsy.
    // This operator is frequently used as a shortcut for the if statement.
    err ? console.error(err) : console.log('Commit logged!'));
    
  }


}

module.exports = Engineer;

//   In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`