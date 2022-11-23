
var submit=document.getElementById("submit")
submit.onclick=function(){
    //event.preventDefault();
    var amount=document.getElementById("amount");
    var description=document.getElementById("description");
    var category=document.getElementById("category");

    
    const myobject={
        "amount":amount.value,
        "description":description.value,
        "category":category.value,
    }
    let myobject_s=JSON.stringify(myobject);

    // localStorage.setItem("amount",amount.value);
    // localStorage.setItem("description",description.value);
    // localStorage.setItem("category",category.value);
    localStorage.setItem(category.value,myobject_s);
    
    
    
}
window.addEventListener("DOMContentLoaded",()=>{
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
      
    
        
    
        
    
})
function showNewUserOnScreen(user){
    const parentNode = document.getElementById('new');
    const childHTML = `<li id=${user.category}> ${user.amount} - ${user.description}-${user.category}
                            <button onclick=deleteUser('${user.category}')> Delete User </button> <button onclick=edituser('${user.category})>edit</button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
function deleteUser(category){
    //console.log(emailId)
    localStorage.removeItem(category);
    removeUserFromScreen(category);

}
function removeUserFromScreen(category){
    const parentNode = document.getElementById("new");
    const childNodeToBeDeleted = document.getElementById(category);

    parentNode.removeChild(childNodeToBeDeleted)
}


    
    
       
        

    
    
