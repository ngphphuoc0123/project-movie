import React, { Component } from 'react'

export default class FilmTime extends Component {
    
    render() {
        let {maLichChieu,time,index} = this.props
        
        return (
            <a
            onClick={() => {
              this.props.changePage(maLichChieu);
            }}
            key={index}
            class="tab-movie-time"
          >
            <a class="tab-time">
              <span>{time}</span>
            </a>
          </a>
        )
    }
}
