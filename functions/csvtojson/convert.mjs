//const fs = require('fs')
//const csv=require('csvtojson')  
//const csvFilePath='D:/chola_docs/account.csv'

import * as fs from 'fs'

import csv from 'csvtojson';

 //const res = convert();
 

async function convert(csvFilePath)
{
    console.log('inside convert function')
    var data = fs.readFileSync(csvFilePath)
    const results=await csv().fromString(data.toString())
    //console.log(JSON.stringify(results))
    return JSON.stringify(results)
}


export default convert;    
