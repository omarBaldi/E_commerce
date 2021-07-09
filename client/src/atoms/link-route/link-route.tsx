import { FC } from 'react';
import { Link } from 'react-router-dom';
import LinkRouteProps from './dto';

export const LinkRoute: FC<LinkRouteProps> = ({
  url,
  text,
}: LinkRouteProps): JSX.Element => {
  return (
    <div>
      <Link to={url}>{text}</Link>
    </div>
  );
};
export default LinkRoute;
