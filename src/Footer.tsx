import React from 'react';
interface Param{
    title:string,
    caption:String
}
function Dummy(arg1:Param){

}
export default function Footer({title,caption}:Param){
    let obj={title:"ffhg",caption:"dhfh"}
    Dummy(obj);
    return(
        <div style={{backgroundColor:'cyan',height:'12vh'}}>
        <h2> All Rights reserved</h2>
        <h4>{title}</h4>
        <h3>{caption}</h3>
        </div>
    )
}