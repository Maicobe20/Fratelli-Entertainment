const User = require('../Models/usersModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privatekey = "mikeman20!"


exports.signup = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8)
    const user = await new User(req.body)
    const match = await User.findOne({ email: user.email })
    if (!match) {

        const status = await user.save()
        if (status) {
            res.json({ type: "success", value: "User Successfully Saved" })
        } else {
            res.json({ type: 'no success', value: "Sorry User Not saved" })
        }
    } else {
        res.json({ type: 'no success', value: "Sorry Email Already Exists" })
    }
}

exports.login = async (req, res) => {
    const users = await User.find()
    console.log(users)
    const match = await User.findOne({ email: req.body.email })
   
    if (match) {
        console.log(match)
        if (bcrypt.compareSync(req.body.password, match.password)) {
            const token = jwt.sign({ role: match.role }, privatekey)
            res.json({ type: "success", value: token })
        } else {
            res.json({ type: "no succes", value: "Sorry Wrong Password" })
        }
    } else {
        // console.log(req.body)
        res.json({ type: 'no success', value: "Sorry No Such User Found" })
    }
}

exports.authenticate = async (req, res, next) => { 
    if (req.headers.authorization) {   
        const tokenHeader = req.headers.authorization.split(' ')[1]
        jwt.verify(tokenHeader, privatekey, (err) => {
            if (err) {
                if (err.message === "jwt expired") {                 
                    res.json({status:'no success', value: "Sorry session expired please login again"})
                } else {                   
                    res.json({status:'no success', value: "Sorry Forbidden"})
                }
            } else {               
                next()
            }
        })
    } else {     
        res.json({status:'no success', value:'Sorry you are not Authorized'})
    }

}