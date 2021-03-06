angular.module("pedidos").controller("PedidosController", function($scope, init, impostoService, lablesPTBR, pedidoFactory) {



  $scope.nome = lablesPTBR.title;
  $scope.cardapioTitle = lablesPTBR.menuTitle;
  $scope.pedidoTitle = lablesPTBR.orderTitle;
  $scope.cardapio = init.menuItems;
  $scope.pedidos = init.orderItems;
  $scope.pesquisar = lablesPTBR.searchPlaceholder;
  $scope.fazerPedido = pedidoFactory.fazerPedido;
  $scope.removerItemPedido = pedidoFactory.removerItemPedido;
  $scope.enviarPedido = pedidoFactory.enviarPedido;
  $scope.mostraPedido = function() {
    return $scope.pedidos.length;
  };

});
