export default function(propName, originalValue, modificator) {
    const computedStyle = {}
    const timeQuantityOuter = originalValue.match(/^\d*\.?\d+/)[0]
    const timeUnit = originalValue.match(/s|(ms)$/)[0]
    const timeQuantityInner = Math.round(timeQuantityOuter * 1000 * modificator) / 1000

    computedStyle[propName] = timeQuantityInner + timeUnit
    return computedStyle
}
