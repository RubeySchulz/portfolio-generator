const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');
// const pageHTML = generatePage(name, github);


// fs.writeFile('./index.html', pageHTML, err => {
//     if(err) throw new Error(err);

//     console.log('Portfolio complete! CHeck out index.html to see it');
// })

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));