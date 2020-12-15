function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{gjbm:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTableBarModule",(function(){return H}));var a=n("2kYt"),o=n("nIj0"),r=n("sEIs"),i=n("T8fS"),l=n("SVIu"),u=n("Qq0t"),s=n("dvRg"),c=n("kiPw"),p=n("vhpW"),m=n("bwdy"),d=n("ZTXN"),b=n("kuMc"),y=n("EM62"),h=n("OZlg"),f=n("e0eB"),T=n("iyc4"),B=n("zV1d"),v=n("TxeG"),x=["tableBarTemplate"];function g(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"div",3),y["\u0275\u0275elementStart"](1,"button",4),y["\u0275\u0275text"](2,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](3,"button",5),y["\u0275\u0275listener"]("click",(function(){return(0,t.$implicit)()})),y["\u0275\u0275text"](4," \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](5,"button",6),y["\u0275\u0275text"](6," \u0423\u0434\u0430\u043b\u0438\u0442\u044c "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]())}var C,S=((C=function(){function e(t){_classCallCheck(this,e),this.tableBarsService=t,this.subscription=new m.a}return _createClass(e,[{key:"showTableBar",value:function(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{hasCloseButton:!0}).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||C)(y["\u0275\u0275directiveInject"](p.b))},C.\u0275cmp=y["\u0275\u0275defineComponent"]({type:C,selectors:[["tui-table-bar-example-1"]],viewQuery:function(e,t){var n;1&e&&y["\u0275\u0275viewQuery"](x,!0,c.e),2&e&&y["\u0275\u0275queryRefresh"](n=y["\u0275\u0275loadQuery"]())&&(t.tableBarTemplate=n.first)},decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["polymorpheus",""],["tableBarTemplate","polymorpheus"],["tuiMode","light",1,"content"],["tuiButton","","type","button","size","m"],["tuiButton","","type","button","appearance","flat","size","m",1,"tui-space_left-3",3,"click"],["tuiButton","","type","button","appearance","outline","size","m","icon","tuiIconTrashLarge",1,"delete-button"]],template:function(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"button",0),y["\u0275\u0275listener"]("click",(function(){return t.showTableBar()})),y["\u0275\u0275text"](1," \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c TableBar\n"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](2,g,7,0,"ng-template",1,2,y["\u0275\u0275templateRefExtractor"]))},directives:[B.a,c.e,v.a],styles:[".content[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:14px 0}.delete-button[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0}),C),w=n("yHor"),k=n("zGJC"),P=n("u8jZ"),E=["tableBarTemplate"];function M(e,t){if(1&e&&(y["\u0275\u0275text"](0," \u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0432\u043d\u0438\u0437\u0443 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043a\u0430\u043a \u043f\u0440\u0438 \u043c\u0430\u0441\u0441\u043e\u0432\u043e\u043c \u0432\u044b\u0431\u043e\u0440\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0442\u0430\u043a \u0438\xa0\u043f\u0440\u0438 \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u043e\u043c \u0432\u044b\u0431\u043e\u0440\u0435. \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u043c, \u0432\xa0\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442\xa0\u043a\u0435\u0439\u0441\u043e\u0432. "),y["\u0275\u0275elementStart"](1,"tui-doc-example",2),y["\u0275\u0275element"](2,"tui-table-bar-example-1"),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("content",n.example1)}}function _(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"p"),y["\u0275\u0275text"](1,"\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d"),y["\u0275\u0275elementEnd"]())}function V(e,t){1&e&&y["\u0275\u0275text"](0," \u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d ")}function j(e,t){1&e&&y["\u0275\u0275text"](0," \u041a\u0440\u0435\u0441\u0442\u0438\u043a \u0434\u043b\u044f \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f ")}function I(e,t){1&e&&y["\u0275\u0275text"](0," \u041c\u043e\u0434 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0432\u0438\u0434\u0430 ")}function A(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"div"),y["\u0275\u0275elementStart"](1,"button",3),y["\u0275\u0275listener"]("click",(function(){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().showTableBar()})),y["\u0275\u0275text"](2," \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c tableBar "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](3,"button",4),y["\u0275\u0275listener"]("click",(function(){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().destroy()})),y["\u0275\u0275text"](4," \u0421\u043a\u0440\u044b\u0442\u044c tableBar "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](5,_,2,0,"ng-template",5,6,y["\u0275\u0275templateRefExtractor"]),y["\u0275\u0275element"](7,"br"),y["\u0275\u0275elementStart"](8,"tui-doc-documentation"),y["\u0275\u0275template"](9,V,1,0,"ng-template",7),y["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().adaptive=e})),y["\u0275\u0275template"](10,j,1,0,"ng-template",8),y["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().hasCloseButton=e})),y["\u0275\u0275template"](11,I,1,0,"ng-template",9),y["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().mode=e})),y["\u0275\u0275elementEnd"]()}if(2&e){var a=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](9),y["\u0275\u0275property"]("documentationPropertyValue",a.adaptive),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("documentationPropertyValue",a.hasCloseButton),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("documentationPropertyValues",a.modeVariants)("documentationPropertyValue",a.mode)}}function z(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"ol",10),y["\u0275\u0275elementStart"](1,"li"),y["\u0275\u0275elementStart"](2,"p"),y["\u0275\u0275text"](3," \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 "),y["\u0275\u0275elementStart"](4,"code"),y["\u0275\u0275text"](5,"TuiTableBarsHostModule"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](6," \u0432 \u0432\u0430\u0448 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](7,"tui-doc-code",11),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](8,"li"),y["\u0275\u0275elementStart"](9,"p"),y["\u0275\u0275text"](10," \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 "),y["\u0275\u0275elementStart"](11,"code"),y["\u0275\u0275text"](12,"tui-table-bars-host"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](13," \u0432 \u0448\u0430\u0431\u043b\u043e\u043d \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](14,"tui-doc-code",11),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](15,"li"),y["\u0275\u0275text"](16," \u0414\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f TableBar \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 "),y["\u0275\u0275elementStart"](17,"code"),y["\u0275\u0275text"](18,"showTableBar"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](19," \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u0442\u0432\u0435\u0442\u043d\u044b\u0439 "),y["\u0275\u0275elementStart"](20,"code"),y["\u0275\u0275text"](21,"Observable"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](22,". "),y["\u0275\u0275element"](23,"br"),y["\u0275\u0275text"](24," \u0414\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 PolymorpheusContent "),y["\u0275\u0275element"](25,"tui-doc-code",12),y["\u0275\u0275element"](26,"tui-doc-code",13),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](27,"li"),y["\u0275\u0275text"](28," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u043f\u0430\u043f\u043e\u0432 \u0432 lazy \u043f\u043e\u0434\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u044f\u0445, \u043f\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u0432 "),y["\u0275\u0275elementStart"](29,"code"),y["\u0275\u0275text"](30,"new TuiComponentContent Injector"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](31," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0435 TableBar: "),y["\u0275\u0275element"](32,"tui-doc-code",14),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](7),y["\u0275\u0275property"]("code",n.exampleModule),y["\u0275\u0275advance"](7),y["\u0275\u0275property"]("code",n.exampleTemplate),y["\u0275\u0275advance"](11),y["\u0275\u0275property"]("code",n.exampleServiceUsageHtml),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("code",n.exampleServiceUsage),y["\u0275\u0275advance"](6),y["\u0275\u0275property"]("code",n.exampleLazyModule)}}var O,L,R=((L=function(){function e(t){_classCallCheck(this,e),this.tableBarsService=t,this.exampleServiceUsage="import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\n...\n\n@ViewChild('tableBarTemplate')\ntableBarTemplate: TemplateRef<{}>;\n\nconstructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n\n...\n    this.tableBarsService\n        .showTableBar(this.tableBarTemplate, {\n            mode: 'dark',\n            hasCloseButton: true,\n        })\n    .subscribe();\n...\n",this.exampleServiceUsageHtml="<ng-template #tableBarTemplate>\n    <p>\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d</p>\n</ng-template>\n",this.exampleLazyModule="import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\nimport {Injector} from '@angular/core';\nimport {CustomTableBarsComponent} from 'customTableBars.component';\n...\n\nconstructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n\n...\n    this.tableBarsService\n        .showTableBar(new PolymorpheusComponent(CustomTableBarsComponent, this.injector))\n        .subscribe();\n...\n",this.exampleModule="import {TuiTableBarsHostModule} from '@taiga-ui/addon-tablebars';\nimport {TuiRootModule} from '@taiga-ui/core';\n...\n\n@NgModule({\n    imports: [\n        TuiRootModule,\n        TuiTableBarsHostModule,\n        ...\n    ]\n...\n",this.exampleTemplate='<tui-root>\n    \x3c!-- The rest of your application --\x3e\n    <tui-table-bars-host\n        ngProjectAs="tuiOverNotifications"\n    ></tui-table-bars-host>\n</tui-root>\n',this.example1={TypeScript:"import {Component, Inject, ViewChild} from '@angular/core';\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\nimport {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';\nimport {Subscription} from 'rxjs';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-table-bar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableBarExampleComponent1 {\n    subscription = new Subscription();\n\n    @ViewChild('tableBarTemplate', {read: PolymorpheusTemplate})\n    tableBarTemplate?: PolymorpheusTemplate<{}>;\n\n    constructor(\n        @Inject(TuiTableBarsService)\n        private readonly tableBarsService: TuiTableBarsService,\n    ) {}\n\n    showTableBar() {\n        this.subscription.unsubscribe();\n\n        this.subscription = this.tableBarsService\n            .open(this.tableBarTemplate || '', {\n                hasCloseButton: true,\n            })\n            .subscribe();\n    }\n}\n",HTML:'<button tuiButton type="button" size="m" (click)="showTableBar()">\n    \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c TableBar\n</button>\n\n<ng-template #tableBarTemplate="polymorpheus" polymorpheus let-close>\n    <div class="content" tuiMode="light">\n        <button tuiButton type="button" size="m">\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c</button>\n        <button\n            tuiButton\n            type="button"\n            class="tui-space_left-3"\n            appearance="flat"\n            size="m"\n            (click)="close()"\n        >\n            \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c\n        </button>\n        <button\n            tuiButton\n            type="button"\n            class="delete-button"\n            appearance="outline"\n            size="m"\n            icon="tuiIconTrashLarge"\n        >\n            \u0423\u0434\u0430\u043b\u0438\u0442\u044c\n        </button>\n    </div>\n</ng-template>\n',LESS:".content {\n    display: flex;\n    align-items: center;\n    padding: 14px 0;\n}\n\n.delete-button {\n    margin-left: auto;\n}\n"},this.modeVariants=["dark","light"],this.mode=this.modeVariants[0],this.adaptive=!1,this.hasCloseButton=!1,this.subscription=new m.a,this.destroy$=new d.a}return _createClass(e,[{key:"showTableBar",value:function(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{adaptive:this.adaptive,mode:this.mode,hasCloseButton:this.hasCloseButton}).pipe(Object(b.a)(this.destroy$)).subscribe()}},{key:"destroy",value:function(){this.destroy$.next()}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}}]),e}()).\u0275fac=function(e){return new(e||L)(y["\u0275\u0275directiveInject"](p.b))},L.\u0275cmp=y["\u0275\u0275defineComponent"]({type:L,selectors:[["example-tui-table-bar"]],viewQuery:function(e,t){var n;1&e&&y["\u0275\u0275viewQuery"](E,!0,c.e),2&e&&y["\u0275\u0275queryRefresh"](n=y["\u0275\u0275loadQuery"]())&&(t.tableBarTemplate=n.first)},decls:4,vars:0,consts:[["header","TableBarsService","package","ADDON-TABLEBARS"],["pageTab",""],["id","base","heading","\u0431\u0430\u0437\u043e\u0432\u044b\u0439",3,"content"],["tuiButton","","type","button","size","m",1,"tui-space_right-2",3,"click"],["tuiButton","","type","button","size","m",3,"click"],["polymorpheus",""],["tableBarTemplate",""],["documentationPropertyName","adaptive","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","mode","documentationPropertyType","TuiBrightness",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","\u0441ustomNotification.component.ts",3,"code"]],template:function(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"tui-doc-page",0),y["\u0275\u0275template"](1,M,3,1,"ng-template",1),y["\u0275\u0275template"](2,A,12,4,"ng-template",1),y["\u0275\u0275template"](3,z,33,5,"ng-template",1),y["\u0275\u0275elementEnd"]())},directives:[h.a,f.a,T.a,S,B.a,c.e,w.a,k.a,P.a],styles:[".label[_ngcontent-%COMP%]{width:100px}"],changeDetection:0}),L),H=((O=function e(){_classCallCheck(this,e)}).\u0275mod=y["\u0275\u0275defineNgModule"]({type:O}),O.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||O)},imports:[[a.c,u.TuiButtonModule,i.TuiMoneyModule,c.c,s.TuiRadioListModule,s.TuiInputModule,u.TuiLinkModule,o.FormsModule,u.TuiModeModule].concat(_toConsumableArray(l.e),[r.g.forChild(Object(l.n)(R))])]}),O)}}]);