export const getParksByActivities = () => {
  return fetch('https://developer.nps.gov/api/v1/activities/parks?&api_key=JBKNU4JYTZyyQrYagU2YsGhl1RrTBFuV3oz7BouA')
    .then(response => response.json())
    .catch(err => console.err(err))
}