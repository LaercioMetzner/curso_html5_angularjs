angular.module("pedidos").factory("impostoService", function() {
  var _taxa = 0.10;

  var _getCalculoImposto = function (preco) {
    return preco * _taxa;
  };

  return {
    getCalculoImposto: _getCalculoImposto
  };
});

angular.module("pedidos").factory("pedidoFactory", function(init, impostoService) {

  var _fazerPedido = function(item){
    for (var i = 0; i < init.orderItems.length; i++){
       if (init.orderItems[i].descricao === item.descricao){
         init.orderItems[i].qtde++;
         init.orderItems[i].total += init.orderItems[i].preco;
         return;
       }
    }
    var newItem = angular.copy(item);
    newItem.preco += impostoService.getCalculoImposto(item.preco);
    newItem.qtde = 1;
    newItem.total = newItem.preco;
    init.orderItems.push(newItem);
  };

  _removerItemPedido = function(item){
    item.qtde--;
    item.total -= item.preco;
    if (!item.qtde){
      init.orderItems.splice(init.orderItems.indexOf(item), 1);
    }
  };

  _enviarPedido = function(){
    // Codificar o envio ao DB
    init.orderItems.splice(0, init.orderItems.length);
  };

  return {
    fazerPedido : _fazerPedido,
    removerItemPedido: _removerItemPedido,
    enviarPedido: _enviarPedido
  };

});
