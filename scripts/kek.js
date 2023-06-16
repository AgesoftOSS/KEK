/**
 * 
 * @param {HTMLElement} elem 
 * @returns 
 */

function GetID(elem){
    return document.getElementById(elem)
}

class console {
    /**
     * @param  {...any} data 
     * ```ts
     * // console.log(`%ccolor: blue`, "the string")
     * console.ColoredLog("blue", "the string")
     * ```
     */
    static ColoredLog(...data){
        const str = data.slice(1).join(' ');
        console.log(`%ccolor:${data.join(' ')}`, str)
    }
}