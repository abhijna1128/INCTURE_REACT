

interface ButtonProps{
    label:string;
    onClick:()=>void;
    disabled?: boolean;// to make props value as optional we use question mark
}

const Button:React.FC<ButtonProps>=({label,onClick,disabled=false})=>{
    return(
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    )
}
export default Button;                                          