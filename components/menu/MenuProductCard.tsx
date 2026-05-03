import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';

import { labels } from '@/content/labels';
import { getProductSlug } from '@/lib/menu/slug';
import type { MenuProduct } from '@/lib/menu/types';

import { ProductPrice } from './ProductPrice';

type MenuProductCardProps = {
  product: MenuProduct;
};

export function MenuProductCard({ product }: MenuProductCardProps) {
  const addButtonLabel = labels.order.product.addButtonLabel.replace('{productName}', product.name);
  const productHref = `/order/${getProductSlug(product.name)}`;

  return (
    <article className='group relative shadow rounded-2xl overflow-hidden'>
      <Link
        href={productHref}
        aria-label={product.name}
        className='block focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2'
      >
        <div className='relative w-full h-48 overflow-hidden'>
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            sizes='100vw'
            className='object-cover group-hover:scale-105 transition-transform duration-200'
          />

          <ProductPrice price={product.price} />
        </div>
        <div className='flex justify-between gap-4 bg-white p-5'>
          <div>
            <h3 className='gap-4 text-slate-900 text-lg'>{product.name}</h3>
            <p className='text-slate-500'>{product.description}</p>
          </div>
          <div>
            <button
              type='button'
              aria-label={addButtonLabel}
              className='z-10 relative bg-amber-500 shadow p-1 rounded-full text-white'
            >
              <Plus className='w-5 h-5' />
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}
