import Http from './http'

const instance = new Http()

/**
 * マスター一覧の取得
 */
export const getMasters = async (type, key) => {
    const param = {
        type: type,
        key: key
    }
    const res = await instance.get('/master', param)
    return res.body
}

// /**
//  * マスターの登録
//  */
// export const postMaster = async (data) => {
//     const res = await instance.post("/master", data)
//     return res.body
// }