(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f695ffc"],{"06cb":function(e,n){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Vote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Vote"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]}]}}],loc:{start:0,end:35}};i.loc.source={body:"fragment Vote on Vote {\n  status\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=i},"29c8":function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"vote"},[t("ApolloMutation",{staticClass:"form",attrs:{mutation:i("e241"),variables:{input:{status:e.left}}},on:{done:function(n){e.allowed=!1}},scopedSlots:e._u([{key:"default",fn:function(n){var i=n.mutate;return[t("form",{on:{submit:function(e){e.preventDefault(),i()}}},[t("button",{class:[e.allowed?"left":"disabled"],attrs:{disabled:!e.allowed,type:"submit"}},[e._v("LEFT")])])]}}])}),t("ApolloMutation",{staticClass:"form",attrs:{mutation:i("e241"),variables:{input:{status:e.right}}},on:{done:function(n){e.allowed=!1}},scopedSlots:e._u([{key:"default",fn:function(n){var i=n.mutate;return[t("form",{on:{submit:function(e){e.preventDefault(),i()}}},[t("button",{class:[e.allowed?"right":"disabled"],attrs:{disabled:!e.allowed,type:"submit"}},[e._v("RIGHT")])])]}}])}),t("ApolloQuery",{staticClass:"hide",attrs:{query:i("a119")},scopedSlots:e._u([{key:"default",fn:function(n){var i=n.result.data;return t("div",{},[i?void 0:e._e()],2)}}])},[t("ApolloSubscribeToMore",{attrs:{document:i("fa72"),"update-query":e.onVotesCleared}})],1)],1)},a=[],o=(i("cadf"),i("551c"),i("097d"),{data:function(){return{allowed:!0,left:!0,right:!1}},methods:{onVotesCleared:function(){this.allowed=!0}}}),r=o,d=(i("359f"),i("2877")),s=Object(d["a"])(r,t,a,!1,null,"c7c8f984",null);n["default"]=s.exports},"359f":function(e,n,i){"use strict";var t=i("c671"),a=i.n(t);a.a},a119:function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"votes"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"votes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Vote"},directives:[]}]}}]}}],loc:{start:0,end:71}};t.loc.source={body:'#import "./VoteFragment.gql"\nquery votes {\n  votes {\n    ...Vote\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function o(e){return e.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)})}function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){r(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){r(e,n)}),e.definitions&&e.definitions.forEach(function(e){r(e,n)})}t.definitions=t.definitions.concat(o(i("06cb").definitions));var d={};function s(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function c(e,n){var i={kind:e.kind,definitions:[s(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=d[n]||new Set,a=new Set,o=new Set;t.forEach(function(e){o.add(e)});while(o.size>0){var r=o;o=new Set,r.forEach(function(e){if(!a.has(e)){a.add(e);var n=d[e]||new Set;n.forEach(function(e){o.add(e)})}})}return a.forEach(function(n){var t=s(e,n);t&&i.definitions.push(t)}),i}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})})(),e.exports=t,e.exports["votes"]=c(t,"votes")},c671:function(e,n,i){},e241:function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addVote"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"VoteInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addVote"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Vote"},directives:[]}]}}]}}],loc:{start:0,end:116}};t.loc.source={body:'#import "./VoteFragment.gql"\n\nmutation addVote ($input: VoteInput!) {\n  addVote (input: $input) {\n    ...Vote\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function o(e){return e.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)})}function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){r(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){r(e,n)}),e.definitions&&e.definitions.forEach(function(e){r(e,n)})}t.definitions=t.definitions.concat(o(i("06cb").definitions));var d={};function s(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function c(e,n){var i={kind:e.kind,definitions:[s(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=d[n]||new Set,a=new Set,o=new Set;t.forEach(function(e){o.add(e)});while(o.size>0){var r=o;o=new Set,r.forEach(function(e){if(!a.has(e)){a.add(e);var n=d[e]||new Set;n.forEach(function(e){o.add(e)})}})}return a.forEach(function(n){var t=s(e,n);t&&i.definitions.push(t)}),i}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})})(),e.exports=t,e.exports["addVote"]=c(t,"addVote")},fa72:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"subscription",name:{kind:"Name",value:"votesCleared"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"votesCleared"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:64}};i.loc.source={body:"subscription votesCleared {\n  votesCleared {\n      status\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var a={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function r(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,r=new Set,d=new Set;t.forEach(function(e){d.add(e)});while(d.size>0){var s=d;d=new Set,s.forEach(function(e){if(!r.has(e)){r.add(e);var n=a[e]||new Set;n.forEach(function(e){d.add(e)})}})}return r.forEach(function(n){var t=o(e,n);t&&i.definitions.push(t)}),i}(function(){i.definitions.forEach(function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})})(),e.exports=i,e.exports["votesCleared"]=r(i,"votesCleared")}}]);
//# sourceMappingURL=chunk-6f695ffc.37483042.js.map