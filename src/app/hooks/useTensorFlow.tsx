'use client'
import * as tf from '@tensorflow/tfjs';

function useTensorFlow() {

    const predictTensor = async (pred_image: string, set: number): Promise<string> => {
        // Loading Model
        const model = await tf.loadGraphModel(`/set${set}/model.json`)

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
        model.dispose()

        console.log(val1.toString());
        

        return val1.toString()
    }

    // console.log("Tensorflow Init... OK")

    return {predictTensor} 

}

export default useTensorFlow