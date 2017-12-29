var resume = () => {

	// check we are on a correct page
	if ($("#resume").length > 0) {

		var $awardsContainer = $("#awards-container");
		var $timelineContainer = $("#timeline-container");

		var awardsTemplate = _.template(" \
			<div class='col-md-<%= col %> infoblock text-center' data-animation-origin='left' data-animation-duration='400' data-animation-delay='400' data-animation-distance='50px'> \
				<div class='row'> \
					<div class='col-md-12'> \
						<i class='flaticon-graduation9'></i> \
					</div> \
					<div class='col-md-12'> \
						<div class='dividewhite1'></div> \
						<h5 class='font-accident-two-bold uppercase'><%= title %></h5> \
						<div class='post-meta'> \
							<span> \
								<%= where %> \
								<br> \
								<%= when %> \
							</span> \
						</div> \
						<p class='small'> \
							<%= description %> \
						</p> \
					</div> \
				</div> \
				<div class='divider-dynamic'></div> \
			</div> \
		");

		var timelineTemplate = _.template(" \
			<li <%= inverted ? 'class=\"timeline-inverted\"' : ''  %> > \
				<div class='timeline-badge primary'> \
					<i class='flaticon-graduation9'></i> \
				</div> \
				<div class='timeline-panel' data-animation-origin='left' data-animation-duration='400' data-animation-delay='400' data-animation-distance='25px'> \
					<p class='timeline-time fontcolor-invert'> \
						<%= when %> \
					</p> \
					<div class='timeline-photo timeline-<%= image %>'></div> \
					<div class='timeline-heading'> \
						<h4 class='font-accident-two-normal uppercase'><%= where %></h4> \
						<h6 class='uppercase'><%= position %></h6> \
						<!-- <p> \
							<%= description %> \
						</p> --> \
					</div> \
				</div> \
			</li> \
		");

		var awardsData = [{
				col: 3,
				title: "Chair's Fellowship in PhD CS",
				where: "Boston University",
				when: "Fall 2017",
				description: "A selective award that is made to a small number of admitted PhD students based on particularly high potential and promise"
			},
			{
				col: 2,
				title: "Outstanding Junior @ Computer Science",
				where: "Worcester Polytechnic Institute",
				when: "Fall 2015 / Spring 2016",
				description: "One of the most prestigious award a junior can achieve. Award decision is made by most of the CS faculty members."
			},
			{
				col: 2,
				title: "Dean's List",
				where: "Worcester Polytechnic Institute",
				when: "Fall 2013, 2014, 2015, 2016 / Spring 2014, 2015, 2016",
				description: "A per-semester award for outstanding academic performance"
			},
			{
				col: 2,
				title: "Charles O. Thompson Scholar",
				where: "Worcester Polytechnic Institute",
				when: "Fall 2013 / Spring 2014",
				description: "An award for outstanding academic performance during the freshman year"
			},
			{
				col: 3,
				title: "\"The future of Ukraine\"",
				where: "Kyiv, Ukraine",
				when: "December 2012",
				description: "Prestigious national-level award for engineering project presentation"
			}
		];

		var timelineData = [{
				inverted: false,
				when: "Sep 2014 - Dec 2016",
				where: "Worcester Polytechnic Institute, Worcester, MA",
				position: "Senior Assistant",
				image: "01",
				description: ""
			},
			{
				inverted: true,
				when: "Jun 2015 - Aug 2015",
				where: "TradeStation Securities, Plantation, FL",
				position: "Software Developer / Quantitative Analyst",
				image: "02",
				description: ""
			},
			{
				inverted: false,
				when: "Jan 2016 - Oct 2016",
				where: "Worcester Polytechnic Institute, Worcester, MA",
				position: "Software (Web) Developer",
				image: "03",
				description: ""
			},
			{
				inverted: true,
				when: "Feb 2017 - Aug 2017",
				where: "RedwoodEDA, Shrewsbury, MA",
				position: "Web / DevOps Developer",
				image: "04",
				description: ""
			},
			{
				inverted: false,
				when: "Sep 2017 - ...",
				where: "Boston University, Boston, MA",
				position: "CS Data Science PhD Student (Research / Teaching Assitant)",
				image: "05",
				description: ""
			}
		];

		$awardsContainer.empty();
		awardsData
			.forEach(element =>
				$awardsContainer.append(awardsTemplate(element))
			);

		$timelineContainer.empty();
		timelineData
			.forEach(element =>
				$timelineContainer.append(timelineTemplate(element))
			);
	}

};

var portfolio = () => {

	// check we are on a correct page
	if ($("#portfolio").length > 0) {

		var $countersContainer = $("#counters-container");
		var $postsContainer = $("#posts");

		var countersTemplate = _.template(" \
			<div class='col-lg-3 col-sm-6 col-xs-12 count'> \
				<div data-animation-origin='top' data-animation-duration='300' data-animation-delay='200' data-animation-distance='35px'> \
					<div class='count-icon'> \
						<i class='flaticon-photo246'></i> \
					</div> \
					<span class='.integers digit font-accident-two-normal' data-counter='<%= count %>'>0</span> \
					<div class='count-text font-accident-two-bold'><%= title %></div> \
				</div> \
			</div> \
		");

		var postsTemplate = _.template(" \
			<div class='grid-item grid-sizer <%= tags.join(\" \") %> col-xs-6 col-sm-4 col-md-3'> \
				<div class='item-wrap'> \
					<figure class='effect-goliath ui-menu-color02' data-animation-origin='right' data-animation-duration='400' data-animation-delay='400' data-animation-distance='50px'> \
						<div class='popup-call'> \
							<a href='<%= source %>' class='gallery-item' title='View source'> \
								<i class='fa fa-github'></i> \
							</a> \
						</div> \
						<div class='post-image'> \
							<img src='<%= image %>' class='img-responsive' alt='<%= title %>' /> \ \
						</div> \
						<figcaption> \
							<div class='fig-description'> \
								<h3> \
									<%= title %> \
								</h3> \
								<p> \
									<%= tags.map(function(el) { return \"#\" + el; }).join(\" \") %> \
								</p> \
							</div> \
							<a href='<%= url %>'></a> \
						</figcaption> \
					</figure> \
				</div> \
			</div> \
		");

		var countersData = [{
				count: 11,
				title: "Large or medium -scale websites"
			},
			{
				count: 9,
				title: "Interconnected self-setup servers"
			},
			{
				count: 24,
				title: "Landing pages"
			},
			{
				count: 7,
				title: "iOS apps"
			}
		];

		var postsData = [{
				source: "https://github.com/dbogatov/status-site",
				image: "/assets/custom/images/status-site.png",
				title: "Status Site",
				url: "https://status.dbogatov.org",
				tags: ["web"]
			},
			{
				source: "https://github.com/dbogatov/shevastream",
				image: "/assets/custom/images/shevastream.png",
				title: "ShevaStream",
				url: "https://shevastream.com",
				tags: ["web"]
			},
			{
				source: "https://github.com/dbogatov/legacy-website",
				image: "/assets/custom/images/mandelbrot.png",
				title: "Mandelbrot",
				url: "https://legacy.dbogatov.org/Project/Mandelbrot",
				tags: ["web"]
			},
			{
				source: "https://github.com/WPIMHTC",
				image: "/assets/custom/images/matters-proj.png",
				title: "MATTERS",
				url: "http://matters.mhtc.org",
				tags: ["web", "research"]
			},
			{
				source: "https://github.com/dbogatov/legacy-website",
				image: "/assets/custom/images/pentago.png",
				title: "Pentago",
				url: "https://legacy.dbogatov.org/Project/Pentago",
				tags: ["web"]
			},
			{
				source: "https://github.com/dbogatov/monopoly-banker",
				image: "/assets/custom/images/banker.png",
				title: "Banker Game Assistant",
				url: "https://legacy.dbogatov.org/Project/Banker",
				tags: ["ios"]
			},
			{
				source: "https://github.com/dbogatov/legacy-website",
				image: "/assets/custom/images/minesweeper.png",
				title: "Minesweeper",
				url: "https://legacy.dbogatov.org/Project/Minesweeper",
				tags: ["web"]
			},
			{
				source: "https://github.com/dbogatov/wpi-calendar-event-creator",
				image: "/assets/custom/images/wpicalendar.png",
				title: "WPI Event Creator",
				url: "https://legacy.dbogatov.org/Project/WPICalendar",
				tags: ["ios"]
			}
		];

		$countersContainer.empty();
		countersData
			.forEach(element =>
				$countersContainer.append(countersTemplate(element))
			);

		$postsContainer.empty();
		postsData
			.forEach(element =>
				$postsContainer.append(postsTemplate(element))
			);

		var resizeHandler = () => {

			var minHeight = Math.min.apply(Math, $(".post-image").map(function () {
				return $(this).height();
			}));
			$(".post-image").css("max-height", minHeight);

			var grid = $('.grid').isotope({
				itemSelector: '.grid-item',
				percentPosition: true,
				transitionDuration: '0.6s',
				hiddenStyle: {
					opacity: 0
				},
				layoutMode: 'fitRows',
				resizable: false, // disable normal resizing
				visibleStyle: {
					opacity: 1
				},
				masonry: {
					// use outer width of grid-sizer for columnWidth
					columnWidth: '.grid-sizer'
				}
			});
		};

		window.setTimeout(resizeHandler, 500);
	}
};

var resizeTriggered = false;
$(window).resize(() => {
	if (!resizeTriggered) {
		resizeTriggered = true;
		window.setTimeout(
			() => {
				portfolio();
				resizeTriggered = false;
			}, 500);
	}
});

var all = () => {
	$("#credo").text(" \
		I am a PhD student at Boston University on a Computer Science Data Science program. \
		My primary interests are Data Science (databases, distributed computing, big data) and Web-development (back-end). \
		I have started programming in 2010 and I am gradually mastering this skill since then. \
		So far I have had 2 part-time, 1 full-time \
		jobs and I have graduated with high distinction from WPI CS program (class of 2017). \
		Looking forward to new and exciting opportunities. \
	");

	$("#catch-phrase").text("Don't find fault, find a remedy.");
};

var academics = () => {

	// check we are on a correct page
	if ($("#academics").length > 0) {

		$.getJSON("/assets/custom/json/grades.json", grades => {

			var classTemplate = _.template(" \
				<tr class='<%= cellClass %>'> \
					<td><%= term %></td> \
					<td><%= year %></td> \
					<td><%= title %></td> \
					<td><%= grade %></td> \
				</tr> \
			")

			var subreqTemplate = _.template(" \
				<h4 class='text-center'><%= subrequirement %> (GPA: <%= gpa.toFixed(2) %>)</h4> \
				<table class='table table-striped table-bordered table-hover'> \
					<thead> \
						<tr> \
							<th class='header'>Term</th> \
							<th class='header'>Year</th> \
							<th class='header'>Title</th> \
							<th class='header'>Grade</th> \
						</tr> \
					</thead> \
					<tbody> \
						<%= content %> \
					</tbody> \
				</table> \
			");

			var reqTemplate = _.template(" \
				<h3><%= requirement %> Requirements (GPA: <%= gpa.toFixed(2) %>)</h3> \
				<hr> \
				<%= content %> \
			");

			var columnTemplate = _.template(" \
				<div class='col-md-6 col-md-offset-<%= offset %>'> \
					<%= content %> \
				</div> \
			");

			var schoolTemplate = _.template(" \
				<div class='dividewhite6'></div> \
				<div data-animation-origin='top' data-animation-duration='400' data-animation-delay='300' data-animation-distance='30px'> \
						<h3 class='font-accident-two-normal uppercase text-center'><%= fullname %> - <%= degree %></h3> \
						<div class='dividewhite1'></div> \
						<p class='small text-center fontcolor-medium'> \
							<%= graduated ? \"Graduation\" : \"Expected graduation\" %> date - <%= graduation %> \
							<br> \
							GPA: <%= gpa.toFixed(2) %> \
							<br> \
							This report is generated from <a target=\"_blank\" href=\"/assets/custom/json/grades.json\">this JSON file<a/>.\
						</p> \
					</div> \
				<div class='row'> \
					<%= content %> \
				</div> \
				<div class='dividewhite8'></div> \
			");

			grades.forEach(school => {

				school.requirements.forEach(requirement => {

					requirement.subrequirements.forEach(subrequirement => {

						subrequirement.classes.forEach(aclass => {
							aclass.cellClass = aclass.grade === "I" ? "warning" : "success";
							aclass.gpa = aclass.grade === "A" ? 4.0 : (aclass.grade === "B" ? 3.0 : 2.0);

							aclass.sort =
								10 * aclass.year + (
									aclass.term === "C" || aclass.term === "Spring" ?
									1 :
									(aclass.term === "D" ?
										2 :
										(aclass.term === "A" || aclass.term === "Fall" ?
											3 :
											(aclass.term === "B" ? 4 : 0)
										)
									)
								)

						})

						subrequirement.classes.sort((a, b) => a.sort < b.sort);

						subrequirement.sum = subrequirement
							.classes
							.filter(aclass => aclass.grade !== "I")
							.map(aclass => aclass.gpa)
							.reduce((accum, self) => accum + self);

						subrequirement.num = subrequirement.classes.filter(aclass => aclass.grade !== "I").length;
						subrequirement.gpa = subrequirement.sum / subrequirement.num;
					})

					requirement.sum = requirement.subrequirements.map(subrequirement => subrequirement.sum).reduce((accum, self) => accum + self);
					requirement.num = requirement.subrequirements.map(subrequirement => subrequirement.num).reduce((accum, self) => accum + self);
					requirement.gpa = requirement.sum / requirement.num;

					requirement.placementLeft = requirement.requirement === "Major";
				})

				school.sum = school.requirements.map(requirement => requirement.sum).reduce((accum, self) => accum + self);
				school.num = school.requirements.map(requirement => requirement.num).reduce((accum, self) => accum + self);
				school.gpa = school.sum / school.num;
			});

			grades.forEach(school => {

				school.columns = [
					school.requirements.filter(requirement => requirement.placementLeft),
					school.requirements.filter(requirement => !requirement.placementLeft)
				];

				school.columns = school.columns.filter(column => column.length > 0);

			});

			var gradesHtmlContent = grades
				.map(school => {
					school.content = school
						.columns
						.map(column => {
							column.offset = school.school === "BU" ? "3" : "0";

							column.content = column
								.map(requirement => {
									requirement.content = requirement
										.subrequirements
										.map(subrequirement => {
											subrequirement.content = subrequirement
												.classes
												.map(aclass => classTemplate(aclass))
												.reduce((accum, self) => accum + self);

											return subreqTemplate(subrequirement);
										})
										.reduce((accum, self) => accum + self);

									return reqTemplate(requirement);
								})
								.reduce((accum, self) => accum + self);

							return columnTemplate(column);
						})
						.reduce((accum, self) => accum + self)

					return {
						content: schoolTemplate(school),
						school: school.school
					}
				});

			$wpiContainer = $("#wpi");
			$wpiContainer.empty();
			$wpiContainer.html(gradesHtmlContent.filter(school => school.school === "WPI")[0].content);

			$buContainer = $("#bu");
			$buContainer.empty();
			$buContainer.html(gradesHtmlContent.filter(school => school.school === "BU")[0].content);

		});
	}
};


$(document).ready(all);
$(document).on('pjax:complete', all);

$(document).ready(academics);
$(document).on('pjax:complete', academics);

$(document).ready(portfolio);
$(document).on('pjax:complete', portfolio);

$(document).ready(resume);
$(document).on('pjax:complete', resume);
