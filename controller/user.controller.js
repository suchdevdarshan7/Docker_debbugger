export function getUsers(req,res,next) {
    console.log("Hello world!");
    res.status(200).json({status: "success"});
}


export funcntion getUserById(req,res,next){
    console.log("This is the best function")
    res.status(200).json({status: "success"})
}

