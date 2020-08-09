import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: "augusto", email: "augusto@email.com" }
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService()
    emailService.sendMail(
      { email: 'augusto@email.com', name: 'augusto renan' },
      { subject: 'Voce foi selecionado', body: 'parabens, voce foi selecionado' }
    )
  }
}