export const ucFirst = (name: string) => {
  if (!name) {
    return "";
  }
  return name[0].toUpperCase() + name.slice(1);
};

export const range = (length: number) =>
  Array.from({ length: length }, (v, k) => k + 1);
