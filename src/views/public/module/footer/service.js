import Q from 'q'

import ApiData from 'views/public/demo-data'

export default {
    footerText() {
        return Q.Promise((resolve, reject) => {
            resolve(ApiData.common.footerText)
        })
    }
}
