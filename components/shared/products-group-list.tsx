import React from 'react';
import { useIntersection } from 'react-use'
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';

interface Props {
	title: string;
	items: any[];
	categoryId: number;
	className?: string;
	listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	categoryId,
	className,
	listClassName,
}) => {
	// Проверка видимости на странице Intersection Observer
	const intersectionRef = React.useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	  });

	  React.useEffect(() => {
		if (intersection?.isIntersecting) {
		  console.log(title, categoryId);
		}
	  }, [categoryId, intersection?.isIntersecting, title]);

	return (
		<div className={className} id={title}>
			<Title text={title} size='lg' className='font-extrabold' />

			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{items.map((product, i) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.items[0].price}
					/>
				))}
			</div>
		</div>
	);
};