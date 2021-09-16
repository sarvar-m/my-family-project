import React, { Component } from 'react'
import MainFooter from "../MainFooter";
import "../Events.css"

class Event extends Component {
    render() {
        return (
            <div className="Event">
               <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Events</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Events</li>
          </ol>
        </div>

      </div>
    </section>

    <section id="event-list" className="event-list">
      <div className="container">

        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-img">
                <img src="https://s1.1zoom.me/prev/442/441617.jpg" alt="..."/>
              </div>
              <div className="card-body">
                <h5 className="card-title">Lara's 4th Birthday</h5>
                <p className="fst-italic text-center">Sunday, September 26th at 7:00 pm</p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-img">
                <img src="https://st3.depositphotos.com/12985790/17379/i/600/depositphotos_173790436-stock-photo-happy-child.jpg" alt="..."/>
              </div>
              <div className="card-body">
                <h5 className="card-title">James 6th Birthday</h5>
                <p className="fst-italic text-center">Sunday, November 15th at 7:00 pm</p>
                <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
              </div>
            </div>

          </div>
        </div>

      </div>
      <MainFooter />
    </section>
    
            </div>
        )
    }
}

export default Event;
