import {email} from '../models/email'


export const send_email = async (message_data: email) => {
    const message = email_structure(message_data)
    const subject = email_subject(message_data)

    message_data.message = message;
    (message_data as any).subject = subject
    try{
        fetch('http://localhost:3000/api/mail', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(message_data as any)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
    
            }
          })
    
    }
    catch(e){
        throw new Error()
    }
}

const email_structure = (data: email) => {
    const _date = Date.now()
    const email_data = `Email received from ${data["name"]} with email ${data["email"]} and phone ${data["phone"]}\
     Relation: ${data["relation"]}, Program: ${data["program"]}, insurance: ${data["insurance"]}, date: ${data["date"]}.
    Message: ${data["message"]}. This was received on ${_date}.`
    return email_data
} 

const email_subject = (data: email) => {
    return `Empower Web: Message from ${data['name']}`
}

const message_html=(message:any)=>{
    let final_message = ""
    for(let [key,value] of Object.entries(message)){
        if(key == "subject"){
            final_message += `<h2>${key}<h3>`
        }
        else{
            final_message += `<h3>${key}</h3>`
        }
        final_message += `</br> <p>${value}</p>`
    }
}