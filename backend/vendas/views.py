from django.shortcuts import render, get_object_or_404
from .models import Produtos, Clientes, Pedidos, PedidosItens, Categoria
from .serializer import ClienteSerializer, ProdutosSerializer, PedidosSerializer, PedidosItensSerializer,CategoriaSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView 


class ListarClientes(ListCreateAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClienteSerializer
       
class DetalharCLiente(RetrieveUpdateDestroyAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClienteSerializer   
    
     
class ListarProdutos(ListCreateAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer
    
class DetalharProdutos(RetrieveUpdateDestroyAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer
    def delete(self, request, pk):
        produto = get_object_or_404(Produtos, pk=pk)
        if produto.qtd > 0:
                return Response("não pode se apagar um produto que ainda está no estoque!",status=status.HTTP_406_NOT_ACCEPTABLE)
        return self.destroy(request) 
        #produto.delete()
        
        
class ListarPedidos(ListCreateAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer
         
class DetalharPedidos(RetrieveUpdateDestroyAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer
    def delete(self, request, pk):
        pedidoItens = get_object_or_404(PedidosItens, pk=pk)
        produto = get_object_or_404(Produtos, pk=pk)
        produto.qtd = produto.qtd + pedidoItens.qtd
        produto.save()
        pedidoItens.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
   
   
class ListarPedidosItens(ListCreateAPIView):
    queryset = PedidosItens.objects.all()
    serializer_class = PedidosItensSerializer
    def post(self, request):
        # pedidoItens = get_object_or_404(PedidosItens)
        produto = get_object_or_404(Produtos, pk=request.data["fk_produtos"])
        print(produto.nome)
        produto.qtd -= int(request.data["qtd"])
        produto.save()
        produto = get_object_or_404(Produtos, pk=request.data["fk_pedidos"])
        return self.create(request)

         
class DetalharPedidosItens(RetrieveUpdateDestroyAPIView):
    queryset = PedidosItens.objects.all()
    serializer_class = PedidosItensSerializer
    def delete(self, request, pk):
        pedidoItens = get_object_or_404(PedidosItens, pk=pk)
        produto = get_object_or_404(Produtos, pk=pedidoItens.fk_produtos.id)
        produto.qtd = produto.qtd + pedidoItens.qtd
        produto.save()
        pedidoItens.delete()   
        return Response(status=status.HTTP_204_NO_CONTENT) 
            
           
    
