import lzString from 'lz-string';

function buildUrl(dataString) {
  return `?data=${dataString}`
}

function parseUrl(url) {
  const match = url.match(/data=(.*)$/)
  return !!match ? match[1] : null
}

export function load() {
  const compressed = parseUrl(window.location.href);
  if (!compressed) {return null;}
  const serialised = lzString.decompressFromEncodedURIComponent(compressed);
  return JSON.parse(serialised);
}

export function save(data) {
  const serialised = JSON.stringify({
    saved: new Date().toISOString(),
    data: data,
  });
  const compressed = lzString.compressToEncodedURIComponent(serialised);
  window.location.href = buildUrl(compressed);
}
