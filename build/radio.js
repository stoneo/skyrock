'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var icy=require('icy');var lame=require('lame');var Speaker=require('speaker');var Radio=function(){function Radio(channel){_classCallCheck(this,Radio);this.channel=channel;}_createClass(Radio,[{key:'title',value:function title(){var _this=this;return new Promise(function(resolve){setTimeout(function(){icy.get(_this.channel,function(res){res.on('metadata',function(metadata){var parsed=icy.parse(metadata);resolve(parsed.StreamTitle);});});},1000);});}},{key:'listen',value:function listen(){var _this2=this;this.reader=new Promise(function(resolve){icy.get(_this2.channel,function(res){res.pipe(new lame.Decoder()).pipe(new Speaker());_this2.state='open';resolve(res);});});return this.reader;}},{key:'close',value:function close(){var _this3=this;this.reader.then(function(reader){_this3.state='close';reader.unpipe();});}}]);return Radio;}();exports.default=Radio;