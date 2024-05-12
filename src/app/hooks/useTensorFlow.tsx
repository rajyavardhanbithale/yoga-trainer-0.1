'use client'
import * as tf from '@tensorflow/tfjs';
import { useState } from 'react';

function useTensorFlow() {
    const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false)
    const [model, setModel] =  useState<any>()

    // Loading Model
    const loadTensorModel = async (set: number) => {
        const model_tensor = await tf.loadGraphModel(`/model/set${set}/model.json`)
        
        if (model_tensor) {
            setIsModelLoaded(true)
            setModel(model_tensor)
            return true

        }else {
            console.error('Failed to load model.');
            return false;
        }
        // model.dispose()
    }

    const predictTensor = async (pred_image: string): Promise<string> => {

        // resizing image according to trained CNN model input shape
        let image = new Image(250, 250)
        image.crossOrigin = "anonymous";
        image.src = pred_image


        // processing image further to math the requirement of input layer 
        let tfTensor = tf.browser.fromPixels(image);
        tfTensor = tfTensor.expandDims(0)
        tfTensor = tfTensor.cast("float32")

        // making prediction
        const pred = model.predict(tfTensor) as tf.Tensor
        const val1 = pred.dataSync()

        // Disposing model to free memory 
        // model.dispose()

        console.log(val1.toString());


        return val1.toString()
    }

    // console.log("Tensorflow Init... OK")

    const finishTensor = () => {
        if (model){
            model.dispose()
        }
    }

    return { loadTensorModel, predictTensor, finishTensor, isModelLoaded }

}

export default useTensorFlow