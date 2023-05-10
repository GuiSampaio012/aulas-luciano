from django.urls import path
from . import views

urlpatterns = [
    path('clientes/', view=views.ListarClientes.as_view()),
    path('clientes/<int:pk>/', view=views.DetalharCLiente.as_view()),
    path('produtos/', view=views.ListarProdutos.as_view()),
    path('produtos/<int:pk>/', view=views.DetalharProdutos.as_view()),
    path('pedidos/', view=views.ListarPedidos.as_view()),
    path('pedidos/<int:pk>/', view=views.DetalharPedidos.as_view()),
    path('pedidosItens/', view=views.ListarPedidosItens.as_view()),
    path('pedidosItens/<int:pk>/', view=views.DetalharPedidosItens.as_view()),
    # path('clientes/', view=views.MostrarClientes),
    # path('clientes/<int:id>', view=views.detalhe_cliente),
    # path('produtos/', view=views.MostrarProdutos),
    # path('produtos/<int:id>',view=views.detalhe_Produto),
    # path('pedidos/', view=views.MostrarPedidos),
    # path('pedidos/<int:id>',view=views.detalhe_Pedido),
    # path('pedidoItens/', view=views.MostrarPedidosItens),
    # path('pedidoItens/<int:id>',view=views.detalhe_PedidoItens),
    # path('categoria/', view=views.MostrarCategorias),
    # path('categoria/<int:id>', view=views.detalhe_categoria),
]

