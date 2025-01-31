import React from 'react';

interface INavigationBarItem {
  label: string;
  path: string;
}

interface INavigationBarProps {
  menuItems: INavigationBarItem[];
}

const NavigationBar: React.FC<INavigationBarProps> = () => {
  return <div></div>;
};

export { INavigationBarProps, INavigationBarItem };
export default NavigationBar;
