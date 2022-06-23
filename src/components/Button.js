export default function Button (props){
    const {id, label,className} = props;
    return(
        <button
            className={className}
            id={id}
            type="button"
        >
            {label}
        </button>
    )
}