// Kevin Flanagan
// Web App Week 1
// MIU 1210


var json = {
	"vehicle1": {
		"group": ["Group:", "Streetbike"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Suzuki"],
		"model": ["Model:", "GSXR 1000"],
		"vin": ["VIN:", "JSA348920211B0009"],
		"still in crate": ["Still In Crate:", "Yes"],
		"on the floor": ["Already Built:", "No"],
		"price": ["Price:", "12,549"],
		"date added": ["Date:", "2012-09-10"],
		"notes": ["Notes:", "Hotbodies Undertail Installed"]
	},
	"vehicle2": {
		"group": ["Group:", "ATV"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Yamaha"],
		"model": ["Model:", "YFZ450R"],
		"vin": ["VIN:", "JYA348456211B0776"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "8,999"],
		"date added": ["Date:", "2012-09-01"],
		"notes": ["Notes:", "GTYR Full Exhaust Installed"]
	},
	"vehicle3": {
		"group": ["Group:", "Dirtbike"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Kawasaki"],
		"model": ["Model:", "KX450F"],
		"vin": ["VIN:", "JKA115456211C8954"],
		"still in crate": ["Still In Crate:", "Yes"],
		"on the floor": ["Already Built:", "No"],
		"price": ["Price:", "8,499"],
		"date added": ["Date:", "2012-09-06"],
		"notes": ["Notes:", "Serviced In"]
	},
	"vehicle4": {
		"group": ["Group:", "Dirtbike"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Kawasaki"],
		"model": ["Model:", "KX250F"],
		"vin": ["VIN:", "JKA195882211C1136"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "8,499"],
		"date added": ["Date:", "2012-09-06"],
		"notes": ["Notes:"]
	},
	"vehicle5": {
		"group": ["Group:", "Dirtbike"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Suzuki"],
		"model": ["Model:", "RMZ450"],
		"vin": ["VIN:", "JSA201331275A8954"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "9,239"],
		"date added": ["Date:", "2012-09-15"],
		"notes": ["Notes:", "Serviced In"]
	},
	"vehicle6": {
		"group": ["Group:", "Dirtbike"],
		"year": ["Year:", "2011"],
		"manufacturer": ["Manufacturer:", "Yamaha"],
		"model": ["Model:", "YZ450F"],
		"vin": ["VIN:", "JYA9044665NYM2825"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "7,250"],
		"date added": ["Date:", "2011-06-27"],
		"notes": ["Notes:"]
	},
	"vehicle7": {
		"group": ["Group:", "Streetbike"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Kawasaki"],
		"model": ["Model:", "ZX-10R"],
		"vin": ["VIN:", "JKA9924167NKM3306"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "13,249"],
		"date added": ["Date:", "2012-07-15"],
		"notes": ["Notes:", "Icon Army Tank Bag Installed"]
	},
	"vehicle8": {
		"group": ["Group:", "ATV"],
		"year": ["Year:", "2011"],
		"manufacturer": ["Manufacturer:", "Yamaha"],
		"model": ["Model:", "Raptor 350"],
		"vin": ["VIN:", "JYA3219168NYA8631"],
		"still in crate": ["Still In Crate:", "Yes"],
		"on the floor": ["Already Built:", "No"],
		"price": ["Price:", "4,999"],
		"date added": ["Date:", "2011-03-06"],
		"notes": ["Notes:"]
	},
	"vehicle9": {
		"group": ["Group:", "Cruiser"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Kawasaki"],
		"model": ["Model:", "Vulcan 1700 Vaquero"],
		"vin": ["VIN:", "JKA6319111NKM5121"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "16,199"],
		"date added": ["Date:", "2012-02-01"],
		"notes": ["Notes:", "Demo Ride"]
	},
	"vehicle10": {
		"group": ["Group:", "Cruiser"],
		"year": ["Year:", "2011"],
		"manufacturer": ["Manufacturer:", "Suzuki"],
		"model": ["Model:", "C50T"],
		"vin": ["VIN:", "JSA1184447NKM1773"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "8,799"],
		"date added": ["Date:", "2011-10-03"],
		"notes": ["Notes:", "Serviced In", "OEM Saddlebags Installed"]
	},
	"vehicle11": {
		"group": ["Group:", "Cruiser"],
		"year": ["Year:", "2010"],
		"manufacturer": ["Manufacturer:", "Yamaha"],
		"model": ["Model:", "Royal Star Venture S"],
		"vin": ["VIN:", "JYA1787729NKM4481"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "19,690"],
		"date added": ["Date:", "2010-04-11"],
		"notes": ["Notes:", "Serviced In"]
	},
	"vehicle12": {
		"group": ["Group:", "Cruiser"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Yamaha"],
		"model": ["Model:", "V Star 1300"],
		"vin": ["VIN:", "JYA11545647830270"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "10,490"],
		"date added": ["Date:", "2012-03-18"],
		"notes": ["Notes:", "Serviced In"]
	},
	"vehicle13": {
		"group": ["Group:", "ATV"],
		"year": ["Year:", "2011"],
		"manufacturer": ["Manufacturer:", "Kawasaki"],
		"model": ["Model:", "Brute Force 650 4x4"],
		"vin": ["VIN:", "JKA3810999NKA9549"],
		"still in crate": ["Still In Crate:", "Yes"],
		"on the floor": ["Already Built:", "No"],
		"price": ["Price:", "6,999"],
		"date added": ["Date:", "2011-05-01"],
		"notes": ["Notes:", "Serviced In"]
	},
	"vehicle14": {
		"group": ["Group:", "Scooter"],
		"year": ["Year:", "2011"],
		"manufacturer": ["Manufacturer:", "Yamaha"],
		"model": ["Model:", "Zuma 125"],
		"vin": ["VIN:", "JYA8173328NYM0837"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "2,950"],
		"date added": ["Date:", "2011-01-20"],
		"notes": ["Notes:", "Serviced In"]
	},
	"vehicle15": {
		"group": ["Group:", "ATV"],
		"year": ["Year:", "2011"],
		"manufacturer": ["Manufacturer:", "Kawasaki"],
		"model": ["Model:", "KFX 90"],
		"vin": ["VIN:", "JKA1154151NKA0829"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "2,524"],
		"date added": ["Date:", "2011-03-09"],
		"notes": ["Notes:", "Serviced In"]
	},
	"vehicle16": {
		"group": ["Group:", "Streetbike"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Kawasaki"],
		"model": ["Model:", "Z1000"],
		"vin": ["VIN:", "JKA1154562NKM8853"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "10,299"],
		"date added": ["Date:", "2012-02-29"],
		"notes": ["Notes:", "Serviced In", "Demo Ride"]
	},
	"vehicle17": {
		"group": ["Group:", "Streetbike"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Kawasaki"],
		"model": ["Model:", "Ninja 250R"],
		"vin": ["VIN:", "JKA1154432NKM8866"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "4,099"],
		"date added": ["Date:", "2012-02-13"],
		"notes": ["Notes:", "Serviced In"]
	},
	"vehicle18": {
		"group": ["Group:", "Streetbike"],
		"year": ["Year:", "2010"],
		"manufacturer": ["Manufacturer:", "Kawasaki"],
		"model": ["Model:", "KLX 250SF"],
		"vin": ["VIN:", "JKA1222560UKM2837"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "4,299"],
		"date added": ["Date:", "2011-10-17"],
		"notes": ["Notes:", "Serviced In", "Akrapovic Full System Installed"]
	},
	"vehicle19": {
		"group": ["Group:", "Scooter"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Suzuki"],
		"model": ["Model:", "Burgman 650 Exec."],
		"vin": ["VIN:", "JSA1198632NSM5656"],
		"still in crate": ["Still In Crate:", "Yes"],
		"on the floor": ["Already Built:", "No"],
		"price": ["Price:", "9,899"],
		"date added": ["Date:", "2012-05-10"],
		"notes": []
	},
	"vehicle20": {
		"group": ["Group:", "Streetbike"],
		"year": ["Year:", "2012"],
		"manufacturer": ["Manufacturer:", "Yamaha"],
		"model": ["Model:", "YZF-R6"],
		"vin": ["VIN:", "JYA1144382UYM6530"],
		"still in crate": ["Still In Crate:", "No"],
		"on the floor": ["Already Built:", "Yes"],
		"price": ["Price:", "11,390"],
		"date added": ["Date:", "2012-09-20"],
		"notes": ["Notes:", "Serviced In", "Flush Mounts Installed", "Smoke Windscreen"]
	}
}





