import HideIcon from '../assets/images/hide.svg'
export interface SideBarProps {
    children: any
}

const SideBar = ({ children }: SideBarProps) => {
    return (
        <div
            style={{
                width: '20%',
                height: 'inherit',
                background: '#f7f7f7',
                borderRight: '1px solid grey',
                padding: "8px 16px"
            }}
        >
            <div>
                <button style={{ padding: '4px', float: 'right' }}>
                    <img src={HideIcon} />
                </button>
            </div>
            <div style={{ marginTop: '96px' }}>{children}</div>
        </div>
    )
}

export default SideBar
