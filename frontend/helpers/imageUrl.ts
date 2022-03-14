export const getImageUrl = (imageData) => {
  return imageData.map(({ attributes }) => {
    if (attributes.format) {
      return {
        small: attributes.format?.small.url,
        medium: attributes.format?.medium.url,
        large: attributes.format?.large.url,
      };
    }

    return {
      default: attributes.url,
    };
  });
};
