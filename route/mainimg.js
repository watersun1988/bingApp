/**
 * Created by SP on 2016/12/30.
 */
var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('route mainimg');
    let output = {
        url:'./img/NottulnHerbst_ZH-CN9638949027_1920x1080.jpg'
    };
    return res.json(output);
});

module.exports = router;