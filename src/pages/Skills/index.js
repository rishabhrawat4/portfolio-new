import React, { Component } from 'react';
import SkillBox from '../../components/Skills/skillBox';
import './Style/index.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textAnimate: false,
            skills: [
                {
                    id: 1,
                    name: "HTML",
                    yearOfExperience: 3,
                    stars: 5
                },
                {
                    id: 2,
                    name: "HTML",
                    yearOfExperience: 3,
                    stars: 5
                },
                {
                    id: 3,
                    name: "HTML",
                    yearOfExperience: 3,
                    stars: 5
                },
                {
                    id: 4,
                    name: "HTML",
                    yearOfExperience: 3,
                    stars: 5
                },
                {
                    id: 2,
                    name: "HTML",
                    yearOfExperience: 3,
                    stars: 5
                },
                {
                    id: 3,
                    name: "HTML",
                    yearOfExperience: 3,
                    stars: 5
                },
                {
                    id: 4,
                    name: "HTML",
                    yearOfExperience: 3,
                    stars: 5
                }

            ]
        }
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <div className="bg-white">
                    <div className='my-32 mx-8'>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8'>
                            {
                                this.state.skills.map((skill) => (
                                    <div>
                                        <SkillBox skill={skill} />
                                    </div>
                                )
                                )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;