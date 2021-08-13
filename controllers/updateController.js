const fs = require('fs')
const jsonFile=require('../courses.json')

module.exports.update_data=(req, res) => {
        
        for (var i=0; i < jsonFile.availableCourses.length-1; i++) {
            if (jsonFile.availableCourses[i].id == req.params.id){
                break;
            }
        }
        if(jsonFile.availableCourses[i].id == req.params.id){
            
            jsonFile.availableCourses[i].id=req.params.id
            jsonFile.availableCourses[i].name=req.body.name
            jsonFile.availableCourses[i].type=req.body.type
            jsonFile.availableCourses[i].logo=req.body.logo
            jsonFile.availableCourses[i].short_description=req.body.short_description


            
            
            
            fs.writeFile('courses.json', JSON.stringify(jsonFile,null,4),function(err, result) {

                if (err) console.log('error', err);
                    console.log("Data has updated");
                    res.send("Data has updated!!!!")
            });
        }else{
            console.log("Id does not exists!!")
            res.send("Id does not exists!!")


        }
}



        