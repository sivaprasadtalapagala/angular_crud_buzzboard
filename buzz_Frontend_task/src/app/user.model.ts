// user.model.ts
export interface User {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    company?: string;
    gender?: string;
    dob?: string;
    password: string;
  }
  