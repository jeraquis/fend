export function printUI(data) {
    console.log(data)
    const tags = data.hashtags
    for (tag in tags) {
        document.getElementById('results').append(tag)
    } 

}