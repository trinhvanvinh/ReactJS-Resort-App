import React, { Component } from 'react';
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Cocktails",
                info:'Lorem ipsum dolor sit amet consectetur'
            },
            {
                icon:<FaHiking/>,
                title:"Hiking",
                info:'Lorem ipsum dolor sit amet consectetur'
            },
            {
                icon:<FaShuttleVan/>,
                title:"ShuttleVan",
                info:'Lorem ipsum dolor sit amet consectetur'
            },  
              {
                icon:<FaBeer/>,
                title:"Beer",
                info:"Bia Hoi 37 Hung Vuong"
            }
        ]
    }

  render() {
    return (
      <section className="services" >
            <Title title="services" />
            <div className="services-center" >
                {this.state.services.map((item, index)=>{
                    return <article key={index} className="service" >
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
      </section>
    )
  }
}
