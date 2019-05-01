'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _rentContract = require('../ethereum/rentContract');

var _rentContract2 = _interopRequireDefault(_rentContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/asingh/workspace/major_final/deploy/pages/index.js?entry';


var RentContractIndex = function (_Component) {
  (0, _inherits3.default)(RentContractIndex, _Component);

  function RentContractIndex() {
    (0, _classCallCheck3.default)(this, RentContractIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RentContractIndex.__proto__ || (0, _getPrototypeOf2.default)(RentContractIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RentContractIndex, [{
    key: 'giveAvailability',
    value: function giveAvailability(check) {
      if (check) {
        return "available";
      } else {
        return "unavailable";
      }
    }
  }, {
    key: 'getColor',
    value: function getColor(check) {
      if (check) {
        return "green";
      } else {
        return "red";
      }
    }
  }, {
    key: 'renderRentContracts',
    value: function renderRentContracts() {
      var _this2 = this;

      var items = this.props.finalresults.map(function (result) {
        return {
          header: _react2.default.createElement('div', { style: { fontSize: '24px', color: 'black' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, _react2.default.createElement('h1', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, result.name)),
          description: _react2.default.createElement('div', { style: { color: _this2.getColor(result.availablity), fontSize: '20px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }, _react2.default.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }), 'vehicle  ', _this2.giveAvailability(result.availablity), _react2.default.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }), _react2.default.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }), _react2.default.createElement(_routes.Link, { route: '/rents/' + result.addr, __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }, 'Check Details'))),
          meta: _react2.default.createElement('div', { style: { fontSize: '16px', color: 'maroon' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }, 'popularity of vehicle - ', result.popularity),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Registered Vehicles'), _react2.default.createElement(_routes.Link, { route: '/rents/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: 'Rent your vehicle',
        floated: 'right',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }))), this.renderRentContracts()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _this3 = this;

        var listOfRents, promiseArray, finalresults;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _factory2.default.methods.returnDeployedList().call();

              case 2:
                listOfRents = _context2.sent;
                promiseArray = listOfRents.map(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
                    var rent, valueofpopularity, valueofname, valueofavailablity;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            rent = (0, _rentContract2.default)(address);
                            _context.next = 3;
                            return rent.methods.popularity().call();

                          case 3:
                            valueofpopularity = _context.sent;
                            _context.next = 6;
                            return rent.methods.getName().call();

                          case 6:
                            valueofname = _context.sent;
                            _context.next = 9;
                            return rent.methods.getAvailablity().call();

                          case 9:
                            valueofavailablity = _context.sent;
                            return _context.abrupt('return', {
                              keys: "values",
                              addr: address,
                              name: valueofname,
                              availablity: valueofavailablity,
                              popularity: valueofpopularity
                            });

                          case 11:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this3);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }());
                _context2.next = 6;
                return _promise2.default.all(promiseArray);

              case 6:
                finalresults = _context2.sent;
                return _context2.abrupt('return', { finalresults: finalresults });

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RentContractIndex;
}(_react.Component);

exports.default = RentContractIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVudENvbnRyYWN0SW5kZXgiLCJfQ29tcG9uZW50IiwiX19wcm90b19fIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJrZXkiLCJ2YWx1ZSIsImdpdmVBdmFpbGFiaWxpdHkiLCJjaGVjayIsImdldENvbG9yIiwicmVuZGVyUmVudENvbnRyYWN0cyIsIl90aGlzMiIsIml0ZW1zIiwicHJvcHMiLCJmaW5hbHJlc3VsdHMiLCJtYXAiLCJyZXN1bHQiLCJoZWFkZXIiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJhdmFpbGFibGl0eSIsInJvdXRlIiwiYWRkciIsIm1ldGEiLCJwb3B1bGFyaXR5IiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsImNvbnRlbnQiLCJmbG9hdGVkIiwiaWNvbiIsInByaW1hcnkiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUyIiwiX3RoaXMzIiwibGlzdE9mUmVudHMiLCJwcm9taXNlQXJyYXkiLCJ3cmFwIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicHJldiIsIm5leHQiLCJtZXRob2RzIiwicmV0dXJuRGVwbG95ZWRMaXN0IiwiY2FsbCIsInNlbnQiLCJfcmVmMiIsIl9jYWxsZWUiLCJhZGRyZXNzIiwicmVudCIsInZhbHVlb2Zwb3B1bGFyaXR5IiwidmFsdWVvZm5hbWUiLCJ2YWx1ZW9mYXZhaWxhYmxpdHkiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZ2V0TmFtZSIsImdldEF2YWlsYWJsaXR5IiwiYWJydXB0Iiwia2V5cyIsInN0b3AiLCJfeCIsImFsbCIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztB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TyxVQUFVMEIsRUFBVixFQUFjO0FBQ25CLDJCQUFPZCxNQUFNbkQsS0FBTixDQUFZLElBQVosRUFBa0JDLFNBQWxCLENBQVA7QUFDRCxtQkFGRDtBQUdELGlCQTFDOEIsRUFBaEIsQ0FBZjtBQTJDQTJDLDBCQUFVRSxJQUFWLEdBQWlCLENBQWpCO0FBQ0EsdUJBQU8sa0JBQVNvQixHQUFULENBQWF6QixZQUFiLENBQVA7O0FBRUYsbUJBQUssQ0FBTDtBQUNFOUIsK0JBQWVpQyxVQUFVTSxJQUF6QjtBQUNBLHVCQUFPTixVQUFVa0IsTUFBVixDQUFpQixRQUFqQixFQUEyQixFQUFFbkQsY0FBY0EsWUFBaEIsRUFBM0IsQ0FBUDs7QUFFRixtQkFBSyxDQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPaUMsVUFBVW9CLElBQVYsRUFBUDtBQTNESjtBQTZERDtBQUNGLFNBaEVNLEVBZ0VKMUIsUUFoRUksRUFnRU0sSUFoRU4sQ0FBUDtBQWlFRCxPQXJFMEMsQ0FBaEMsQ0FBWDs7QUF1RUEsZUFBUzZCLGVBQVQsR0FBMkI7QUFDekIsZUFBTy9CLEtBQUtwQyxLQUFMLENBQVcsSUFBWCxFQUFpQkMsU0FBakIsQ0FBUDtBQUNEOztBQUVELGFBQU9rRSxlQUFQO0FBQ0QsS0E3RU07QUFGSixHQUFELENBektKOztBQTJQQSxTQUFPdEUsaUJBQVA7QUFDRCxDQXJRdUIsa0JBQXhCOztrQkF1UWVBLGlCIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX1Byb21pc2UgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UnO1xuaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJy9ob21lL2FzaW5naC93b3Jrc3BhY2UvbWFqb3JfZmluYWwvZGVwbG95L3BhZ2VzL2luZGV4LmpzP2VudHJ5JztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG5pbXBvcnQgUmVudENvbnRyYWN0IGZyb20gJy4uL2V0aGVyZXVtL3JlbnRDb250cmFjdCc7XG5cbnZhciBSZW50Q29udHJhY3RJbmRleCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZW50Q29udHJhY3RJbmRleCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVudENvbnRyYWN0SW5kZXgoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbnRDb250cmFjdEluZGV4KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVudENvbnRyYWN0SW5kZXguX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoUmVudENvbnRyYWN0SW5kZXgpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZW50Q29udHJhY3RJbmRleCwgW3tcbiAgICBrZXk6ICdnaXZlQXZhaWxhYmlsaXR5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2l2ZUF2YWlsYWJpbGl0eShjaGVjaykge1xuICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBcImF2YWlsYWJsZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwidW5hdmFpbGFibGVcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDb2xvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbG9yKGNoZWNrKSB7XG4gICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIFwiZ3JlZW5cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlclJlbnRDb250cmFjdHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSZW50Q29udHJhY3RzKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBpdGVtcyA9IHRoaXMucHJvcHMuZmluYWxyZXN1bHRzLm1hcChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVhZGVyOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IHN0eWxlOiB7IGZvbnRTaXplOiAnMjRweCcsIGNvbG9yOiAnYmxhY2snIH0sIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0NlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2gxJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNDZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlc3VsdC5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBzdHlsZTogeyBjb2xvcjogX3RoaXMyLmdldENvbG9yKHJlc3VsdC5hdmFpbGFibGl0eSksIGZvbnRTaXplOiAnMjBweCcgfSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ4XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdicicsIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ5XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgJ3ZlaGljbGUgICcsXG4gICAgICAgICAgICBfdGhpczIuZ2l2ZUF2YWlsYWJpbGl0eShyZXN1bHQuYXZhaWxhYmxpdHkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnInLCB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1MVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJywge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgICB7IHJvdXRlOiAnL3JlbnRzLycgKyByZXN1bHQuYWRkciwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1MlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdDaGVjayBEZXRhaWxzJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtZXRhOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IHN0eWxlOiB7IGZvbnRTaXplOiAnMTZweCcsIGNvbG9yOiAnbWFyb29uJyB9LCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwb3B1bGFyaXR5IG9mIHZlaGljbGUgLSAnLFxuICAgICAgICAgICAgcmVzdWx0LnBvcHVsYXJpdHlcbiAgICAgICAgICApLFxuICAgICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Hcm91cCwgeyBpdGVtczogaXRlbXMsIF9fc291cmNlOiB7XG4gICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICBsaW5lTnVtYmVyOiA2MlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGF5b3V0LFxuICAgICAgICB7XG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA2N1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA2OFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA2OVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1JlZ2lzdGVyZWQgVmVoaWNsZXMnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgTGluayxcbiAgICAgICAgICAgIHsgcm91dGU6ICcvcmVudHMvbmV3JywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDcwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDcxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdSZW50IHlvdXIgdmVoaWNsZScsXG4gICAgICAgICAgICAgICAgZmxvYXRlZDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBpY29uOiAnYWRkIGNpcmNsZScsXG4gICAgICAgICAgICAgICAgcHJpbWFyeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDcyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgdGhpcy5yZW5kZXJSZW50Q29udHJhY3RzKClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2dldEluaXRpYWxQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBsaXN0T2ZSZW50cywgcHJvbWlzZUFycmF5LCBmaW5hbHJlc3VsdHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5tZXRob2RzLnJldHVybkRlcGxveWVkTGlzdCgpLmNhbGwoKTtcblxuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgbGlzdE9mUmVudHMgPSBfY29udGV4dDIuc2VudDtcbiAgICAgICAgICAgICAgICBwcm9taXNlQXJyYXkgPSBsaXN0T2ZSZW50cy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIF9yZWYyID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZW50LCB2YWx1ZW9mcG9wdWxhcml0eSwgdmFsdWVvZm5hbWUsIHZhbHVlb2ZhdmFpbGFibGl0eTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW50ID0gUmVudENvbnRyYWN0KGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW50Lm1ldGhvZHMucG9wdWxhcml0eSgpLmNhbGwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVvZnBvcHVsYXJpdHkgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW50Lm1ldGhvZHMuZ2V0TmFtZSgpLmNhbGwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVvZm5hbWUgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW50Lm1ldGhvZHMuZ2V0QXZhaWxhYmxpdHkoKS5jYWxsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlb2ZhdmFpbGFibGl0eSA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5czogXCJ2YWx1ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHI6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB2YWx1ZW9mbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsaXR5OiB2YWx1ZW9mYXZhaWxhYmxpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGFyaXR5OiB2YWx1ZW9mcG9wdWxhcml0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUsIF90aGlzMyk7XG4gICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA2O1xuICAgICAgICAgICAgICAgIHJldHVybiBfUHJvbWlzZS5hbGwocHJvbWlzZUFycmF5KTtcblxuICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgZmluYWxyZXN1bHRzID0gX2NvbnRleHQyLnNlbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoJ3JldHVybicsIHsgZmluYWxyZXN1bHRzOiBmaW5hbHJlc3VsdHMgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTIsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRJbml0aWFsUHJvcHM7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gUmVudENvbnRyYWN0SW5kZXg7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlbnRDb250cmFjdEluZGV4OyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVudENvbnRyYWN0SW5kZXgiLCJfQ29tcG9uZW50IiwiX19wcm90b19fIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJrZXkiLCJ2YWx1ZSIsImdpdmVBdmFpbGFiaWxpdHkiLCJjaGVjayIsImdldENvbG9yIiwicmVuZGVyUmVudENvbnRyYWN0cyIsIl90aGlzMiIsIml0ZW1zIiwicHJvcHMiLCJmaW5hbHJlc3VsdHMiLCJtYXAiLCJyZXN1bHQiLCJoZWFkZXIiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJhdmFpbGFibGl0eSIsInJvdXRlIiwiYWRkciIsIm1ldGEiLCJwb3B1bGFyaXR5IiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsImNvbnRlbnQiLCJmbG9hdGVkIiwiaWNvbiIsInByaW1hcnkiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUyIiwiX3RoaXMzIiwibGlzdE9mUmVudHMiLCJwcm9taXNlQXJyYXkiLCJ3cmFwIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicHJldiIsIm5leHQiLCJtZXRob2RzIiwicmV0dXJuRGVwbG95ZWRMaXN0IiwiY2FsbCIsInNlbnQiLCJfcmVmMiIsIl9jYWxsZWUiLCJhZGRyZXNzIiwicmVudCIsInZhbHVlb2Zwb3B1bGFyaXR5IiwidmFsdWVvZm5hbWUiLCJ2YWx1ZW9mYXZhaWxhYmxpdHkiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZ2V0TmFtZSIsImdldEF2YWlsYWJsaXR5IiwiYWJydXB0Iiwia2V5cyIsInN0b3AiLCJfeCIsImFsbCIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztB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