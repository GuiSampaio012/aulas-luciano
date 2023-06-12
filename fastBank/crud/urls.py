from django.urls import path
from . import views


urlpatterns = [
    path('clientes/', view=views.ListarClientes.as_view()),
    path('clientes/<int:pk>', view=views.DetalharClientes.as_view()),
    path('contas/', view=views.ListarContas.as_view()),
    path('contas/<int:pk>', view=views.DetalharContas.as_view()),  
    path('endereco/', view=views.ListarEndereco.as_view()),
    path('endereco/<int:pk>', view=views.DetalharEndereco.as_view()),
    path('transferencia/', view=views.ListarTransferencias.as_view()),
    path('transferencia/<int:pk>', view=views.DetalharTransferencias.as_view()),
    path('cartao/', view=views.ListarCartao.as_view()),
    path('cartao/<int:pk>', view=views.DetalharCartao.as_view()),
]


# router = routers.SimpleRouter()
# router.register('clientes',views.ClienteViewSet)

# urlpatterns = [
#     path('categorias', view=views.Categoria.as_view()),
#     path('categorias/<int:pk>', view=views.CategoriaDetalhe.as_view()),
#     path('produtos', view=views.ProdutoList.as_view()),
#     path('produtos/<int:pk>', view=views.ProdutoDetalhe.as_view()),   
# ]+router.urls