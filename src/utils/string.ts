export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  } else {
    return num.toString();
  }
}

export function truncateString(str: string, maxLength: number): string {
  if (str?.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  } else {
    return str;
  }
}
