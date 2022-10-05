const getTodo = async (todoId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const data = await res.json();

  return data;
};

const todoService = {
  getTodo,
};

export default todoService;
