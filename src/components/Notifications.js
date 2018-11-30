import React, { Component } from 'react';
import moment from 'moment'
class Notifications extends Component {
    render() {
        const { notifications } = this.props;
        return (
         
            <div className="card z-depth-0">
              <div className="card-content">
              <button type="button" class="btn btn-primary">
               Notifications <span class="badge badge-light">4</span>
              </button>
                <ul className="online-users">
                  { notifications && notifications.map(item =>{
                    return <li key={item.id}>
                      <span className="pink-text">{item.user} </span>
                      <span>{item.content}</span>
                      <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
                    </li>
                  })}
                </ul>
              </div>
            </div>
         
        );
    }
}

Notifications.propTypes = {

};

export default Notifications;