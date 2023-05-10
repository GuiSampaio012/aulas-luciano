from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView 
from rest_framework import viewsets
from .serializer import*
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class Categoria(ListCreateAPIView):
    queryset = Categorias.objects.all()
    serializer_class = CategoriaSerializer
    
class CategoriaDetalhe(RetrieveUpdateDestroyAPIView):
    queryset = Categorias.objects.all()
    serializer_class = CategoriaSerializer   
    
class ProdutoList(ListCreateAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutoSerializer

class ProdutoDetalhe(RetrieveUpdateDestroyAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutoSerializer
    
class ClienteViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer