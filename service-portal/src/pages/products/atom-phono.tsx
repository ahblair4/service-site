import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Knob Adjustment',
    slug: '/atom-phono/knob-position',
    description: 'How to adjust the EQ knobs.',
    icon: '🔧',
  },
];

export default function AtomPhono() {
  return (
    <ProductPage
      name="Atom Phono"
      description="Low-noise phono preamp with built-in tone control"
      image="/img/products/atom-phono.jpg"
      guides={guides}
    />
  );
}
