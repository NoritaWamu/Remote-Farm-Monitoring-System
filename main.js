class MyHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = 
        
        '<!-- top bar logo -->'+
		'<div class="logo">'+
			'<img src="../images/farm 2.jpg">'+
		'</div>'+

		'<!-- top bar heading -->'+
		'<div class="page-heading">'+
			'<h1>THE COUNTRY COTTAGE FARM</h1>'+
		'</div>'+

		'<!-- top bar links -->'+
		'<div class="links">'+
			'<a href="index.html">Home</a>'+
		'</div>'+

		'<div class="links">'+
			'<a href="login.html">Admin</a>'+
		'</div>'+

		'<div class="links">'+
			'<a href="login.html">Data Collectors</a>'+
		'</div>'+

		'<div class="links">'+
			'<a href="login.html">Farm Managers</a>'+
		'</div>'+

        '<!-- sidebar -->'+
		'<div class="sidebar">'+

			'<!-- top bar links -->'+
			'<div>'+
				'<a href="index.html">Home</a>'+
			'</div>'+

			'<div>'+
				'<a href="admin.html">Admin</a>'+
			'</div>'+

			'<div>'+
				'<a href="collectors.html">Data Collectors</a>'+
			'</div>'+

			'<div>'+
				'<a href="managers.html">Farm Managers</a>'+
			'</div>'+

		'</div>'

    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = 
        ' <div>' +
            '<p> @Copyright Saucy Farms 2022 - All right Reserved</p>' +
        '</div>';
    }
}

customElements.define('my-footer', MyFooter)