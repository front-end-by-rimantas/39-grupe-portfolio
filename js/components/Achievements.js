class Achievements {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.endedSuccesfully = false;

        this.init();
    }

    init() {
        if (!this.isValidSelector()
            || !this.isValidData()) {
            return false;
        }

        // atfiltruojame duomenis
        this.filterData();

        // piesti
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

    isValidData() {
        if (!Array.isArray(this.data)
            || this.data.length === 0) {
            return false;
        }
        return true;
    }

    filterData() {
        this.data = this.data.filter(obj => typeof obj === 'object');
    }
}

export { Achievements }