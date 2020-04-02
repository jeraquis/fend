
import { sdkGet } from '../../server/sdkAPI'
import { printUI } from './updateUI'

function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('url').value
    getData(formText)
    .then(function() {
        printUI(data)
    })
}

const getData = async (formText) => {
    console.log('getData')
    const res = await fetch(`http://localhost:8001/api?input=${formText}`)
    console.log(res)
    console.log('after')
    try { const data = await res.json()
        console.log(data)
        return data
    } catch(error) {
        console.log('error', error)
    }
}
/*
    const getData = async () => {
        const res = sdkGet(formText)
        const data = JSON.stringify(res)
        console.log(res)
        console.log(data)
        return data
    }

    const info = getData()
    .then(function(){
        printUI(info)
    })
    
}
*/
export { handleSubmit }
