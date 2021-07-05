import React from "react";

type TitleProps = {
  name: string
}

const Title:React.FC<TitleProps> = (props: TitleProps) => {
  const { name } = props;

  return (
    <div className="title">
      <h2>{name}</h2>
    </div>
  )

}

export default Title;