import {useEffect,useState} from "react";
import AOS from 'aos';

const Quote = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="w-full max-w-xs mx-auto my-8 bg-white">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 overflow-hidden" data-aos="fade-up" data-aos-duration={'800'}>
                <p className={'flex justify-center uppercase text-2xl'}>Get Quote</p>
                <div className="mb-4" data-aos="fade-right" data-aos-duration={'600'} data-aos-delay={'800'}>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Name"/>
                </div>
                <div className="mb-6" data-aos="fade-left" data-aos-duration={'600'} data-aos-delay={'1000'}>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Phone
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="text" placeholder="phone"/>
                </div>
                <div className="flex items-center justify-center" data-aos="fade-up" data-aos-duration={'600'} data-aos-delay={'1200'}>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 w-3/6 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Quote