import { CardContainer } from "./CardContainer";

type CardProps = {
    text: string;
    id: string;
}

const Card = ({ text }: CardProps) => {
  return (
    <CardContainer>
        {text}
    </CardContainer>
  )
}

export default Card