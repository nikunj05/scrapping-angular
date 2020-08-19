function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
  /***/
  "./node_modules/angular-datatables/__ivy_ngcc__/index.js":
  /*!***************************************************************!*\
    !*** ./node_modules/angular-datatables/__ivy_ngcc__/index.js ***!
    \***************************************************************/

  /*! exports provided: DataTableDirective, DataTablesModule */

  /***/
  function node_modulesAngularDatatables__ivy_ngcc__IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./src/angular-datatables.directive */
    "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"];
    });
    /* harmony import */


    var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./src/angular-datatables.module */
    "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"];
    });
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sLWxpbi9hbmd1bGFyLWRhdGF0YWJsZXMvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuZXhwb3J0IHsgRGF0YVRhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zcmMvYW5ndWxhci1kYXRhdGFibGVzLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBEYXRhVGFibGVzTW9kdWxlIH0gZnJvbSAnLi9zcmMvYW5ndWxhci1kYXRhdGFibGVzLm1vZHVsZSc7XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js":
  /*!******************************************************************************************!*\
    !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js ***!
    \******************************************************************************************/

  /*! exports provided: DataTableDirective */

  /***/
  function node_modulesAngularDatatables__ivy_ngcc__SrcAngularDatatablesDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return DataTableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var DataTableDirective =
    /** @class */
    function () {
      function DataTableDirective(el) {
        this.el = el;
        /**
           * The DataTable option you pass to configure your table.
           */

        this.dtOptions = {};
      }

      DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;

        if (this.dtTrigger) {
          this.dtTrigger.subscribe(function () {
            _this.displayTable();
          });
        } else {
          this.displayTable();
        }
      };

      DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
          this.dtTrigger.unsubscribe();
        }

        if (this.dt) {
          this.dt.destroy(true);
        }
      };

      DataTableDirective.prototype.displayTable = function () {
        var _this = this;

        this.dtInstance = new Promise(function (resolve, reject) {
          Promise.resolve(_this.dtOptions).then(function (dtOptions) {
            // Using setTimeout as a "hack" to be "part" of NgZone
            setTimeout(function () {
              _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
              resolve(_this.dt);
            });
          });
        });
      };
      /** @nocollapse */


      DataTableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      DataTableDirective.propDecorators = {
        "dtOptions": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "dtTrigger": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      DataTableDirective.ɵfac = function DataTableDirective_Factory(t) {
        return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      DataTableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DataTableDirective,
        selectors: [["", "datatable", ""]],
        inputs: {
          dtOptions: "dtOptions",
          dtTrigger: "dtTrigger"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[datatable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          dtOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dtTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return DataTableDirective;
    }(); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kYXRhdGFibGVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiYW5ndWxhci1kYXRhdGFibGVzLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Bc0NNLEFBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sLWxpbi9hbmd1bGFyLWRhdGF0YWJsZXMvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xudmFyIERhdGFUYWJsZURpcmVjdGl2ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEYXRhVGFibGVEaXJlY3RpdmUoZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgRGF0YVRhYmxlIG9wdGlvbiB5b3UgcGFzcyB0byBjb25maWd1cmUgeW91ciB0YWJsZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kdE9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgRGF0YVRhYmxlRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZHRUcmlnZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLmR0VHJpZ2dlci5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmRpc3BsYXlUYWJsZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUYWJsZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEYXRhVGFibGVEaXJlY3RpdmUucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kdFRyaWdnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZHRUcmlnZ2VyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHQpIHtcbiAgICAgICAgICAgIHRoaXMuZHQuZGVzdHJveSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGF0YVRhYmxlRGlyZWN0aXZlLnByb3RvdHlwZS5kaXNwbGF5VGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHRJbnN0YW5jZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShfdGhpcy5kdE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGR0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIFVzaW5nIHNldFRpbWVvdXQgYXMgYSBcImhhY2tcIiB0byBiZSBcInBhcnRcIiBvZiBOZ1pvbmVcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHQgPSAkKF90aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLkRhdGFUYWJsZShkdE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzLmR0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERhdGFUYWJsZURpcmVjdGl2ZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbZGF0YXRhYmxlXSdcbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIERhdGFUYWJsZURpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBFbGVtZW50UmVmLCB9LFxuICAgIF07IH07XG4gICAgRGF0YVRhYmxlRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICBcImR0T3B0aW9uc1wiOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgICAgIFwiZHRUcmlnZ2VyXCI6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICB9O1xuICAgIHJldHVybiBEYXRhVGFibGVEaXJlY3RpdmU7XG59KCkpO1xuZXhwb3J0IHsgRGF0YVRhYmxlRGlyZWN0aXZlIH07XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js ***!
    \***************************************************************************************/

  /*! exports provided: DataTablesModule */

  /***/
  function node_modulesAngularDatatables__ivy_ngcc__SrcAngularDatatablesModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return DataTablesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./angular-datatables.directive */
    "./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var DataTablesModule =
    /** @class */
    function () {
      function DataTablesModule() {}

      DataTablesModule.forRoot = function () {
        return {
          ngModule: DataTablesModule
        };
      };

      DataTablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DataTablesModule
      });
      DataTablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DataTablesModule_Factory(t) {
          return new (t || DataTablesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTablesModule, {
          declarations: function declarations() {
            return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
            exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
          }]
        }], function () {
          return [];
        }, null);
      })();

      return DataTablesModule;
    }(); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kYXRhdGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiYW5ndWxhci1kYXRhdGFibGVzLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7O01BT007Ozs7Ozs7Ozs7O2dEQU9BIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sLWxpbi9hbmd1bGFyLWRhdGF0YWJsZXMvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhVGFibGVEaXJlY3RpdmUgfSBmcm9tICcuL2FuZ3VsYXItZGF0YXRhYmxlcy5kaXJlY3RpdmUnO1xudmFyIERhdGFUYWJsZXNNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGF0YVRhYmxlc01vZHVsZSgpIHtcbiAgICB9XG4gICAgRGF0YVRhYmxlc01vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IERhdGFUYWJsZXNNb2R1bGVcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIERhdGFUYWJsZXNNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW0RhdGFUYWJsZURpcmVjdGl2ZV0sXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IFtEYXRhVGFibGVEaXJlY3RpdmVdXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICByZXR1cm4gRGF0YVRhYmxlc01vZHVsZTtcbn0oKSk7XG5leHBvcnQgeyBEYXRhVGFibGVzTW9kdWxlIH07XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/addsite/addsite.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/addsite/addsite.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardAddsiteAddsiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h5>Add Ship</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <form [formGroup]=\"siteForm\" (ngSubmit)=\"addSite()\">\n        <div class=\"form-group\">\n            <div class=\"form-group\">\n                <label for=\"name\">URL</label>\n                <input type=\"text\" formControlName=\"URL\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && f.URL.errors}\" />\n                <div *ngIf=\"submitted && f.URL.errors\" class=\"lbl-err\">\n                    <div *ngIf=\" f.URL.errors.required \">URL is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"name\">Baseurl</label>\n                <input type=\"text\" formControlName=\"Baseurl\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && f.Baseurl.errors}\" />\n                <div *ngIf=\"submitted && f.Baseurl.errors\" class=\"lbl-err\">\n                    <div *ngIf=\" f.Baseurl.errors.required \">Baseurl is required</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"name\">Title selector</label>\n                <input type=\"text\" formControlName=\"Titlemap\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && f.Titlemap.errors}\" />\n                <div *ngIf=\"submitted && f.Titlemap.errors\" class=\"lbl-err\">\n                    <div *ngIf=\" f.Titlemap.errors.required \">Titlemap is required</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"name\">Src link</label>\n                <input type=\"text\" formControlName=\"Srclink\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && f.Srclink.errors}\" />\n                <div *ngIf=\"submitted && f.Srclink.errors\" class=\"lbl-err\">\n                    <div *ngIf=\" f.Srclink.errors.required \">Srclink is required</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"name\">Image selector</label>\n                <input type=\"text\" formControlName=\"Imgmap\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && f.Imgmap.errors}\" />\n                <div *ngIf=\"submitted && f.Imgmap.errors\" class=\"lbl-err\">\n                    <div *ngIf=\" f.Imgmap.errors.required \">Imgmap is required</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"name\">Hospital selector</label>\n                <input type=\"text\" formControlName=\"Hospitalmap\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && f.Hospitalmap.errors}\" />\n                <div *ngIf=\"submitted && f.Hospitalmap.errors\" class=\"lbl-err\">\n                    <div *ngIf=\" f.Hospitalmap.errors.required \">Hospitalmap is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"form-group\">\n                    <label for=\"name\">Url prefix</label>\n                    <input type=\"text\" formControlName=\"Urlprefix\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && f.Urlprefix.errors}\" />\n                    <div *ngIf=\"submitted && f.Urlprefix.errors\" class=\"lbl-err\">\n                        <div *ngIf=\" f.Urlprefix.errors.required \">Urlprefix is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Stucture Type</label>\n                        <select formControlName=\"Stucturetype\" class=\"form-control\">\n                          <option>Choose Structure</option>\n                          <option *ngFor=\"let web of structureList\">{{web}}</option>\n          \n                      </select>\n                        <!-- <input type=\"text\" formControlName=\"Stucturetype\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && f.Stucturetype.errors}\" /> -->\n                        <div *ngIf=\"submitted && f.Stucturetype.errors\" class=\"lbl-err\">\n                            <div *ngIf=\" f.Stucturetype.errors.required \">Stucturetype is required</div>\n                        </div>\n                    </div>\n\n\n\n                    <div class=\"modal-footer\">\n                        <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-primary btn-round\">ADD</button>&nbsp;&nbsp;\n\n                        </div>\n                    </div>\n\n                </div>\n                <!-- </form> -->\n            </div>\n        </div>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <button class=\"btn btn-primary btn-round\" (click)='addsite()'>ADD</button>\n            </div>\n            <div class=\"card-body\">\n                <!-- <div class=\"table-responsive\"> -->\n                <table class=\"table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n                    <thead>\n                        <tr>\n                            <th>Data</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let site of data\">\n                            <td>{{site.url}}</td>\n                            <td>\n\n                                <!-- <button (click)='siteDetails(site)'>View\n                  </button> -->\n                                <!-- <button (click)='editsite(site)'>Edit</button> -->\n                                <!-- <button (click)='deletesite(site._id)'>Delete</button> -->\n                                <i class=\"fa fa-eye fa-lg\" (click)='siteDetails(site)' aria-hidden=\"true\"></i>&nbsp;&nbsp;\n                                <i class=\"fa fa-pencil fa-lg\" aria-hidden=\"true\" (click)='editsite(site)'></i>&nbsp;&nbsp;\n                                <i class=\"fa fa-trash fa-lg\" (click)='deletesite(site._id)' aria-hidden=\"true\"></i>&nbsp;&nbsp;\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- </div> -->\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/deletesite/deletesite.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/deletesite/deletesite.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDeletesiteDeletesiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h5>Are you sure want to delete these site?</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n\n<div class=\"modal-footer\">\n    <div class=\"form-group\">\n        <button class=\"btn btn-primary btn-round\" (click)=\"delete()\">Yes</button>\n        <button class=\"btn btn-primary btn-round\" (click)=\"close()\">No</button>\n\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/editsite/editsite.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/editsite/editsite.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardEditsiteEditsiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h5>Edit Site</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <form [formGroup]=\"siteForm\" (ngSubmit)=\"editSite()\">\n        <div class=\"form-group\">\n            <label for=\"name\">URL</label>\n            <input type=\"text\" formControlName=\"URL\" class=\"form-control\" [(ngModel)]=\"url\" [ngClass]=\"{'is-invalid':submitted && f.URL.errors}\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Baseurl</label>\n            <input type=\"text\" formControlName=\"Baseurl\" class=\"form-control\" [(ngModel)]=\"baseurl\" [ngClass]=\"{'is-invalid':submitted && f.Baseurl.errors}\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Title selector</label>\n            <input type=\"text\" formControlName=\"Titlemap\" class=\"form-control\" [(ngModel)]=\"title_map\" [ngClass]=\"{'is-invalid':submitted && f.Titlemap.errors}\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Src link</label>\n            <input type=\"text\" formControlName=\"Srclink\" class=\"form-control\" [(ngModel)]=\"src_link\" [ngClass]=\"{'is-invalid':submitted && f.Srclink.errors}\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Image slector</label>\n            <input type=\"text\" formControlName=\"Imgmap\" class=\"form-control\" [(ngModel)]=\"img_map\" [ngClass]=\"{'is-invalid':submitted && f.Imgmap.errors}\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Hospital selector</label>\n            <input type=\"text\" formControlName=\"Hospitalmap\" class=\"form-control\" [(ngModel)]=\"hospital_map\" [ngClass]=\"{'is-invalid':submitted && f.Hospitalmap.errors}\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Url prefix</label>\n            <input type=\"text\" formControlName=\"Urlprefix\" class=\"form-control\" [(ngModel)]=\"url_prefix\" [ngClass]=\"{'is-invalid':submitted && f.Urlprefix.errors}\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Stucture Type</label>\n            <select formControlName=\"Stucturetype\" class=\"form-control\">\n             <option>{{this.stucture_type}}</option>\n              <option *ngFor=\"let web of structureList\" [(selected)]=\"selectedOption\" >{{web}}</option>\n\n          </select>\n            <!-- <input type=\"text\" formControlName=\"Stucturetype\" class=\"form-control\" [(ngModel)]=\"stucture_type\" [ngClass]=\"{'is-invalid':submitted && f.Stucturetype.errors}\" /> -->\n        </div>\n\n\n        <div class=\"col-md-12\">\n            <div class=\"modal-footer\">\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-round\">UPDATE</button>\n\n                </div>\n            </div>\n        </div>\n\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/viewsite/viewsite.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/viewsite/viewsite.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardViewsiteViewsiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h5>Site Details</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <form>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"name\">Stucture Type</label>\n                    <br/>\n                    <input type=\"text\" disabled=\"true\" value=\"{{stucture_type}}\" />\n\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"name\">URL</label>\n                    <br/>\n                    <textarea disabled=\"true\" value=\"{{url}}\"></textarea>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"name\">Base URL</label>\n                    <br/>\n                    <textarea disabled=\"true\" value=\"{{baseurl}}\"></textarea>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"name\">Source URL</label>\n                    <br/>\n                    <input type=\"text\" disabled=\"true\" value=\"{{src_link}}\" />\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"name\">Title selector</label>\n                    <br/>\n                    <input type=\"text\" disabled=\"true\" value=\"{{title_map}}\" />\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"name\">URL Prefix</label>\n                    <br/>\n                    <input type=\"text\" disabled=\"true\" value=\"{{url_prefix}}\" />\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"name\">Image selector</label>\n                    <br/>\n                    <input type=\"text\" disabled=\"true\" value=\"{{img_map}}\" />\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"name\">Hospital selector</label>\n                    <br/>\n                    <input type=\"text\" disabled=\"true\" value=\"{{hospital_map}}\" />\n                </div>\n            </div>\n\n        </div>\n\n    </form>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/addsite/addsite.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/pages/dashboard/addsite/addsite.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardAddsiteAddsiteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9hZGRzaXRlL2FkZHNpdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/addsite/addsite.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/dashboard/addsite/addsite.component.ts ***!
    \**************************************************************/

  /*! exports provided: AddsiteComponent */

  /***/
  function srcAppPagesDashboardAddsiteAddsiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddsiteComponent", function () {
      return AddsiteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/pages/dashboard/dashboard.service.ts"); // import { ToastrManager } from 'ng6-toastr-notifications';


    var AddsiteComponent = /*#__PURE__*/function () {
      function AddsiteComponent( // private toastService: ToastrManager,
      router, service, activeModal, // tslint:disable-next-line: variable-name
      _formBuilder, modalService) {
        _classCallCheck(this, AddsiteComponent);

        this.router = router;
        this.service = service;
        this.activeModal = activeModal;
        this._formBuilder = _formBuilder;
        this.modalService = modalService;
        this.structureList = ['STRUCTURE1', 'STRUCTURE2', 'STRUCTURE3'];
        this.loading = false;
        this.submitted = false;
      }

      _createClass(AddsiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildSiteForm();
        }
      }, {
        key: "buildSiteForm",
        value: function buildSiteForm() {
          this.siteForm = this._formBuilder.group({
            URL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Baseurl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Titlemap: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Srclink: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Imgmap: [''],
            Hospitalmap: [''],
            Urlprefix: [''],
            Stucturetype: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "addSite",
        value: function addSite() {
          this.submitted = true;

          if (this.siteForm.invalid) {
            return;
          } else {
            var addObj = {
              'url': this.siteForm.controls['URL'].value,
              'baseurl': this.siteForm.controls['Baseurl'].value,
              'title_map': this.siteForm.controls['Titlemap'].value,
              'src_link': this.siteForm.controls['Srclink'].value,
              'img_map': this.siteForm.controls['Imgmap'].value,
              'hospital_map': this.siteForm.controls['Hospitalmap'].value,
              'url_prefix': this.siteForm.controls['Urlprefix'].value,
              'stucture_type': this.siteForm.controls['Stucturetype'].value
            };
            console.log("object add ship =======>", addObj);
            this.activeModal.dismiss();
            this.service.addsite(addObj).subscribe(function (response) {
              if (response.status == 201) {
                console.log('AddsiteComponent -> addSite -> response', response); // this.toastService.successToastr(response.message);
              } else {// this.toastService.errorToastr(response.message);
                }
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.siteForm.controls;
        }
      }]);

      return AddsiteComponent;
    }();

    AddsiteComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    AddsiteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addsite',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addsite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/addsite/addsite.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addsite.component.css */
      "./src/app/pages/dashboard/addsite/addsite.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], AddsiteComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.service */
    "./src/app/pages/dashboard/dashboard.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _addsite_addsite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./addsite/addsite.component */
    "./src/app/pages/dashboard/addsite/addsite.component.ts");
    /* harmony import */


    var _editsite_editsite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editsite/editsite.component */
    "./src/app/pages/dashboard/editsite/editsite.component.ts");
    /* harmony import */


    var _deletesite_deletesite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deletesite/deletesite.component */
    "./src/app/pages/dashboard/deletesite/deletesite.component.ts");
    /* harmony import */


    var _viewsite_viewsite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./viewsite/viewsite.component */
    "./src/app/pages/dashboard/viewsite/viewsite.component.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var rxjs_Subject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/Subject */
    "./node_modules/rxjs-compat/_esm2015/Subject.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(service, modalService) {
        var _this2 = this;

        _classCallCheck(this, DashboardComponent);

        this.service = service;
        this.modalService = modalService;
        this.data = [];
        this.dtOptions = {};
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.title = 'coderscotch';
        console.log("in constructor");
        this.service.getlist().subscribe(function (response) {
          _this2.data = response.data;

          if (_this2.isDtInitialized) {
            _this2.dtElement.dtInstance.then(function (dtInstance) {
              dtInstance.destroy();

              _this2.dtTrigger.next();
            });
          } else {
            _this2.isDtInitialized = true;

            _this2.dtTrigger.next();
          }
        }, function (error) {});
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            order: [[0, 'desc']]
          };
          this.service.getlist().subscribe(function (response) {
            _this3.data = response.data;

            if (_this3.isDtInitialized) {
              _this3.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();

                _this3.dtTrigger.next();
              });
            } else {
              _this3.isDtInitialized = true;

              _this3.dtTrigger.next();
            }
          }, function (error) {});
        }
      }, {
        key: "deletesite",
        value: function deletesite(id) {
          var modalRef = this.modalService.open(_deletesite_deletesite_component__WEBPACK_IMPORTED_MODULE_6__["DeletesiteComponent"], {
            size: 'lg',
            windowClass: 'big_popup'
          });
          modalRef.componentInstance.siteid = id; // swal({
          //   title: 'Are you sure?',
          //   text: "You won't be able to revert this!",
          //   type: 'warning',
          //   showCancelButton: true,
          //   confirmButtonColor: '#49a558',
          //   cancelButtonColor: '#a73a08',
          //   confirmButtonText: 'Yes, delete it!'
          // }).then((result) => {
          //   if (result.value) {
          //     // this.spinnerService.show();
          //     this.service.deletesite(id).subscribe(
          //       data => {
          //         this.service.getlist().subscribe((response: any) => {
          //           this.data = response.data;
          //           this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          //             dtInstance.destroy();
          //             this.dtTrigger.next();
          //             // this.spinnerService.hide();
          //           })
          //         });
          //         if (data['code'] == 200) {
          //           swal(
          //             'Deleted!',
          //             data['message'],
          //             'success'
          //           )
          //         } else {
          //           swal({
          //             type: 'error',
          //             text: data['message']
          //           })
          //         }
          //       }, error => {
          //         swal({
          //           type: 'error',
          //           text: error['message']
          //         })
          //       });
          //   }
          // })
        }
      }, {
        key: "editsite",
        value: function editsite(data) {
          var modalRef = this.modalService.open(_editsite_editsite_component__WEBPACK_IMPORTED_MODULE_5__["EditsiteComponent"], {
            size: 'lg',
            windowClass: 'big_popup'
          });
          modalRef.componentInstance.siteid = data._id;
          modalRef.componentInstance.baseurl = data.baseurl;
          modalRef.componentInstance.hospital_map = data.hospital_map;
          modalRef.componentInstance.img_map = data.img_map;
          modalRef.componentInstance.src_link = data.src_link;
          modalRef.componentInstance.stucture_type = data.stucture_type;
          modalRef.componentInstance.title_map = data.title_map;
          modalRef.componentInstance.url = data.url;
          modalRef.componentInstance.url_prefix = data.url_prefix;
        }
      }, {
        key: "addsite",
        value: function addsite() {
          var modalRef = this.modalService.open(_addsite_addsite_component__WEBPACK_IMPORTED_MODULE_4__["AddsiteComponent"], {
            size: 'lg',
            windowClass: 'big_popup'
          });
        }
      }, {
        key: "siteDetails",
        value: function siteDetails(data) {
          var modalRef = this.modalService.open(_viewsite_viewsite_component__WEBPACK_IMPORTED_MODULE_7__["ViewsiteComponent"], {
            size: 'lg',
            windowClass: 'big_popup'
          });
          modalRef.componentInstance.siteid = data._id;
          modalRef.componentInstance.baseurl = data.baseurl;
          modalRef.componentInstance.hospital_map = data.hospital_map;
          modalRef.componentInstance.img_map = data.img_map;
          modalRef.componentInstance.src_link = data.src_link;
          modalRef.componentInstance.stucture_type = data.stucture_type;
          modalRef.componentInstance.title_map = data.title_map;
          modalRef.componentInstance.url = data.url;
          modalRef.componentInstance.url_prefix = data.url_prefix;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])], DashboardComponent.prototype, "dtElement", void 0);
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dashboard-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _deletesite_deletesite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./deletesite/deletesite.component */
    "./src/app/pages/dashboard/deletesite/deletesite.component.ts");
    /* harmony import */


    var _editsite_editsite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./editsite/editsite.component */
    "./src/app/pages/dashboard/editsite/editsite.component.ts");
    /* harmony import */


    var _addsite_addsite_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./addsite/addsite.component */
    "./src/app/pages/dashboard/addsite/addsite.component.ts");
    /* harmony import */


    var _viewsite_viewsite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./viewsite/viewsite.component */
    "./src/app/pages/dashboard/viewsite/viewsite.component.ts"); // import { ScriptLoaderService } from './../../../../_services/script-loader.service';
    // import { IndexRoutingModule } from './index.routing';


    var routes = [{
      "path": "",
      // "component": AdminLayoutComponent,
      // "canActivate": [AuthGuard],
      "children": [{
        "path": "",
        "component": _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
      }]
    }];

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), // NgbModule.forRoot(),
      _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"] // ScriptLoaderService
      ],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _addsite_addsite_component__WEBPACK_IMPORTED_MODULE_9__["AddsiteComponent"], _deletesite_deletesite_component__WEBPACK_IMPORTED_MODULE_7__["DeletesiteComponent"], _editsite_editsite_component__WEBPACK_IMPORTED_MODULE_8__["EditsiteComponent"], _viewsite_viewsite_component__WEBPACK_IMPORTED_MODULE_10__["ViewsiteComponent"]],
      providers: [],
      entryComponents: [_addsite_addsite_component__WEBPACK_IMPORTED_MODULE_9__["AddsiteComponent"], _deletesite_deletesite_component__WEBPACK_IMPORTED_MODULE_7__["DeletesiteComponent"], _editsite_editsite_component__WEBPACK_IMPORTED_MODULE_8__["EditsiteComponent"], _viewsite_viewsite_component__WEBPACK_IMPORTED_MODULE_10__["ViewsiteComponent"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.service.ts ***!
    \******************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppPagesDashboardDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var URL = "http://2001:1600:3:13:f816:3eff:fe02:fc3f:4201";

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(http) {
        _classCallCheck(this, DashboardService);

        this.http = http;
      }

      _createClass(DashboardService, [{
        key: "getHeader",
        value: function getHeader() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers = headers.set('Content-Type', 'application/json'); // let token = JSON.parse(localStorage.getItem('_token'))
          // headers = headers.set('Authorization', token)

          return headers;
        }
      }, {
        key: "getlist",
        value: function getlist() {
          return this.http.get(URL + '/sitelist').pipe(function (res) {
            return res;
          });
        }
      }, {
        key: "addsite",
        value: function addsite(data) {
          return this.http.post(URL + '/addsite', data, {
            headers: this.getHeader()
          }).pipe(function (res) {
            return res;
          });
        }
      }, {
        key: "deletesite",
        value: function deletesite(siteid) {
          return this.http["delete"](URL + '/deletesite?id=' + siteid, {
            headers: this.getHeader()
          }).pipe(function (res) {
            return res;
          });
        }
      }, {
        key: "updatesite",
        value: function updatesite(siteid, data) {
          return this.http.put(URL + '/updatesite?id=' + siteid, data, {
            headers: this.getHeader()
          }).pipe(function (res) {
            return res;
          });
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], DashboardService);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/deletesite/deletesite.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/dashboard/deletesite/deletesite.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDeletesiteDeletesiteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kZWxldGVzaXRlL2RlbGV0ZXNpdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/deletesite/deletesite.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/dashboard/deletesite/deletesite.component.ts ***!
    \********************************************************************/

  /*! exports provided: DeletesiteComponent */

  /***/
  function srcAppPagesDashboardDeletesiteDeletesiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeletesiteComponent", function () {
      return DeletesiteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/pages/dashboard/dashboard.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js"); // import { ToastrManager } from 'ng6-toastr-notifications';


    var DeletesiteComponent = /*#__PURE__*/function () {
      function DeletesiteComponent(activeModal, service) {
        _classCallCheck(this, DeletesiteComponent);

        this.activeModal = activeModal;
        this.service = service;
      }

      _createClass(DeletesiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "delete",
        value: function _delete() {
          var _this4 = this;

          this.service.deletesite(this.siteid).subscribe(function (response) {
            if (response.statusCode == 200) {
              window.location.reload(); //  this.toastService.successToastr(response.msg);
            } else {// this.toastService.errorToastr(response.msg);
              }

            _this4.activeModal.dismiss();
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.activeModal.dismiss();
        }
      }]);

      return DeletesiteComponent;
    }();

    DeletesiteComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
      }, {
        type: _dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DeletesiteComponent.prototype, "siteid", void 0);
    DeletesiteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-deletesite',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./deletesite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/deletesite/deletesite.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./deletesite.component.css */
      "./src/app/pages/dashboard/deletesite/deletesite.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])], DeletesiteComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/editsite/editsite.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/dashboard/editsite/editsite.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardEditsiteEditsiteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9lZGl0c2l0ZS9lZGl0c2l0ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/editsite/editsite.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/dashboard/editsite/editsite.component.ts ***!
    \****************************************************************/

  /*! exports provided: EditsiteComponent */

  /***/
  function srcAppPagesDashboardEditsiteEditsiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditsiteComponent", function () {
      return EditsiteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/pages/dashboard/dashboard.service.ts"); // import { ShipManagementServivce } from '../shipmanagement.service'
    // import { ToastrManager } from 'ng6-toastr-notifications';


    var EditsiteComponent = /*#__PURE__*/function () {
      function EditsiteComponent( // private toastService: ToastrManager, 
      router, service, activeModal, _formBuilder, modalService) {
        _classCallCheck(this, EditsiteComponent);

        this.router = router;
        this.service = service;
        this.activeModal = activeModal;
        this._formBuilder = _formBuilder;
        this.modalService = modalService;
        this.structureList = ['STRUCTURE1', 'STRUCTURE2', 'STRUCTURE3'];
        this.loading = false;
        this.submitted = false;
        this.selectedOption = this.stucture_type;
      }

      _createClass(EditsiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildSiteForm();
        }
      }, {
        key: "buildSiteForm",
        value: function buildSiteForm() {
          this.siteForm = this._formBuilder.group({
            URL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Baseurl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Titlemap: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Srclink: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Imgmap: [''],
            Hospitalmap: [''],
            Urlprefix: [''],
            Stucturetype: [this.stucture_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "editSite",
        value: function editSite() {
          this.submitted = true;

          if (this.siteForm.invalid) {
            return;
          } else {
            var addObj = {
              'url': this.siteForm.controls['URL'].value,
              'baseurl': this.siteForm.controls['Baseurl'].value,
              'title_map': this.siteForm.controls['Titlemap'].value,
              'src_link': this.siteForm.controls['Srclink'].value,
              'img_map': this.siteForm.controls['Imgmap'].value,
              'hospital_map': this.siteForm.controls['Hospitalmap'].value,
              'url_prefix': this.siteForm.controls['Urlprefix'].value,
              'stucture_type': this.siteForm.controls['Stucturetype'].value
            };
            console.log("object add ship =======>", addObj);
            this.activeModal.dismiss();
            this.service.updatesite(this.siteid, addObj).subscribe(function (response) {
              if (response.status == 200) {
                console.log('AddsiteComponent -> addSite -> response', response);
                window.location.reload(); // this.toastService.successToastr(response.message);
              } else {// this.toastService.errorToastr(response.message);
                }
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.siteForm.controls;
        }
      }]);

      return EditsiteComponent;
    }();

    EditsiteComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditsiteComponent.prototype, "siteid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditsiteComponent.prototype, "baseurl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditsiteComponent.prototype, "hospital_map", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditsiteComponent.prototype, "img_map", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditsiteComponent.prototype, "src_link", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditsiteComponent.prototype, "stucture_type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditsiteComponent.prototype, "title_map", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditsiteComponent.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditsiteComponent.prototype, "url_prefix", void 0);
    EditsiteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editsite',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editsite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/editsite/editsite.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editsite.component.css */
      "./src/app/pages/dashboard/editsite/editsite.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])], EditsiteComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/viewsite/viewsite.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/dashboard/viewsite/viewsite.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardViewsiteViewsiteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC92aWV3c2l0ZS92aWV3c2l0ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/viewsite/viewsite.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/dashboard/viewsite/viewsite.component.ts ***!
    \****************************************************************/

  /*! exports provided: ViewsiteComponent */

  /***/
  function srcAppPagesDashboardViewsiteViewsiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewsiteComponent", function () {
      return ViewsiteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ViewsiteComponent = /*#__PURE__*/function () {
      function ViewsiteComponent(activeModal) {
        _classCallCheck(this, ViewsiteComponent);

        this.activeModal = activeModal;
      }

      _createClass(ViewsiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewsiteComponent;
    }();

    ViewsiteComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ViewsiteComponent.prototype, "siteid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ViewsiteComponent.prototype, "baseurl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ViewsiteComponent.prototype, "hospital_map", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ViewsiteComponent.prototype, "img_map", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ViewsiteComponent.prototype, "src_link", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ViewsiteComponent.prototype, "stucture_type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ViewsiteComponent.prototype, "title_map", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ViewsiteComponent.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ViewsiteComponent.prototype, "url_prefix", void 0);
    ViewsiteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-viewsite',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./viewsite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/viewsite/viewsite.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./viewsite.component.css */
      "./src/app/pages/dashboard/viewsite/viewsite.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])], ViewsiteComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map