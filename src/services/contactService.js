import api from './api';
import { API_ENDPOINTS } from '../config/constants';

export const contactService = {
  // Envoyer un message de contact
  sendContact: async (contactData) => {
    try {
      const response = await api.post(API_ENDPOINTS.CONTACT, contactData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};