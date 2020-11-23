function client(endpoint, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }
  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then(async response => {
      const res = await response.json()
      if (!response.ok) {
        return Promise.reject(res)
      } else {
        return res
      }
    })
}

export {client}

// 📜 https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// 💰 here's how to get the full URL: `${process.env.REACT_APP_API_URL}/${endpoint}`
