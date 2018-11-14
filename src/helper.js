import React from 'react';

/* helper for Fetch error
* @param {object} response
*/
export const handleResponse = (response) => {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
}

/* helper for setting the percentage
* @param {string} pct
*/
export const calcChangePercent = (pct) => {
    if (pct > 0) {
        return <span className="pct-raised">{pct}% &uarr;</span>
    } else if (pct <0) {
        return <span className="pct-fallen">{pct}% &darr;</span>
    } else {
        return <span>{pct}%</span>
    }
}
