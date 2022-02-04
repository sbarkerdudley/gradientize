import React, { useState } from 'react';
import FastAverageColor from 'fast-average-color';
const fac = new FastAverageColor();

/**
 * @param {string} url
 * Samples the average color of an image and returns an object of .....TODO
 */

/**
 * @param {string} id
 * @param {number} hue
 */
function persist(id, hue) {
  window.localStorage.setItem(id, JSON.stringify(hue));
}

function retrieve(id) {
  let hue = parseInt(window.localStorage.getItem(id));
  if (!Number.isNaN(hue)) {
    return hue
  } return false
}

const cache = {};

export default function useColor() {

  console.log(cache, 'cache Initialized');

  async function parseImageUrlToCss(imageUrl) {
    let avgColor = await fac.getColorAsync(
      imageUrl,
    ); /* Sample average color of smallest image */
      console.log('Calculating Average Color');
    let hueInteger = await getHue.apply(null, avgColor.value); /* Convert [r, g, b] color to pure hue */
    let parsedHue = `hsla(${hueInteger}, 100%, 50%, 0.34)`; /* Format for CSS */
    // let parsedHue = `hsla(${hue}, 100%, 50%, 0.44)`; /* Format for CSS */
    return await [hueInteger, makeHSLAShadowFromColor(parsedHue)];
  }

  async function parseImageUrlToHue(imageUrl) {
    let avgColor = await fac.getColorAsync(imageUrl);
    let hue = getHue(...avgColor.value);
    console.log(hue, 'hue');
    /**
     *
     * @param {string} imageUrl
     * @param {Promise} avgColor
     * @returns {number} 0 >= hue <= 360
     */

    return hue;
  }

  async function getHue(r, g, b) {
    /**
     * @param {number} r 0 >= r <= 255
     * @param {number} g 0 >= g <= 255
     * @param {number} b 0 >= b <= 255
     * @returns {number} 0 >= hue <= 360
     */
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

  function makeHSLAShadowFromColor(color) {
  /**
   * @param {string} color Any representation of CSS color as a String
   *  '#FF33AA'              hex
   *  '#FF33AAFF'            hexa
   *  'hsl(360, 100%, 50%)'  hsl
   *  'hsla(160, 100%, 50%)' hsla
   *  'rgb(45, 25, 255)'     rgb
   *  'rgba(45, 25, 255)'    rgba
   *  'hotpink'              (common name)
   * @returns {object} CSS {boxShadow: String} for use in `React`.
   *  Standardized CSS key name is 'box-shadow'
   */
    return ({
      boxShadow: [
        `-10px 10px 9.9px ${color} `,
        `-20px 20px 28.5px ${color} `,
        `-6px 60px 52.6px ${color} `,
      ].join(', '),
    });
  }

  function makeHSLAShadowFromInt(int) {
    let color = `hsla(${int}, 100%, 50%, 0.34)`;
    return ({
      boxShadow: [
        `-10px 10px 9.9px ${color} `,
        `-20px 20px 28.5px ${color} `,
        `-6px 60px 52.6px ${color} `,
      ].join(', '),
    });
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

  async function setOne(url, id = null, object = {}) {
    var hue, color;
    if (!url || url === null) {
      return [url, {}]
    }
    if ((url) !== null && typeof url === 'object') {
      object = url;
      if (object.id) {
        id = object.id;
      }
      url = object.images?.at(-1).url;
    }

    if (id && cache[id]) {
      hue = cache[id]
      console.log('CACHED VALUE USED');
      return await [hue, makeHSLAShadowFromInt(hue)];
    } else {
      let results = await parseImageUrlToCss(url);
      hue = results[0]
      color = results[1]

      if (id) {
        cache[id] = hue

      }
      object.hue = color;
    }
    return [hue, color, object];
  }

  async function setList(list) {
    /**
     * @param {string} item url of image, OR
     * @param {Object} item object with [url] key
     * @param {string} item.id (OPTIONAL) for caching
     */
    return list.map((item) => {
      if (!item) return item;
      return getOne(item);
    });
  }

  async function getOne(id) {
    if (id && cache[id]) {
      return cache[id];
    } else if (id) {
      return setOne(id)
    } else {
      return false
    }
  }

  const get = getOne.bind(this);

  const set = setOne.bind(this);

  function getList(list) {}

  return [
    cache,
    {
      get,
      getOne,
      getList,
      set,
      setOne,
      setList,
    },
  ];
}
