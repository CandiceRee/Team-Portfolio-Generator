const ManagerExport =require("./Manager");
const EngineerExport =require("./Engineer");
const InternExport =require("./Intern");
const inqurier =require("inqurier");
const path = require("path");
const fs = require("fs/promises")

const OUTPUT_DIR=path.resolve(_surname,"output");
const outputPATH=path.join(OUTPUT_DIR,"team.html");

const teamMembers=[];
const idArray=[];
function appMenu(){
    function createManager(){
        inqurier.prompt([{
            type:"input",
            name:"manageName",
            message:"Manager's Name:",
            validate: answer=>{
                if(answer !==""){
                    return true;
                }
                return "Please enter a name:"
            }
        },
        
    ])
    }
}