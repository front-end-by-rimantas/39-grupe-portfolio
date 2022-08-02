class Achievements {
    constructor(selector) {
        this.selector = selector;
        this.data = [];
        this.DOM = null;
        this.endedSuccesfully = false;
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        // piesti
        this.render();

        // event listeners

        this.endedSuccesfully = true;
    }

    isValidSelector() {
        if (typeof this.selector !== 'string'
            || this.selector === '') {
            return false;
        }
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    isValidDataIndex(index) {
        if (typeof index !== 'number'
            || index < 0
            || index >= this.data.length
            || index % 1 !== 0) {
            return false;
        }
        return true;
    }

    isValidDataItem(obj) {
        if (typeof obj !== 'object'
            || obj === null
            || Array.isArray(obj)
            || Object.keys(obj).length !== 3
            || typeof obj.icon !== 'string'
            || typeof obj.number !== 'number'
            || typeof obj.title !== 'string') {
            return false;
        }

        return true;
    }

    add(obj) {
        if (!this.isValidDataItem(obj)) {
            return false;
        }

        this.data.push(obj);
        return true;
    }

    list(index) {
        if (index === undefined) {
            return this.data;
        }
        if (!this.isValidDataIndex(index)) {
            return false;
        }
        return this.data[index];
    }

    update(index, key, value) {
        if (!this.isValidDataIndex(index)) {
            return false;
        }

        const obj = this.data[index];
        if (!(key in obj)) {
            return false;
        }

        this.data[index][key] = value;
        return true;
    }

    fullUpdate(index, newObj) {
        if (!this.isValidDataIndex(index)) {
            return false;
        }
        if (!this.isValidDataItem(obj)) {
            return false;
        }

        this.data[index] = newObj;
        return true;
    }

    delete(index) {
        if (!this.isValidDataIndex(index)) {
            return false;
        }

        this.data.splice(index, 1);
        return true;
    }

    render() {
        let HTML = '';

        for (const item of this.data) {
            HTML += `<div class="col-12 col-md-6 col-lg-3 achievement">
                        <i class="fa fa-${item.icon}"></i>
                        <p class="number">${item.number}</p>
                        <p class="title">${item.title}</p>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
    }
}

export { Achievements }