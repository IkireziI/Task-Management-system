const {tasks}=require("../Database/db.js");

// add new tasks funtion

const add=(newTask)=>{
    newTask.taskNumber=tasks.length+1;
    tasks.push(newTask);
    console.log("\ntasks successfully added\n");
    console.log(tasks);
};

// display all tasks

const display=()=>{
    console.log("\nlist of all tasks");
    console.log(tasks);

};

// remove tasks

const remove=(taskNumber)=>{
    var exists=tasks.find(ele=>ele.taskNumber==taskNumber);
    if(!exists){
        console.log("task does not exist");
    }
    else{
        var index=tasks.indexOf(exists);
        tasks.splice(index, 1);
        console.log("\n tasks successfully removed\n");
        console.log(tasks);

    }
};


// update one element

const update=(taskNumber,key,value)=>{
    var exists=tasks.find(ele=>ele.taskNumber==taskNumber);
    if(!exists){
        console.log("task does not exist");
    }
    else{
        var index=tasks.indexOf(exists);
        tasks[index][key]=value;
        console.log("\n task successfully updated\n");
        console.log(tasks);
}
};

// update multiple elements

const updateMany=(taskNumber,obj)=>{
    var exists=tasks.find(ele=>ele.taskNumber==taskNumber);
    if(!exists){
        console,log("\n task does not found\n");
    }
    else{
        for(key in obj){
            exists[key]=obj[key];
        }
        console.log("\ntask info successfully updated\n");
        console.log(exists);
    }
};

module.exports={
    add,
    display,
    remove,
    update,
    updateMany
};