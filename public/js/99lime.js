(function($){
Type.registerNamespace('_99lime');_99lime.tableStyle=function(){};_99lime.tableStyle.prototype = {striped:1,sortable:2}
_99lime.tableStyle.registerEnum('_99lime.tableStyle',false);_99lime.Button=function(id){this.el=document.getElementById(id);this.$0=$('#'+id);}
_99lime.Button.getElementById=function(id){return new _99lime.Button(id);}
_99lime.Button.prototype={el:null,$0:null,get_borderTopWidth:function(){return parseInt(this.$0.css('border-top-width'));},set_borderTopWidth:function(value){this.$0.css('border-top-width',value+'px');return value;},get_borderBottomWidth:function(){return parseInt(this.$0.css('border-bottom-width'));},set_borderBottomWidth:function(value){this.$0.css('border-bottom-width',value+'px');return value;},get_marginTop:function(){return parseInt(this.$0.css('margin-top'));},set_marginTop:function(value){this.$0.css('margin-top',value+'px');return value;},get_marginBottom:function(){return parseInt(this.$0.css('margin-bottom'));},set_marginBottom:function(value){this.$0.css('margin-bottom',value+'px');return value;},get_text:function(){return this.el.innerHTML;},set_text:function(value){this.el.innerHTML=value;return value;},onClick:function(listener){this.el.addEventListener('click',listener,false);}}
_99lime.CheckBox=function(id){this.el=document.getElementById(id);}
_99lime.CheckBox.prototype={el:null,get_checked:function(){return this.el.checked;},onCheckedChanged:function(listener){this.el.addEventListener('change',listener,false);}}
_99lime.Clock=function(lapse){this.$0=window.setInterval(ss.Delegate.create(this,this.$2),lapse);this.$1=ss.Delegate.create(this,this.$2);}
_99lime.Clock.prototype={$0:0,$1:null,$2:function(){this.$1();}}
_99lime.ComboBox=function(id){this.$1=[];this.el=document.getElementById(id);this.$0=$('#'+id);this.$2=true;}
_99lime.ComboBox.getElementById=function(id){return new _99lime.ComboBox(id);}
_99lime.ComboBox.prototype={el:null,$0:null,$2:false,get_enabled:function(){return this.$2;},set_enabled:function(value){if(value){this.$0.attr('disabled',null);this.$2=true;}else{this.$0.attr('disabled','enabled');this.$2=false;}return value;},get_selectedIndex:function(){return this.el.selectedIndex;},set_selectedIndex:function(value){this.el.selectedIndex=value;return value;},get_innerHTML:function(){return this.el.innerHTML;},set_innerHTML:function(value){this.el.innerHTML=value;return value;},clearAll:function(){this.$1.clear();},addItem:function(value,text){this.$1.add(new _99lime.optionItem(value,text));},render:function(){var $0=new ss.StringBuilder();var $enum1=ss.IEnumerator.getEnumerator(this.$1);while($enum1.moveNext()){var $1=$enum1.current;$0.appendLine($1.toString());}this.el.innerHTML=$0.toString();},onChange:function(listener){this.el.addEventListener('change',listener,false);}}
_99lime.optionItem=function(value,text){this.value=value;this.text=text;}
_99lime.optionItem.prototype={value:null,text:null,toString:function(){return "<option value='"+this.value+"'>"+this.text+'</option>';}}
_99lime.HiddenFileReaderElement=function(id,filesExtension){this.onload=null;var $0=$('body');var $1;if(filesExtension!=null){var $2='';var $enum1=ss.IEnumerator.getEnumerator(filesExtension);while($enum1.moveNext()){var $3=$enum1.current;$2+=$3+', ';}$1=$0.append("<input type='file' id='"+id+"' multiple accept='"+$2+"' style='display:none'/>");}else{$1=$0.append("<input type='file' id='"+id+"' multiple style='display:none'/>");}this.$0=$('#'+id);$1.change(ss.Delegate.create(this,function($p1_0){
if(ss.isUndefined($p1_0.target.files)){return;}var $1_0=$p1_0.target.files;var $enum1=ss.IEnumerator.getEnumerator($1_0);while($enum1.moveNext()){var $1_1=$enum1.current;this.$1($1_1);}}));}
_99lime.HiddenFileReaderElement.prototype={$0:null,$1:function($p0){var $0=new FileReader();$0.onload=ss.Delegate.create(this,function($p1_0){
if(this.onload!=null){var $1_0=new _99lime.FileReaderEvent();$1_0.result=$p1_0.target.result;this.onload($p0.name,$1_0);var $1_1=this.$0.wrap('<form>').closest('form')[0];$1_1.reset();this.$0.unwrap();}});$0.readAsText($p0);},onload:null}
_99lime.FileReaderButton=function(id){this.$0=$('#'+id);this.onload=null;this.$0.click(function($p1_0){
var $1_0=document.getElementById(id+'Elem');if($1_0!=null){$1_0.click();}});var $0=this.$0.parent();var $1=$0.append("<input type='file' id='"+id+'Elem'+"' multiple accept='text/*' style='display:none'/>");$1.change(ss.Delegate.create(this,function($p1_0){
var $1_0=$p1_0.target.files;var $1_1=$1_0[0];var $1_2=new FileReader();$1_2.files=$1_0;$1_2.onload=ss.Delegate.create(this,function($p2_0){
if(this.onload!=null){var $2_0=new _99lime.FileReaderEvent();$2_0.result=$p2_0.target.result;this.onload($1_1.name,$2_0);}});$1_2.readAsText($1_1);}));}
_99lime.FileReaderButton.prototype={$0:null,get_borderTopWidth:function(){return parseInt(this.$0.css('border-top-width'));},set_borderTopWidth:function(value){this.$0.css('border-top-width',value+'px');return value;},get_borderBottomWidth:function(){return parseInt(this.$0.css('border-bottom-width'));},set_borderBottomWidth:function(value){this.$0.css('border-bottom-width',value+'px');return value;},get_marginTop:function(){return parseInt(this.$0.css('margin-top'));},set_marginTop:function(value){this.$0.css('margin-top',value+'px');return value;},get_marginBottom:function(){return parseInt(this.$0.css('margin-bottom'));},set_marginBottom:function(value){this.$0.css('margin-bottom',value+'px');return value;},get_text:function(){return this.$0.html();},set_text:function(value){this.$0.html(value);return value;},onload:null}
_99lime.FileReaderEvent=function(){}
_99lime.FileReaderEvent.prototype={result:null}
_99lime.Menu=function(id){this.$2=[];this.$0=id;this.$1=$('#'+id);}
_99lime.Menu.prototype={$0:null,$1:null,menucontent:null,get_menuItems:function(){return this.$2;},render:function(){this.menucontent="<ul class='menu'>";var $enum1=ss.IEnumerator.getEnumerator(this.$2);while($enum1.moveNext()){var $2=$enum1.current;$2.render(this,this.menucontent);}this.menucontent+='</ul>';this.$1.html(this.menucontent);var $0=$('#'+this.$0+' ul');$0.each(function(){
$(this).prepend('<li class="menu-toggle"><a href="#"><span class="icon" data-icon="Y"></span> Menu</a></li>');$(this).find('li').has('ul').addClass('has-menu').find('a:first').append('<span class="arrow">&nbsp;</span>');$(this).find('li').find('a').css('cursor','default');});var $1=$('#'+this.$0+' ul li');$1.hover(function(){
$(this).find('ul:first').stop(true,true).fadeIn(50);$(this).addClass('hover');},function(){
$(this).find('ul').stop(true,true).fadeOut(50);$(this).removeClass('hover');});$1.click(function(){
$(this).find('ul').stop(true,true).fadeOut(50);$(this).removeClass('hover');});var $enum2=ss.IEnumerator.getEnumerator(this.$2);while($enum2.moveNext()){var $3=$enum2.current;$3.registerClickEvent();}},refresh:function(){$('#'+this.$0+' ul:first').fadeOut(1);$('#'+this.$0+' ul:first').fadeIn(1);},clear:function(){this.$1.html('');}}
_99lime.MenuItem=function(text){this.$2=[];this.$1=text;this.$0='cmd'+text.replaceAll(' ','');}
_99lime.MenuItem.prototype={$0:null,$1:null,itemcontent:null,$3:null,get_menuItems:function(){return this.$2;},onClick:function(listener){this.$3=listener;},registerClickEvent:function(){if(this.$3!=null){document.getElementById(this.$0).addEventListener('click',this.$3,false);}var $enum1=ss.IEnumerator.getEnumerator(this.$2);while($enum1.moveNext()){var $0=$enum1.current;$0.registerClickEvent();}},render:function(parent,menucontent){this.itemcontent='<li><a>'+this.$1+'</a>';if(this.$2.length>0){this.itemcontent+='<ul>';var $enum1=ss.IEnumerator.getEnumerator(this.$2);while($enum1.moveNext()){var $0=$enum1.current;$0.renderSubItem(this,this.itemcontent);}this.itemcontent+='</ul>';}this.itemcontent+='</li>';parent.menucontent+=this.itemcontent;},renderSubItem:function(parent,menucontent){this.itemcontent='<li><a id="'+this.$0+'">'+this.$1+'</a>';if(this.$2.length>0){this.itemcontent+='<ul>';var $enum1=ss.IEnumerator.getEnumerator(this.$2);while($enum1.moveNext()){var $0=$enum1.current;$0.renderSubItem(this,this.itemcontent);}this.itemcontent+='</ul>';}this.itemcontent+='</li>';parent.itemcontent+=this.itemcontent;}}
_99lime.Div=function(id,url){if(url==null){this.$0=$('#'+id);}else{this.$1=url;this.$0=$('#'+id);}}
_99lime.Div.prototype={$0:null,$1:null,get_borderTopWidth:function(){return parseInt(this.$0.css('border-top-width'));},set_borderTopWidth:function(value){this.$0.css('border-top-width',value+'px');return value;},get_borderBottomWidth:function(){return parseInt(this.$0.css('border-bottom-width'));},set_borderBottomWidth:function(value){this.$0.css('border-bottom-width',value+'px');return value;},get_marginTop:function(){return parseInt(this.$0.css('margin-top'));},set_marginTop:function(value){this.$0.css('margin-top',value+'px');return value;},get_marginBottom:function(){return parseInt(this.$0.css('margin-bottom'));},set_marginBottom:function(value){this.$0.css('margin-bottom',value+'px');return value;},get_paddingTop:function(){return parseInt(this.$0.css('padding-top'));},set_paddingTop:function(value){this.$0.css('padding-top',value+'px');return value;},get_paddingBottom:function(){return parseInt(this.$0.css('padding-bottom'));},set_paddingBottom:function(value){this.$0.css('padding-bottom',value+'px');return value;},get_height:function(){return this.$0.height()+this.get_borderTopWidth()+this.get_borderBottomWidth()+this.get_marginTop()+this.get_marginBottom()+this.get_paddingTop()+this.get_paddingBottom();},set_height:function(value){this.$0.css({height:value});return value;},loadUrl:function(){var $0=ss.Delegate.create(this,this.onShown);this.$0.load(this.$1,function(responseTxt, statusTxt, xhr){if(statusTxt == 'success')$0()});},clear:function(){this.$0.html('');},innerHTML:function(data){this.$0.html(data);},onShown:function(){return 0;}}
_99lime.Label=function(id){this.el=document.getElementById(id);}
_99lime.Label.prototype={el:null,get_text:function(){return this.el.innerHTML;},set_text:function(value){this.el.innerHTML=value;return value;}}
_99lime.listBox=function(id){this.$2=[];this.$0='100%';this.$1='100%';this.el=document.getElementById(id);}
_99lime.listBox.prototype={el:null,$0:null,$1:null,get_innerHTML:function(){return this.el.innerHTML;},set_innerHTML:function(value){this.el.innerHTML=value;return value;},get_width:function(){return this.$0;},set_width:function(value){this.$0=value;this.$1=value;return value;},addItem:function(value,text){this.$2.add(new _99lime.optionItem(value,text));},render:function(){this.el.style.minWidth=this.$0;this.el.style.maxWidth=this.$1;var $0=new ss.StringBuilder();var $enum1=ss.IEnumerator.getEnumerator(this.$2);while($enum1.moveNext()){var $1=$enum1.current;$0.appendLine($1.toString());}this.el.innerHTML=$0.toString();},onChange:function(listener){this.el.addEventListener('change',listener,false);}}
_99lime.RadioButton=function(id){this.el=document.getElementById(id);}
_99lime.RadioButton.prototype={el:null,get_checked:function(){return this.el.checked;},onCheckedChanged:function(listener){this.el.addEventListener('change',listener,false);}}
window.encodeURI=function(uri){return null;}
_99lime.ScriptExtensions=function(){}
_99lime.ScriptExtensions.isValid=function(number){if(isNaN(number)){return false;}if(ss.isNullOrUndefined(number)){return false;}return true;}
_99lime.TabControl=function(id){this.el=document.getElementById(id);}
_99lime.TabControl.prototype={el:null,get_tabCount:function(){return this.el.children.length;},selectedTab:function(index){var $0='#'+this.el.id;var idx=0;$(jEl).find('li').each(function(){var currentItem = $(this);var contentItem = $(this).find('a');var tId = contentItem.attr('href');if(idx++==index){$(tId).css({'display': 'block'});currentItem.addClass('current');jElement = tId;}else {$(tId).css({'display': 'none'});currentItem.removeClass('current');}});},onSelected:function(listener){for(var $0=0;$0<this.el.children.length;$0++){this.el.children[$0].addEventListener('click',listener,false);}}}
_99lime.Table=function(id){this.$2=[];this.$3=[];this.$4=[];this.$1=id;this.el=document.getElementById(id);this.$0=$('#'+id);this.striped=false;}
_99lime.Table.prototype={el:null,$0:null,$1:null,striped:false,headFixed:false,leftColumnsFixed:0,$5:'',get_markColor:function(){return this.$5;},set_markColor:function(value){this.$5=value;return value;},clearMarkCollection:function(){this.$4=[];},addMarkCollectionIndex:function(index){this.$4.add(index);},get_height:function(){return this.$0.height();},set_height:function(value){this.$0.css({height:value});return value;},get_colums:function(){return this.$2;},set_colums:function(value){this.$2=value;return value;},addRow:function(values){var $0=new _99lime.tableRow();$0.items=values;this.$3.add($0);},markRowIndex:function(index){var $0=$('#'+this.$1+' tbody tr')[index];if(this.striped){$('#'+this.$1+' table tr:even').css('background','#f5f5f5');$('#'+this.$1+' table tr:odd').css('background','#fff');}$0.style.background='#abc';},refreshMarkCollection:function(){if(this.striped){$('#'+this.$1+' table tr:odd').css('background','#f5f5f5');$('#'+this.$1+' table tr:even').css('background','#fff');}var $enum1=ss.IEnumerator.getEnumerator(this.$4);while($enum1.moveNext()){var $0=$enum1.current;var $1=$('#'+this.$1+' tbody tr')[$0];$1.style.background=this.$5;}},clearAll:function(){this.$3.clear();$('#'+this.$1+' tbody').empty();},render:function(){var $0="<table cellspacing='0' cellpadding='0'>";var $1='<thead><tr>';var $enum1=ss.IEnumerator.getEnumerator(this.get_colums());while($enum1.moveNext()){var $2=$enum1.current;$1+='<th>'+$2+'</th>';}$1+='</tr></thead>';$0+=$1;$0+='<tbody>';var $enum2=ss.IEnumerator.getEnumerator(this.$3);while($enum2.moveNext()){var $3=$enum2.current;var $4='<tr>';for(var $5=0;$5<$3.items.length;$5++){$4=$4+'<td>'+$3.items[$5]+'</td>';}$4=$4+'</tr>';$0+=$4;}$0+='</tbody>';$0+='</table>';this.$0.html($0);if(this.striped){$('#'+this.$1+' table tr:odd').css('background','#f5f5f5');$('#'+this.$1+' table tr:even').css('background','#fff');}$('#'+this.$1+' table').addClass('nolines');$('#'+this.$1+' table th').css('text-align','center');$('#'+this.$1+' table td').css('text-align','center');if(this.headFixed){if(this.leftColumnsFixed>0){$('#'+this.$1+' table').tableHeadFixer({left:this.leftColumnsFixed});}else{$('#'+this.$1+' table').tableHeadFixer();}}},renderElements:function(){var $0='';var $enum1=ss.IEnumerator.getEnumerator(this.$3);while($enum1.moveNext()){var $1=$enum1.current;var $2='<tr>';for(var $3=0;$3<$1.items.length;$3++){$2=$2+'<td>'+$1.items[$3]+'</td>';}$2=$2+'</tr>';$0+=$2;}$('#'+this.$1+' tbody').html($0);}}
_99lime.tableRow=function(){}
_99lime.tableRow.prototype={items:null}
_99lime.TextBox=function(id){this.el=document.getElementById(id);this.$0=$('#'+id);this.id=this.el.id;}
_99lime.TextBox.prototype={el:null,$0:null,id:null,onLostFocus:function(listener){this.el.addEventListener('blur',listener,false);},onKeyPress:function(listener){this.el.addEventListener('keypress',listener,false);},get_text:function(){return this.el.value;},set_text:function(value){this.el.value=value;return value;},get_borderTopWidth:function(){return parseInt(this.$0.css('border-top-width'));},set_borderTopWidth:function(value){this.$0.css('border-top-width',value+'px');return value;},get_borderBottomWidth:function(){return parseInt(this.$0.css('border-bottom-width'));},set_borderBottomWidth:function(value){this.$0.css('border-bottom-width',value+'px');return value;},get_marginTop:function(){return parseInt(this.$0.css('margin-top'));},set_marginTop:function(value){this.$0.css('margin-top',value+'px');return value;},get_marginBottom:function(){return parseInt(this.$0.css('margin-bottom'));},set_marginBottom:function(value){this.$0.css('margin-bottom',value+'px');return value;},get_paddingTop:function(){return parseInt(this.$0.css('padding-top'));},set_paddingTop:function(value){this.$0.css('padding-top',value+'px');return value;},get_paddingBottom:function(){return parseInt(this.$0.css('padding-bottom'));},set_paddingBottom:function(value){this.$0.css('padding-bottom',value+'px');return value;},get_height:function(){return this.$0.height()+this.get_borderTopWidth()+this.get_borderBottomWidth()+this.get_marginTop()+this.get_marginBottom()+this.get_paddingTop()+this.get_paddingBottom();},set_height:function(value){this.$0.css({height:value});return value;},get_disabledColor:function(){return this.$0.css('color');},set_disabledColor:function(value){this.$0.css('color','#'+value);return value;},get_placeholder:function(){return this.el["getAttribute('placeholder')"];},set_placeholder:function(value){document.getElementById(this.id).setAttribute('placeholder',value);return value;},get_valueAsDouble:function(){return parseFloat(document.getElementById(this.id).value);},get_valueAsInt:function(){return parseInt(document.getElementById(this.id).value);}}
_99lime.Button.registerClass('_99lime.Button');_99lime.CheckBox.registerClass('_99lime.CheckBox');_99lime.Clock.registerClass('_99lime.Clock');_99lime.ComboBox.registerClass('_99lime.ComboBox');_99lime.optionItem.registerClass('_99lime.optionItem');_99lime.HiddenFileReaderElement.registerClass('_99lime.HiddenFileReaderElement');_99lime.FileReaderButton.registerClass('_99lime.FileReaderButton');_99lime.FileReaderEvent.registerClass('_99lime.FileReaderEvent');_99lime.Menu.registerClass('_99lime.Menu');_99lime.MenuItem.registerClass('_99lime.MenuItem');_99lime.Div.registerClass('_99lime.Div');_99lime.Label.registerClass('_99lime.Label');_99lime.listBox.registerClass('_99lime.listBox');_99lime.RadioButton.registerClass('_99lime.RadioButton');_99lime.ScriptExtensions.registerClass('_99lime.ScriptExtensions');_99lime.TabControl.registerClass('_99lime.TabControl');_99lime.Table.registerClass('_99lime.Table');_99lime.tableRow.registerClass('_99lime.tableRow');_99lime.TextBox.registerClass('_99lime.TextBox');})(jQuery);