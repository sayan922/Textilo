import React from 'react'

export default function Transcribing(props) {
    const { downloading } = props


    return (
        <div className='flex flex-col items-center justify-center flex-1 gap-10 p-4 pb-24 text-center md:gap-14'>
            <div className='flex flex-col gap-2 sm:gap-4'>

                <h1 className='text-4xl font-semibold sm:text-5xl md:text-6xl'><span className='text-purple-400 bold'>Transcribing</span></h1>
                <p>{!downloading ? 'warming up cylinders' : 'core cylinders engaged'}</p>
            </div>
            <div className='flex flex-col gap-2 sm:gap-3 max-w-[400px] mx-auto w-full'>
                {[0, 1, 2].map(val => {
                    return (
                        <div key={val} className={'rounded-full h-2 sm:h-3 bg-slate-400 loading ' + `loading${val}`}></div>
                    )
                })}
            </div>
        </div>
    )
}
