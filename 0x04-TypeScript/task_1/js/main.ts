export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
  
}

export default function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export class StudentClass {
  _firstName: string;
  _lastName: string;

  constructor (firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName(){
    return this._firstName;
  }
}
