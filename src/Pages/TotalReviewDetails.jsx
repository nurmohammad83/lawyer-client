import React from 'react';

const TotalReviewDetails = ({rev,handelDelete}) => {
    const {photo,service,_id,message} = rev
    return (
        <div className="flex my-2 flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
        <ul className="flex flex-col divide-y divide-gray-700">
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={photo} alt="Polaroid camera" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">{service}</h3>
                                <p>{message}</p>
                            </div>
                            <div className="text-right">
                            <button onClick={()=>handelDelete(_id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect width="32" height="200" x="168" y="216"></rect>
                                    <rect width="32" height="200" x="240" y="216"></rect>
                                    <rect width="32" height="200" x="312" y="216"></rect>
                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span>Delete</span>
                            </button>
                                <button className='mt-4 bg-orange-400 px-4 text-black'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>    
        </ul>
    </div>
    );
};

export default TotalReviewDetails;