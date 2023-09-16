import React, { Component } from 'react';

class SkillBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skill: this.props.skill
        }
        console.log("Inside skillBox, ", this.state)
    }
    render() {
        return (
            <div className='flex flex-col items-center py-20 test-border'>
                <div className=''>
                    <span className='text-4xl'>
                        {this.state.skill.name}
                    </span>
                </div>
                <div>
                    <span>{this.state.skill.yearOfExperience} years</span>
                </div>
            </div>
        )
    }
}

export default SkillBox;