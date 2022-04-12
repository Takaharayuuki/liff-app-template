import client from '../client'

export default {
  /**
   * 単体取得
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
