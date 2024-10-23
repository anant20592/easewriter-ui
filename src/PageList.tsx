import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AppData } from "./AppDataContext"

export interface PageI {
    id: string
    label: string
    contentId: string
    subPages: PageI[]
    spaceId: string
}
export interface PageListProps {
}

const List = (list: PageI[]) => {
    return (
        <ul>
            {list.map((page) => (
                <div key={page.id}>
                    <li
                        key={page.id}
                        onClick={(e) => {
                            e.stopPropagation()
                         //   onClick(page.id)
                        }}
                        className="space-list"
                    >
                        {page.label}
                    </li>
                    {page.subPages.length > 0 && (
                        <>{List(page.subPages)}</>
                    )}
                </div>
            ))}
        </ul>
    )
}

const PageList = ({ }: PageListProps) => {
    const params = useParams();
    const spaceId = params.spaceId;
    const navigate = useNavigate();
    // access a specific param
    const {state} = useContext(AppData);
    const {pages} = state;
    
    const getPagesBySpaceId = pages.filter((page) => {
        return page.spaceId === spaceId
    })
    useEffect(() => {
        if(getPagesBySpaceId.length > 0){
            const pageId = getPagesBySpaceId[0].id
            navigate(`/${spaceId}/${pageId}`)
        }
    }, [spaceId])
    return (
        
        <div style={{borderRight: "1px solid grey", height: "100%"}}>{pages.length > 0 && <>{List(getPagesBySpaceId)}</>}</div>
    )
}

export default PageList
