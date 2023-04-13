import classes from "./NavBtn.module.css"

const NavBtn = ({children, isActive, value, onClick}) => {
    
    const cssClass = [classes.navBtn];
    if(isActive) cssClass.push(classes.active);
     
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
