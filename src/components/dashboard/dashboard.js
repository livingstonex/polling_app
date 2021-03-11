import React from 'react';
import { useState } from 'react';


const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <div className={`${isOpen && "antialiased"} ${!isOpen && "anti-anti-aliased"}`}>
                <aside className={`flex flex-col bg-gray-200 border-r border-gray-300 px-0`}>
                    <section className="py-3 flex items-center mt-2 px-3">
                        {!isOpen && <img className="w-full object-fit rounded-full" src="https://randomuser.me/api/portraits/women/65.jpg" alt="" /> }
                        <span className="inline-block w-12 h-12 rounded-full overflow-hidden">
                            <img className="w-full object-fit rounded-full" src="https://randomuser.me/api/portraits/women/65.jpg" alt="" /> 
                        </span>
                        <div className={` ml-3 ${!isOpen && "invisible"}`}>
                            <h2 className="text-md font-serif leading-none">Luis Davidson</h2>
                            <h3 className="text-sm  font-serif text-gray-500 leading-none">Director of Maps</h3>
                        </div>
                    </section>
                    <ul className="space-y-3 mt-4">
                        <div className="hover:bg-gray-100 flex items-center">
                            <li className="flex items-center px-3">
                                <span className={` h-8 w-8 flex items-center ${!isOpen && "ml-2"} `}>
                                    <svg className="w-4 h-4 stroke-current text-indigo-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </span>
                                <h4 className={`ml-0 text-sm text-indigo-800 ${!isOpen && "invisible"}`}>Map Feed</h4>
                            </li>
                        </div>

                        <div className="hover:bg-gray-100 flex items-center">
                            <li className="flex items-center px-3">
                                <span className={` h-8 w-8 flex items-center ${!isOpen && "ml-2"}`}>
                                    <svg className="w-4 h-4 stroke-current text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </span>
                                <h4 className={` ml-0 text-sm text-gray-700 ${!isOpen && "invisible"}`}>Track</h4>
                            </li>
                        </div>

                        <div className="hover:bg-gray-100 flex items-center">
                        <li className="flex items-center px-3">
                            <span className={` h-8 w-8 flex items-center ${!isOpen && "ml-2"}`}>
                            <svg className="w-3.5 h-3.5 stroke-current text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" /></svg>
                            </span>
                            <h4 className={` ml-0 text-sm text-gray-700 ${!isOpen && "invisible"}`}>Near Me</h4>
                        </li>
                        </div>
                    </ul>
                    <hr class="my-3 h-0.5 bg-gray-300"/>
                    <ul className="space-y-3">
                    <div className="hover:bg-gray-100 flex items-center">
                        <li className="flex items-center px-3">
                            <span className={` h-8 w-8 flex items-center ${!isOpen && "ml-2"}`}>
                            <svg className="w-3.5 h-3.5 stroke-current text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
                            </span>
                            <h4 className={` ml-0 text-sm text-gray-700 ${!isOpen && "invisible"}`}>Analytics</h4>
                        </li>
                    </div>
                    <div className="hover:bg-gray-100 flex items-center">
                        <li className="flex items-center px-3">
                            <span className={` h-8 w-8 flex items-center ${!isOpen && "ml-2"}`}>
                            <svg className="w-4 h-4 stroke-current text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </span>
                            <h4 className={` ml-0 text-sm text-gray-700 ${!isOpen && "invisible"}`}>Trace</h4>
                        </li>
                    </div>
                    </ul>

                    <ul className="mt-auto mb-3 space-y-3 px-3">
                        <li className="flex items-center">
                            <span className="h-8 w-8 flex items-center">
                            <svg className="w-4 h-4 stroke-current " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                            </span>
                            <h4 className={` ml-0 text-sm text-gray-700 ${!isOpen && "invisible"}`}>Logout</h4>
                        </li>
                    </ul>
                </aside>
                <main 
                    // className={`transform ${ !isOpen && "anti-anti-aliased" } `}
                >
                    <header className="flex items-center px-3 h-12 border-b mt-3">
                        <button className="h-12 w-12 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-6 h-6 stroke-current text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                        <h2 className="text-sm text-gray-700 ">Polling View</h2>
                    </header>
                    <section className="p-3">
                        <h2 className="p-2 font-serif text-gray-800">Overview</h2>
                        <ul className="grid grid-cols-3  gap-3">
                            <li className="block mb-3 p-3 rounded bg-gray-100 border border-gray-200">
                                <span className="block mb-3 uppercase tracking-wider text-sm font-medium text-gray-500">Views</span>
                                <h1 className="text-xl">72K</h1>
                            </li>
                            <li className="block mb-3 p-3 rounded bg-gray-100 border border-gray-200">
                                <span className="block mb-3 uppercase tracking-wider text-sm font-medium text-gray-500">Views</span>
                                <h1 className="text-xl">72K</h1>
                            </li>
                            <li className="block mb-3 p-3 rounded bg-gray-100 border border-gray-200">
                                <span className="block mb-3 uppercase tracking-wider text-sm font-medium text-gray-500">Views</span>
                                <h1 className="text-xl">72K</h1>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Dashboard