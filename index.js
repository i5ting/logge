function logger(){
	//init
}

logger.prototype.debug = false;

logger.prototype.log = function(t){
	if(this.debug){
		console.log(t);
	}
}

logger.prototype.info = function(t){
	if(this.debug){
		console.info(t);
	}
}

logger.prototype.error = function(t){
	if(this.debug){
		console.error(t);
	}
}

logger.prototype.warn = function(t){
	if(this.debug){
		console.warn(t);
	}
}

logger.prototype.profile = function(t){
	if(this.debug){
		console.profile(t);
	}
}

logger.prototype.profileEnd = function(){
	if(this.debug){
		console.profileEnd();
	}
}

logger.prototype.trace = function(t){
	if(this.debug){
		console.trace(t);
	}
}

logger.prototype.dir = function(t){
	if(this.debug){
		console.dir(t);
	}
}

logger.prototype.group = function(t){
	if(this.debug){
		console.group(t);
	}
}

logger.prototype.groupEnd = function(){
	if(this.debug){
		console.groupEnd();
	}
}

logger.prototype.time = function(t){
	if(this.debug){
		console.time(t);
	}
}

logger.prototype.timeEnd = function(t){
	if(this.debug){
		console.timeEnd(t);
	}
}

logger.prototype.set_log_request = function(t){
	require('request').debug = t;
}

module.exports = new logger();
