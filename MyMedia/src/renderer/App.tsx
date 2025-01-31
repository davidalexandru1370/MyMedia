import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import NavigationBar, {
  INavigationBarProps,
} from './pages/navigationBar/NavigationBar';
import YoutubePage from './pages/vendors/Youtube';

export default function App() {
  const navigationBarProps: INavigationBarProps = {
    menuItems: [
      { label: 'Youtube', path: '/' },
      { label: 'Facebook', path: '/' },
    ],
  };

  return (
    <>
      <NavigationBar {...navigationBarProps} />
      <div>
        <Routes>
          {navigationBarProps.menuItems.map((item) => (
            <Route path={item.path} element={getElementByPath(item.path)} />
          ))}
        </Routes>
      </div>
    </>
  );

  function getElementByPath(path: string) {
    switch (path) {
      case '/':
        return <YoutubePage />;
      default:
        return <div></div>;
    }
  }
}
