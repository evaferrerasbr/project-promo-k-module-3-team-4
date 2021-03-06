function sendRequest(data) {
  return fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((result) => {
      return result;
    })
    .catch(() => {
      return {
        success: false,
        error: 'Se ha producido un error, por favor inténtalo más tarde',
      };
    });
}

export { sendRequest };
