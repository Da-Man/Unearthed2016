module.exports = {
	"run" : function (io) {
			io.on ('connection', function (socket) {
				socket.on('getData', function(callback)  {
					createQuery(function(query) {
						doQuery(query, function(object) {
							socket.emit('recieveData', object);
						});
					});

			});
		});
			data = [
						{"1101047CL1.CPV2": "NULL", "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 0.511292, "3311SI614A.PV": 0, "3311SI614B.PV": 0, "3311ZI616.PV": 0.3273302, "CR002RUN":  "NULL", "CR003RUN": "NULL", "CV2010VSD.MV": 0, "FD2003VSD.MV": "NULL", "FD2004VSD.MV": "NULL", "FD2005VSD.MV": "NULL", "FD2007VSD.MV": 0, "FI22302.PV": -0.3688292, "FI22310.PV": -0.175171, "FI22963": "NULL", "FY22302CL2.CPV1": 137.3126068},
					 	{"1101047CL1.CPV2": "NULL", "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 1.6902115, "3311SI614A.PV": 0, "3311SI614B.PV": 0, "3311ZI616.PV": -0.014796, "CR002RUN":  "NULL", "CR003RUN": "NULL", "CV2010VSD.MV": 0, "FD2003VSD.MV": 0, "FD2004VSD.MV": 92, "FD2005VSD.MV": 0, "FD2007VSD.MV": 0, "FI22302.PV": 319.7393799, "FI22310.PV": 160.236908, "FI22963": "NULL", "FY22302CL2.CPV1": 0.7398983},
						{"1101047CL1.CPV2": 704718, "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 148.5177917, "3311SI614A.PV": 64.9124222, "3311SI614B.PV": 64.4822922, "3311ZI616.PV": -1.7024655, "CR002RUN": "NULL", "CR003RUN": "NULL", "CV2010VSD.MV": 76.0535507, "FD2003VSD.MV": 90.2551041, "FD2004VSD.MV": 56, "FD2005VSD.MV": 10, "FD2007VSD.MV": 63.8080559, "FI22302.PV": 583.894165, "FI22310.PV": 235.6731262, "FI22963": 496.6560364, "FY22302CL2.CPV1": 77.2126465},
						{"1101047CL1.CPV2": 708270, "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 149.5665436, "3311SI614A.PV": 67.9501038, "3311SI614B.PV": 67.6234589, "3311ZI616.PV": -1.7431022, "CR002RUN": "NULL", "CR003RUN": "NULL", "CV2010VSD.MV": 67.0877075, "FD2003VSD.MV": 0, "FD2004VSD.MV": 91.4224167, "FD2005VSD.MV": 0, "FD2007VSD.MV": 56.353672, "FI22302.PV": 484.9697571, "FI22310.PV": 180.7627563, "FI22963": 637.9346924, "FY22302CL2.CPV1": 75.7619171},
					 	{"1101047CL1.CPV2": 727466, "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 80.4948044, "3311SI614A.PV": 28.1226273, "3311SI614B.PV": 28.1684761, "3311ZI616.PV": 0.1269968, "CR002RUN": "NULL", "CR003RUN": "NULL", "CV2010VSD.MV": 0, "FD2003VSD.MV": 80.2120209, "FD2004VSD.MV": 56, "FD2005VSD.MV": 0, "FD2007VSD.MV": 0, "FI22302.PV": -0.5653908, "FI22310.PV": 0.076141, "FI22963": 569.4360962, "FY22302CL2.CPV1": 133.2723999}, 
					 	{"1101047CL1.CPV2": 474612, "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 154.6487122, "3311SI614A.PV": 72.6658249, "3311SI614B.PV": 72.7710114, "3311ZI616.PV": 2.172668, "CR002RUN": "NULL", "CR003RUN": "NULL", "CV2010VSD.MV": 80.7654037, "FD2003VSD.MV": 87.3358765, "FD2004VSD.MV": 56, "FD2005VSD.MV": 10, "FD2007VSD.MV": 67.5716324, "FI22302.PV": 557.7262573, "FI22310.PV": 224.2081146, "FI22963": 641.7697754, "FY22302CL2.CPV1": 78.5925369}, 
					 	{"1101047CL1.CPV2": 474612, "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 156.171524, "3311SI614A.PV": 72.248558, "3311SI614B.PV": 72.3794403, "3311ZI616.PV": 2.0175979, "CR002RUN": "NULL", "CR003RUN": "NULL", "CV2010VSD.MV": 79.3966217, "FD2003VSD.MV": 87.2132416, "FD2004VSD.MV": 56, "FD2005VSD.MV": 10, "FD2007VSD.MV": 66.632782, "FI22302.PV": 558.0578613, "FI22310.PV": 223.9370728, "FI22963": 637.7537231, "FY22302CL2.CPV1": 78.6689682},
					 	{"1101047CL1.CPV2": 474612, "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 156.5384674, "3311SI614A.PV": 72.6541595, "3311SI614B.PV": 72.5960999, "3311ZI616.PV": 2.3993616, "CR002RUN": "NULL", "CR003RUN": "NULL", "CV2010VSD.MV": 80.705368, "FD2003VSD.MV": 87.3943176, "FD2004VSD.MV": 56, "FD2005VSD.MV": 10, "FD2007VSD.MV": 68.126564, "FI22302.PV": 559.4226074, "FI22310.PV": 223.7044373, "FI22963": 644.7401123, "FY22302CL2.CPV1": 78.5466766},
					 	{"1101047CL1.CPV2": 704677, "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 145.5093536, "3311SI614A.PV": 54.9137115, "3311SI614B.PV": 54.6796837, "3311ZI616.PV": -2.590512, "CR002RUN": "NULL", "CR003RUN": "NULL",  "CV2010VSD.MV": 65.0194473, "FD2003VSD.MV": 0, "FD2004VSD.MV": 78.9189148, "FD2005VSD.MV": 10, "FD2007VSD.MV": 54.6163368, "FI22302.PV": 550.1077881, "FI22310.PV": 238.710968, "FI22963": 499.52005, "FY22302CL2.CPV1": 76.3054504},
					 	{"1101047CL1.CPV2": 704677, "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 148.619339, "3311SI614A.PV": 55.0238304, "3311SI614B.PV": 54.4404869, "3311ZI616.PV": -3.0942767, "CR002RUN": "NULL", "CR003RUN": "NULL",  "CV2010VSD.MV": 65.633873, "FD2003VSD.MV": 0, "FD2004VSD.MV": 79.3382492, "FD2005VSD.MV": 10, "FD2007VSD.MV": 55.1324539, "FI22302.PV": 553.2515259, "FI22310.PV": 238.0834808, "FI22963": 500.0655518, "FY22302CL2.CPV1": 76.6361771},
					 	{"1101047CL1.CPV2": 704677, "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 148.2427673, "3311SI614A.PV": 54.9577599, "3311SI614B.PV": 55.0392761, "3311ZI616.PV": -3.2650106, "CR002RUN": "NULL", "CR003RUN": "NULL", "CV2010VSD.MV": 63.470871, "FD2003VSD.MV": 0, "FD2004VSD.MV": 78.9254303, "FD2005VSD.MV": 10, "FD2007VSD.MV": 53.3155327, "FI22302.PV": 550.3571777, "FI22310.PV": 238.470047, "FI22963": 500.518219, "FY22302CL2.CPV1": 76.4377441},
					 	{"1101047CL1.CPV2": 705072, "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 154.961441, "3311SI614A.PV": 78.7332993, "3311SI614B.PV": 78.953537, "3311ZI616.PV": -1.7175254, "CR002RUN": "NULL", "CR003RUN": "NULL",   "CV2010VSD.MV": 90.0847626, "FD2003VSD.MV": 0, "FD2004VSD.MV": 92, "FD2005VSD.MV": 18.7420292, "FD2007VSD.MV": 75.6712036, "FI22302.PV": 599.6542969, "FI22310.PV": 235.7474365, "FI22963": 407.8618164, "FY22302CL2.CPV1": 76.8052826},
					 	{"1101047CL1.CPV2": 705072, "3311FV380B.PV": "NULL", "3311FV690B.PV": "NULL", "3311PI591.PV": 155.3950958, "3311SI614A.PV": 57.4647865, "3311SI614B.PV": 57.5412521, "3311ZI616.PV": -1.8903189, "CR002RUN": "NULL", "CR003RUN": "NULL", "CV2010VSD.MV": 72.0622253, "FD2003VSD.MV": 0, "FD2004VSD.MV": 92, "FD2005VSD.MV": 11.7411184, "FD2007VSD.MV": 60.5322723, "FI22302.PV": 567.6343384, "FI22310.PV": 236.625412, "FI22963": 402.2791443, "FY22302CL2.CPV1": 76.6328964},
				];
			randomIndex = parseInt(getRandomArbitrary(0, data.length - 1));		
			dataAtRandom = data[randomIndex];
			function createQuery(callback) {
				randomIndex = parseInt(getRandomArbitrary(0, data.length - 1));
				dataAtRandom = data[randomIndex];
				variableList = ["1101047CL1.CPV2", "3311FV380B.PV", "3311FV690B.PV", "3311PI591.PV", "3311SI614A.PV", "3311SI614B.PV", "3311ZI616.PV", "CR002RUN", "CR003RUN", "CV2010VSD.MV", "FD2003VSD.MV", "FD2004VSD.MV", "FD2005VSD.MV", "FD2007VSD.MV", "FI22302.PV", "FI22310.PV", "FI22963", "FY22302CL2.CPV1"];
				queryPartOne = 'SELECT "3311WI671.PV", "' + variableList.join('","') + '" FROM surge WHERE ';
				query = [];
				modifier = 1.0;
				

				for (var i = 0; i < variableList.length; i++) {
					if (dataAtRandom[variableList[i]] == 'NULL') {
						//query_line = '"' + variableList[i] + '"' + ' = ' + (data[variableList[i]])
						//query.push(query_line);
					} else {
						higherValue = parseFloat(dataAtRandom[variableList[i]]) + modifier;
						lowerValue = parseFloat(dataAtRandom[variableList[i]]) - modifier;

						query_line = '"' + variableList[i] + '"' + ' >= ' + lowerValue + ' AND ' + '"' + variableList[i] + '"' + " <= " + higherValue;		
						query.push(query_line);
					}		
					
					if(i == variableList.length -1) {
						callback(queryPartOne + query.join(" AND ") + ';');
					}
				}
				
			}

			function getRandomArbitrary(min, max) {
			    return Math.random() * (max - min) + min;
			}


			function add(a, b) {
			    return a + b;
			}

			function doQuery(query, callback) {
				surgeValue = 656;
				rowsAboveSurgeValue = [];

				var sqlite3 = require('sqlite3').verbose();
				var totalSurge = 0;
				var surgeAbove = 0;
				var db = new sqlite3.Database('surge.db', function(err) {
					db.serialize(function() {
						db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='surge'", function (err, surgeTable) {
							if(surgeTable == undefined) {
								db.run('CREATE TABLE surge');
								db.all(query, function(err, rows) {
									if(err) {
										throw err;
									}
									  for (var i = 0; i < rows.length; i++) {
									  	if(rows[i]['3311WI671.PV'] >= surgeValue){
									  		rowsAboveSurgeValue.push(rows[i]);
									 	}
									  }
									callback({
										'perentage' : (rowsAboveSurgeValue.reduce(add, 0)/rows.reduce(add, 0)),
										'rows' : rows,
									});
								});
							} else {
								console.log('doing shit');
								db.all(query, function(err, rows) {
									if(err) {
										throw err;
									}
									console.log(rows);
									for (var i = 0; i < rows.length; i++) {
									 	totalSurge += rows[i]['3311WI671.PV'];
									 	if(i == rows.length - 1) {
									 		console.log('calling back..');
									 		console.log('percentage :' + ((totalSurge/rows.length)/surgeValue))

											callback({
												'percentage' : function(){
													surgePercentage  = (((totalSurge/rows.length)/surgeValue)*100);
													if(surgePercentage >= 100) {
														return 99.99.toString();
													} else	{
														return surgePercentage.toString().substring(0,4);
													}
												}(),
												'data' : dataAtRandom,
											});
									 	}
									}

								});
							}; 
						});
					});
				});

			}
		}
	}