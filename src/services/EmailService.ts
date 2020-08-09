interface IMailTo {
  name: string
  email: string
}

interface IMailMessage {
  subject: string
  body: string
  attachment?: string[]
}

class EmailService {
  sendMail(to: IMailTo, message: IMailMessage) {
    console.log(`Mail send to ${to.name}: ${message.body}`)
  }
}

export default EmailService