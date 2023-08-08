import axios from '../axios'

interface Account {
  email: string
  password: string
}
const APILogin = ({ email, password }: Account) =>
  axios.post('/login', { email, password })

export { APILogin }
