/*
 * @object parseFile
 * @description parseFile module
 */
var parseFile = {
  blocks: [],
  /*
   * @name parse
   * @description takes string of contents and parses out the doc strings
   * @param fileContents string contents
   * @returns a parsed object of functions
   */
  parse: function(fileContents) {
    console.log('==============================');
    this.blocks = [];
    var functionBlock;
    fileContents.split("\n").forEach(function(item) {
      var line = item.trim();
      if(line == "/*") {
        functionBlock = new FunctionBlock();
      };
      if(line == "*/" && functionBlock != undefined) {
        this.blocks.push(functionBlock);
        functionBlock = undefined;
      }
      if(functionBlock != undefined && line[0] == "*" ) {
        functionBlock.addLine(line);
      }
    }.bind(this));
    return this;
  }
};

module.exports = parseFile;
