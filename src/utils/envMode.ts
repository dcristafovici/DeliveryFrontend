export const isDev = ():boolean => !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const serverPath = isDev()
  ? process.env.REACT_APP_HOST_LOCAL
  : process.env.REACT_APP_HOST_SERVER;
