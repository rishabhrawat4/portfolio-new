import React, { Component } from 'react';

export default class Contact extends Component {

    render() {
        return (
            <div className=''>
                <div className='md:grid grid-cols-2'>
                    <div className='bg-neutral-200 md:rounded-bl-3xl px-28 py-12'>
                        <p>Contact Us</p>
                        <table>
                            <tr>
                                <td>Phone No</td>
                                <td>7678578953</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>rr987345@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>Indraprasth Colony, Burari, Delhi 110084</td>
                            </tr>
                        </table>
                    </div>
                    <div className='flex justify-center bg-neutral-200'>
                        <form className='bg-white p-8 m-8 rounded-3xl'>
                            <p className='text-neutral-600 font-bold text-xl'>Request a callback</p>
                            <div className='my-4'>
                                <label for="name" className='p-2 text-neutral-500 text-[15px]'>Name</label><br></br>
                                <input type="text" id="name" name="name" placeholder='John Doe'  className='border-solid border-2 border-orange-400 w-80 rounded-3xl py-1 px-3 text-sm'></input>
                            </div>
                            <div className='my-4'>
                                <label for="phone" className='p-2 text-neutral-500 text-[15px]'>Contact No</label><br></br>
                                <input type="tel" id="phone" name="phone" placeholder='98765XXXXX' className='border-solid border-2 w-80 border-orange-400 rounded-3xl py-1 px-3 text-sm'></input>
                            </div>
                            <div className='my-4'>
                                <label for="email" className='p-2 text-neutral-500 text-[15px]'>Email</label><br></br>
                                <input type="email" id="email" name="email" placeholder='abc@abc.com' className='border-solid border-2 w-80 border-orange-400 rounded-3xl py-1 px-3 text-sm'></input>
                            </div>
                            <div className='my-4'>
                                <label for="message" className='p-2 text-neutral-500 text-[15px]'>Message</label><br></br>
                                <textarea rows="4" placeholder="I wanted to know..." className='border-solid border-2 border-orange-400 w-80 rounded-3xl py-1 px-3 text-sm'></textarea>
                            </div>
                            <div>
                                <button className='border-solid border-2 bg-orange-600 w-80 rounded-3xl py-2 text-neutral-100 font-bold tracking-wide' type='button'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}