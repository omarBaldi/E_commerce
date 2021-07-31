import { FC } from 'react';
import HomepageProps from './dto';
import ProductCardsTemplate from '../../organisms/product-cards-template/product-cards-template';

export const Homepage: FC<HomepageProps> = ({
  title,
  products,
  callbackProductAdded,
}: HomepageProps): JSX.Element => {
  return (
    <div>
      {title && <h3>{title}</h3>}

      <ProductCardsTemplate
        {...{
          title: title ?? '',
          products,
          onProductCardClick: callbackProductAdded,
        }}
      />
    </div>
  );
};
export default Homepage;
