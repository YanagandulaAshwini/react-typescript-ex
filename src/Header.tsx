import React ,{Component } from 'react';
import {Product} from './Product';

type MyState={msg:string}
type MyProps={title:string,count:number}

export default class Header extends Component<MyProps,MyState>{

    state:MyState={
        msg:'Legato'
    }
    p:Product=new Product(1,"LAPTOP","a device for office use");
    render(){
        return(
            <div>
                <header style={{'color':'orange'}}>{this.state.msg}</header>
                <h1>{this.props.title}</h1>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}