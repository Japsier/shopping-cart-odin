
const Item = (props) => {


    return(
         <div key ={props.id} onClick={props.onClickFunc} className=" item flex flex-col gap-5 p-10 bg-blue-100">
            <h2 className="text-2xl font-md">{props.name}</h2>
            <img src={props.img} alt="" className="h-30 w-30" />
            <p>{props.price}</p>
         </div>
    )
}

export default Item