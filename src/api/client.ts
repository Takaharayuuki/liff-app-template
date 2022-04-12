import axios, { AxiosInstance } from 'axios'

const client: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_HOST}`,
})

export default client
