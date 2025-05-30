/* <th>SNO</th>
<th>Person Name</th>
<th>Age</th>
<th>Date OF Birth</th>
<th>Contact No</th>
<th>Email Address</th> */

var info1 = {
    SNO: 1,
    PersonName: "Abdul Moeez",
    Age: 21,
    DateOfBrith: "20 November 2004",
    ContactNo: +923168927326,
    EmailAddress: "abdulmoeezm37@gmail.com"
};

var info2 = {
    SNO: 2,
    PersonName: "Arham",
    Age: 20,
    DateOfBrith: "20 feb 2003",
    ContactNo: +923164454326,
    EmailAddress: "Arham@gmail.com"
};


var infoparent = document.getElementById("infoparent");
var infoPerson = [info1, info2];
console.log(infoPerson);


for (var i = 0; i < infoPerson.length; i++) {
    console.log(infoPerson[i].Age);
    infoparent.innerHTML += `<tr>
                         <td>${infoPerson[i].SNO}</td>
                        <td>${infoPerson[i].PersonName}</td>
                        <td>${infoPerson[i].Age}</td>
                        <td>${infoPerson[i].DateOfBrith}</td>
                        <td>${infoPerson[i].ContactNo}</td>
                        <td>${infoPerson[i].EmailAddress}</td> 
                    </tr>`

}










