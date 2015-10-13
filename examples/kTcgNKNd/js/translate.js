(function(window, document, $, undefined) {
	var project = {
		init: function() {		
		    project.translate.init();
		},		
		translate: {
	        init: function() {
	            var locale = $('[name="shopperLocale"]').val();
	            if (locale == null || locale === "") {
	                locale = "en_GB";
	            }             
	            var resourceUrl = "/sf/kTcgNKNd/js/resources_" + locale + ".txt";
	            $.ajax({
	                url: resourceUrl,
	                contentType: "application/json; charset=utf-8",
	                dataType: "json",
	                success: function(data) {	                   
	                    $.each(data, function (key, val) {
	                        $(key).html(val);
	                    });
	                    $(".breadcrumb-wrap .bc-item:eq(0) span").append("<i></i>");
	                },	                
	                error: function(xhr, ajaxOptions, thrownError) {
	                    console.log(xhr.status);
	                    console.log(thrownError);
	                }
	            });
	        }      
		}

	};

	// Initialize project
	if(typeof(window.jQuery) === 'undefined' || typeof($) === 'undefined') { console.error('=== No jQuery defined ==='); return; }
	$(document).ready(project.init);

}(window, window.document, window.jQuery));