const filterParksForHiking = (parksData) => {
  const parksWithHiking = parksData.data.find(activity => activity.name === 'Hiking')

  return parksWithHiking
}

const filterParkDetails = (parkDetailsData) => {

  const {
    id,
    fullName,
    description,
    latitude,
    longitude,
    activities,
    addresses,
    images,
    } = parkDetailsData.data[0]

  const filteredDetails = {
      'id': id,
      'fullName': fullName,
      'description': description,
      'latitude': latitude,
      'longitude': longitude,
      'activities': activities,
      'address': addresses[0],
      'images': images,
  }
  return filteredDetails
}

export { filterParksForHiking, filterParkDetails }
