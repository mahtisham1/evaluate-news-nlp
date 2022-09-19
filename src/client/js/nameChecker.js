    const isValidUrl = urlString=> {
      try {
          return (new URL(urlString));
      }
      catch(e){
        alert("Please try with a valid URL");
      }
  }


export { isValidUrl };
