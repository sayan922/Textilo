import React, { useState, useEffect, useRef } from 'react'

export default function HomePage(props) {
    const { setAudioStream, setFile } = props

    const [recordingStatus, setRecordingStatus] = useState('inactive')
    const [audioChunks, setAudioChunks] = useState([])
    const [duration, setDuration] = useState(0)

    const mediaRecorder = useRef(null)

    const mimeType = 'audio/webm'

    async function startRecording() {
        let tempStream
        console.log('Start recording')

        try {
            const streamData = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false
            })
            tempStream = streamData
        } catch (err) {
            console.log(err.message)
            return
        }
        setRecordingStatus('recording')

        //create new Media recorder instance using the stream
        const media = new MediaRecorder(tempStream, { type: mimeType })
        mediaRecorder.current = media

        mediaRecorder.current.start()
        let localAudioChunks = []
        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === 'undefined') { return }
            if (event.data.size === 0) { return }
            localAudioChunks.push(event.data)
        }
        setAudioChunks(localAudioChunks)
    }

    async function stopRecording() {
        setRecordingStatus('inactive')
        console.log('Stop recording')

        mediaRecorder.current.stop()
        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType })
            setAudioStream(audioBlob)
            setAudioChunks([])
            setDuration(0)
        }
    }

    useEffect(() => {
        if (recordingStatus === 'inactive') { return }

        const interval = setInterval(() => {
            setDuration(curr => curr + 1)
        }, 1000)

        return () => clearInterval(interval)
    })


    return (
        <main className='relative flex flex-col items-center justify-center flex-1 max-h-screen p-4 py-2 pb-20 text-center shadow-xl rounded-2xl'>
        {/* Math Grid Background */}
        <div className="absolute inset-0 bg-white" style={{
            backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "83.5px 83px"
        }}></div>

        {/* Wrapped Content */}
        <div className="relative flex flex-col w-full max-w-md gap-3 py-6 bg-white border shadow-lg rounded-xl">
            <h1 className='text-3xl font-semibold sm:text-3xl md:text-5xl'>
                Tex<span className='text-purple-500 bold'>tilo</span>
            </h1>
            <h3 className='font-medium md:text-lg'>
                Record <span className='text-purple-400'>&rarr;</span> Transcribe <span className='text-purple-400'>&rarr;</span> Translate
            </h3>
            <button
                onClick={recordingStatus === 'recording' ? stopRecording : startRecording} 
                className='flex items-center justify-between max-w-full gap-4 px-4 py-2 mx-auto my-4 text-base transition-all duration-200 bg-white shadow-md specialBtn rounded-xl w-72 hover:shadow-lg'>
                <p className='text-purple-400 hover:text-purple-800'>
                    {recordingStatus === 'inactive' ? 'Record' : 'Stop recording'}
                </p>
                <div className='flex items-center gap-2'>
                    <i className={"fa-solid duration-200 fa-microphone " + (recordingStatus === 'recording' ? ' text-rose-400' : "")}></i>
                </div>
            </button>
            <p className='text-base'>
                Or <label className='text-purple-400 duration-200 cursor-pointer hover:text-purple-800'>
                    upload <input onChange={(e) => {
                        const tempFile = e.target.files[0]
                        setFile(tempFile)
                    }} className='hidden' type='file' accept='.mp3,.wave' />
                </label> a mp3 file
            </p>
            <p className='text-slate-400'>Made with ❤️ from Sayan</p>
        </div>
    </main>)
}
