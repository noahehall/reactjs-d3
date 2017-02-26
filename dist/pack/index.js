'use strict';Object.defineProperty(exports,'__esModule',{value:!0});exports.zoom=exports.zoomTo=void 0;exports.default=Pack;var _pack=require('./pack.js'),_hierarchy=require('./hierarchy.js'),_nodesarray=require('./nodesarray.js'),_labelsarray=require('./labelsarray'),_react=require('react'),_react2=_interopRequireDefault(_react),_d=require('d3'),d3=_interopRequireWildcard(_d);function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var view=void 0;var zoomTo=exports.zoomTo=function(_ref){var a=_ref.chartWidth,b=_ref.v,c=_ref.g,f=_ref.gx,h=_ref.gy,j=_ref.cr,l=_ref.circle;view=b;var m=a/b[2],n=(f-b[0])*m,o=(h-b[1])*m;//g.setAttribute("transform", `translate(${x}, ${y}) scale(2 1.5) translate(${-x}, ${-y})`);
l.setAttribute('r',j*m)};var zoom=exports.zoom=function(_ref2){var a=_ref2.chartWidth,b=_ref2.margins,c=_ref2.g,f=_ref2.gx,h=_ref2.gy,j=_ref2.cr,l=_ref2.circle;return d3.transition().duration(750).tween('zoom',function(){var n=d3.interpolateZoom(view,[f,h,2*j+(b.left+b.right)]);return function(o){return zoomTo({chartWidth:a,v:n(o),g:c,gx:f,gy:h,cr:j,circle:l})}})};function Pack(_ref3){var a=_ref3.chartWidth,b=_ref3.chartHeight,c=_ref3.colorScale,f=_ref3.data,h=_ref3.id,j=_ref3.labels,l=_ref3.margins,n=(0,_hierarchy.hierarchy)({data:f}),o=(0,_pack.pack)({chartWidth:a})(n).descendants(),p=(0,_labelsarray.labelsArray)({nodes:o,labels:j,root:n}),q=(0,_nodesarray.nodesArray)({nodes:o,colorScale:c,handleZoom:function m(r){r.stopPropagation();var s=void 0,u=r.currentTarget.getAttribute('transform').split('(')[1].split(',').map(function(z){return parseFloat(z)}),w=r.currentTarget.firstChild;return'circle'===w.nodeName&&(s=w.getAttribute('r')),s?zoom({chartWidth:a,g:r.currentTarget,margins:l,gx:u[0],gy:u[1],cr:s,circle:w}):null},labels:j,root:n,chartWidth:a,chartHeight:b,id:h});return view=[n.x,n.y,n.r],_react2.default.createElement('g',null,q)}