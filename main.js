function myFunc() {
   
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value
    let paymentRef = document.getElementById("payref").value;

    
    if (name && city && paymentRef) {
      
      let div = document.getElementById("myDiv");
      
     
      let h2 = document.getElementById("myH2");
      
      let list = document.createElement("ul");  
      div.appendChild(list);                      

     
      let listItem = document.createElement("li");  
      listItem.innerHTML = name + " " + city + " " + " " + paymentRef + "<br>"
      list.appendChild(listItem);                   
    }
   else {
        alert("please fill in all fields");
  }

