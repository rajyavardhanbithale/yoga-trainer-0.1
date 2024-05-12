interface YogaPose {
    id: number
    name: string
    originalName: string
    image: string
}

interface YogaPoseDetailed {
    id: number
    name: string
    originalName: string
    description: string
    benefits: Array<string>
    tutorial: string
    image: string
    TFData: { 
        class: string 
        set: number 
    }
    audioData:{
        mainAudio: string
        benefits: string
        narratorSegment: Array<string>
    }

}


interface YogaPoseAPI {
    id: number
    name: string
    originalName: string
    description: string
    benefits: Array<string>
    tutorial: string
    image: string
    TFData: { 
        class: string 
        set: number 
    }
    audioData:{
        mainAudio: string
        benefits: string
        narratorSegment: Array<string>
    }
}

interface AmbientMusic {
    id: number
    name: string
    file: string
    keyword: Array<string>
}


export type { YogaPose, YogaPoseAPI, YogaPoseDetailed, AmbientMusic }