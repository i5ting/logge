var assert = require('chai').assert;
var expect = require('chai').expect;
require('chai').should();

var console = require('../index');

function captureStream(stream){
  var oldWrite = stream.write;
  var buf = '';
  stream.write = function(chunk, encoding, callback){
    buf += chunk.toString(); // chunk is a String or Buffer
    oldWrite.apply(stream, arguments);
  }

  return {
    unhook: function unhook(){
     stream.write = oldWrite;
    },
    captured: function(){
      return buf;
    }
  };
}


describe('Console', function(){
	var hook;
	
  before(function() {
    // runs before all tests in this block
  })
  after(function(){
    // runs after all tests in this block
  })
  beforeEach(function(){
    // runs before each test in this block
		hook = captureStream(process.stdout);
  })
  afterEach(function(){
    // runs after each test in this block
		hook.unhook(); 
  })

  describe('#debug()', function(){
    it('should return string when debug = true;', function(){
			
			console.debug = true;
			console.log("debug = true;");
          
			assert.equal(hook.captured(),'debug = true;\n');
    })
		
    it('should return empty string when debug = false;', function(){
			
			console.debug = false;
			console.log("debug = true;");
          
			assert.equal(hook.captured(),'');
    })
  })
})