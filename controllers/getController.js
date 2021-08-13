const axios = require('axios')
const fs = require('fs')
const path = "./courses.json"


module.exports.All_data=(req,res)=>{

    if (fs.existsSync(path)){
        console.log("file already exists!!!");
        res.send("file  already exists!!!")

        
    }else{

        axios.get("https://saral.navgurukul.org/api/courses").then((resp) => {
            const strData = JSON.stringify(resp.data,null,4)

        fs.writeFile('courses.json', strData, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file!!!')
                res.send(strData)
            }
            })

        
        })
    }
}


