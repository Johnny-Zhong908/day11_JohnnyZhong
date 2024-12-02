import instance from "./Interceptor";
export const getTodos = async () => {
    const response = await instance.get();
    return response.data;
};

export const createTodo = async (todo) => {
    const response = await instance.post(todo);
    return response.data;
};

export const updateTodo = async (id, updatedData) => {
    const response = await instance.put(id, updatedData);
    return response.data;
};

export const deleteTodo = async (id) => {
    const response = await instance.delete(id);
    return response.data;
};

