import { FC } from "react"

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

const DarkLayout: FC<Props> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <h3>DarkLayout</h3>
            <div>
                {children}
            </div>
        </div>
    )
}

export default DarkLayout