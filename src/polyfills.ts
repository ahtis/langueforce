import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

if(ENV === 'production') {

} else {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}