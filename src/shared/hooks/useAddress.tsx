import {
  useContext, useState, ReactNode, createContext,
} from 'react';
import {
  get as getStorage,
  create as createStorage,
  clear as clearStorage,
} from '../utils/localStorageData';

export interface Address {
  zipcode: string;
  address: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  ddd?: number;
}

interface AddressData {
  address: Array<Address>
  onSelectAddress: (address: Address)=> void
}

const AddressContext = createContext({} as AddressData);

interface ConversationProviderProps {
  children: ReactNode;
}

export function AddressProvider({
  children,
}:ConversationProviderProps) {
  const storageAddressName = 'address';
  const [address, setAddress] = useState(() => {
    const addressStorage = getStorage(storageAddressName);

    if (addressStorage) {
      return addressStorage;
    }

    return [] as Address[];
  });

  const handleAddressSelection = (newAddress: Address) => {
    const addressStorage = getStorage(storageAddressName);

    setAddress([...address, newAddress]);
    createStorage({ [storageAddressName]: [...addressStorage || [], newAddress] });
  };

  return (
    <AddressContext.Provider
      value={{
        address,
        onSelectAddress: handleAddressSelection,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export const useAddress = () => {
  const addressContent = useContext(AddressContext);

  return addressContent;
};
