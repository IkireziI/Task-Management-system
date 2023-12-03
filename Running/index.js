const {add,display,remove,update, updateMany}=require("../Controller/task-controller.js");

const newTask={
    
    description:"Group work",
    deadline:2022,
    completed:true,
};

const toBeUpdated ={
    deadline:2024,
    completed:false,
    description:"assessment",
};





add(newTask);
display();
remove(4);
update(2,"completed","false");
updateMany(1,toBeUpdated);