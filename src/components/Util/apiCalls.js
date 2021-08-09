const getParksByActivities = () => {
  return fetch('https://developer.nps.gov/api/v1/activities/parks?&api_key=JBKNU4JYTZyyQrYagU2YsGhl1RrTBFuV3oz7BouA')
    .then(response => response.json())
    .then(checkForError)
}

const getParkDetailsData = (parkCode) => {
  return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=JBKNU4JYTZyyQrYagU2YsGhl1RrTBFuV3oz7BouA`)
    .then(response => response.json())
    .then(checkForError)
}

const getSunriseSunsetData = (lat, long, date) => {
  return fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=-${long}&date=${date}`)
    .then(response => response.json())
    .then(checkForError)
}

const checkForError = (response) => {
  if(!response.ok) {
    throw new Error('Something went wrong')
  } else {
    return response.json();
  }
}

export { getParksByActivities, getParkDetailsData, getSunriseSunsetData}