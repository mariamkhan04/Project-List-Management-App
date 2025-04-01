const API_BASE_URL = 'http://localhost:5000/api';

export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/projects`);
  return response.json();
};

export const fetchProjectCount = async () => {
  const response = await fetch(`${API_BASE_URL}/projects/count`);
  return response.json();
};

export const addProject = async (name) => {
  const response = await fetch(`${API_BASE_URL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
};

export const updateProject = async (id, name) => {
  const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
};

export const deleteProject = async (id) => {
  const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const deleteAllProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/projects`, {
    method: 'DELETE',
  });
  return response.json();
};