
import * as tf from '@tensorflow/tfjs';

async function useTensorFlow(pred_image:any,set:number) {
    const model = await tf.loadGraphModel(`set${set}/model.json`); // Loading Model

    let image = new Image(250, 250);
    image.src = pred_image;

    let tfTensor = tf.browser.fromPixels(image);
    tfTensor = tfTensor.expandDims(0);
    tfTensor = tfTensor.cast("float32");

    const pred = model.predict(tfTensor);
    const val1 = pred.dataSync()

    model.dispose() // Disposing model to free memory 
    return  val1.toString()
}

export default useTensorFlow