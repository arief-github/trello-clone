import { useRef } from "react";
import { CardContainer } from "./CardContainer";
import { useItemDrag } from "../../hooks/useItemDrag";
import { useDrop } from "react-dnd";
import { useAppState } from "../../hooks/useAppState";
import { isHidden } from "../../helper/isHidden";
import { moveTask, setDraggedItem } from "../../reducers/action/action";
import { throttle } from "throttle-debounce-ts";

type CardProps = {
    text: string;
    id: string;
    columnId: string;
    isPreview?: boolean;
}

const Card = ({ text, id, columnId, isPreview }: CardProps) => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({
    type: "CARD",
    id,
    text,
    columnId
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover: throttle(200, () => {
      if(!draggedItem) {
        return;
      }

      if(draggedItem.type !== "CARD") {
        return;
      }

      if(draggedItem.id === id) {
        return;
      }

      dispatch(moveTask(draggedItem.id , id, draggedItem.columnId, columnId));
      dispatch(setDraggedItem({ ...draggedItem, columnId }));
    })
  })

  drag(drop(ref));

  return (
    <CardContainer
      isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
      isPreview={isPreview}
      ref={ref}
    >
        {text}
    </CardContainer>
  )

}
export default Card;