import * as React from 'react'
import PageList from './PageList'
import SpaceList from './SpaceList'
import WhiteBoard from './WhiteBoard'
import SideBar from './components/SideBar'
import Header from './components/header/Header'
import { AppData } from './AppDataContext'

const App = () => {
    const {state} = React.useContext(AppData);
    console.log("APP DATA- ", state)
    return (
        <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
            <SideBar>
                <SpaceList/>
            </SideBar>
            <div style={{display: "flex", flexDirection: "column", width: "100%", height: "inherit"}}>
                <Header />
                <div style={{ display: 'flex', flex: "1 0 auto" }}>
                    <div style={{width: "25%" ,display: "flex", flexDirection: "column"}}>
                        <div style={{flex: '1 0 auto'}}>
                            <PageList/>
                        </div>
                    </div>
                    <div style={{ flex: '1 0 auto' }}>
                        <WhiteBoard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
