export interface Student {
  id: number;
  first_name: string;
  last_name: string;
  dob: string; // Format YYYY-MM-DD
  pob: string;
  gender: string;
  address: string;
  phone: string;
  email: string;
  guardian_name: string;
  guardian_phone: string;
  picture: string;
  class_id: number;
  school_id: number;
}

export interface StudentTutor {
  name?: string;
  phone?: string;
  email?: string;
}