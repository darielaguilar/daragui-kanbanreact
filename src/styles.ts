import styled from 'styled-components';


type AddItemButtonProps = {
    dark?: boolean
}

type DragPreviewWrapperProps = {
    position:{
        x: number
        y: number
    }
}
interface DragPreviewContainerProps {
    isHidden?: boolean
    isPreview?: boolean
}



export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(({position: {x, y}}) => ({
    style: {
        transform: `translate(${x}px, ${y}px)`
    }
}))<DragPreviewWrapperProps>``

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
    transform: ${props => (props.isPreview ? "rotate(5deg)": undefined)};
    opacity: ${props => (props.isHidden  ? 0 : 1)};
`

export const CustomDragLayerContainer = styled.div`
    height: 100%;
    left: 5;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`
export const TaskStateContainer = styled.div`
    margin-inline-start: 200px;
    align-items:end;   
    display: inline-block;
`

export const AddItemButton = styled.button<AddItemButtonProps>`
    background-color: #ffffff3d;
    border-radius: 3px;
    border: none;
    color: ${props => (props.dark ? '#000' : '#fff')};
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    transition: backgroud 85ms ease-in;
    width: 100%;
    &:hover{
        background-color: #ffffff52;
    }
`


export const NewItemFormContainer = styled.div`
    max-width: 300px;
    width: 100%;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`

export const NewItemButton = styled.button`
    background-color: #5aac46;
    border-radius: 3px;
    border:none;
    box-shadow: none;
    color: #fff;
    padding: 6px 12px;
    text-align: center;
`

export const NewItemInput = styled.input`
    border-radius: 3px;
    border:none;
    box-shadow: #091e4240 0px 1px 0px  0px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
`

export const AppContainer = styled.div`
    align-items: flex-start;
    background-color: #6066ff;
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 30px;
    width: 100%;
`

export const ColumnContainer = styled(DragPreviewContainer)`
    background-color: #ddccff;
    width: 300px;
    min-height: 40px;
    margin-right: 30px;
    border-radius: 6px;
    padding: 8px 8px;
    flex-grow: 0;
`

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`

export const CardContainer = styled(DragPreviewContainer)`
    background-color: #fff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: #091e4240 0px 1px 0px 0px;
`

