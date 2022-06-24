
export default function Button(props){
    const {className,id,label,event} = props;
    return(
        <button
            className={className}
            id={id}
            type="button"
            onClick={event}
        >
            {label}
        </button>
    );
}