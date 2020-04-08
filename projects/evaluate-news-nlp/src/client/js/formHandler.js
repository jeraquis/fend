import { printUI } from './updateUI'

async function handleSubmit(event, data = {}) {
    event.preventDefault()
    let formText = document.getElementById('url').value
    console.log(formText)
    
    const response = await fetch(`http://localhost:8001/api?input=${formText}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })


    console.log(response)
//    .then(response => response.json)
//    .then(console.log(response))

//    getData(formText)
//    .then(function )
    .then(printUI())
}

const getData = async (formText, data = {}) => {
    console.log('getData')
    fetch(`http://localhost:8001/api?input=${formText}`, {

        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(){
        console.log('after')
    })
    try { const data = await res.json()
        console.log(data)
    } catch(error) {
        console.log('error', error)
    }
}



export { handleSubmit }
