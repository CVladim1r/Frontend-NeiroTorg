import React, { ElementType, Suspense } from 'react';

export function Loadable(Component: ElementType) {
  return function fn(props: any) {
    return (
      <>
      load
      </>
    );
  };
}
