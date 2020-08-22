"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ListPageComponent = void 0;
var core_1 = require("@angular/core");
var cartfooter_component_1 = require("../cartfooter/cartfooter.component");
var ListPageComponent = /** @class */ (function () {
    function ListPageComponent(router, rendering, toasterService, cartData, sanitizer, http) {
        this.router = router;
        this.rendering = rendering;
        this.cartData = cartData;
        this.sanitizer = sanitizer;
        this.http = http;
        this.progressStatus = false;
        this.loadingdata = true;
        this.inCart = "";
        this.productTransfer = {};
        this.productArray = [];
        this.arrayCart = [];
        this.productFilterArray = [];
        this.FinalArray = [];
        this.relatedStore = [];
        this.storelimit = 1;
        // this.relatedStore ='';
        this.productidTrans = '';
        this.Barcode = '';
        this.storename = '';
        this.tempcommon = '';
        this.productBindImage = '';
        this.productBindName = '';
        this.status = true;
        // @ViewChild(PaymentsummaryComponent) payment;
        this.parentMessage = []; // parent to child
        // selectStorePrice = 0;
        // tslint:disable-next-line: member-ordering
        this.finalprice = 0;
        this.pdtcount = 1;
        this.statusSelect = '';
        this.toasterService = toasterService;
    }
    // DataListPage
    //
    ListPageComponent.prototype.popToast = function () {
        this.toasterService.pop('success', 'Args Title', 'Args Body');
    };
    ListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.cartData.currentMessage.subscribe(function (message) {
            _this.arrayCart = message;
        });
        this.cartData.currentsearch.subscribe(function (message) {
            _this.productArray = [];
            _this.productFilterArray = [];
            _this.searchQuery = message;
            _this.productTransfer = _this.searchQuery;
            var data = _this.productTransfer;
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    _this.productFilterArray.push(data[key]);
                }
            }
            // Filtering duplication: future filter on low price
            _this.productFilterArray.forEach(function (element, indexz) {
                debugger;
                var flag = 0;
                if (_this.productArray.length == -1) {
                    _this.productArray.push(element);
                }
                else {
                    _this.productArray.forEach(function (value, index, element) {
                        if (element[index].barcode == _this.productFilterArray[indexz].barcode) {
                            flag = 1;
                        }
                    });
                    if (flag != 1) {
                        _this.productArray.push(element);
                    }
                }
                _this.loadingdata = false;
                _this.FinalArray = __spreadArrays(_this.productArray);
            });
        });
        $('.btn-cart').click(function () {
            var code = _this.Barcode;
            var store = _this.statusSelect;
            var storeName = _this.storename;
            var count = _this.pdtcount;
            var price = _this.finalprice;
            var title = _this.productBindName;
            var objectTransfer = {
                product: {
                    title: title,
                    code: code,
                    store: store,
                    storeName: storeName,
                    price: price,
                    count: count
                }
            };
            var flag = 0;
            _this.arrayCart.forEach(function (element, index) {
                debugger;
                if (element.product.code == objectTransfer.product.code && element.product.store == objectTransfer.product.store) {
                    flag = 1;
                    element.product.count = objectTransfer.product.count;
                    var priceToast = count + " x " + objectTransfer.product.title + " of \u20B9  " + count * price;
                    var labelToast = "Successfully updated!";
                    _this.toasterService.pop('success', labelToast, priceToast);
                }
            });
            if (flag == 0) {
                var priceToast = count + " x " + objectTransfer.product.title + " of \u20B9  " + count * price;
                var labelToast = "Successfully added! ";
                _this.toasterService.pop('success', labelToast, priceToast);
                _this.arrayCart.push(objectTransfer);
            }
            // this.parentMessage=labelToast;
            _this.goProduct();
            _this.cartUpdate();
        });
    };
    ListPageComponent.prototype.cartUpdate = function () {
        debugger;
        this.parentMessage = this.arrayCart;
        // this.arrayCart.forEach((element,index,Array) => {
        this.cartData.changeMessage(this.arrayCart);
        // });
    };
    ListPageComponent.prototype.goProduct = function () {
        this.closebutton.nativeElement.click();
        // this.router.navigate(['detailpage']);
    };
    ListPageComponent.prototype.statusCartButton = function () {
        var value = this.pdtcount;
        // alert(value);
        if (value != 0) {
            var temp = value * Number(this.finalprice);
            $('.CartupdatePrice').html(temp);
        }
        else {
        }
    };
    ListPageComponent.prototype.hotelPlus = function (data) {
        var pdctCount = this.pdtcount;
        if (pdctCount != this.storelimit) {
            this.pdtcount++;
        }
        this.statusCartButton();
    };
    ListPageComponent.prototype.imageConverter = function (base64data) {
        return (this.sanitizer.bypassSecurityTrustUrl(base64data));
    };
    ListPageComponent.prototype.hotelMinus = function (data) {
        var pdctCount = this.pdtcount;
        if (pdctCount < 2) {
            this.pdtcount = 1;
        }
        else {
            //  let value = Number(this.pdtcount);
            pdctCount--;
            this.pdtcount = pdctCount;
        }
        this.statusCartButton();
    };
    ListPageComponent.prototype.btnStoreChange = function (select, data, storename) {
        var _this = this;
        debugger;
        this.finalprice = data;
        this.statusSelect = select;
        this.storename = storename;
        // this.relatedStore=[];
        this.relatedStore.forEach(function (element, index) {
            debugger;
            if (element.creator == select) {
                _this.Barcode = element.barcode;
                _this.productBindImage = element.imageurl;
                var flag_1 = 0;
                _this.arrayCart.forEach(function (element2, index) {
                    if (element2.product.code == element.barcode && element2.product.store == _this.statusSelect) {
                        flag_1 = 1;
                        _this.inCart = element2.product.count + " items in cart";
                        _this.pdtcount = element2.product.count;
                    }
                });
                if (flag_1 == 0) {
                    _this.inCart = '';
                    _this.pdtcount = 1;
                }
                if (_this.pdtcount > element.quant) {
                    _this.pdtcount = element.quant;
                }
                _this.storelimit = element.quant;
            }
        });
        var pdctCount = this.pdtcount;
        var temp = pdctCount * Number(data);
        $('.CartupdatePrice').html(temp);
        this.statusCartButton();
    };
    ListPageComponent.prototype.relatedstore = function () {
        this.relatedStore.forEach(function (element, index) {
        });
    };
    ListPageComponent.prototype.productView = function (prdctId, storeid) {
        var _this = this;
        $('#productView').modal('show');
        this.relatedStore = [];
        var relatedStore = function () {
            return new Promise(function (resolve, reject) {
                _this.productFilterArray.forEach(function (element, index) {
                    if (element.barcode == prdctId) {
                        debugger;
                        _this.relatedStore.push(element);
                    }
                    if (index == element.barcode.length) {
                        resolve(true);
                    }
                });
            });
        };
        var checkPdt = function () {
            return new Promise(function (resolve, reject) {
                _this.productFilterArray.forEach(function (element) {
                    debugger;
                    if (element.creator == storeid && element.barcode == prdctId) {
                        // const Barcode="";
                        // const price="";
                        // const storeid="";
                        // const storename="";
                        // this.barcode=element.barcode;
                        _this.statusSelect = element.creator;
                        _this.Barcode = prdctId;
                        _this.storename = element.source[0].storename;
                        _this.finalprice = element.price;
                        // this.tempcommon = prdctCommon;
                        _this.productBindImage = element.imageurl;
                        _this.productBindName = element.productname;
                        _this.productBindbrandName = element.brandName;
                        _this.productBindproductSize = element.productSize;
                        _this.productBindprice = element.price;
                        // this.productBindproductCommon = element.productCommon.store;
                        _this.storelimit = element.quant;
                        // if(this.arrayCart.)
                        // {}
                        var flag_2 = 0;
                        _this.arrayCart.forEach(function (element2, index) {
                            if (element2.product.code == prdctId && element2.product.store == _this.statusSelect) {
                                flag_2 = 1;
                                _this.inCart = element2.product.count + " items in cart";
                                _this.pdtcount = element2.product.count;
                            }
                        });
                        // change later
                        // this.inCart = `${count} items in cart`;
                        if (flag_2 == 0) {
                            _this.pdtcount = 1;
                            _this.inCart = '';
                        }
                        _this.statusCartButton();
                        resolve(true);
                    }
                });
            });
        };
        checkPdt()
            .then(function (isAvail) {
            if (isAvail) {
                setTimeout(function () {
                    $('.pricelist').lightSlider({
                        item: 4,
                        loop: false,
                        slideMove: 2,
                        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                        speed: 600,
                        auto: false,
                        pauseOnHover: true,
                        pager: false,
                        controls: true,
                        enableTouch: true,
                        adaptiveHeight: true
                    });
                }, 200);
            }
            else {
                alert('Sorry Product Not available');
            }
        });
        relatedStore();
        // tslint:disable-next-line: no-unused-expression
    };
    ListPageComponent.prototype.ngAfterViewInit = function () {
        // after parent loads get initalzie child for data
    };
    __decorate([
        core_1.ViewChild(cartfooter_component_1.CartfooterComponent)
    ], ListPageComponent.prototype, "child");
    __decorate([
        core_1.ViewChild('closebutton')
    ], ListPageComponent.prototype, "closebutton");
    __decorate([
        core_1.ViewChild('pdtCount')
    ], ListPageComponent.prototype, "productCount");
    ListPageComponent = __decorate([
        core_1.Component({
            selector: 'app-list-page',
            templateUrl: './list-page.component.html',
            styleUrls: ['./list-page.component.css']
        })
    ], ListPageComponent);
    return ListPageComponent;
}());
exports.ListPageComponent = ListPageComponent;
