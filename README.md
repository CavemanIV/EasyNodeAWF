Easy Alfred Workflow creator using NodeJS
==========

An simple library helps to quickly create [Alfred](http://www.alfredapp.com/) Workflow using JavaScript!

Note, this project is NOT finished thus currently not usable yet.

## Prerequisite and Installation##

* First since we are using JS hence a NodeJS has to be installed

* You can drop the plugin into Alfred then modify it, or create a fresh workflow by following:

1. Goto *Alfred Setting* --> *Workflow*, click + button and add an blank workflow

2. Add an *Inputs* --> *Script Filter* (Basically a script filter shows result inside alfred little tableview rather than open other app, you can find more description [here](http://support.alfredapp.com/workflows:config:inputs-script-filter)), feel free to name keyword. You may notice **script** textarea, we will fill it in step 5.

3. Right click workflow you just created and click 'Show in Finder', copy projects there, do npm install.

4. Write your command and search logic in *xxxx.js*, a sample file named *declared.js* is provided, it is just a js object indicate the command path and endpoint functions defines where to fetch and what to present search result.

5. Go back to Alfred Settings, configure bash script as:
```
#!bash
export WORKFLOW_DEFINITION_FILE="[YOUR SEARCH LOGIC JS FILE PATH]"
export CMD_SEPERATOR="[STRING AS SEPERATOR TO CUT DOWN SUBCOMMAND]"

/usr/local/bin/node index.js "{query}"
```

6. Try it
