export function capitalizeFirstLetter(string?: string) {
  if (!string) return undefined;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatNumber = (id: number) => {
  if (id < 10) {
    return `00${id}`;
  } else if (id < 100) {
    return `0${id}`;
  }
  return `${id}`;
};

export const formatNumberForList = (id?: number) => {
  if (!id) {
    return '#0000';
  } else if (id < 10) {
    return `000${id}`;
  } else if (id < 100) {
    return `00${id}`;
  } else if (id < 1000) {
    return `0${id}`;
  }
  return `${id}`;
};
