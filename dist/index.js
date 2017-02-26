'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();var _bars=require('./barchart/bars.js'),_lines=require('./linechart/lines.js'),_slices=require('./piechart/slices.js'),_dots=require('./scatterplot/dots.js'),_svg=require('./svg'),_axes=require('./lib/axes.js'),axes=_interopRequireWildcard(_axes),_data=require('./lib/data.js'),dataFunctions=_interopRequireWildcard(_data),_scales=require('./lib/scales.js'),scales=_interopRequireWildcard(_scales),_react=require('react'),_react2=_interopRequireDefault(_react),_table=require('./table'),_index=require('./forcelayout/index.js'),_index2=_interopRequireDefault(_index),_index3=require('./pack/index.js'),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}/**
 * Represents a Chart
 * @constructor
 */var Chart=function(_React$Component){function Chart(a){_classCallCheck(this,Chart);// default dimensions for isomorphic rendering
// is updated client-side on mount + browser resizes
var _this=_possibleConstructorReturn(this,(Chart.__proto__||Object.getPrototypeOf(Chart)).call(this,a));return _this.state={containerHeight:200,containerWidth:200},_initialiseProps.call(_this),_this.state={containerHeight:200,containerWidth:200},_this}return _inherits(Chart,_React$Component),_createClass(Chart,null,[{key:'defaultProps',get:function get(){return{// required for line chart
// group data by a specific property
chartDataGroupBy:'',// bar|scatterplot|pie|line|table
// scatterplot: requires x and y values to be integers
chartType:'',// one of d3 color schemes, e.g. schemeCategory10|20|20b|20c or compatible object
// @see ./lib/scales.js
colorScaleScheme:'',// one of [basic, chromatic, sequential, random]
// @see ./lib/scales.js
colorScaleType:'',// data for this chart
data:[],// used to create labels for bar charts
// @see ./lib/scales.js (passed in as 'labels' to getXScale())
datumLabels:[],// only applies to chartType='table'
// @see ./table/index.js
filterable:!1,id:'reactjs-d3-v4-universal',// used for chart margins to place scales
// @see this file and ./lib/scales.js
margins:{},// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
// @see ./svg/index.js
preserveAspectRatio:'xMinYMin meet',// if chartType = 'table'
// @see ./table/index.js
sortable:!1,// should we include an xAxis for this chart
// @see ./lib/aces.jjs
xAxis:!1,// the text we should use for the x axis, defaults to the xValue provided in the data
// @see ./lib/axes.js
xAxisLabel:'',// creates an X-Scale for bar, line, and scatterplot charts
xScale:!1,// required for line chart
xScaleTime:!1,// required for line chart https://github.com/d3/d3-time-format/blob/master/README.md#locale_format
xScaleTimeFormat:'',xValue:'',// if this chart requires a y-axis
yAxis:!1,// the value to use for y axis label, defaults to
yAxisLabel:'',// if this chart requires a scale on the y dimension
yScale:!1,// used for pie chart slice arc
yValue:''}}}]),_createClass(Chart,[{key:'componentDidMount',value:function componentDidMount(){'table'===this.props.chartType&&(appFuncs.filterTable.setFilterGrid('table'),appFuncs.sortTable.init()),this.setSize(),'undefined'!=typeof window&&window.addEventListener('resize',this.setSize,!1),this.renderChart()}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(a,b){// only update if state or props have changed
return!appFuncs._.isEqual(b,this.state)||!appFuncs._.isEqual(a,this.props)}},{key:'componentWillUnmount',value:function componentWillUnmount(){'undefined'!=typeof window&&window.removeEventListener('resize',this.setSize)}/**
   * retrieves container dimensions from client and updates state which triggers redraw
   *//**
   * moves SVG container into its parent
   */},{key:'render',value:function render(){return appFuncs._.isEmpty(this.props.data)?(appFuncs.logError({data:this.props.data,loc:__filename,msg:'You need data to create a chart, returning null'}),null):this.renderChart()}}]),Chart}(_react2.default.Component);Chart.propTypes={chartDataGroupBy:_react2.default.PropTypes.string,chartType:_react2.default.PropTypes.string,colorScaleScheme:_react2.default.PropTypes.string,colorScaleType:_react2.default.PropTypes.string,data:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array,_react2.default.PropTypes.object]),datumLabels:_react2.default.PropTypes.array,filterable:_react2.default.PropTypes.bool,id:_react2.default.PropTypes.string,margins:_react2.default.PropTypes.object,preserveAspectRatio:_react2.default.PropTypes.string,sortable:_react2.default.PropTypes.bool,xAxis:_react2.default.PropTypes.bool,xAxisLabel:_react2.default.PropTypes.string,xScale:_react2.default.PropTypes.bool,xScaleTime:_react2.default.PropTypes.bool,xScaleTimeFormat:_react2.default.PropTypes.string,xValue:_react2.default.PropTypes.string,yAxis:_react2.default.PropTypes.bool,yAxisLabel:_react2.default.PropTypes.string,yScale:_react2.default.PropTypes.bool,yValue:_react2.default.PropTypes.string};var _initialiseProps=function(){var _this2=this;this.setSize=function(){var a=void 0,b=void 0;// TODO: move all try blocks outside of this function
try{a=_this2.container.offsetHeight}catch(c){a=_this2.state.containerHeight}try{b=_this2.container.offsetWidth}catch(c){b=_this2.state.containerWidth}return _this2.setState({containerHeight:a,containerWidth:b}),!0},this.getVisualContainerTransform=function(_ref){var a=_ref.chartHeight,b=_ref.chartType,c=_ref.chartWidth;switch(b.toLowerCase()){case'pie':return'translate('+[c/2,a/2]+')';default:return'translate(0, 0)';}},this.renderChart=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:_this2.state.containerWidth,b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:_this2.state.containerHeight,c=_this2.props.chartType,d=void 0;/**
     * maps the chart type to required chart function
     * TODO: move to lib directory
     */switch(c.toLowerCase()){case'pie':d=_slices.PieSlices;break;case'bar':d=_bars.Bars;break;case'scatterplot':d=_dots.ScatterPlotDots;break;case'line':d=_lines.Lines;break;case'table':d=_table.Table;break;case'forcedirectedgraph':d=_index2.default;break;case'pack':d=_index4.default;break;default:return appFuncs.logError({data:[c,_this2.props.data],loc:__filename,msg:'did not find chart type '+c+', returning null'}),null;}// initialize variables required for chart
var e=b-(_this2.props.margins.top+_this2.props.margins.bottom),f=a-(_this2.props.margins.left+_this2.props.margins.right),g=_this2.props.colorScaleScheme?scales.colorScale({chartDataGroupBy:_this2.props.chartDataGroupBy,colorScaleScheme:_this2.props.colorScaleScheme,colorScaleType:_this2.props.colorScaleType}):null,h=dataFunctions.format({chartDataGroupBy:_this2.props.chartDataGroupBy,chartType:_this2.props.chartType,data:_this2.props.data,xScaleTime:_this2.props.xScaleTime,xScaleTimeFormat:_this2.props.xScaleTimeFormat,xValue:_this2.props.xValue}),i='undefined'!=typeof document,j=_this2.props.xAxis?axes.getXAxisLabel({chartDataGroupBy:_this2.props.chartDataGroupBy,transform:'rotate(0)',x:a/2-_this2.props.margins.left,xAxisLabel:_this2.props.xAxisLabel||_this2.props.xValue,y:b}):null,k=_this2.props.xScale?scales.getXScale({chartDataGroupBy:_this2.props.chartDataGroupBy,chartHeight:e,chartType:_this2.props.chartType,chartWidth:f,data:h,labels:_this2.props.datumLabels,margins:_this2.props.margins,svgWidth:a,xScaleTime:_this2.props.xScaleTime,xScaleTimeFormat:_this2.props.xScaleTimeFormat,xValue:_this2.props.xValue}):null,l=_this2.props.yAxis?axes.getYAxisLabel({chartDataGroupBy:_this2.props.chartDataGroupBy,transform:'rotate(-90)',// x & y flip because of rotation
x:-b/2-_this2.props.margins.top,y:'1em',yAxisLabel:_this2.props.yAxisLabel||_this2.props.yValue}):null,m=_this2.props.yScale?scales.getYScale({chartDataGroupBy:_this2.props.chartDataGroupBy,chartHeight:e,chartType:_this2.props.chartType,chartWidth:f,data:h,margins:_this2.props.margins,svgHeight:b,yValue:_this2.props.yValue}):null;// only create X and Y axis on client
_this2.props.yAxis&&m&&i&&axes.getYAxis({id:_this2.props.id,thisYScale:m}),_this2.props.xAxis&&k&&i&&axes.getXAxis({id:_this2.props.id,thisXScale:k});// creates chart based on above variable initializations
var n=d({chartDataGroupBy:_this2.props.chartDataGroupBy,chartHeight:e,chartType:_this2.props.chartType,chartWidth:f,colorScale:g,colorScaleScheme:_this2.props.colorScaleScheme,colorScaleType:_this2.props.colorScaleType,data:h,filterable:_this2.props.filterable,id:_this2.props.id,labels:_this2.props.datumLabels,margins:_this2.props.margins,sortable:_this2.props.sortable,xScale:k,xScaleTime:_this2.props.xScaleTime,xScaleTimeFormat:_this2.props.xScaleTimeFormat,xValue:_this2.props.xValue,yScale:m,yValue:_this2.props.yValue}),o='table'===_this2.props.chartType?n:_react2.default.createElement(_svg.SVG,{id:_this2.props.id,preserveAspectRatio:_this2.props.preserveAspectRatio,svgHeight:b,svgWidth:a},_react2.default.createElement('g',{className:'chart-svg-g',height:e,transform:'translate('+_this2.props.margins.left+', '+_this2.props.margins.top+')',width:f},_react2.default.createElement('g',{className:_this2.props.chartType.toLowerCase()+'-visual-container',id:_this2.props.id+'-visual-container',transform:_this2.getVisualContainerTransform({chartHeight:e,chartType:_this2.props.chartType,chartWidth:f})},n)),_this2.props.xAxis&&_react2.default.createElement('g',{className:'x axis',transform:'translate('+_this2.props.margins.left+', '+(e+_this2.props.margins.top)+')'}),j,_this2.props.yAxis&&_react2.default.createElement('g',{className:'y axis',transform:'translate('+_this2.props.margins.left+', '+_this2.props.margins.top+')'}),l,_react2.default.createElement('section',{id:_this2.props.id+'-tooltip',style:{backgroundColor:'black',border:'2px red dashed',borderRadius:'4px',opacity:0,padding:'10px',position:'absolute'}}));// Create an SVG containing the chart
// Return a div containing the SVG
return _react2.default.createElement('div',{className:'chart-container',ref:function ref(p){return _this2.container=p},style:{display:'block',overflow:'scroll',position:'relative',verticalAlign:'top',width:'100%'}},o)}};exports.default=Chart;