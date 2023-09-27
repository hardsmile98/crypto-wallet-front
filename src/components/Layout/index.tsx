import React, { ReactNode } from 'react';

import Meta from './Meta';

interface IProps {
    children: ReactNode
    title: string
    description: string
}

function Layout({ children, title, description }: IProps) {
  return (
    <>
      <Meta
        title={title}
        description={description}
      />

      {children}
    </>
  );
}

export default Layout;
