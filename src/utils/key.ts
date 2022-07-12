import translations from '../config/translations.json';

export const key = (translationKey: string) => {
  const resources:any = translations;
  const value = resources[translationKey];
  return value || 'The key was not found';
};
