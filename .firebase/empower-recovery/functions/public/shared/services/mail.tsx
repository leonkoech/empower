import {email} from '../models/email'

export const send_email = (message_data: email) => {
    const message = email_structure(message_data)
    const subject = email_subject(message_data)
    try{
        console.log(message, subject)
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