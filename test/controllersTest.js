describe("PedidosController Test", function () {
	var $scope;

	beforeEach(module("pedidos"));

	beforeEach(inject(function ($controller, $rootScope) {
    	$scope = $rootScope.$new();
    	$controller("PedidosController", {$scope: $scope});
  	}));


	it("Nome deve ser Pedidos Online", function () {
		expect($scope.nome).toBe("Pedidos Online");
	});
});