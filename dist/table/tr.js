'use strict';Object.defineProperty(exports,'__esModule',{value:!0});exports.Tr=void 0;var _react=require('react'),_react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Tr=exports.Tr=function Tr(_ref){var a=_ref.fields,b=_ref.filterable,c=_ref.length,d=_ref.id,e=_ref.idx,f=_ref.th,g=[],h=0;if(f&&c&&d&&b)for(;h<c;)g.push(_react2.default.createElement('th',{key:''+d+h},_react2.default.createElement('input',{className:h==c-1?'flt_s':'flt',id:'flt'+h+'_'+d,onKeyUp:appFuncs.filterTable.Filter,placeholder:'Filter',type:'text'}))),h++;else if(a.length&&f)a.forEach(function(j,k){g.push(_react2.default.createElement('th',{key:''+j+k},j))});else if(!appFuncs._.isEmpty(a))for(var j in a)g.push(_react2.default.createElement('td',{key:''+d+a[j]+e},a[j]));return _react2.default.createElement('tr',null,g)};Tr.propTypes={fields:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array,_react2.default.PropTypes.object]),filterable:_react2.default.PropTypes.bool,id:_react2.default.PropTypes.string,idx:_react2.default.PropTypes.number,length:_react2.default.PropTypes.number,th:_react2.default.PropTypes.bool};exports.default=Tr;