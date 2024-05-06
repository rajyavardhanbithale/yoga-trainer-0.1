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
}


interface YogaPoseAPI {
    id: number
    name: string
    originalName:string
    description: string
    benefits: string[]
    tutorial: string
    image: string
}


export type {YogaPose,YogaPoseAPI,YogaPoseDetailed}