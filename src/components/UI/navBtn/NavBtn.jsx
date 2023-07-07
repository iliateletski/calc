import "./NavBtn.css"

const NavBtn = ({children, isActive, value, onClick}) => {
    
    const cssClass = ['navBtn'];
    if(isActive) cssClass.push('active');
     
    return (
        <button
            className={cssClass.join(' ')} 
            value={value}
            onClick={e => {
                onClick(e.target.value)}}
        >
            {children}
        </button>
    )
}

export default NavBtn;
