

async function postData() {
    const name = 'MiaLuzAzevedoMouraDeLima'
    const email = 'mialuzazevedo@gmail.com'
    const cpf = '051.051.412-02'
    const url = `https://cosmic-backbone-386318.rj.r.appspot.com/hashCodeServer?nome=${name}&email=${email}&cpf=${cpf}`
    
    try {
        const response = await fetch(url,{
            method: "POST",
            headers: {}
        })
        
        const json = await response.json()
        console.log(json)

    } catch (error) {
        console.error("error captured:" + error)
    }
}


postData()
