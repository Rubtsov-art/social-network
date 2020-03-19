import React from 'react';
import style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
    };

    editModOn () {
        this.setState ({
            editMode: true
        })
    };

    editModOff () {
        this.setState ({
            editMode: false
        })
    }
    
    render() {
        return (
            <div>
                {
                this.state.editMode ?
                <input autoFocus={true} onBlur={this.editModOff.bind(this)} value={this.props.status}/>
                :<span onDoubleClick={this.editModOn.bind(this)}>{this.props.status}</span> 
                }
            </div>
        )
    };
};

export default ProfileStatus