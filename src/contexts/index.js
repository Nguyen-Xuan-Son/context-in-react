import React from 'react';
import { CountProvider } from './count-context';
import { TitleProvider } from './title-context';

export function StoreProvider(props) {
  return (
    <>
      {[CountProvider, TitleProvider].reduce((ProviderNested, ProviderCurrent) => {
        return <ProviderCurrent>{ProviderNested}</ProviderCurrent>
      }, props.children)}
    </>
  );
}

export default StoreProvider;
