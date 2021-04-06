const inquirer = require('inquirer');
const fs = require('fs');
const print=console.log


let title="";
let description = ""
let installation =""
let usage=""
let license=""
let contributing=''
let tests= ""
let pickedLicense=''
let devName=''
let devGitHub=''
let devEmail=''


const getInfo=()=>{
    inquirer
        .prompt([
            {
                name:"name",
                type: "input",
                message:"Insert Dev Name"
            },{
            name: "lic",
            type: "list",
            message: "Pick A software Liscense (NOTE, if you pick other you must manually type out the Liscense",
            choices:['MIT','Apache', 'ThreeClauseBSD','TwoClauseBSD','Custom/Other']
          },
            {
            name: "title",
             type: "input",
            message: "Insert Title"},
              {
              name: "description",
              type: "input",
              message: "Insert Description",
            },
            {
            name: "install",
             type: "input",
            message: "Insert Install Instructions"
            },{
                name: "usage",
              type: "input",
              message: "Insert Usage Info",
            },
            {
                name: "contributing",
              type: "input",
              message: "Insert contribution guidlines",
            },
            {
                name: "github",
              type: "input",
              message: "Insert Your Github Link",
            },

            {
                name: "email",
              type: "input",
              message: "Insert Your Email",
            }

        ])
        .then((answer)=>{
            devName=answer.name
            title=answer.title
            description=answer.description
            installation=answer.install
            usage=answer.usage
            license=answer.lic
            contributing=answer.contributing
            tests= answer.tests
            devGitHub=answer.github
            devEmail=answer.email

            print(license)
            
            if (license==="MIT"){ 
                pickedLicense=`Copyright 2021 ${devName} 
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
                 to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
                  and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
                createReadMe();
            }
            if (license==="Apache"){ 
                pickedLicense=` Copyright 2021 ${devName} 
                Licensed under the Apache License, Version 2.0 (the "License");
                you may not use this file except in compliance with the License.
                You may obtain a copy of the License at
              
                  http://www.apache.org/licenses/LICENSE-2.0
              
                Unless required by applicable law or agreed to in writing, software
                distributed under the License is distributed on an "AS IS" BASIS,
                WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                See the License for the specific language governing permissions and
                limitations under the License. `
              ;
                 createReadMe();
            }
            if (license==="ThreeClauseBSD"){ 
                pickedLicense=`Copyright 2021 ${devName}
                Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
              
              1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
              
              2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
              
              3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
              
              THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, 
                  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                
                `;
                 createReadMe();
            }
            if (license==="TwoClauseBSD"){ 
                pickedLicense=`Copyright 2021 ${devName}
                Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
              
              1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
              
              2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
              
              THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, 
              STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                 `;
                 createReadMe();
            }
            if (license==='Custom/Other'){
                customLic();
            }

            
        })
}


getInfo()


const customLic=()=>{
    inquirer
    .prompt([
        {
            name:"otherLic",
            type: "input",
            message:"Insert other license",
        },])
        .then((answer)=>{
            pickedLicense=answer.otherLic;
            createReadMe()
        })
        
}


function createReadMe(){
    print("Writing File Now...")
    fs.writeFile(`${title}.md`,`
    ${title},
    
    ${pickedLicense}


    Table of Contents,
        -Description
        -Installaltion Info
        -Usage Info
        -Contribution
        -Test Info
        -Questions


    Description,
        ${description}.
    

    Installation Info,
        ${installation}.

    
    Usage Info,
        ${usage}.

    
    Contribution,
        ${contributing}.



    Test Info,
        ${tests}.

    
    Got any Questions? Contact Me!
        Github: ${devGitHub},
        Email: ${devEmail}

    
    
    
    `,err =>{
        if(err){
            print("error")
            return}})
    print("...Done")
}





  
  

  const TwoClauseBSD=`Copyright 2021 ${devName}
  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, 
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   `

