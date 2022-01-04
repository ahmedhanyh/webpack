function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    if (!Client.checkForName(formText)) {
        alert("Invalid input.");
        return;
    }

    console.log("::: Form Submitted :::")

    const formdata = new FormData();
    formdata.append("key", "ca0264103ae9863427165f0c539f9f10");
    formdata.append("txt", formText);
    formdata.append("lang", "en");
    
    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then(result => (
            result.json()
        ))
        .then(result => {
            document.querySelector('li:first-child').textContent += result.agreement;
            document.querySelector('li:nth-child(2)').textContent += result.confidence;
            document.querySelector('li:nth-child(3)').textContent += result.irony;
            document.querySelector('li:nth-child(4)').textContent += result.model;
            document.querySelector('li:last-child').textContent += result.score_tag;
        })
        .catch(error => console.log('error', error));
}

export { handleSubmit }
