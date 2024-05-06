interface YogaPose {
    id: number
    name: string
    originalName:string
    image: string
}

interface YogaPoseDetailed {
    id: number
    name: string
    originalName:string
    description: string
    benefits: string[]
    tutorial: string
    image: string
    TFData: {class:string,set:number}
}


interface YogaPoseAPI {
    id: number
    name: string
    originalName:string
    description: string
    benefits: string[]
    tutorial: string
    image: string
    TFData: {class:string,set:number}
}


export type {YogaPose,YogaPoseAPI,YogaPoseDetailed}