import { FC } from "react";

type Props = {
  text: string,
  action: () => void;
}

const CustomButton:FC<Props> = ({text, action}) => {
  return (
    <button 
      onClick={action}
      className="cursor-pointer"
    >
      {text}
    </button>
  )
}

export default CustomButton;