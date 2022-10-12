import axios from 'axios'

interface Response {
  id: number,
  nome: string,
  email: string,
  token: string
}

export async function signIn(email: String, senha: String): Promise<Response> {
  /* const response = axios.post('http://192.168.18.96:3333/api/login', {
    email: 'gabriel@gmail.com',
    senha: '1234'
  }).then(response => {
    return response.data
  })
  
  console.log(response)
  return response */
  const response = await axios.post('http://192.168.18.96:3333/api/login', {
    email: email,
    senha: senha
  })
  console.log(response.data)
  return response.data
}