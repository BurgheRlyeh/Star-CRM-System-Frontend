export interface Student{
  id?: number,
  name: string,
  birthDate: Date,
  parent: {
    id?: number,
    name: string,
    phone: string
  },
  source: string,
  characteristic: string,
  courses: string[],
  activeStatus:{
    id: number,
    status: string
  }
}
