import { isValidUrl } from './urlChecker'
debugger
const apiKey = '28f90c38c174f86b89a5ab005d134e30&units=imperial';

function handleSubmit(event) {
    event.preventDefault()
    debugger
    let isValid = isValidUrl(document.getElementById('url').value)

    let baseURL = 'https://api.meaningcloud.com/sentiment-2.1'

    getData(baseURL, apiKey)
    .then(async function(data){
      data = await postData('/add',{polarity: data.polarity, agreement: data.agreement, subjectivity: data.subjectivity, confidence: data.confidence, irony: data.irony});
      updateUI(data)
    })
  }

  const getData = async (url,key)=>{
    const res = await fetch(url+key)

    try {
      const data = await res.json();
      console.log(data);

      return data;
    } catch(error) {
      console.log("error", error);
    }
  }

  const postData = async (url = '', data = {}) =>{
    console.log(data)
    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
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
      document.getElementById('polarity').innerHTML = `polarity: ${data.date}`;
      document.getElementById('agreement').innerHTML = `agreement: ${tempConvert}`;
      document.getElementById('subjectivity').innerHTML = `subjectivity: ${data.city}`;
      document.getElementById('confidence').innerHTML = `confidence: ${data.feelings}`;
      document.getElementById('irony').innerHTML = `irony: ${data.feelings}`;
}

export { handleSubmit }
