import React from 'react';

interface IContainer {
  children: React.ReactNode
}

function Container({
  children,
}: IContainer) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Container;
