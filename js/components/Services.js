class Services {
    constructor(selector) {
        this.selector = selector;
        this.DOM = null;
    }

    isValidSelector() {
        if (typeof this.selector !== 'string'
            || this.selector === '') {
            return false;
        }
        return true;
    }

    findTargetElement() {
        this.DOM = document.getElementById(this.selector);
        return !!this.DOM;
    }

    render() {
        if (!this.isValidSelector()) {
            throw new Error('Blogas selektorius');
        }

        // if (!this.findTargetElement()) {
        //     throw new Error('Nerasta vieta');
        // }


        let HTML = '';

        for (let i = 0; i < 6; i++) {
            HTML += `<div class="col-12 col-md-6 col-lg-4">
                        <i class="fa fa-globe"></i>
                        <h3>Labas</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, rem!</p>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
    }
}

export { Services }