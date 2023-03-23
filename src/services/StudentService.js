import axios from "axios";

const baseUrl = 'http://localhost:3001/products';
class StudentService {
  getAllStudents(){
    return axios.get(`${baseUrl}`).then(res=>res.data);
  }
  createStudent(student){
    return axios.post(`${baseUrl}`,student)
  }
  deleteStudent(id){
    return axios.delete(`${baseUrl}/${id}`)
  }
  async getStudentById(id){
    const res = await axios.get(`${baseUrl}/${id}`);
    return res.data;
  }
  async editStudent(id,student){
    const res = await axios.put(`${baseUrl}/${id}`, student);
    return res.data;
  }

}
 const instance = new StudentService();
export default instance;