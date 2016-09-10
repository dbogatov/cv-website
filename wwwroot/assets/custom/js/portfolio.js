var portfolio = function () {


	// we are on a portfolio page	
	if ($("#posts").length > 0) {

		var $container = $("#posts");

		var renderCards = function (predicate) {

			$container.fadeOut(300, function () {
				$container.empty();

				[
					{
						projectType: "web ios",
						imageSrc: "assets/custom/images/shevastream.png",
						title: "ShevaStream",
						date: "Present",
						description: "ShevaStream E-Commerce / Internet Shop (My startup)",
						tryRef: "https://shevastream.com"
					},
					{
						projectType: "web",
						imageSrc: "assets/custom/images/mandelbrot.png",
						title: "Mandelbrot",
						date: "May, 2016",
						description: "Mandelbrot fractal interactive generator",
						tryRef: "https://personal.dbogatov.org/Project/Mandelbrot"
					},
					{
						projectType: "web",
						imageSrc: "assets/custom/images/matters-proj.png",
						title: "MATTERS",
						date: "May, 2016",
						description: "Major Qualifying Project - MATTERS",
						tryRef: "http://matters.mhtc.org"
					},
					{
						projectType: "web",
						imageSrc: "assets/custom/images/pentago.png",
						title: "Pentago",
						date: "December, 2015",
						description: "Pentago game - Webware project",
						tryRef: "https://personal.dbogatov.org/Project/Pentago"
					},
					{
						projectType: "ios",
						imageSrc: "assets/custom/images/banker.png",
						title: "Banker Game Assistant",
						date: "February, 2015",
						description: "This is an iOS application serving as a banker for board games. It keeps track of all your money accounts.",
						tryRef: "https://personal.dbogatov.org/Project/Banker"
					},
					{
						projectType: "web",
						imageSrc: "assets/custom/images/minesweeper.png",
						title: "Minesweeper",
						date: "September, 2014",
						description: "The Minsweeper is a Web Application resembling a well-known Microsoft Minesweeper.",
						tryRef: "https://personal.dbogatov.org/Project/Minesweeper"
					},
					{
						projectType: "ios",
						imageSrc: "assets/custom/images/wpicalendar.png",
						title: "WPI Event Creator",
						date: "April, 2014",
						description: "This is an iOS application allowing WPI students to create appointment events with faculty easily and quickly.",
						tryRef: "https://personal.dbogatov.org/Project/WPICalendar"
					}
				]
					.filter(predicate)
					.forEach(function (element, index, array) {
						$container.append(template(element));
					});

				$(".description").each(function (index, element) {
					var succinct = function (element, options) {

						var settings = $.extend({
							size: 240,
							omission: "...",
							ignore: true
						}, options);

						return element.each(function (index, eachElement) {

							var textDefault,
								textTruncated,
								elements = $(eachElement),
								regex = /[!-\/:-@\[-`{-~]$/,
								init = function () {
									elements.each(function () {
										textDefault = $(eachElement).html();

										if (textDefault.length > settings.size) {
											textTruncated = $.trim(textDefault)
												.substring(0, settings.size)
												.split(" ")
												.slice(0, -1)
												.join(" ");

											if (settings.ignore) {
												textTruncated = textTruncated.replace(regex, "");
											}

											$(eachElement).html(textTruncated + settings.omission);
										}
									});
								};
							init();
						});
					};


					if ($(element).text().length > 70) {

						var title = $(element).text();

						succinct($(element), {
							size: 70
						}).append("<a href='#' data-toggle='tooltip' data-placement='top' title=\"" + title + "\">view all</a>");
					}
				});

				$(function () {
					$('[data-toggle="tooltip"]').tooltip();
				})

				$container.fadeIn(300, function () {
					resizeHandler();
				});

			});
		};

		var template = _.template(" \
			<div class=\"col-sm-6 col-md-4 col-lg-3 project-thumbnail <%= projectType %>\" style=\"padding-top:10px\" > \
				<div class=\"thumbnail\" style=\"height: 460px\"> \
					<img src=\"<%= imageSrc %>\" alt=\"Here should have been an image\" style=\"max-height:255px\" class=\"img-rounded\"> \
					<div class=\"fixHeight\"></div> \
					<div class=\"caption\"> \
						<h3 class=\"projectTitle\"><%= title %></h3> \
						<h5><%= date %></h5> \
						<p class=\"description\" style=\"text-align: justify;\"><%= description %></p> \
						<p><a href=\"<%= tryRef %>\" target=_blank class=\"btn btn-primary\" style=\"margin-bottom: 10px;\" role=\"button\">Try it!</a> <a href=\"feedback.html\" style=\"margin-bottom: 10px;\" class=\"btn btn-default\" role=\"button\">Interested in this project?</a></p> \
					</div> \
				</div> \
			</div> \
		");

		renderCards(function (element) { return true });

		// filter items on button click
		$('#isotope-filters').on('click', 'a', function () {
			var filterValue = $(this).attr('data-filter');

			var predicate =
				filterValue === "*" ?
					function (element) { return true } :
					function (element) { return element.projectType.includes(filterValue) };

			renderCards(predicate);
		});

		var resizeHandler = function () {
			var maxHeight = 0;
			$(".thumbnail").each(function (index, element) {
				var height = 0;

				$(element).children().each(function (indexInner, elementInner) {
					height += $(elementInner).height();
				});

				maxHeight = height > maxHeight ? height : maxHeight;
			});

			$(".thumbnail").height(maxHeight);

			var height = $(".thumbnail").first().height();
			$(".fixHeight").each(function (index, element) {
				$(element).height(height - $(element).prev().height() - $(element).next().height() - 25);
			});
		}
		$(window).resize(resizeHandler);
	}

};

$(document).ready(portfolio);
$(document).on('pjax:complete', portfolio);