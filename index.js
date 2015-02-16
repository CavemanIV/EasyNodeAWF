var wfDefinition = process.env.WORKFLOW_DEFINITION_FILE || 'declare.js',
    cmdSeperator = process.env.CMD_SEPERATOR || ':',
    query = process.argv[2],
    QueryEndpoint = require('./QueryEndpoint'),
    xmlbuilder = require('xmlbuilder');

var queryPath = query.trim().split(cmdSeperator);

/**** Main ****/
if( queryPath.length === 1 ) {
    if( !queryPath[0] ) {
        // no query yet, give hints
        cmdNotFound("Waiting Input",
            "please enter search string or sub command with seperator " +
            "/'" + cmdSeperator + "/'");
    } else {
        // Bare simple query, direct query against first endpoint
        cmdNotFound("Not Implemented direct search",
            "Cannot find direct search endpoint");
    }

} else {
    // Contains sub module query, find it
    var endpoint = wfDefinition,
        i = 0,
        len = queryPath.length;

    for( ; i < len - 1; i++ ) {
        endpoint = endpoint instanceof Object ?
            endpoint[queryPath[i]] :
            undefined;
    }

    // call enpoint function get xml
    if( endpoint instanceof QueryEndpoint ) {

    } else {
        cmdNotFound("Error: Not Recogonize Command",
            "Cannot find sub command " + queryPath[i])
    }
}

function cmdNotFound(title, description) {
    var notFound = xmlbuilder.create('items');
    notFound.ele({
        "#list": [
            { item: {
                "@valid": "NO",
                title: {
                    "#text": title
                },
                subtitle: {
                    "#text": description
                }
              }
            }
        ]
    });

    process.stdout.write(notFound.end());
}
