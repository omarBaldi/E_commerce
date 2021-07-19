import { FC } from 'react';
import { Link } from 'react-router-dom';
import LinkRouteProps from './dto';

export const LinkRoute: FC<LinkRouteProps> = ({
  url,
  content,
}: LinkRouteProps): JSX.Element => {
  return (
    <>
      <Link to={url} style={{ textDecoration: 'none', cursor: 'initial' }}>
        {content}
      </Link>
    </>
  );
};
export default LinkRoute;
