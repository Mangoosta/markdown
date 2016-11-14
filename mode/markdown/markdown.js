'use strict';(function(h){"object"==typeof exports&&"object"==typeof module?h(require("../../lib/codemirror"),require("../xml/xml"),require("../meta")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../meta"],h):h(CodeMirror)})(function(h){h.defineMode("markdown",function(w,d){function r(b,a,c){a.f=a.inline=c;return c(b,a)}function t(b){return!b||!/\S/.test(b.string)}function x(b){b.linkTitle=!1;b.em=!1;b.strong=!1;b.strikethrough=!1;b.quote=0;b.indentedCode=!1;
y&&b.f==u&&(b.f=m,b.block=p);b.trailingSpace=0;b.trailingSpaceNewLine=!1;b.prevLine=b.thisLine;return b.thisLine=null}function p(b,a){var c=b.sol(),e=!1!==a.list,l=a.indentedCode;a.indentedCode=!1;e&&(0<=a.indentationDiff?(4>a.indentationDiff&&(a.indentation-=a.indentationDiff),a.list=null):a.list=0<a.indentation?null:!1);var k=null;if(4<=a.indentationDiff)return b.skipToEnd(),l||t(a.prevLine)?(a.indentation-=4,a.indentedCode=!0,g.code):null;if(b.eatSpace())return null;if((k=b.match(F))&&6>=k[1].length)return a.header=
k[1].length,d.highlightFormatting&&(a.formatting="header"),a.f=a.inline,f(a);if(t(a.prevLine)||a.quote||e||l||!(k=b.match(G))){if(b.eat(">"))return a.quote=c?1:a.quote+1,d.highlightFormatting&&(a.formatting="quote"),b.eatSpace(),f(a);if("["===b.peek())return r(b,a,H);if(b.match(I,!0))return a.hr=!0,g.hr;if((t(a.prevLine)||e)&&(b.match(z,!1)||b.match(A,!1))){c=null;b.match(z,!0)?c="ul":(b.match(A,!0),c="ol");a.indentation=b.column()+b.current().length;for(a.list=!0;a.listStack&&b.column()<a.listStack[a.listStack.length-
1];)a.listStack.pop();a.listStack.push(a.indentation);d.taskLists&&b.match(B,!1)&&(a.taskList=!0);a.f=a.inline;d.highlightFormatting&&(a.formatting=["list","list-"+c]);return f(a)}if(d.fencedCodeBlocks&&(k=b.match(J,!0)))return a.fencedChars=k[1],c=k[2],h.findModeByName&&(e=h.findModeByName(c))&&(c=e.mime||e.mimes[0]),c=h.getMode(w,c),a.localMode="null"==c.name?null:c,a.localMode&&(a.localState=a.localMode.startState()),a.f=a.block=K,d.highlightFormatting&&(a.formatting="code-block"),a.code=-1,f(a)}else return a.header=
"="==k[0].charAt(0)?1:2,d.highlightFormatting&&(a.formatting="header"),a.f=a.inline,f(a);return r(b,a,a.inline)}function u(b,a){var c=n.token(b,a.htmlState);if(!y){var d=h.innerMode(n,a.htmlState);if("xml"==d.mode.name&&null===d.state.tagStart&&!d.state.context&&d.state.tokenize.isInText||a.md_inside&&-1<b.current().indexOf(">"))a.f=m,a.block=p,a.htmlState=null}return c}function K(b,a){if(a.fencedChars&&b.match(a.fencedChars,!1))return a.localMode=a.localState=null,a.f=a.block=L,null;if(a.localMode)return a.localMode.token(b,
a.localState);b.skipToEnd();return g.code}function L(b,a){b.match(a.fencedChars);a.block=p;a.f=m;a.fencedChars=null;d.highlightFormatting&&(a.formatting="code-block");a.code=1;var c=f(a);a.code=0;return c}function f(b){var a=[];if(b.formatting){a.push(g.formatting);"string"===typeof b.formatting&&(b.formatting=[b.formatting]);for(var c=0;c<b.formatting.length;c++)a.push(g.formatting+"-"+b.formatting[c]),"header"===b.formatting[c]&&a.push(g.formatting+"-"+b.formatting[c]+"-"+b.header),"quote"===b.formatting[c]&&
(!d.maxBlockquoteDepth||d.maxBlockquoteDepth>=b.quote?a.push(g.formatting+"-"+b.formatting[c]+"-"+b.quote):a.push("error"))}if(b.taskOpen)return a.push("meta"),a.length?a.join(" "):null;if(b.taskClosed)return a.push("property"),a.length?a.join(" "):null;b.linkHref?a.push(g.linkHref,"url"):(b.strong&&a.push(g.strong),b.em&&a.push(g.em),b.strikethrough&&a.push(g.strikethrough),b.linkText&&a.push(g.linkText),b.code&&a.push(g.code));b.header&&a.push(g.header,g.header+"-"+b.header);b.quote&&(a.push(g.quote),
!d.maxBlockquoteDepth||d.maxBlockquoteDepth>=b.quote?a.push(g.quote+"-"+b.quote):a.push(g.quote+"-"+d.maxBlockquoteDepth));!1!==b.list&&((c=(b.listStack.length-1)%3)?1===c?a.push(g.list2):a.push(g.list3):a.push(g.list1));b.trailingSpaceNewLine?a.push("trailing-space-new-line"):b.trailingSpace&&a.push("trailing-space-"+(b.trailingSpace%2?"a":"b"));return a.length?a.join(" "):null}function M(b,a){if(b.match(N,!0))return f(a)}function m(b,a){var c=a.text(b,a);if("undefined"!==typeof c)return c;if(a.list)return a.list=
null,f(a);if(a.taskList)return"x"!==b.match(B,!0)[1]?a.taskOpen=!0:a.taskClosed=!0,d.highlightFormatting&&(a.formatting="task"),a.taskList=!1,f(a);a.taskOpen=!1;a.taskClosed=!1;if(a.header&&b.match(/^#+$/,!0))return d.highlightFormatting&&(a.formatting="header"),f(a);var c=b.sol(),e=b.next();if(a.linkTitle){a.linkTitle=!1;var l=e;"("===e&&(l=")");l=(l+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");if(b.match(new RegExp("^\\s*(?:[^"+l+"\\\\]+|\\\\\\\\|\\\\.)"+l),!0))return g.linkHref}if("`"===e){c=a.formatting;
d.highlightFormatting&&(a.formatting="code");b.eatWhile("`");e=b.current().length;if(0==a.code)return a.code=e,f(a);if(e==a.code)return c=f(a),a.code=0,c;a.formatting=c;return f(a)}if(a.code)return f(a);if("\\"===e&&(b.next(),d.highlightFormatting))return c=f(a),e=g.formatting+"-escape",c?c+" "+e:e;if("!"===e&&b.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return b.match(/\[[^\]]*\]/),a.inline=a.f=C,g.image;if("["===e&&b.match(/.*\](\(.*\)| ?\[.*\])/,!1))return a.linkText=!0,d.highlightFormatting&&(a.formatting=
"link"),f(a);if("]"===e&&a.linkText&&b.match(/\(.*\)| ?\[.*\]/,!1))return d.highlightFormatting&&(a.formatting="link"),c=f(a),a.linkText=!1,a.inline=a.f=C,c;if("<"===e&&b.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1))return a.f=a.inline=D,d.highlightFormatting&&(a.formatting="link"),c=f(a),(c?c+" ":"")+g.linkInline;if("<"===e&&b.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1))return a.f=a.inline=D,d.highlightFormatting&&(a.formatting="link"),c=(c=f(a))?c+" ":"",c+g.linkEmail;if("<"===e&&b.match(/^(!--|\w)/,
!1))return c=b.string.indexOf(">",b.pos),-1!=c&&(c=b.string.substring(b.start,c),/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(c)&&(a.md_inside=!0)),b.backUp(1),a.htmlState=h.startState(n),c=u,a.f=a.block=c,c(b,a);if("<"===e&&b.match(/^\/\w*?>/))return a.md_inside=!1,"tag";l=!1;if(!d.underscoresBreakWords&&"_"===e&&"_"!==b.peek()&&b.match(/(\w)/,!1)){var k=b.pos-2;0<=k&&(k=b.string.charAt(k),"_"!==k&&k.match(/(\w)/,!1)&&(l=!0))}if("*"===e||"_"===e&&!l){if(!c||" "!==b.peek()){if(a.strong===e&&b.eat(e))return d.highlightFormatting&&
(a.formatting="strong"),c=f(a),a.strong=!1,c;if(!a.strong&&b.eat(e))return a.strong=e,d.highlightFormatting&&(a.formatting="strong"),f(a);if(a.em===e)return d.highlightFormatting&&(a.formatting="em"),c=f(a),a.em=!1,c;if(!a.em)return a.em=e,d.highlightFormatting&&(a.formatting="em"),f(a)}}else if(" "===e&&(b.eat("*")||b.eat("_"))){if(" "===b.peek())return f(a);b.backUp(1)}if(d.strikethrough)if("~"===e&&b.eatWhile(e)){if(a.strikethrough)return d.highlightFormatting&&(a.formatting="strikethrough"),c=
f(a),a.strikethrough=!1,c;if(b.match(/^[^\s]/,!1))return a.strikethrough=!0,d.highlightFormatting&&(a.formatting="strikethrough"),f(a)}else if(" "===e&&b.match(/^~~/,!0)){if(" "===b.peek())return f(a);b.backUp(2)}" "===e&&(b.match(/ +$/,!1)?a.trailingSpace++:a.trailingSpace&&(a.trailingSpaceNewLine=!0));return f(a)}function D(b,a){if(">"===b.next()){a.f=a.inline=m;d.highlightFormatting&&(a.formatting="link");var c=f(a);return(c?c+" ":"")+g.linkInline}b.match(/^[^>]+/,!0);return g.linkInline}function C(b,
a){if(b.eatSpace())return null;var c=b.next();return"("===c||"["===c?(a.f=a.inline=O("("===c?")":"]"),d.highlightFormatting&&(a.formatting="link-string"),a.linkHref=!0,f(a)):"error"}function O(b){return function(a,c){if(a.next()===b){c.f=c.inline=m;d.highlightFormatting&&(c.formatting="link-string");var e=f(c);c.linkHref=!1;return e}a.match(P(b),!0)&&a.backUp(1);c.linkHref=!0;return f(c)}}function H(b,a){return b.match(/^([^\]\\]|\\.)*\]:/,!1)?(a.f=Q,b.next(),d.highlightFormatting&&(a.formatting=
"link"),a.linkText=!0,f(a)):r(b,a,m)}function Q(b,a){if(b.match(/^\]:/,!0)){a.f=a.inline=R;d.highlightFormatting&&(a.formatting="link");var c=f(a);a.linkText=!1;return c}b.match(/^([^\]\\]|\\.)+/,!0);return g.linkText}function R(b,a){if(b.eatSpace())return null;b.match(/^[^\s]+/,!0);void 0===b.peek()?a.linkTitle=!0:b.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0);a.f=a.inline=m;return g.linkHref+" url"}function P(b){v[b]||(b=(b+"").replace(/([.?*+^$[\]\\(){}|-])/g,
"\\$1"),v[b]=new RegExp("^(?:[^\\\\]|\\\\.)*?("+b+")"));return v[b]}var n=h.getMode(w,"text/html"),y="null"==n.name;void 0===d.highlightFormatting&&(d.highlightFormatting=!1);void 0===d.maxBlockquoteDepth&&(d.maxBlockquoteDepth=0);void 0===d.underscoresBreakWords&&(d.underscoresBreakWords=!0);void 0===d.taskLists&&(d.taskLists=!1);void 0===d.strikethrough&&(d.strikethrough=!1);void 0===d.tokenTypeOverrides&&(d.tokenTypeOverrides={});var g={header:"header",code:"comment",quote:"quote",list1:"variable-2",
list2:"variable-3",list3:"keyword",hr:"hr",image:"tag",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough"},q;for(q in g)g.hasOwnProperty(q)&&d.tokenTypeOverrides[q]&&(g[q]=d.tokenTypeOverrides[q]);var I=/^([*\-_])(?:\s*\1){2,}\s*$/,z=/^[*\-+]\s+/,A=/^[0-9]+([.)])\s+/,B=/^\[(x| )\](?=\s)/,F=d.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,G=/^ *(?:\={1,}|-{1,})\s*$/,N=/^[^#!\[\]*_\\<>` "'(~]+/,J=new RegExp("^("+
(!0===d.fencedCodeBlocks?"~~~+|```+":d.fencedCodeBlocks)+")[ \\t]*([\\w+#-]*)"),v=[],E={startState:function(){return{f:p,prevLine:null,thisLine:null,block:p,htmlState:null,indentation:0,inline:m,text:M,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,fencedChars:null}},copyState:function(b){return{f:b.f,prevLine:b.prevLine,thisLine:b.thisLine,block:b.block,htmlState:b.htmlState&&
h.copyState(n,b.htmlState),indentation:b.indentation,localMode:b.localMode,localState:b.localMode?h.copyState(b.localMode,b.localState):null,inline:b.inline,text:b.text,formatting:!1,linkTitle:b.linkTitle,code:b.code,em:b.em,strong:b.strong,strikethrough:b.strikethrough,header:b.header,hr:b.hr,taskList:b.taskList,list:b.list,listStack:b.listStack.slice(0),quote:b.quote,indentedCode:b.indentedCode,trailingSpace:b.trailingSpace,trailingSpaceNewLine:b.trailingSpaceNewLine,md_inside:b.md_inside,fencedChars:b.fencedChars}},
token:function(b,a){a.formatting=!1;if(b!=a.thisLine){var c=a.header||a.hr;a.header=0;a.hr=!1;if(b.match(/^\s*$/,!0)||c){x(a);if(!c)return null;a.prevLine=null}a.prevLine=a.thisLine;a.thisLine=b;a.taskList=!1;a.trailingSpace=0;a.trailingSpaceNewLine=!1;a.f=a.block;c=b.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length;a.indentationDiff=Math.min(c-a.indentation,4);a.indentation+=a.indentationDiff;if(0<c)return null}return a.f(b,a)},innerMode:function(b){return b.block==u?{state:b.htmlState,mode:n}:b.localState?
{state:b.localState,mode:b.localMode}:{state:b,mode:E}},blankLine:x,getType:f,fold:"markdown"};return E},"xml");h.defineMIME("text/x-markdown","markdown")});
