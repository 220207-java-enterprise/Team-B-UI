export default interface Cookies {
  token?: string, 
  principal?: {
    id: string, 
    username: string, 
    role: string
  }
}