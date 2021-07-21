import { FC } from 'react';
import { LinkRoute } from '../../atoms/link-route/link-route';
import MenuProps from './dto';
import Styles from './menu.module.scss';

export const Menu: FC<MenuProps> = ({ menuLinks }: MenuProps): JSX.Element => {
  const renderRoutes = (): JSX.Element[] => {
    return menuLinks.map((currentRoute, index) => {
      return (
        <li key={index} className={Styles.menuLink}>
          <LinkRoute {...currentRoute} />
        </li>
      );
    });
  };

  return (
    <nav className={Styles.menu}>
      <ul className={Styles.menuLinksWrapper}>{renderRoutes()}</ul>
    </nav>
  );
};
export default Menu;
