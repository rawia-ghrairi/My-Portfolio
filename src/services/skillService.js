import api from './api';
import { API_ENDPOINTS } from '../config/constants';

export const skillService = {
  // Récupérer toutes les compétences
  getAllSkills: async () => {
    try {
      const response = await api.get(API_ENDPOINTS.SKILLS);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Récupérer une compétence par ID
  getSkillById: async (id) => {
    try {
      const response = await api.get(`${API_ENDPOINTS.SKILLS}${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getSkillsByCategory: async () => {
    try {
      const skills = await skillService.getAllSkills();
      
      // Grouper les compétences par catégorie
      const categories = {};
      skills.forEach(skill => {
        if (!categories[skill.category]) {
          categories[skill.category] = [];
        }
        categories[skill.category].push(skill.title);
      });
      
      // Convertir en format souhaité
      return Object.entries(categories).map(([category, skills]) => ({
        category,
        skills
      }));
    } catch (error) {
      throw error;}}
};