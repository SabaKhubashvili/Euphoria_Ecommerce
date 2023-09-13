const router = require('express').Router()

router.get('/usertest',(req:any,res:any)=>{
    res.send('Sucess')
})

router.post('/userpost', (req:any, res:any) => {
    const username = req.body.username;
    console.log(req.body);
    
    res.status(200).json({ message: 'Username received successfully' });
});


module.exports = router