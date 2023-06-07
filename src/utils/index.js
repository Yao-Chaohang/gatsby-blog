export const formatType = (type) => {
    switch (type) {
        case 'coding':
            return '代码人生'
        case 'everyday':
            return '生活圈'
        case 'tag-cloud':
            return '标签云'
        default:
            return ''
    }
}