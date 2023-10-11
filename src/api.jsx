import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 7LZM6NAD652ugFqqKXX3xhTlWwe98w2eVd_bJ8270nM',
    },
    params: {
      query: term,
    },
  })

  return response.data.results
}

export default searchImages
