import React from 'react';

type SectionProps = {
  name: string,
  children: React.ReactNode
}
const Section:React.FC<SectionProps> = (props: SectionProps) => {
  const { name, children } = props;

  return (
    <section className={name}>
      { children }
    </section>
  );
};

export default Section;
