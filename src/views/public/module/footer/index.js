import temp from './index.hbs'

import Service from './service'

export default ($box = $("body")) => {
    Service.footerText().then((data) => {
        $box.html(temp(data))
    })
}
