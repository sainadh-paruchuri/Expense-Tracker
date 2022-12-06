const path=require('path')
const User=require('../models/expenseDetails')

exports.getAddUser=(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','expense.html'));
}

exports.postAddUser=(req,res)=>{
    console.log(req.body)
    const amount=req.body.amount;
    const description=req.body.description;
    const category=req.body.category;

    User.create({
        amount:amount,
        description:description,
        category:category
    })
    .then(result=>{
        console.log(result)

    })
    
    .catch(err=>console.log(err))
    
    res.redirect('/')
}

exports.getAllUsers=(req,res)=>{
    User.findAll().then(
        result=> res.send(result)
    )
        .catch(err=>console.log(err))
}

exports.getUserById=(req,res)=>{
    
        let userId = req.params.userId ;
        console.log(userId)
        if(!userId){
           return res.status(400).json({error:'id is missing'})
        }
        User.findAll({where: {id : userId} }).then(
        result=>res.send(result[0])
    )
    .catch(err=>console.log(err))
}

exports.deleteUser=async(req,res,next)=>{
    try {
        let userId = req.params.userId ;
        console.log(userId)
        if(!userId){
           return res.status(400).json({error:'id is missing'})
        }
        await User.destroy({where:{id:userId}})
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).json('error occured')
    }
} 