interface IMailTo {
  name: string
  email: string
}

interface IMailMessage {
  subject: string
  body: string
  attachment?: string[]
}

interface IMessageDTO {
  to: IMailTo,
  message: IMailMessage
}

interface IEmailService {
  sendMail(request: IMessageDTO): void
}

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Mail send to ${to.name}: ${message.body}`)
  }
}

export default EmailService