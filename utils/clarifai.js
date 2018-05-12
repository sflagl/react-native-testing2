import clarifai from 'clarifai'
// import dotenv from 'dotenv'
// const clarifai =require('clarifai')

process.nextTick = setImmediate

//add images to concept w/ concept -> attach to model -> train model
// dotenv.config()

//Don't show API key on github


const clarifaiApp =  new Clarifai.App({
    apiKey: API_KEY
});

const modelID = 'test-model'

const Clari = {

createImages: function(imagesArr, conceptName, modelID) {
    const inputArr = imagesArr.map((image, index) => {
        return ({
            base64: image.base64,
            id: conceptName + index,
            concepts: [
                {
                    id: conceptName,
                    value: true
                }
            ]
        })
    })

    const that = this

    console.log(inputArr)

    clarifaiApp.inputs.create(inputArr).then(
        function(response) {
          // do something with response
          console.log(response)
          console.log('SUCCESS!')
          that.addConceptToModel(modelID, conceptName)
        },
        function(err) {
          // there was an error
          console.log(err)
          console.log('FAILURE!')
        }
    );
},

//run after images are created
addConceptToModel: function (modelID, conceptName) {
    console.log('Finding model')
    const that = this
    clarifaiApp.models.initModel(modelID).then(function(model) {
        console.log('Model found!')
        console.log(model);
        that.updateModel(model, conceptName)},
        function(err) {
          // there was an error
          console.log('Model not found?')
        }
    );
}, 

updateModel: function(model, conceptName) {
    // console.log('second function running')
    console.log('Merging concept')
    const that = this
    model.mergeConcepts({"id": conceptName}).then(
      function(response) {
        // do something with response
        console.log('Concept merged!')
        console.log(response)
        that.trainModel(modelID)
      },
      function(err) {
        // there was an error
        console.log('Aw shit..')
      }
    );
  },

//run after model is updated
trainModel: function  (modelID) {
    clarifaiApp.models.train(modelID).then(
        function(response) {
          // do something with response
          console.log('Model trained')
        },
        function(err) {
          // there was an error
          console.log('Model still dumb...')
        }
      );
},

predictContent: function (modelID, img) {
    // clarifaiApp.models.predict(modelID, {base64: img}).then(
    //     function(response) {
    //         // do something with response
    //         console.log('Predicting...')
    //         console.log(response.rawData.outputs[0].data)
    //         return response.rawData.outputs[0].data
    //     },
    //     function(err) {
    //         // there was an error
    //         console.log(err)
    //         console.log('Fuck')
    //         return "No notes detected"
    //     }
    // );
    console.log('Calling clarifai...')

    return clarifaiApp.models.predict(modelID, {base64: img})
},

getImages: function () {
    return clarifaiApp.inputs.list({page: 1, perPage: 50})
},



test: function (){
    return "Just making sure this is connected"
}
}

export default Clari;

// createConcept(modelID, 'bezos')

// clarifaiApp.concepts.list().then(
//     function(response){
//         console.log(response)
//     },
//     function(err){
//         console.log(err)
//     }
// )

// Clari.getImages()

