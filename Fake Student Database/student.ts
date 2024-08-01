import students from "./data";

export const getAllstudents = () => {
    return students;
  };
  
export  const getOnsiteStudent = () => {
    const result = students.filter((student) => student.isOnsiteAllowed);
    return result;
  };

export  const getStudent = (rollNo: number) => {
    const foundUser = students.find((student) => student.rollNo === rollNo);
    return foundUser;
  }

  export const isStudentOnsite  =  (rollNo:number) => {
    const foundUser = students.find((student) => student.rollNo === rollNo && student.isOnsiteAllowed);

    if(foundUser){
      return true
    }
    else{
      return false
    }
}