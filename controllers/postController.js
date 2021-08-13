const fs = require('fs')
const jsonFile=require('../courses.json')

module.exports.post_data=(req, res) => {

        //  Taken data from  postman body to create new data to post in json file
        var Data = {"id": req.params.id, "name":req.body.name,"type":req.body.type,"logo":req.body.logo,"short_description":req.body.short_description};
        

        // To check wheather specific ID is available in JSON file or not 
        for (var i=0; i < jsonFile.availableCourses.length-1; i++) {
            if (jsonFile.availableCourses[i].id == req.params.id){
                break;
            }
        }
        if(jsonFile.availableCourses[i].id == req.params.id){
            console.log(" ID already exists")
            res.send(" ID Already exists!!!!")
        }else{
            
            jsonFile["availableCourses"].push(Data)
            fs.writeFile('courses.json', JSON.stringify(jsonFile,null,4),function(err, result) {

                if (err) console.log('error', err);
                console.log("Data has added!!!")
                res.send("Data has added!!!")


            });

        }
}
        
        