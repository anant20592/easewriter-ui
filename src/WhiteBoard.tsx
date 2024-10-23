import { useContext, useEffect, useState } from 'react'
import HideIcon from './assets/images/hide.svg'
import { useParams } from 'react-router-dom'
import { AppData } from './AppDataContext'
export interface WhiteBoardProps {
    id: string
    label: string
    description: string
    spaceId: string
    pageId: string
}
const WhiteBoard = () => {
    const params = useParams();
    const spaceId = params.spaceId;
    const pageId = params.pageId;
    const [title, setTitle] = useState<string>("");
    const {state, dispatch} = useContext(AppData);
    const {content} = state;
    const getContentByPageId = content.filter(con => con.pageId === pageId?.toString())
    const [value, setValue] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleTitleSubmit = () => {
        dispatch({type: "EDIT_CONTENT_TITLE", payload: {pageId, contentId: getContentByPageId[0]?.id, title}})
    }

    useEffect(() => {
        if(getContentByPageId.length > 0)
        setTitle(getContentByPageId[0].label)
    }, [pageId])

    useEffect(() => {
        if(getContentByPageId.length > 0){
            setValue(getContentByPageId[0].description)
        }
    }, [getContentByPageId])
    return <div style={{padding: "4px"}}>
        <div><img src={HideIcon} /></div>
        <div><input value={title} maxLength={50} onChange={handleTitleChange} onMouseOutCapture={handleTitleSubmit}/></div>
        <div><textarea value={value} onChange={handleChange} rows={200} cols={90}/></div></div>
}

export default WhiteBoard
