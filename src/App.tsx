import { Home } from './pages/Home';
import { AddressProvider } from './shared/hooks/useAddress';

export function App() {
  return (
    <AddressProvider>
      <Home />
    </AddressProvider>
  );
}
