import axios from 'axios'

/**
 * レスポンスデータの加工
 */
function processResponse(response) {
  return {
    "statusCode": response.statusCode,
    "body": response.data,
    "headers": response.headers
  }
}

/**
 * Http通信用クラス
 */
export default class Http {
  /**
   * Http通信を行うためのインスタンスを作成
   */
  constructor() {
    const baseUrl = 'http://localhost:4000/viewer'
    this.instance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      responseType: 'json'
    })
  }

  /**
   * getメソッドの呼び出し
   * @param {string} url URLパス
   * @param {object} params クエリデータ
   */
  async get(url, params) {
    const config = {
      params
    }
    const response = await this.instance.get(url, config)
    return processResponse(response)
  }

  /**
   * postメソッド呼び出し
   * queryがないのはREST原則に則っているため
   * @param {string} url URLパス
   * @param {object} data リクエストボディ
   */
  async post(url, data) {
    const response = await this.instance.post(url, data)
    return processResponse(response)
  }
}