export const uniqueSessionID = () => {
  sessionStorage.setItem('sessionID', Math.random().toString(36).substr(2, 9));
};

export const getSessionID = () => sessionStorage.getItem('sessionID');
