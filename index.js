const inquirer = require('inquirer');
const inquirer1 = require('inquirer');
const inquirer2 = require('inquirer');
const inquirer3 = require('inquirer');
const fs = require('fs');

const Manager = require('./classes/Manager');

const Engineer = require('./classes/Engineer');

const Intern = require('./classes/Intern');





init();


function init() {
  inquirer
    .prompt([
      {
      type: 'list',
      name: 'member',
      message: 'What team member you want to add',
      choices: ["Manager","Engineer","Intern","none"]
    },

    ])
    .then((data) => {

    var choice=data.member;

    if(choice==="Manager")
    Manager0();

    if (choice==="Engineer") {
      Engineer0();
    }

    if (choice==="Intern") {
      Intern0();
    }

    if (choice==="none") {
      

      render00();
    }
    });

}

function Manager0(){

  inquirer1
  .prompt([
    {
      type: 'input',
      name: 'ManagerName',
      message: 'Input manager name',
    },

    {
      type: 'input',
      name: 'ManagerId',
      message: 'Input manager id',
    },

    {
      type: 'input',
      name: 'ManagerEmail',
      message: 'Input manager email',
    },

    {
      type: 'input',
      name: 'ManagerOfficeNumber',
      message: 'Input manager office number',
    },


  ])
  .then((data1) => {

    const Manager00=new Manager(data1.ManagerName,data1.ManagerId,data1.ManagerEmail,data1.ManagerOfficeNumber);
    Manager00.getDataManager();

    init();


  });



}

function Engineer0(){

  inquirer2
  .prompt([
    {
      type: 'input',
      name: 'EngineerName',
      message: 'Input engineer name',
    },

    {
      type: 'input',
      name: 'EngineerId',
      message: 'Input engineer id',
    },

    {
      type: 'input',
      name: 'EngineerEmail',
      message: 'Input engineer email',
    },

    {
      type: 'input',
      name: 'githubusername',
      message: 'Input engineer github username',
    },


  ])
  .then((data2) => {

    const Engineer00=new Engineer(data2.EngineerName,data2.EngineerId,data2.EngineerEmail,data2.githubusername)
    Engineer00.getDataEngineer();

    init();


  });



}

function Intern0(){

  inquirer3
  .prompt([
    {
      type: 'input',
      name: 'InternName',
      message: 'Input intern name',
    },

    {
      type: 'input',
      name: 'InternId',
      message: 'Input intern id',
    },

    {
      type: 'input',
      name: 'InternEmail',
      message: 'Input inter email',
    },

    {
      type: 'input',
      name: 'school',
      message: 'Input intern school',
    },


  ])
  .then((data3) => {

    const Intern00=new Intern(data3.InternName,data3.InternId,data3.InternEmail,data3.school)
    Intern00.getDataIntern();

    init();


  });



}

function render00() {



 


  fs.readFile('./html_tempfile/roles.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      
      

      const convert =data;

   
      

      fs.readFile('team.html', 'utf8', (err, data2) => {
        if (err) {
          console.error(err);
        } else {
          
          

          const convert2=Array.from(data2);
          var locator = convert2.length-16-3
          // console.log("------------------------------");
          // console.log(convert2);
          // console.log("------------------------------");
          // console.log(convert2.length)
          // console.log("------------------------------");
          // console.log(convert2[locator])
          // console.log("------------------------------");

          // console.log(convert2[locator]);


          for (let index = convert2.length-1; index >=locator; index--) {
              convert2.splice(index,1);
          }
          
          // console.log("------------------------------");
          // console.log(convert2)
          // console.log("------------------------------");
          // console.log(convert2.length)
          // console.log("------------------------------");
          // console.log(convert2[252])
          // console.log("------------------------------");
          // console.log(data)
      var last0=
`

</div>
<footer>
JMP Full Stack Developer
</footer>
</body>
</html>
`;
          var last=[convert2.join(""),convert,last0]

          var content = last.join("");
          console.log(content)
          var content2="";
          

          fs.writeFile('team.html', content, (err) =>
            err ? console.error(err) : console.log('Success!')
          );

          fs.writeFile("./html_tempfile/roles.html", content2, (err) =>
          err ? console.error(err) : console.log('Success!')
          );


    
    
        } 
        
      });


    } 
    
  });
}


