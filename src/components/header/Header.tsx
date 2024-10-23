import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppData } from "../../AppDataContext";

export interface HeaderProps {
}
const Header = ({ }: HeaderProps) => {
    const params = useParams();
    const spaceId = params.spaceId;
    const {state, dispatch} = useContext(AppData);
    const {spaces} = state;
    const filterSpacesBySpaceId = spaces.filter(space => space.id === spaceId?.toString());
    const [value , setValue] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = () => {
        if(value !== filterSpacesBySpaceId[0]?.label){
            dispatch({type: "EDIT_SPACE", payload: {spaceId, label: value}})
        }
    }
    useEffect(() => {
        if(filterSpacesBySpaceId.length > 0)
        setValue(filterSpacesBySpaceId[0]?.label)
    }, [spaceId])
    return (
        <div style={{ padding: '24px', borderBottom: '1px solid #eaebee' }}>
            <input maxLength={50} value={value} onChange={handleChange} onMouseOutCapture={handleSubmit}/>
        </div>
    )
}

export default Header
