
import './index.css'
const Skeleton = () => {
    return (
        <div className='loader'>
            <span style={{ '--x': 1 } as React.CSSProperties}></span>
            <span style={{ '--x': 2 } as React.CSSProperties}></span>
            <span style={{ '--x': 3 } as React.CSSProperties}></span>
            <span style={{ '--x': 2 } as React.CSSProperties}></span>
            <span style={{ '--x': 1 } as React.CSSProperties}></span>

        </div>
    )
}

export default Skeleton
