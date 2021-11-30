const express = require('express')
const router = express.Router()
const UserPrac = require('../models/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

router.get('/',(req,res)=>{
    res.status(200).json({message:'this is from json response arham from routes .js file'})
})

router.post('/create', async (req,res)=>{
    try{
        const {name,email,phone,password} = req.body
        const emailExist = await UserPrac.findOne({email:email})
        if(emailExist){
            return res.status(500).json({message: 'email already exist hai '})
        }
        
        const user = await new UserPrac({name,email,phone,password})
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password,salt)
        const token =  jwt.sign( {email:user.email},'apnaTimeAyega',{expiresIn :'1h'})
        user.save()
        res.status(200).json({status:'ok', message:' user registered successfully ',user,token});
    }catch(err){
        console.log('err==>',err)
    }
})

router.get('/getUser/:id', async (req,res)=>{
    try{
        console.log('ye params me se id mil rahahi hai ===>',req.params.id)
        const allUser = await  UserPrac.findOne({_id:req.params.id})
        res.status(200).json(allUser)
    }catch(err){
        console.log( 'errr ==>',err)
        res.status(404).json({message: 'something went wrong'})
    }
})


router.post('/findUser',async (req,res)=>{
    console.log(' ye body mili hai ===> ',req.body)
    const {email} = req.body
    const user =await  UserPrac.findOne({email:email})
    if(user){
        res.status(200).json({message:'user founf fro  token'})
        console.log('user which we get from token ==> ',user)
    }else{
        res.status(404).json({message:'user not found from json'})
    }

})


router.post('/login',async (req,res)=>{
    try{
        const {email,password} = req.body
        const userExist =  await UserPrac.findOne({email:email})
        if(userExist){
            const password_matched =await bcrypt.compare(password,userExist.password )
           if(password_matched){
               const token = jwt.sign( {email : userExist.email},'apnaTimeAyega',{expiresIn :'1h'})
               res.status(200).json({status:'ok',message:'user loggged in succefully',token : token,_id:userExist._id})
           }else{
               res.status(401).json({message:'invalid credential'})
           }
            
        }else{
            res.status(500).json({message:'invalid credential'})
        }
    }catch(err){
        console.log('err=>',err)
    }
})


module.exports = router;

