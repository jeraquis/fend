import { printUI } from './updateUI'

async function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('url').value
    console.log(formText)

    sendData('http://localhost:8001/tags', formText)
    .then((resp) => resp.json())
    .then(() => {
        getData('http://localhost:8001/api')
    })
    .then((response) => {
        printUI(response)
    })

}

const sendData = async (url, data) => {
    console.log('sendData')
    console.log(data)
    const fetching = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    try { 
        const trying = await fetching.json()
        return trying
    } catch(error) {
        console.log('error', error)
    }
}

const getData = async () => {
    const hashtags = await fetch('http://localhost:8001/api')

    try { 
        const data = hashtags.json()
        return data
    } catch (error) {
        console.log('error', error)
    }
}
/*
async function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('url').value
    console.log(formText)

    const response = await fetch('http://localhost:8001/api', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(formText)
    })


    console.log(response)
//    .then(response => response.json)
//    .then(console.log(response))

//    getData(formText)
//    .then(function )
    .then(printUI())
}
*/




export { handleSubmit }
