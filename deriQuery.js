// DERI KURNIAWAN QUERY
// https://github.com/Deri-Kurniawan/deriQuery

/**
 * Query Selector
 * @param {String} query 
 * @returns document element
 */
function $(query) {
    return new deriQuery(query);
}

class deriQuery {
    constructor(query) {
        this.query = document.querySelector(query);
    }

    /**
     * get value of an element or replace element value
     * @param {String} replacer 
     * @returns string
     */
    val(replacer = null) {
        if (replacer == null) {
            return this.query.value;
        }
        return this.query.value = replacer;
    }

    /**
     * get innerHTML model on element or replace value of html document element
     * @param {string} replacer replace html document element
     * @returns string
     */
    html(replacer = null) {
        if (replacer == null) {
            return this.query.innerHTML;
        }
        return this.query.innerHTML = replacer;
    }

    /**
     * get innerText model on element or replace value of text document element
     * @param {string} replacer replace html text value element
     * @returns string
     */
    text(replacer = null) {
        if (replacer == null) {
            return this.query.innerText;
        }
        return this.query.innerText = replacer;
    }

    /**
     * set event listener
     * @param {string} event event receive
     * @param {function} callback callback on event
     * @returns event
     */
    on(event = null, callback) {
        if (event == null) {
            console.error('Event not set!');
        }
        return this.query.addEventListener(event, callback());
    }
}
