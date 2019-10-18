export interface ISchoolHillel {
  name: string;
  executive: string;
  courses: ICourses[];
}

export interface ICourses {
  id: number;
  courseName: string;
  price: number;
}

export interface ISchool {
  getSchoolName(): string;
  getExecutive(): string;
}
