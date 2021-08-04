export const filterParksForHiking = (parksData) => {
  const parksWithHiking = parksData.data.find(activity => activity.name === 'Hiking')

  return parksWithHiking
}