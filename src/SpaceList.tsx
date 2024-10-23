import { useContext, useState } from 'react'
import AddItemIcon from "./assets/images/addItem.svg";
import ArrowRightIcon from "./assets/images/ArrowRight.svg";
import ArrowDownIcon from "./assets/images/ArrowDown.svg";
import { AppData } from './AppDataContext';
import { useNavigate } from 'react-router-dom';
export interface SpaceListProps {
   
}

const SpaceList = ({}: SpaceListProps) => {
    const [expand, setExpand] = useState<boolean>(false)
    const navigate = useNavigate();
    const toggleExpand = () => {
        setExpand(!expand)
    }
    const {state, dispatch} = useContext(AppData);

    const handleAdd = (e: any) => {
        e.stopPropagation();
        dispatch({type: 'ADD_SPACE', payload: {}})
        dispatch({type: 'ADD_PAGE', payload: {spaceId: (state.spaces.length + 1).toString()}})
        dispatch({type: 'ADD_CONTENT', payload: {spaceId: (state.spaces.length + 1).toString(), pageId: (state.pages.length + 1).toString() }})
    }
    const handleClick = (spaceId: number) => {
        console.log("navigatre- ", spaceId)
        navigate(`/${spaceId}`);
    }

    return (
        <>
            <div
                style={{ display: 'flex', justifyContent: "space-between" }}
                className="space-list"
                onClick={toggleExpand}
            >
                {expand ? <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "4px"}}><img src={ArrowDownIcon} width={15} /> Spaces</div> : <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "4px"}}><img src={ArrowRightIcon} width={15} /> Spaces</div>}

                <div><button onClick={handleAdd}><img src={AddItemIcon}/></button></div>
            </div>
            {expand && (
                <ul>
                    {state.spaces.map((space) => (
                        <li onClick={() => handleClick(space.id)} key={space.id} className="space-list">
                           {space.label}<span style={{marginLeft: "8px"}} onClick={() => handleClick(space.id)}>...</span>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default SpaceList
