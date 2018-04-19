'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PariseButton = function () {
    function PariseButton(num, element) {
        _classCallCheck(this, PariseButton);

        this.num = num;
        this.element = element;
    }

    _createClass(PariseButton, [{
        key: 'clickAction',
        value: function clickAction() {
            var _this = this;

            this.element.click(function () {
                if (_this.num < 10) {
                    // css 滤镜
                    _this.element.css('-webkit-filter', 'grayscale(0)');
                    $('#animation').addClass('num');
                    _this.num = add(_this.num);
                    setTimeout(function () {
                        return $('#animation').removeClass('num');
                    }, 1000);
                } else {
                    _this.element.css('-webkit-filter', 'grayscale(1)');
                    _this.num = 0;
                }
                console.log(_this.num);
            });
        }
    }]);

    return PariseButton;
}();

var Thumb = function (_PariseButton) {
    _inherits(Thumb, _PariseButton);

    function Thumb(num, element) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
    }

    return Thumb;
}(PariseButton);

exports.default = Thumb;
