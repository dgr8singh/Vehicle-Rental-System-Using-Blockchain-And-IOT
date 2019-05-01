'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _FactoryRent = require('./build/FactoryRent.json');

var _FactoryRent2 = _interopRequireDefault(_FactoryRent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_FactoryRent2.default.interface), '0xA6BCEBF14CA4A909b73E53B0e876BdAb4bAD3Be0');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsV0FBVyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLHNCQUFZQyxTQUF2QixDQUF0QixFQUF5RCw0Q0FBekQsQ0FBZjs7a0JBRWVMLFEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlYjMgZnJvbSAnLi93ZWIzJztcbmltcG9ydCBSZW50RmFjdG9yeSBmcm9tICcuL2J1aWxkL0ZhY3RvcnlSZW50Lmpzb24nO1xuXG52YXIgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoSlNPTi5wYXJzZShSZW50RmFjdG9yeS5pbnRlcmZhY2UpLCAnMHhBNkJDRUJGMTRDQTRBOTA5YjczRTUzQjBlODc2QmRBYjRiQUQzQmUwJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsV0FBVyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLHNCQUFZQyxTQUF2QixDQUF0QixFQUF5RCw0Q0FBekQsQ0FBZjs7a0JBRWVMLFEiLCJmaWxlIjoidW5rbm93biJ9