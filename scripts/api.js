const URL = "https://6443bb28466f7c2b4b593743.mockapi.io/todos";

const saveTask = (value) => {
  return axios.post(URL, value);
};

const loadTask = () => {
  return axios.get(URL).then((res) => res.data);
};

const deleteTask = (id) => {
   axios.delete(`${URL}/${id}`);
};

const updateTask = (id, status) => {
   axios.put(`${URL}/${id}`, { isDone: status });
};

export { saveTask, loadTask, deleteTask, updateTask };
