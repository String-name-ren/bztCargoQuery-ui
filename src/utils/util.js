/**
 * 工具类
 */
export default {
    /**
     * 时间日期格式化
     * @param format
     * @returns {*}
     */
    dateFormat (dateObj, format) {
        let date = {
            'M+': dateObj.getMonth() + 1,
            'd+': dateObj.getDate(),
            'h+': dateObj.getHours(),
            'm+': dateObj.getMinutes(),
            's+': dateObj.getSeconds(),
            'q+': Math.floor((dateObj.getMonth() + 3) / 3),
            'S+': dateObj.getMilliseconds()
        }
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (let k in date) {
            if (new RegExp('(' + k + ')').test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length === 1
                    ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
            }
        }
        return format
    }

}
export function isPoneAvailable(phone) {
    let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phone)) {
        return false;
    } else {
        return true;
    }
}
