class Error {
    render() {
        const html = `<div class="error-container"><div class="error-message"><img src="img/error.jpg"/></div></div>`;
        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();