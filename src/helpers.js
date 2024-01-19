export function getCityFromAddress(address) {
  return address.split(' ').slice(-2, -1).join(' ').replace(',', '');
}
