export function getNormalPath(p: string): string {
  if (p.length === 0 || !p || p == 'undefined') {
    return p
  }
  let res = p
  if (p.indexOf('//') !== -1) {
    res = '/' + p.split('//')[1]
  }
  if (res[res.length - 1] === '/') {
    return res.slice(0, res.length - 1)
  }
  return res
}
