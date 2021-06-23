import Http from './http'

const instance = new Http()

/**
 * マスター名一覧の取得
 */
export const getMasterNames = async (type) => {
    const param = {
        type: type
    }
    const res = await instance.get('/types', param)
    return res.body
}
