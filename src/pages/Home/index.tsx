import { useEffect, useState } from 'react';
import { StoreHeader } from '../../shared/components/StoreHeader';

interface HomeProps {

}

export function Home() {
  const [logoSvg, setLogoSvg] = useState('');
  const brandName = 'main-logo';

  const getLogoSvg = async () => import(`../../assets/${brandName}.svg`)
    .then((td) => setLogoSvg(td.default));

  useEffect(() => {
    getLogoSvg();
  }, []);

  return (
    <StoreHeader storeLogo={logoSvg} />
  );
}
