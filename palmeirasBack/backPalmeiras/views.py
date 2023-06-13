from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView 
from rest_framework import viewsets
from .serializer import*
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import AccessToken
# Create your views here.

class Categoria(ListCreateAPIView):
    queryset = Categorias.objects.all()
    serializer_class = CategoriaSerializer
    
class CategoriaDetalhe(RetrieveUpdateDestroyAPIView):
    queryset = Categorias.objects.all()
    serializer_class = CategoriaSerializer   
    
class ProdutoList(ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Produtos.objects.all()
    serializer_class = ProdutoSerializer

class ProdutoDetalhe(RetrieveUpdateDestroyAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutoSerializer
    
# class ListarClientes(ListCreateAPIView):
#     permission_classes = (IsAuthenticated,)
#     queryset = Clientes.objects.all()
#     serializer_class = ClientesSerializer
#     # função buscar os dados da conta pela url
#     def get_queryset(self):
#         # criando um filtro para acessar a url com um parametro
#         filtro = self.request.query_params.get('filtro')
#         resultado_id_cliente = Clientes.objects.filter(email=filtro)

#         # se o numero passado for igual o da conta, ele retornara (continua na linha abaixo)
#         # os dados da conta especifica, caso não, ele retornara todas as contas
#         if resultado_id_cliente:
#             return resultado_id_cliente
#         return Clientes.objects.all()
    
#     def get(self, request, *args, **kwargs):
#         #QUEM FOI O AUTOR DO REQUEST ???
#         token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
#         print(token)
#         dados = AccessToken(token)
#         usuario = dados['user_id']
#         print(usuario)
#         listaCliente = Clientes.objects.filter(id=usuario)
#         return super().list(listaCliente)
       
# class DetalharClientes(RetrieveUpdateDestroyAPIView):
#     queryset = Clientes.objects.all()
#     serializer_class = ClientesSerializer