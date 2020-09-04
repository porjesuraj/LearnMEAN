
function createResult(error,dbResult)
{
    const result = { "status" : "", "error" : "", "data" : ""}
if(error)
{
    result["status"] = "error"
    result["error"] = error
}
else
{
    console.table(dbResult)
    result["status"] = "success"
    result["data"] = dbResult
}
return result

}


module.exports = { createResult : createResult }

