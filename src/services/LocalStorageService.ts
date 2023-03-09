import { Post } from "../interfaces/post.interface";

class LocalStorageService {
  // Función para guardar datos en localStorage
  setItem(key: string, value: Post[]): Promise<void> {
    return Promise.resolve(localStorage.setItem(key, JSON.stringify(value)));
  }

  // Función para obtener datos de localStorage
  getItem(key: string): Promise<Post[]> {
    return new Promise((resolve) => {
      const value = localStorage.getItem(key);
      resolve(value ? JSON.parse(value) : null);
    });
  }

  // Función para eliminar datos de localStorage
  removeItem(key: string): Promise<void> {
    return new Promise((resolve) => {
      localStorage.removeItem(key);
      resolve();
    });
  }
}

// Exporta una instancia del servicio de localStorage
export default new LocalStorageService();
