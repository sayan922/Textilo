import React, { useRef, useEffect } from 'react'

export default function FileDisplay(props) {
    const { handleAudioReset, file, audioStream, handleFormSubmission } = props
    const audioRef = useRef()

    useEffect(() => {
        if (!file && !audioStream) { return }
        if (file) {
            console.log('HERE FILE', file)
            audioRef.current.src = URL.createObjectURL(file)
        } else {
            console.log('EHER AUDIO', audioStream)
            audioRef.current.src = URL.createObjectURL(audioStream)
        }
    }, [audioStream, file])


    return (
        <main className='flex flex-col justify-center flex-1 w-full gap-3 p-4 pb-20 mx-auto text-center sm:gap-4 max-w-prose'>
            <h1 className='text-4xl font-semibold sm:text-5xl md:text-6xl'>Your <span className='text-purple-400 bold'>File</span></h1>
            <div className='flex flex-col my-4 text-left '>
                <h3 className='font-semibold'>Name</h3>
                <p className='truncate'>{file ? file?.name : 'Custom audio'}</p>
            </div>
            <div className='flex flex-col mb-2'>
                <audio ref={audioRef} className='w-full' controls>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <button onClick={handleAudioReset} className='duration-200 text-slate-400 hover:text-purple-600'>Reset</button>
                <button onClick={handleFormSubmission} className='flex items-center gap-2 p-2 px-3 font-medium text-purple-400 rounded-lg specialBtn '>
                    <p>Transcribe</p>
                    <i className="fa-solid fa-pen-nib"></i>
                </button>
            </div>
        </main>
    )
}
