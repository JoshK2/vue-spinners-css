export default function(duration) {
    const re = new RegExp(/^\d*\.?\d+(s|ms)$/)
    return re.test(duration)
}
