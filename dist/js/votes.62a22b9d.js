(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["votes"],{"6c35":function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"numOfVotes"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"numOfVotes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"left"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"right"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:59}};i.loc.source={body:"query numOfVotes {\n  numOfVotes {\n    left\n    right\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var o={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function d(e,n){var i={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=o[n]||new Set,d=new Set,r=new Set;t.forEach(function(e){r.add(e)});while(r.size>0){var s=r;r=new Set,s.forEach(function(e){if(!d.has(e)){d.add(e);var n=o[e]||new Set;n.forEach(function(e){r.add(e)})}})}return d.forEach(function(n){var t=a(e,n);t&&i.definitions.push(t)}),i}(function(){i.definitions.forEach(function(e){if(e.name){var n=new Set;t(e,n),o[e.name.value]=n}})})(),e.exports=i,e.exports["numOfVotes"]=d(i,"numOfVotes")},"76c8":function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"about"},[t("h1",[e._v("Votes")]),t("ApolloQuery",{attrs:{query:i("6c35")},scopedSlots:e._u([{key:"default",fn:function(n){var i=n.result.data;return t("div",{},[i?[t("div",{staticClass:"vote-box"},[t("div",{staticClass:"left"},[e._v(e._s(i.numOfVotes.left))]),t("div",{staticClass:"right"},[e._v(e._s(i.numOfVotes.right))])])]:e._e()],2)}}])},[t("ApolloSubscribeToMore",{attrs:{document:i("d891"),"update-query":e.onVoteAdded}})],1)],1)},o=[],a=i("cebc"),d=(i("cadf"),i("551c"),i("097d"),{methods:{onVoteAdded:function(e,n){var i=n.subscriptionData;return console.log(e),{numOfVotes:Object(a["a"])({},i.data.voteAdded)}}}}),r=d,s=i("2877"),c=Object(s["a"])(r,t,o,!1,null,null,null);n["default"]=c.exports},d891:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"subscription",name:{kind:"Name",value:"voteAdded"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"voteAdded"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"left"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"right"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:64}};i.loc.source={body:"subscription voteAdded {\n  voteAdded {\n    left\n    right\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var o={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function d(e,n){var i={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=o[n]||new Set,d=new Set,r=new Set;t.forEach(function(e){r.add(e)});while(r.size>0){var s=r;r=new Set,s.forEach(function(e){if(!d.has(e)){d.add(e);var n=o[e]||new Set;n.forEach(function(e){r.add(e)})}})}return d.forEach(function(n){var t=a(e,n);t&&i.definitions.push(t)}),i}(function(){i.definitions.forEach(function(e){if(e.name){var n=new Set;t(e,n),o[e.name.value]=n}})})(),e.exports=i,e.exports["voteAdded"]=d(i,"voteAdded")}}]);
//# sourceMappingURL=votes.62a22b9d.js.map