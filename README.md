logge
======

a alternate console.log with debug option

[![npm version](https://badge.fury.io/js/logge.svg)](http://badge.fury.io/js/logge)

## Usage

	var console = require('../index');
	console.debug = true;
	console.log("debug = true;");
	
	
or

	var console = require('../index');
	console.debug = false;
	console.log("debug = false, console.log will dump nothing");


## Refference 

- [js调试工具Console命令详解](http://www.jb51.net/article/56504.htm)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本 


## 欢迎fork和反馈

在issue提问或邮件shiren1118@126.com

## License

this gem is released under the [MIT License](http://www.opensource.org/licenses/MIT).
