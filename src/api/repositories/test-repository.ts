import client from '../client'

export default {
  /**
   * εδ½εεΎ
   */
  get: async (id: string) =>
    client
      .post('/api/getData', {
        id: id,
      })
      .then(res => {
        res.data
      }),
}
