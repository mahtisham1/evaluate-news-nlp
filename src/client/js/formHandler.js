import { isValidUrl } from './urlChecker'

function handleSubmit(event) {
    event.preventDefault()
    let isValid = isValidUrl(document.getElementById('url').value)

    const apiKey = '28f90c38c174f86b89a5ab005d134e30&units=imperial’';
    let baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&&url=${isValid}`
    console.log("::: Form Submitted :::")

    getData(baseURL,isValid, apiKey)
    .then(function(data){
      postData('/add',{model: data.model, agreement: data.agreement, subjectivity: data.subjectivity, confidence: data.confidence, irony: data.irony});
      updateUI(data)
    })
  }

  const getData = async (url,validate,key)=>{
    const res = await fetch(url+validate+key)

    try {
      const data = await res.json();

      return data;
    } catch(error) {
      console.log("error", error);
    }
  }

  const postData = async (url = '', data = {}) =>{
    const res = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return res.json()
  }

  const updateUI = (data) => {
      document.getElementById('model').innerHTML = `Model: ${data.model}`;
      document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
      document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
      document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
      document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
}

export { handleSubmit }
