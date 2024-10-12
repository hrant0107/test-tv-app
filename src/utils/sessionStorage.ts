export const getSessionStorageId = (key: string): string | null => {
    return sessionStorage.getItem(key);
  };
  
  export const setSessionStorageId = (key: string, id: string): void => {
    sessionStorage.setItem(key, id);
  };
  
  export const removeSessionStorageId = (key: string): void => {
    sessionStorage.removeItem(key);
  };
  
  export const clearSessionStorage = (): void => {
    sessionStorage.clear();
  };