import { useEffect, useState } from "react";

const useAppData = () => {
    const [spaces, setSpaces] = useState<any[]>([]);
    const [pages, setPages] = useState<any[]>([]);
    const [content, setContent] = useState<any[]>([]);
    
    const addSpace = () => {
        setSpaces([...spaces, {label: 'Untitled',
            id: (spaces.length + 1).toString(),
        }])
        // setPages([...pages, {label: 'Page',
        //     id: (pages.length + 1).toString(),
        //     spaceId: (spaces.length + 1).toString()
        // }])
       addPage((spaces.length + 1).toString())
    };
    const addPage = (spaceId: string) => {
    console.log("dfdfdf- ", spaceId)
        setPages([...pages, {label: 'Page',
            id: (pages.length + 1).toString(),
            spaceId
        }])
        addContent(spaceId, (pages.length + 1).toString())
    };
    const addContent = (spaceId: string,pageId: string ) => {
        setContent([...content, {label: 'Untitled',
            id: (content.length + 1).toString(),
            spaceId, pageId,
            subPages: []
        }])
    }
    return {
        spaces,
        pages,
        content,
        addPage,
        addContent,
        addSpace  
    }
}

export default useAppData;