/* eslint-disable no-bitwise */
/**
 * Convert RGB to HEX
 * rgbToHex(0, 51, 255)
 *
 * @param r
 * @param g
 * @param b
 *
 * @returns {string}
 */
const rgbToHex = (r: number, g: number, b: number): string =>
  `#${[r, g, b]
    .map((x) => {
      const hex = x.toString(16)
      return hex.length === 1 ? `0${hex}` : hex
    })
    .join('')}`

/**
 * Convert Hex to RGB
 * hexToRgb("#0033ff")
 *
 * @param hex
 *
 * @returns {number[]}
 */
const hexToRgb = (hex: string): number[] => {
  // Removendo '#' se presente e duplicando caracteres para formatar corretamente
  const formattedHex = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`,
    )
    .substring(1)

  // Separando a string hex em pares de caracteres e convertendo-os para números decimais
  const rgbValues =
    formattedHex.match(/.{2}/g)?.map((x) => parseInt(x, 16)) ?? []

  return rgbValues
}
/**
 * LightenDarken color
 * https://css-tricks.com/snippets/javascript/lighten-darken-color/
 *
 * @param col
 * @param amt
 *
 * @returns {string}
 */
function lightenDarkenColor(col: string, amt: number): string {
  let usePound = false

  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  let r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  let b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  let g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export { rgbToHex, hexToRgb, lightenDarkenColor }
