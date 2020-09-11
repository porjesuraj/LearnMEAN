function createResult(error,data) 
{
   return error ? createError(error) : createSuccess(data)

}

function createError(error) 
{
    const result = {}
   
        result['status'] = 'error'
        result['data'] = error
   
    return result

}

function createSuccess(data) 
{
    const result = {}
   
    
        result['status'] = 'success'
        result['data'] = data
    return result

}

function createOTP()
{
    let min = 1000
    let max = 9999
    return Math.floor(Math.random() *(min + max) + min )
}


module.exports = { createResult : createResult,
    createError : createError, createSuccess : createSuccess,
    createOTP : createOTP
}