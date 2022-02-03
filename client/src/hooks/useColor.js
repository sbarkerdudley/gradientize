import React, { useState } from 'react';
import FastAverageColor from 'fast-average-color';
const fac = new FastAverageColor();

/**
 *
 * @param {string} url
 *
 * Samples the average color of an image and returns an object of .....TODO
 *
 */


function persistColors(object) {
  window.localStorage.setItem('colors', JSON.stringify(object));
}

function getCachedColors() {
  var colors = window.localStorage.getItem('colors');
  if (colors && colors !== 'undefined') {
    return JSON.parse(colors);
  }
  return {};
}

export default function useColor(object = getCachedColors()) {
  const [cache, setCache] = useState(object);

  async function parseAlbumColorToCss(imageUrl) {
    let avgColor = await fac.getColorAsync(
      imageUrl,
    ); /* Sample average color of smallest image */
    console.log(avgColor);
    let hue = await getHue(
      ...avgColor.value,
    ); /* Convert [r, g, b] color to pure hue */
    let parsedHue = `hsla(${hue}, 100%, 50%, 0.34)`; /* Format for CSS */
    // let parsedHue = `hsla(${hue}, 100%, 50%, 0.44)`; /* Format for CSS */
    return await [hue, makeHSLAShadow(parsedHue)];
  }

  async function parseImageUrlToHue(imageUrl) {
    let avgColor = await fac.getColorAsync(imageUrl);
    console.log(avgColor);
    let hue = await getHue.apply(null, avgColor.value)

    /**
     *
     * @param {string} imageUrl
     * @param {Promise} avgColor
     * @returns {number} 0 >= hue <= 360
     */

    return await hue
  }

  /**
   *
   * @param {number} r 0 >= r <= 255
   * @param {number} g 0 >= g <= 255
   * @param {number} b 0 >= b <= 255
   * @returns {number} 0 >= hue <= 360
   */

  function getHue(r, g, b) {
    if (r === g && r === b) {
      return 300;
    }
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var c = max - min;
    var hue;
    if (c === 0) {
      hue = 0;
    } else {
      switch (max) {
        case r:
          var segment = (g - b) / c;
          var shift = 0 / 60; // R° / (360° / hex sides)
          if (segment < 0) {
            // hue > 180, full rotation
            shift = 360 / 60; // R° / (360° / hex sides)
          }
          hue = segment + shift;
          break;
        case g:
          var segment = (b - r) / c;
          var shift = 120 / 60; // G° / (360° / hex sides)
          hue = segment + shift;
          break;
        case b:
          var segment = (r - g) / c;
          var shift = 240 / 60; // B° / (360° / hex sides)
          hue = segment + shift;
          break;
      }
    }
    return parseInt(hue * 60); // hue is in [0,6], scale it up
  }

  /**
   * @param {string} color Any representation of CSS color as a String
   *  '#FF33AA'              hex
   *  '#FF33AAFF'            hexa
   *  'hsl(360, 100%, 50%)'  hsl
   *  'hsla(160, 100%, 50%)' hsla
   *  'rgb(45, 25, 255)'     rgb
   *  'rgba(45, 25, 255)'    rgba
   *  'hotpink'              (common name)
   * @returns {object} CSS {boxShadow: String} for use in `React`. Standardized CSS key name is 'box-shadow'
   */
  function makeHSLAShadow(color) {
    return {
      boxShadow: [
        `-10px 10px 9.9px ${color} `,
        `-20px 20px 28.5px ${color} `,
        `-6px 60px 52.6px ${color} `
      ].join(', ')
    };
  }

  /**
   *
   * @param {string} url string OR
   * @param {Object} url Object with a string at key [url]
   * @param {string} id (OPTIONAL) - Memoize value
   * @param {Object} object (OPTIONAL) - return object with attached hue
   * @returns {array} [hue, object]
   *
   * @returns {number} hue
   * @returns {Object} object
   * let [hue, object] = getOne(url, id, {})
   */

  function getOne(url, id = null, object = {}) {
    if (typeof url === 'object') {
      object = url
      if (object.id) {
        id = object.id
      }
      url = object.url
    }
    var color;
    if (id && cache[id]) {
      color = cache[id]
    } else {
      color = parseAlbumColorToCss(url)
      var [hue, makeHSLAShadow(parsedHue)] = parseAlbumColorToCss(url);
      if (id) {
        setCache(cache => ({
          ...cache,
          id: hue
        }))
        console.log(cache);
      }
      object.hue = hue
    }
    return [hue, object]
  }

  function getList(list) {
    /**
     * @param {string} item url of image, OR
     * @param {Object} item object with [url] key
     * @param {string} item.id (OPTIONAL) for caching
     */
    return list.map((item) => {
      if (!item) return item
      return getOne(item, item.id || null)
    })
  }

  function set(url) {

  }

  function setList(list) {

  }

  return [
    cache,
    {
      getOne,
      getList,
    },
  ];
}
