<template>
<div class="row">
    <q-progress :percentage="40" animate />
    <i>account_circle</i>

</div>
</template>

<script>
import * as tf from '@tensorflow/tfjs';
import 'babel-polyfill';

import preProcessor from './preProcessor.js';
import postProcessor from './postProcessor.js';



import {

    QProgress


} from "quasar-framework/dist/quasar.mat.esm";





export default {
    name: 'BrainHub',
    data() {
        return {
            img: null
        }
    },
    computed: {
        getMsg: function() {
            return this.$store.state.test
        }
    },
    methods: {
        loadMobilenet: async function(store) {
            console.log("************")

            const mobilenet = await tf.loadModel(store);
            console.log(mobilenet);
            console.log("************");
            // Return a model that outputs an internal activation.
            //const layer = mobilenet.getLayer('conv_pw_13_relu');
            //   return tf.model({inputs: mobilenet.inputs, outputs: layer.output});
            return tf.model({
                inputs: mobilenet.inputs,
                outputs: mobilenet.output
            });
        },
        /**
         * Computes the probabilities of the topK classes given logits by computing
         * softmax to get probabilities and then sorting the probabilities.
         * @param logits Tensor representing the logits from MobileNet.
         * @param topK The number of top predictions to show.
         */
        getTopKClasses: async function(logits, topK) {
            const values = await logits.data();

            const valuesAndIndices = [];
            for (let i = 0; i < values.length; i++) {
                valuesAndIndices.push({
                    value: values[i],
                    index: i
                });
            }
            valuesAndIndices.sort((a, b) => {
                return b.value - a.value;
            });
            const topkValues = new Float32Array(topK);
            const topkIndices = new Int32Array(topK);
            for (let i = 0; i < topK; i++) {
                topkValues[i] = valuesAndIndices[i].value;
                topkIndices[i] = valuesAndIndices[i].index;
            }

            const topClassesAndProbs = [];
            for (let i = 0; i < topkIndices.length; i++) {
                topClassesAndProbs.push({
                    className: IMAGENET_CLASSES[topkIndices[i]],
                    probability: topkValues[i]
                })
            }
            return topClassesAndProbs;
        }
    },
    components: {
        QProgress
    },
    created: async function() {
        var obj = this;


console.log("***************")
console.log(obj.$store.state.database)

console.log("***************")




        var mobilenet = await obj.loadMobilenet('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');


        var preProcess = new preProcessor("http://192.168.8.101:8080/ipfs/Qme5P747rsTZM2LRfqEQCyxgBtLLV3aZXMTxhxzeXKNKNb");
        await preProcess.init();

        var postProcess = new postProcessor("http://192.168.8.101:8080/ipfs/QmRhS6MYB8g7vsSgM5jzynRGPafkaxaDNRMSnvra14CTrv");
        await postProcess.init();

        //gets image, create tensor and push it to the network


        setInterval(function() {
            //console.log(obj.$store.state.image);
            if (obj.$store.state.processing) {

                const logits = tf.tidy(() => {
                    // tf.fromPixels() returns a Tensor from an image element.
                    //console.log(webcam.capture().print());

                    var tensor = tf.fromPixels(obj.$store.state.image);
                    var batched = preProcess.compute(tensor);
                    var out = mobilenet.predict(batched);
                    var out = postProcess.compute(out);

                    //out = obj.getTopKClasses(out, 5);
                    console.log(out);

                    obj.$store.commit('output_changer', out)
                        //return out;
                        //console.log("prediction now!" + tensor);
                });
            }
        }, 1000);


    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-size: 3rem;
}

a {
    color: #42b983;
}
</style>
