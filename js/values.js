var criarItem = function(descricao, preco) {
  return {descricao : descricao, preco : preco};
};

angular.module("pedidos").value("init", {
  menuItems: [criarItem("Agua", 1.5), criarItem("Maça", 1.75), criarItem("Gatorade", 2.5), criarItem("Melancia", 4), criarItem("Pizza", 35), criarItem("Shweppers", 4.5)],
  orderItems: []
});