import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PhoneNumberContextType {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
}

const PhoneNumberContext = createContext<PhoneNumberContextType>({
  phoneNumber: '',
  setPhoneNumber: () => {},
});

export const usePhoneNumber = () => useContext(PhoneNumberContext);

interface PhoneNumberProviderProps {
  children: ReactNode;
}

export const PhoneNumberProvider: React.FC<PhoneNumberProviderProps> = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('000 000-00-00');

  return (
    <PhoneNumberContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </PhoneNumberContext.Provider>
  );
};
