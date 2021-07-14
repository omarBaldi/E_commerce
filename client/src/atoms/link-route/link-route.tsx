import { FC } from 'react';
import { Link } from 'react-router-dom';
import LinkRouteProps from './dto';

export const LinkRoute: FC<LinkRouteProps> = ({
  url,
  content,
}: LinkRouteProps): JSX.Element => {
  return (
    <div>
      <Link to={url}>{content}</Link>
    </div>
  );
};
export default LinkRoute;
