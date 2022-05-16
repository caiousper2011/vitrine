import { X } from 'phosphor-react';
import {
  BaseSyntheticEvent, FormEvent, SyntheticEvent, useState,
} from 'react';
import * as Modal from 'react-modal';
import { Address, useAddress } from '../../hooks/useAddress';
import { Button } from '../Button';
import { Input } from '../Input';

interface AddressModalProps {
  open: boolean;
  onClose: () => void
}

export function AddressModal({ open, onClose }: AddressModalProps) {
  const { address: storedAddress, onSelectAddress } = useAddress();
  const [address, setAddress] = useState({
    zipcode: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  } as Address);

  const handleChange = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
    console.log(address);
  };

  const handleSaveAddress = () => {
    onSelectAddress(address);
    console.log(storedAddress);
  };

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={open}
      className="modal w-[80%] h-[80%]"
      overlayClassName="modal-overlay"
      shouldCloseOnOverlayClick
      onRequestClose={onClose}
    >
      <header className="modal-header">
        <div className="modal-header-content">
          <h2>Novo endereço de entrega</h2>
        </div>
      </header>

      <main className="modal-content flex flex-col gap-2">
        <div className="grid">
          <Input label="Informe o cep do endereço" name="zipcode" value={address.zipcode} onChange={handleChange} placeholder="CEP" />
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-8">
            <Input label="Informe o logradouro" name="address" value={address.address} onChange={handleChange} placeholder="Logradouro" />
          </div>
          <div className="col-span-4">
            <Input label="Informe o número" name="number" value={address.number} onChange={handleChange} placeholder="Número" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <Input label="Informe o complemento" name="complement" value={address.complement} onChange={handleChange} placeholder="Complemento" />
          </div>
          <div className="flex-1">
            <Input label="Informe o bairro" name="neighborhood" value={address.neighborhood} onChange={handleChange} placeholder="Bairro" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-8">
            <Input label="Informe a cidade" name="city" value={address.city} onChange={handleChange} placeholder="Cidade" />
          </div>
          <div className="col-span-4">
            <Input label="Informe o estado" name="state" value={address.state} onChange={handleChange} placeholder="UF" />
          </div>
        </div>

      </main>

      <footer className="modal-footer">
        <Button variant="secondary" className="flex-1" text="Cancelar" />
        <Button className="flex-1" text="Salvar Endereço" onClick={handleSaveAddress} />
      </footer>

    </Modal>

  );
}
