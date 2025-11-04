import api from './api';
import { API_ENDPOINTS } from '../config/constants';

export const historyService = {
  // Récupérer l'historique
  getHistory: async () => {
    try {
      const response = await api.get(API_ENDPOINTS.HISTORY);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Récupérer un élément d'historique par ID
  getHistoryById: async (id) => {
    try {
      const response = await api.get(`${API_ENDPOINTS.HISTORY}${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};