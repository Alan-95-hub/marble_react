import React, { createContext, useState } from 'react';

export const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState(null);

  const savePerson = (personData) => {
    setPerson(personData);
  };

  return (
    <PersonContext.Provider value={{ person, savePerson }}>
      {children}
    </PersonContext.Provider>
  );
};
