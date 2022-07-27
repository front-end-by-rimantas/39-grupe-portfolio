class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.lightboxEnabled = false;

        this.init();
    }

    init() {
        if (!this.isValidSelector()
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
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    isValidData() {
        return Array.isArray(this.data) && this.data.length;
    }

    filterHTML() {
        const allTags = ['All'];
        let HTML = `<div class="item active">${allTags[0]}</div>`;

        for (const item of this.data) {
            for (const tag of item.tags) {
                if (!allTags.includes(tag)) {
                    allTags.push(tag);
                    HTML += `<div class="item">${tag}</div>`;
                }
            }
        }

        return HTML;
    }

    listHTML() {
        let HTML = '';

        for (const item of this.data) {
            let actionsHTML = '';

            if (this.lightboxEnabled) {
                actionsHTML += '<i class="fa fa-search-plus"></i>';
            }

            if (item.url) {
                actionsHTML += '<i class="fa fa-chain-broken"></i>';
            }

            HTML += `<div class="card">
                        <img src="#" alt="Image">
                        <div class="overlay">
                            <p>${item.title}</p>
                            ${actionsHTML}
                        </div>
                    </div>`;
        }

        /*
        BE NIEKO
        <div class="overlay">
            <p>Title</p>
        </div>

        TIK LIGHTBOX
        <div class="overlay">
            <p>Title</p>
            <div class="actions">
                <i class="fa fa-search-plus"></i>
            </div>
        </div>

        TIK URL
        <div class="overlay">
            <p>Title</p>
            <div class="actions">
                <i class="fa fa-chain-broken"></i>
            </div>
        </div>

        ABU
        <div class="overlay">
            <p>Title</p>
            <div class="actions">
                <i class="fa fa-search-plus"></i>
                <i class="fa fa-chain-broken"></i>
            </div>
        </div>
        */

        return HTML;
    }

    render() {
        this.DOM.innerHTML = `<div class="filter">${this.filterHTML()}</div>
                              <div class="list">${this.listHTML()}</div>`;
    }
}

export { Gallery }