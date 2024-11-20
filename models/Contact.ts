export interface ContactData {
  occupationId: number
  name: string
  phone: string
  email: string
}

export interface Contact extends ContactData {
  id: number
}
