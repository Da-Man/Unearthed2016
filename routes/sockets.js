var sqlite3 = require('sqlite3').verbose();


function createQuery(data) {
	variableList = ['SY21633A.MV', 'SY21633B.MV', 'SY21633C.MV', 'SY23005.MV', 'SY23015.MV', 'CR002RUN', 'CR003RUN', 'FD2003VSD.MV', 'FD2004VSD.MV', 'FD2005VSD.MV', 'SN2001.PV', 'SN2002.PV', 'FD2007VSD.MV', 'CV2010VSD.MV', '3311PI591.PV', '3311SI614B.PV', '3311SI614A.PV', '3311FV380B.PV', '3311ZI616.PV', '1101047CL1.CPV2', 'WIC22026.SV', 'SIC22371.MV', 'FI22302.PV', 'FI22310.PV', 'FI22963', 'FY22302CL2.CPV1', '3311FV690B.PV'];
	query = ['SELECT "3311WI671.PV" FROM surge WHERE']

	modifier = 0.05;

	for (var i = 0; i < variableList.length; i++) {
		//query_line = variableList[i] + '>= ' + (data[variableList[i]] * (1-modifier)).toString() + 'AND' + variableList[i] + "<=" (data[variableList[i]] * (1 + modifier)).toString();
		query_line = '';
		query.push(query_line);
	}

	console.log(query);

	return query;
}


function doQuery(query) {

}

module.exports = {
	"run" : function (io) {
		io.on ('connection', function (socket) {
			socket.on('setQuery', function(data)  {
				createQuery();

			});
		});
	}
}
