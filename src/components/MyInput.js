export default function MyInput(props){
    const {type,name,onChange} = props;
    return(
      <>
          <span>{name}</span> <br/>
        <input type={type} name={name}/>
      </>
    );
}