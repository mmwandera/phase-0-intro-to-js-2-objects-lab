// Write your solution in this file!
const employee = {
    name: "Mark",
    streetAddress:"Mariakani Gardens",
}


// Non destructive
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newObj = {...employee}
    newObj [key] = value
    return newObj
}

// Destructive
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value
    return employee
}

// Delete property Non destructively
function deleteFromEmployeeByKey(employee,key){
    const newObj = {...employee}
    delete newObj [key]
    return newObj
}

// Delete property Destructively
function destructivelyDeleteFromEmployeeByKey(employee,key){
   delete employee [key]
   return employee
}