import React from 'react';

type ContentProps = {
  children: React.ReactNode;
}
const Content:React.FC<ContentProps> = (props: ContentProps) => {
  const { children } = props;
  return (
    <div className="content">
      {children}
    </div>
  );
};

export default Content;
