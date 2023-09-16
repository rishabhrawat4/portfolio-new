import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div className="bg-neutral-200 test-border">
                <div className='my-24 md:mx-40 mx-10 grid grid-cols-5 gap-10'>
                    <div className='col-span-5 md:col-span-2 test-border'>
                        #box 1
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <div className='my-10 py-14 px-20 bg-white'>
                            <div className='pb-2'>
                                <span className='font-sans font-black text-5xl text-neutral-400'>About Us</span>
                            </div>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;