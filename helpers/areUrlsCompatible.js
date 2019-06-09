const splitUrl = (url) => url.split('/').filter((part) => part);

const areUrlsCompatible = (url1, url2) => {
  const url1Parts = splitUrl(url1);
  const url2Parts = splitUrl(url2);
  let output = true;
  const urlPairs = [];

  if (url1Parts.length !== url2Parts.length) return false;

  url1Parts.forEach((url1Part, index) => {
    if (url1Part[0] === ':' && url2Parts[index][0] === ':') output = false;
    else if (url1Part[0] === ':') {
      const key = url1Part.slice(1, url1Part.length);
      const value = url2Parts[index];

      urlPairs.push({ [key]: value });
    } else if (url2Parts[index][0] === ':') {
      const key = url2Parts[index].slice(1, url2Parts[index].length);
      const value = url1Part;

      urlPairs.push({ [key]: value });
    } else {
      if (url1Part !== url2Parts[index]) {
        output = false;
      }
    }
  });

  if (!output) return output;

  return urlPairs;
};

module.exports = areUrlsCompatible;
