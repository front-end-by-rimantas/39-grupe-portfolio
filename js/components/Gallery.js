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

        // atfiltruoti ir pasilikti tik validzius duomenis [{}, 1, {}] -> [{}, {}]
        this.render();
        this.events();
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
            if (typeof item !== 'object'
                || item === null
                || !item.tags) {
                continue;
            }
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
            if (typeof item !== 'object'
                || item === null) {
                continue;
            }

            let actionsHTML = '';

            if (this.lightboxEnabled) {
                actionsHTML += '<i class="fa fa-search-plus"></i>';
            }

            if (item.url) {
                actionsHTML += '<i class="fa fa-chain-broken"></i>';
            }

            HTML += `<div class="card">
                        <img src="./img/portfolio/${item.img}" alt="Image">
                        <div class="overlay">
                            <p>${item.title}</p>
                            ${actionsHTML ? `<div class="actions">${actionsHTML}</div>` : ''}
                        </div>
                    </div>`;
        }

        return HTML;
    }

    render() {
        this.DOM.classList.add('gallery');
        this.DOM.innerHTML = `<div class="filter">${this.filterHTML()}</div>
                              <div class="list">${this.listHTML()}</div>`;
    }

    events() {
        const filterTagsDOM = this.DOM.querySelectorAll('.filter > .item');
        const listCardsDOM = this.DOM.querySelectorAll('.list > .card');

        for (const filterTagDOM of filterTagsDOM) {
            filterTagDOM.addEventListener('click', () => {
                const tag = filterTagDOM.textContent;

                for (let i = 0; i < this.data.length; i++) {
                    const cardData = this.data[i];
                    if (cardData.tags.includes(tag) || tag === 'All') {
                        listCardsDOM[i].classList.remove('hidden');
                    } else {
                        listCardsDOM[i].classList.add('hidden');
                    }
                }
            })
        }
    }
}

export { Gallery }