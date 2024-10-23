import React, { createContext, useContext, useReducer } from "react";
import { WhiteBoardProps } from "./WhiteBoard";

export interface AppDataI {
    spaces: any[];
    pages: any[];
    content: WhiteBoardProps[];
}

type ProviderProps = {
    children: React.ReactElement | React.ReactElement[];
}

export type Actions = {
    type: any;
    payload: any;
}
  
type ContextProps = {
    dispatch: React.Dispatch<Actions>;
    state: AppDataI;
};
const data : AppDataI = {
    spaces: [],
    pages: [],
    content: []
}
export const AppData = createContext<ContextProps>({state: data, dispatch: () => {}});

function spaceReducer(state: AppDataI,action: Actions ){
    console.log("CLICKed- ", action, state.spaces)
    switch(action.type) {
        case "ADD_SPACE": {
            state.spaces = [...state.spaces, {label: 'Untitled',
                id: (state.spaces.length + 1).toString(),
            }]
            return state
        }
        case "ADD_PAGE": {
            const spaceId = action.payload.spaceId;
            state.pages = [...state.pages, {label: 'Page',
                id: (state.pages.length + 1).toString(),subPages: [],
                spaceId
            }]
            return state
        }
        case "ADD_CONTENT": {
            const pageId = action.payload.pageId;
            const spaceId = action.payload.spaceId;
            state.content = [...state.content, { id: (state.content.length + 1).toString(), label: 'Page', description: 'Description 1', pageId,
                spaceId
            }]
            return state
        }
        case "EDIT_SPACE": {
            const spaceId = action.payload.spaceId;
            const label = action.payload.label;
            const spaces = state.spaces.map(space => {
                if(space.id === spaceId?.toString()){
                    space.label = label;
                }
                return space;
            })
            state.spaces = spaces;
            return state
        }
        case "EDIT_CONTENT_TITLE": {
            const contentId = action.payload.contentId;
            const pageId = action.payload.pageId;
            const title = action.payload.title;
            const contentArr = state.content.map(content => {
                if(content.id === contentId?.toString()){
                    content = {...content, label: title}
                }
                return content;
            })
            const pageArr = state.pages.map(page => {
                if(page.id === pageId?.toString()){
                    page.label = title
                }
                return page;
            })
            state = {...state, content: contentArr, pages: pageArr}
            return state
        }
        default: return state
    }
}

export const AppDataProvider = ({children}: ProviderProps) => {
    const [state, dispatch] = useReducer(spaceReducer, data as AppDataI);
    const value = {state, dispatch} 
    return (
        <AppData.Provider value={value}>
            {children}
        </AppData.Provider>
    )
}