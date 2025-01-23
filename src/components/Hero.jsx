import React from 'react'
import { useState } from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedVideos] = useState(second)
    const handleMiniCdClick = () => {

    }


    return (
        <div className='relative h-dvh'>
            <div
                id="video-frame"
                className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className='mask-clip-path absolute-centre absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div>
                            MiniVideoPlayer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
