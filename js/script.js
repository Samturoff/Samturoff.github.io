
function showNav() {
$('#topnav').html(
`
<ul>
	<li class="resources_link"><a href="resources.html">resources</a></li>
	<li class="favorite_foods_link"><a href="#">link</a></li>
	<li class="apple_link"><a href="#">link</a></li>
</ul>
`);
}

function addActiveClass() {
	if($('body.favorite_foods_link')) {
		$('.favorite_foods_link').addClass('active');
} else if($('body.resources'))

function initialize() {
	showNav();
	addActiveClass();	
}

$(initialize());


