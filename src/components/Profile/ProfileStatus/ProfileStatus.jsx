import React from 'react';
import style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status,
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
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange (e) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState ({
                status: this.props.status
            })
        }
    }
    
    render() {
        return (
            <div>
                {
                this.state.editMode ?
                <input onChange={this.onStatusChange.bind(this)} autoFocus={true} onBlur={this.editModOff.bind(this)} value={this.state.status}/>
                :<span onDoubleClick={this.editModOn.bind(this)}>{this.props.status || '---'}</span> 
                }
            </div>
        )
    };
};

export default ProfileStatus