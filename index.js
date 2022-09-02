// const a=fetch(`https://api.postalpincode.in/pincode/411046`);
// console.log(a);
var outputcontainer= document.querySelector('.outputbox1');


function onlynum(input){
    var regex= /[^0-9]/gi;
    input.value= input.value.replace(regex,"")
}


function getinputvalue(){
    var inptvalue=document.getElementById("pinnumber").value;

    fetch(`https://api.postalpincode.in/pincode/${inptvalue}`).then((responce) => {
        // console.log(responce);
        return responce.json(); //this is new promise
    }).then((data) => {
        console.log(data[0].Message);
        // var length=data[0].PostOffice.length;
        var inptlength=inptvalue.length;
        console.log(inptlength);
        console.log(inptvalue);


            if (inptlength!=6){ //6 digit length validation
                alert("Please write a correct pincode")
                
            }else if(data[0].PostOffice===null){ //null value validation
                alert(data[0].Message);

            } else if(inptlength==6) {
                let data1="";
                data.map(function (values) {
                    
               data1 = `
               <table class="table0">
                                 <tr id="idthead" class="thead0">
                                   <th class="thead">AREA NAME</th>
                                   <th class="thead">BRANCH TYPE</th>
                                   <th class="thead">STATE</th>
                                   <th class="thead">BLOCK</th>
                                   <th class="thead">PINCIOED</th>
                                 </tr>
                                 <tr>
                                   <td class="thead thead2">${values.PostOffice[0].Name}       </td>
                                   <td class="thead thead2">${values.PostOffice[0].BranchType} </td>
                                   <td class="thead thead2">${values.PostOffice[0].Block}      </td>
                                   <td class="thead thead2">${values.PostOffice[0].State}      </td>
                                   <td class="thead thead2">${values.PostOffice[0].Pincode}    </td>
                                 </tr>
                                 <tr>
                                   <td class="thead thead2">${values.PostOffice[1].Name}      </td>
                                   <td class="thead thead2">${values.PostOffice[1].BranchType}</td>
                                   <td class="thead thead2">${values.PostOffice[1].Block}     </td>
                                   <td class="thead thead2">${values.PostOffice[1].State}     </td>
                                   <td class="thead thead2">${values.PostOffice[1].Pincode}   </td>
                           </table>
                           
                     `;
                     outputcontainer.style.opacity=1 ;
                });
                document.getElementById("displayoutput").innerHTML=data1;
                
            }
            
    });
} 


// var a=getinputvalue('inptvalue');
// const getpincodedata= function(DPINCODE){
//     fetch(`https://api.postalpincode.in/pincode/${DPINCODE}`).then(function (responce) {
//         console.log(responce);
//         return responce.json(); //this is new promise
//     }).then(function (DATA) {
//         console.log(DATA)
//     });
// };

