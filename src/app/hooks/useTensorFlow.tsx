'use client'
import * as tf from '@tensorflow/tfjs';
import { useState } from 'react';

function useTensorFlow() {
    const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false)
    const [model, setModel] = useState<any>()

    async function runModel(pred_image: any, setPredAssumption: any, set: number) {
        const model = await tf.loadGraphModel(`model/set${set}/model.json`)

        if(model){
            setIsModelLoaded(true)
        }

        let image = new Image(250, 250);
        image.crossOrigin = "anonymous";

        image.src = pred_image;

        let tfTensor = tf.browser.fromPixels(image)
        tfTensor = tfTensor.expandDims(0)
        tfTensor = tfTensor.cast("float32")

        const pred = model.predict(tfTensor) as tf.Tensor
        const val1 = pred.dataSync()

        console.log(val1.toString())

        setPredAssumption(val1.toString())




    }


    // To be implemented
    function stopModel() {
        if (model) {
            model.dispose()
        }
    }


    return { runModel, stopModel, isModelLoaded }

}

export default useTensorFlow