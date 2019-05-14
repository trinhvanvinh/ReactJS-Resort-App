import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../pages/utils/Hero';
import Banner from '../pages/utils/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';


export default class SingleRoom extends Component {

  constructor(props){
    super(props);
    console.log("single room contrs "+this.props);

    this.state={
      slug: this.props.match.params.slug,
      defaultBcg
    }

   
  }

  static contextType=RoomContext;

  componentDidMount(){

  }

  render() {

    const {getRoom} = this.context;
    const room=getRoom(this.state.slug);
    console.log(room);

    if(!room){
      return <div className="error" >
        <h3>no such room could be found</h3>
        <Link to ='/rooms' className="btn-primary" >
          back to rooms
        </Link>
      </div>
    }

    const {name, description, capacity, size, price, extras, brelfast, pets, images }= room;

    return <div>single room</div>;
    
  }
}
