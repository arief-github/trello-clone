import styled from "styled-components";

type DragPreviewWrapperProps = {
    position: {
        x: number,
        y: number,
    }
};

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
    ({ position: { x, y } }) => (
        {style: 
            {
                transform: `translate(${x}px, ${y}px)`}
            }
        )
    )<DragPreviewWrapperProps>``;