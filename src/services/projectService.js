import api from './api';
import { API_ENDPOINTS } from '../config/constants';

export const projectService = {
  // Récupérer tous les projets
  getAllProjects: async () => {
    try {
      const response = await api.get(API_ENDPOINTS.PROJECTS);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Récupérer un projet par ID
  getProjectById: async (id) => {
    try {
      const response = await api.get(`${API_ENDPOINTS.PROJECTS}${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};