import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import { AddOnOption } from '@/components/common/AddOnOption';
import { AppButton } from '@/components/common/AppButton';
import { FormTextArea } from '@/components/common/FormTextArea';
import { ProductQuantitySelector } from '@/components/common/ProductQuantitySelector';
import { labels } from '@/content/labels';
import { formatCurrency } from '@/lib/currency/format';
import { getProductSlug } from '@/lib/menu/slug';
import { APP_MENU_ROUTE } from '@/lib/navigation/constants';
import { menuProducts } from '@/mock/menu';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return menuProducts.map((product) => ({
    slug: getProductSlug(product.name),
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = menuProducts.find((item) => getProductSlug(item.name) === slug);

  if (!product) {
    notFound();
  }

  const addToCartLabel = labels.order.product.addToCartButtonLabel.replace(
    '{total}',
    formatCurrency(product.price),
  );

  return (
    <main>
      <div className='relative w-full h-72'>
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          sizes='100vw'
          className='object-cover'
          priority
        />
        <div className='top-4 left-4 absolute'>
          <Link
            href={APP_MENU_ROUTE}
            aria-label={labels.common.navigation.backToMenu}
            className='flex justify-center items-center bg-white/90 hover:bg-white shadow backdrop-blur-sm rounded-full focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2 w-8 h-8 text-slate-900 transition-colors'
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex justify-between items-center gap-4 mb-4'>
          <h1 className='flex-1 font-bold text-3xl'>{product.name}</h1>
          <p className='font-semibold text-amber-600 text-2xl shrink-0'>
            {formatCurrency(product.price)}
          </p>
        </div>
        <p className='mb-8 text-slate-600'>{product.description}</p>
        <ProductQuantitySelector className='mb-8' />
        <h2 className='mb-4 font-semibold text-sm uppercase'>
          {labels.order.product.optionalAddOns}
        </h2>
        <div className='flex flex-col gap-3 mb-8'>
          {product.addOns.map((addOn) => (
            <AddOnOption
              key={addOn.id}
              id={`${product.id}-${addOn.id}`}
              name='addOns'
              value={addOn.id}
              label={addOn.label}
              price={`(+${formatCurrency(addOn.price)})`}
            />
          ))}
        </div>
        <h2 className='mb-4 font-semibold text-sm uppercase'>
          {labels.order.product.specialInstructions}
        </h2>
        <FormTextArea
          name='specialInstructions'
          label={labels.order.product.specialInstructions}
          placeholder={labels.order.product.specialInstructionsPlaceholder}
          rows={4}
          className='bg-white rounded-2xl'
          classNames={{ label: 'sr-only' }}
        />
        <AppButton className='mt-8'>{addToCartLabel}</AppButton>
      </div>
    </main>
  );
}
