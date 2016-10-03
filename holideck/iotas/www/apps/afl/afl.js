/*
	@file: apps/afl/afl.js
*/

function afl() {
	
	this.appStart = appStart;
	this.appQuit = appQuit;
	this.pickClub = pickClub;

	this.team_list = team_list;

	var team_list = {

		"swans": 1,
		"blues": 2,
		"magpies": 3,
		"bombers": 4,
		"hawks": 5,
		"crows": 6,
		"cats": 7,
		"giants": 8,
		"kangaroos": 9,
		"saints": 10,
		"lions": 11,
		"eagles": 12,
		"suns": 13,
		"bulldogs": 14,
		"tigers": 15, 
		"dockers": 16,
		"power": 17,
		"demons": 18
	};


	function old_pickClub(team_name) {
		team =  team_name.substring(1);
		console.log("team_name " + team);
		console.log(team_list[team]);
		currentLight.afl(team_list[team]);
	}

	function pickClub(team_name) {
		var team = team_name.substring(1);
		console.log("team_name:" + team + ":");
		var entry = team_list[team] -1;
		console.log('entry: ' + entry);

		// Copy the array of light values to the string
		for (var j=0; j < 50; j++) {
			tr = team_lights[entry][j][0];
			tg = team_lights[entry][j][1];
			tb = team_lights[entry][j][2];
			currentLight.fastset(tr,tg,tb,j);
		}
		currentLight.fastlights();		// Render to the device
	}

	function appStart() {
		console.log("afl.appStart");
		$("head").append('<link rel="stylesheet" href="afl.css" />');
	}
	
	function appQuit() {
		console.log("afl.appQuit");
	}

	// Color definitions
	var WHITE = [ 0xff, 0xff, 0xff ];
	var BLACK = [ 0x00, 0x00, 0x00 ];
	var RED = [ 0xff, 0x00, 0x00 ];
	var BLUE = [ 0x00, 0x00, 0xff ];
	var PURPLE = [ 0xFF, 0x00, 0xFF ];

	// Team definitions
	var BLUES_BLUE = [ 0x00,0x00, 0x80 ];
	var BLUES_WHITE = [ 0xff, 0xff, 0xff ];
	var blues = [
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE,
		BLUES_WHITE,
		BLUES_WHITE,
		BLUES_BLUE,
		BLUES_BLUE
	];

	var BOMBERS_RED = [ 0xff, 0x00, 0x00 ];

	var bombers = [
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED,
		BLACK,
		BLACK,
		BOMBERS_RED,
		BOMBERS_RED
	];

	var BULLDOGS_RED = [ 0xff, 0x00, 0x00 ];
	var BULLDOGS_WHITE = [ 0xff, 0xff, 0xff ];
	var BULLDOGS_BLUE = [ 0x00, 0x00, 0xff ];

	var bulldogs = [
		BULLDOGS_RED,
		BULLDOGS_RED,
		BULLDOGS_WHITE,
		BULLDOGS_WHITE,
		BULLDOGS_BLUE,
		BULLDOGS_BLUE,
		BULLDOGS_RED,
		BULLDOGS_RED,
		BULLDOGS_WHITE,
		BULLDOGS_WHITE,
		BULLDOGS_BLUE,
		BULLDOGS_BLUE,
		BULLDOGS_RED,
		BULLDOGS_RED,
		BULLDOGS_WHITE,
		BULLDOGS_WHITE,
		BULLDOGS_BLUE,
		BULLDOGS_BLUE,
		BULLDOGS_RED,
		BULLDOGS_RED,
		BULLDOGS_WHITE,
		BULLDOGS_WHITE,
		BULLDOGS_BLUE,
		BULLDOGS_BLUE,
		BULLDOGS_RED,
		BULLDOGS_RED,
		BULLDOGS_WHITE,
		BULLDOGS_WHITE,
		BULLDOGS_BLUE,
		BULLDOGS_BLUE,
		BULLDOGS_RED,
		BULLDOGS_RED,
		BULLDOGS_WHITE,
		BULLDOGS_WHITE,
		BULLDOGS_BLUE,
		BULLDOGS_BLUE,
		BULLDOGS_RED,
		BULLDOGS_RED,
		BULLDOGS_WHITE,
		BULLDOGS_WHITE,
		BULLDOGS_BLUE,
		BULLDOGS_BLUE,
		BULLDOGS_RED,
		BULLDOGS_RED,
		BULLDOGS_WHITE,
		BULLDOGS_WHITE,
		BULLDOGS_BLUE,
		BULLDOGS_BLUE,
		BULLDOGS_RED,
		BULLDOGS_RED
	];

	var CATS_BLUE = [ 0x00, 0x00, 0x3F ];
	var CATS_WHITE = [ 0xff, 0xff, 0xff ];

	var cats = [
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE,
		CATS_WHITE,
		CATS_WHITE,
		CATS_BLUE,
		CATS_BLUE
	];

	var CROWS_BLUE = [ 0x00, 0x00, 0x7F ];
	var CROWS_RED = [ 0xff, 0x00, 0x00 ];
	var CROWS_YELLOW = [ 0xff, 0xd7, 0x00 ];

	var crows = [
		CROWS_RED,
		CROWS_RED,
		CROWS_YELLOW,
		CROWS_YELLOW,
		CROWS_BLUE,
		CROWS_BLUE,
		CROWS_RED,
		CROWS_RED,
		CROWS_YELLOW,
		CROWS_YELLOW,
		CROWS_BLUE,
		CROWS_BLUE,
		CROWS_RED,
		CROWS_RED,
		CROWS_YELLOW,
		CROWS_YELLOW,
		CROWS_BLUE,
		CROWS_BLUE,
		CROWS_RED,
		CROWS_RED,
		CROWS_YELLOW,
		CROWS_YELLOW,
		CROWS_BLUE,
		CROWS_BLUE,
		CROWS_RED,
		CROWS_RED,
		CROWS_YELLOW,
		CROWS_YELLOW,
		CROWS_BLUE,
		CROWS_BLUE,
		CROWS_RED,
		CROWS_RED,
		CROWS_YELLOW,
		CROWS_YELLOW,
		CROWS_BLUE,
		CROWS_BLUE,
		CROWS_RED,
		CROWS_RED,
		CROWS_YELLOW,
		CROWS_YELLOW,
		CROWS_BLUE,
		CROWS_BLUE,
		CROWS_RED,
		CROWS_RED,
		CROWS_YELLOW,
		CROWS_YELLOW,
		CROWS_BLUE,
		CROWS_BLUE,
		CROWS_RED,
		CROWS_RED
	];

	var DEMON_BLUE = [ 0x00, 0x00, 0x1f ];
	var DEMON_RED = [ 0xff, 0x00, 0x00 ];

	var demons =[ 
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE,
		DEMON_RED,
		DEMON_RED,
		DEMON_BLUE,
		DEMON_BLUE
	];

	var DOCKERS_PURPLE =  [ 0xFF, 0x00, 0xFF ];
	var DOCKERS_WHITE = [ 0xff, 0xff, 0xff ];

	var dockers = [
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE,
		DOCKERS_WHITE,
		DOCKERS_WHITE,
		DOCKERS_PURPLE,
		DOCKERS_PURPLE
	];


	var GIANTS_ORANGE = [ 0xff, 0xa5, 0x00 ];
	var GIANTS_CHARCOAL = [ 0x02, 0x02, 0x02 ];
	var GIANTS_WHITE = [ 0xff, 0xff, 0xff ];

	var giants = [
		GIANTS_ORANGE,
		GIANTS_ORANGE,
		GIANTS_CHARCOAL,
		GIANTS_CHARCOAL,
		GIANTS_WHITE,
		GIANTS_WHITE,
		GIANTS_ORANGE,
		GIANTS_ORANGE,
		GIANTS_CHARCOAL,
		GIANTS_CHARCOAL,
		GIANTS_WHITE,
		GIANTS_WHITE,
		GIANTS_ORANGE,
		GIANTS_ORANGE,
		GIANTS_CHARCOAL,
		GIANTS_CHARCOAL,
		GIANTS_WHITE,
		GIANTS_WHITE,
		GIANTS_ORANGE,
		GIANTS_ORANGE,
		GIANTS_CHARCOAL,
		GIANTS_CHARCOAL,
		GIANTS_WHITE,
		GIANTS_WHITE,
		GIANTS_ORANGE,
		GIANTS_ORANGE,
		GIANTS_CHARCOAL,
		GIANTS_CHARCOAL,
		GIANTS_WHITE,
		GIANTS_WHITE,
		GIANTS_ORANGE,
		GIANTS_ORANGE,
		GIANTS_CHARCOAL,
		GIANTS_CHARCOAL,
		GIANTS_WHITE,
		GIANTS_WHITE,
		GIANTS_ORANGE,
		GIANTS_ORANGE,
		GIANTS_CHARCOAL,
		GIANTS_CHARCOAL,
		GIANTS_WHITE,
		GIANTS_WHITE,
		GIANTS_ORANGE,
		GIANTS_ORANGE,
		GIANTS_CHARCOAL,
		GIANTS_CHARCOAL,
		GIANTS_WHITE,
		GIANTS_WHITE,
		GIANTS_ORANGE,
		GIANTS_ORANGE
	];

	var HAWKS_GOLD = [ 0xff, 0xa4, 0x03 ];   // blue should be 0x23
	var HAWKS_BROWN = [ 0x57, 0x26, 0x00 ];  // red should be 0x27 and green 0x16

	var hawks = [
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD,
		HAWKS_BROWN,
		HAWKS_BROWN,
		HAWKS_GOLD,
		HAWKS_GOLD
	];

	var KANGAROOS_BLUE = [ 0x00, 0x00, 0x1F ];
	var KANGAROOS_WHITE = [ 0xff, 0xff, 0xff ];

	var kangaroos = [
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE,
		KANGAROOS_WHITE,
		KANGAROOS_WHITE,
		KANGAROOS_BLUE,
		KANGAROOS_BLUE
	];

	var LIONS_MAROON = [0x1f, 0x00, 0x01 ];
	var LIONS_BLUE = [ 0x00, 0x00, 0xff ];
	var LIONS_GOLD = [ 0xff, 0xa4, 0x03 ];

	var lions = [
		LIONS_MAROON,
		LIONS_MAROON,
		LIONS_BLUE,
		LIONS_BLUE,
		LIONS_GOLD,
		LIONS_GOLD,
		LIONS_MAROON,
		LIONS_MAROON,
		LIONS_BLUE,
		LIONS_BLUE,
		LIONS_GOLD,
		LIONS_GOLD,
		LIONS_MAROON,
		LIONS_MAROON,
		LIONS_BLUE,
		LIONS_BLUE,
		LIONS_GOLD,
		LIONS_GOLD,
		LIONS_MAROON,
		LIONS_MAROON,
		LIONS_BLUE,
		LIONS_BLUE,
		LIONS_GOLD,
		LIONS_GOLD,
		LIONS_MAROON,
		LIONS_MAROON,
		LIONS_BLUE,
		LIONS_BLUE,
		LIONS_GOLD,
		LIONS_GOLD,
		LIONS_MAROON,
		LIONS_MAROON,
		LIONS_BLUE,
		LIONS_BLUE,
		LIONS_GOLD,
		LIONS_GOLD,
		LIONS_MAROON,
		LIONS_MAROON,
		LIONS_BLUE,
		LIONS_BLUE,
		LIONS_GOLD,
		LIONS_GOLD,
		LIONS_MAROON,
		LIONS_MAROON,
		LIONS_BLUE,
		LIONS_BLUE,
		LIONS_GOLD,
		LIONS_GOLD,
		LIONS_MAROON,
		LIONS_MAROON
	];

	var magpies = [
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE,
		BLACK,
		BLACK,
		WHITE,
		WHITE
	];

	var POWER_TEAL =[ 0x00, 0x1F, 0x1F  ];  // should be 0, 128, 128 but whatever
	var POWER_BLACK = [ 0x00, 0x00, 0x00 ];
	var POWER_WHITE = [ 0xff, 0xff, 0xff ]; 
	var POWER_SILVER = [ 0x10, 0x10, 0x10 ];

	var power = [
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_BLACK,
		POWER_WHITE,
		POWER_SILVER,
		POWER_TEAL,
		POWER_WHITE
	];

	var SAINTS_RED = [ 0xff, 0x00, 0x00 ];
	var SAINTS_WHITE = [ 0xff, 0xff, 0xff ];
	var SAINTS_BLACK = [ 0x00, 0x00, 0x00 ];

	var saints = [
		SAINTS_RED,
		SAINTS_RED,
		SAINTS_WHITE,
		SAINTS_WHITE,
		SAINTS_BLACK,
		SAINTS_BLACK,
		SAINTS_RED,
		SAINTS_RED,
		SAINTS_WHITE,
		SAINTS_WHITE,
		SAINTS_BLACK,
		SAINTS_BLACK,
		SAINTS_RED,
		SAINTS_RED,
		SAINTS_WHITE,
		SAINTS_WHITE,
		SAINTS_BLACK,
		SAINTS_BLACK,
		SAINTS_RED,
		SAINTS_RED,
		SAINTS_WHITE,
		SAINTS_WHITE,
		SAINTS_BLACK,
		SAINTS_BLACK,
		SAINTS_RED,
		SAINTS_RED,
		SAINTS_WHITE,
		SAINTS_WHITE,
		SAINTS_BLACK,
		SAINTS_BLACK,
		SAINTS_RED,
		SAINTS_RED,
		SAINTS_WHITE,
		SAINTS_WHITE,
		SAINTS_BLACK,
		SAINTS_BLACK,
		SAINTS_RED,
		SAINTS_RED,
		SAINTS_WHITE,
		SAINTS_WHITE,
		SAINTS_BLACK,
		SAINTS_BLACK,
		SAINTS_RED,
		SAINTS_RED,
		SAINTS_WHITE,
		SAINTS_WHITE,
		SAINTS_BLACK,
		SAINTS_BLACK,
		SAINTS_RED,
		SAINTS_RED
	];

	var SUNS_RED = [ 0xff, 0x00, 0x00 ];
	var SUNS_GOLD = [ 0xff, 0xa4, 0x03 ];
	var SUNS_BLUE = [ 0x00, 0x00, 0xff ];

	var suns = [
		SUNS_RED,
		SUNS_RED,
		SUNS_GOLD,
		SUNS_GOLD,
		SUNS_BLUE,
		SUNS_BLUE,
		SUNS_RED,
		SUNS_RED,
		SUNS_GOLD,
		SUNS_GOLD,
		SUNS_BLUE,
		SUNS_BLUE,
		SUNS_RED,
		SUNS_RED,
		SUNS_GOLD,
		SUNS_GOLD,
		SUNS_BLUE,
		SUNS_BLUE,
		SUNS_RED,
		SUNS_RED,
		SUNS_GOLD,
		SUNS_GOLD,
		SUNS_BLUE,
		SUNS_BLUE,
		SUNS_RED,
		SUNS_RED,
		SUNS_GOLD,
		SUNS_GOLD,
		SUNS_BLUE,
		SUNS_BLUE,
		SUNS_RED,
		SUNS_RED,
		SUNS_GOLD,
		SUNS_GOLD,
		SUNS_BLUE,
		SUNS_BLUE,
		SUNS_RED,
		SUNS_RED,
		SUNS_GOLD,
		SUNS_GOLD,
		SUNS_BLUE,
		SUNS_BLUE,
		SUNS_RED,
		SUNS_RED,
		SUNS_GOLD,
		SUNS_GOLD,
		SUNS_BLUE,
		SUNS_BLUE,
		SUNS_RED,
		SUNS_RED
	];

	var SWANS_RED = [ 0xff, 0x00, 0x00 ];
	var SWANS_WHITE = [ 0xff, 0xff, 0xff ];

	var swans = [
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED,
		SWANS_WHITE,
		SWANS_WHITE,
		SWANS_RED,
		SWANS_RED
	];

	var TIGERS_YELLOW = [ 0xff, 0xd7, 0x00 ];
	var TIGERS_BLACK = BLACK;

	var tigers = [
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW,
		TIGERS_BLACK,
		TIGERS_BLACK,
		TIGERS_YELLOW,
		TIGERS_YELLOW
	];

	var eagles = [
		[ 0x00, 0x00, 0x3F ],
		[ 0x00, 0x00, 0x3F ],
		WHITE,
		[ 0xff, 0xa4, 0x03 ],
		[ 0xff, 0xa4, 0x03 ],
		[ 0x00, 0x00, 0x3F ],
		[ 0x00, 0x00, 0x3F ],
		WHITE,
		[ 0xff, 0xa4, 0x03 ],
		[ 0xff, 0xa4, 0x03 ],
		[ 0x00, 0x00, 0x3F ],
		[ 0x00, 0x00, 0x3F ],
		WHITE,
		[ 0xff, 0xa4, 0x03 ],
		[ 0xff, 0xa4, 0x03 ],
		[ 0x00, 0x00, 0x3F ],
		[ 0x00, 0x00, 0x3F ],
		WHITE,
		[ 0xff, 0xa4, 0x03 ],
		[ 0xff, 0xa4, 0x03 ],
		[ 0x00, 0x00, 0x3F ],
		[ 0x00, 0x00, 0x3F ],
		WHITE,
		[ 0xff, 0xa4, 0x03 ],
		[ 0xff, 0xa4, 0x03 ],
		[ 0x00, 0x00, 0x3F ],
		[ 0x00, 0x00, 0x3F ],
		WHITE,
		[ 0xff, 0xa4, 0x03 ],
		[ 0xff, 0xa4, 0x03 ],
		[ 0x00, 0x00, 0x3F ],
		[ 0x00, 0x00, 0x3F ],
		WHITE,
		[ 0xff, 0xa4, 0x03 ],
		[ 0xff, 0xa4, 0x03 ],
		[ 0x00, 0x00, 0x3F ],
		[ 0x00, 0x00, 0x3F ],
		WHITE,
		[ 0xff, 0xa4, 0x03 ],
		[ 0xff, 0xa4, 0x03 ],
		[ 0x00, 0x00, 0x3F ],
		[ 0x00, 0x00, 0x3F ],
		WHITE,
		[ 0xff, 0xa4, 0x03 ],
		[ 0xff, 0xa4, 0x03 ],
		[ 0x00, 0x00, 0x3F ],
		[ 0x00, 0x00, 0x3F ],
		WHITE,
		[ 0xff, 0xa4, 0x03 ],
		[ 0x00, 0x00, 0x3F ]
	];

	var team_lights = [
		swans,
		blues,
		magpies,
		bombers,
		hawks,
		crows,
		cats,
		giants,
		kangaroos,
		saints,
		lions,
		eagles, 
		suns,
		bulldogs,
		tigers, 
		dockers,
		power,
		demons
	];

}