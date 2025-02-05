import React from 'react'
import { LANGUAGES } from '../utils/presets'

export default function Translation(props) {
    const { textElement, toLanguage, translating, setToLanguage, generateTranslation } = props
    return (
        <>
            {(textElement && !translating) && (
                <p>{textElement}</p>
            )}
            {!translating && (<div className='flex flex-col gap-1 mb-4'>
                <p className='mr-auto text-xs font-medium sm:text-sm text-slate-500'>To language</p>
                <div className='flex items-stretch gap-2 sm:gap-4' >
                    <select value={toLanguage} className='flex-1 w-full p-2 duration-200 bg-white rounded outline-none focus:outline-none' onChange={(e) => setToLanguage(e.target.value)}>
                        <option value={'Select language'}>Select language</option>
                        {Object.entries(LANGUAGES).map(([key, value]) => {
                            return (
                                <option key={key} value={value}>{key}</option>
                            )
                        })}

                    </select>
                    <button onClick={generateTranslation} className='px-3 py-2 text-purple-400 duration-200 rounded-lg specialBtn hover:text-purple-600'>Translate</button>
                </div>
            </div>)}
        </>
    )
}
