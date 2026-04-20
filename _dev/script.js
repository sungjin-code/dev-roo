;(function($) {

	var Area = {};

	Area.Skin = (function() {
		var $body = $(document.body),
			$areaSkin = $(".wrap_skin");

		var openMenu = function() {
			$body.addClass("layer_on");
		};

		var closeMenu = function() {
			$body.removeClass("layer_on");
		};

		var init = function() {
			$areaSkin.on("click", ".btn_menu", openMenu);
			$areaSkin.on("click", ".btn_close", closeMenu);
		};

		return {
			init: init
		}
	})();

	Area.Profile = (function() {
		var $areaProfile = $(".area_profile");

		var toggleProfileMenu = function() {
			$areaProfile.toggleClass("on");
		};

		var init = function() {
			$areaProfile.on("click", ".btn_name", toggleProfileMenu);
		};

		return {
			init: init
		}
	})();

	Area.Category = (function() {
		var $areaNavi = $(".area_navi");

		var toggleCategory = function() {
			$areaNavi.toggleClass("on");
		};

		var init = function() {
			$areaNavi.on("click", ".btn_cate", toggleCategory);
		};

		return {
			init: init
		}
	})();


	Area.Search = (function() {
		var $areaSearch = $(".area_search"),
			$input = $areaSearch.find(".tf_search");

		var openSearch = function() {
			$areaSearch.addClass("on");
			$input.focus();
		};

		var leaveSearch = function() {
			if ($input.val() == "") {
				$areaSearch.removeClass("on");
			}
		};

		var init = function() {
			$areaSearch.on("click", ".btn_search", openSearch);
			$input.on("blur", leaveSearch);
		};

		return {
			init: init
		}
	})();

	Area.Comment = (function() {
		var $btnOpen = $(".btn_reply"),
			$fieldReply = $(".fld_reply");

		var changeStatus = function() {
			$btnOpen.toggleClass("on");
		};

		var init = function() {
			if ($fieldReply.is(":visible")) {
				$btnOpen.addClass("on");
			}
		};

		return {
			init: init,
			changeStatus: changeStatus
		}
	})();

	Area.init = function() {
		Area.Skin.init();
		Area.Profile.init();
		Area.Category.init();
		Area.Search.init();
		Area.Comment.init();
	};

	$.Area = Area;

	(function() {
		var $window = $(window);
		var $content = $(".area_view");

		var getSize = function(value) {
			return (value && value.indexOf('%') < 0)? value : null
		};

		var adjustIframeSize = function() {
			var contentWidth = $content.width();
			$content.find("iframe").not("[mapdata]").each(function(i, iframe) {
				var $iframe = $(iframe),
					width = getSize($iframe.attr("width")),
					height = getSize($iframe.attr("height"));

				if (width && height) {
					$iframe.css({
						width: contentWidth + "px",
						height: contentWidth / width * height + "px"
					})
				}
			})
		};

		adjustIframeSize();
		$window.on("orientationchange resize", adjustIframeSize);
	})()

})(jQuery);
