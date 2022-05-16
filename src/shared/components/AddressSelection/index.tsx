import { MapPin } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { useAddress } from '../../hooks/useAddress';
import { AddressModal } from '../AddressModal';
import { Button } from '../Button';

interface Props {

}

export function AddressSelection() {
  const { address, onSelectAddress } = useAddress();
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setOpenModal((oldValue) => !oldValue);
  }, []);

  const handleSelectAddress = () => {
    onSelectAddress({
      city: 'São Paulo',
      state: 'SP',
      neighborhood: 'Sapopemba',
      zipcode: '03928235',
      address: 'Rua Francesco Usper',
    });
    handleToggleModal();
  };

  return (
    <>
      <Button
        text="Selecionar endereço"
        iconStart={<MapPin size={20} weight="fill" />}
        onClick={handleSelectAddress}
      />
      <AddressModal open={openModal} onClose={handleToggleModal} />
    </>
  );
}
