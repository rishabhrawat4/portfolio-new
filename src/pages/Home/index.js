import React, { Component } from 'react';
import './Style/index.css';
import instagram from '../../assets/instagram.svg';
import linkdin from '../../assets/linkedin.svg';
import whatsapp from '../../assets/whatsapp.svg';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textAnimate: false,
            linkdinUrl: "https://www.linkedin.com/in/rishabh-rawat-29359b161/",
            whatsappUrl: "https://wa.me/917678578953",
            instagramUrl: "https://www.instagram.com/rishabh_rawat_r2/"
        }
        setTimeout(() => {
            this.setState({
                textAnimate: true
            })
        }, 500);
    }


    render() {
        return (
            <div>
                <div className="h-screen bg-white">
                    <header className="absolute inset-x-0 top-0 z-50">
                        <nav className="flex items-center justify-center my-5" aria-label="Global">
                            <a className='mx-5'>Home</a>
                            <a className='mx-5'>About</a>
                            <a className='mx-5'>Contact</a>
                        </nav>
                    </header>
                    <section className='h-full flex justify-center items-center'>
                        <div className=' h-4/5 w-5/6 flex justify-center items-center bg-neutral-200'>
                            <div>
                                <div className='flex justify-center items-center'>
                                    <div className='main-text'>
                                        <div className='font-medium text-2xl'>
                                            <div className={`${!this.state.textAnimate ? '-translate-y-40' : 'translate-y-0'} ease-in-out duration-200`}>
                                                <span className='custom-text-stroke'>Hello </span>
                                                <span>I'm Rishabh Rawat</span>
                                            </div>
                                        </div>
                                        <div className='font-semibold text-4xl flex'>
                                            <div className={`${!this.state.textAnimate ? '-translate-y-40' : 'translate-y-0'} ease-in-out duration-200`}>
                                                <span>Full Stack Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center my-5'>
                                    <a href={this.state.whatsappUrl} target="_blank">
                                        <img src={whatsapp} className="w-6 h-6 mx-1"/>
                                    </a>
                                    <a href={this.state.linkdinUrl} target="_blank">
                                        <img src={linkdin} className="w-6 h-6 mx-1" />
                                    </a>
                                    <a href={this.state.instagramUrl} target="_blank">
                                        <img src={instagram} className="w-6 h-6 mx-1" />
                                    </a>
                                </div>
                                <div className='flex justify-center items-center my-5'>
                                    <button className='bg-black py-2 px-5 rounded-3xl drop-shadow-xl text-neutral-200 font-medium'>
                                        Hire Me
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="">

                </div >
            </div>
        )
    }
}

export default Home;