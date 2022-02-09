import React, { useState } from 'react';
import { HeaderLanguageInterface, LanguageEnum } from './HeaderLanguageInterface';
import { HeaderLanguageStyled } from './HeaderLanguageStyled';

const HeaderLanguage:React.FC = () => {
  const [languages, setLanguages] = useState<HeaderLanguageInterface[]>([
    {
      name: LanguageEnum.EN,
      active: true,
    },
    {
      name: LanguageEnum.RU,
      active: false,
    },
  ]);
  const onHandleLanguage = (language: string) => {
    // On Switch language backend action;
    setLanguages((prev: HeaderLanguageInterface[]) => prev
      .map((item: HeaderLanguageInterface) => ({
        ...item,
        active: item.name === language,
      })));
  };
  return (
    <HeaderLanguageStyled>
      <ul>
        {languages.map((language: HeaderLanguageInterface) => (
          <li
            key={language.name}
            className={language.active ? 'active' : ''}
            onClick={() => onHandleLanguage(language.name)}
          >
            <span>{language.name}</span>
          </li>
        ))}
      </ul>
    </HeaderLanguageStyled>
  );
};

export default HeaderLanguage;
