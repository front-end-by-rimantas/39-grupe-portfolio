class Services {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()
            || !this.findTargetElement()
            || !this.isValidData()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string'
            || this.selector === '') {
            return false;
        }
        return true;
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    isValidData() {
        if (!Array.isArray(this.data)) {
            return false;
        }
        return true;
    }

    render() {
        let HTML = '';

        for (const serviceItem of this.data) {
            HTML += `<div class="col-12 col-md-6 col-lg-4">
                        <i class="fa fa-${serviceItem.icon}"></i>
                        <h3>${serviceItem.title}</h3>
                        <p>${serviceItem.desc}</p>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
    }
}

export { Services }