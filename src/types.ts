export interface Student {
  id: number;
  first_name: string;
  last_name: string;
  dob: Date | string; // Format YYYY-MM-DD
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

export interface Staff {
  id: number;
  first_name: string;
  last_name: string;
  dob: string; // Format YYYY-MM-DD
  pob: string;
  gender: string;
  address: string;
  phone: string;
  email: string;
  department_id: number; // Référence au département
  daily_salary: number; // Salaire journalier
  hire_at: Date | string;
  school_id: number; // Référence à l'école
}