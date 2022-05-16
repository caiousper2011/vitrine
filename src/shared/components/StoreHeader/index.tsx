import { AddressSelection } from '../AddressSelection';

interface StoreHeaderProps {
    storeLogo: string
}

export function StoreHeader({ storeLogo }: StoreHeaderProps) {
  return (
    <header className="vw-100 h-20 bg-backgroundDefault-white text-light-400 border-b-2 flex justify-between items-center px-8">
      <img className="w-[52px]" src={storeLogo} alt="Logo do restaurante" />
      <AddressSelection />
    </header>
  );
}
