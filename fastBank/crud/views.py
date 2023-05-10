from django.shortcuts import render, get_object_or_404
from .models import Clientes, Endereco, Contas, Transferencias
from .serializer import ClienteSerializer, EnderecoSerializer, ContasSerializer, TransferenciasSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView 
from django.contrib.auth.hashers import make_password
import random

class ListarClientes(ListCreateAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClienteSerializer
       
class DetalharClientes(RetrieveUpdateDestroyAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClienteSerializer   

class ListarContas(ListCreateAPIView):
    queryset = Contas.objects.all()
    serializer_class = ContasSerializer
    
    def create(self, request, *args, **kwargs):
        dados = request.data
        # print(dados['ativa'])
        list = []
        for i in range(0,6):
            numero = random.randint(0,9)
            list.append(numero)
            
        stringnova = ""
        for i in list:
            stringnova += str(i)
        filtro = Clientes.objects.get(pk=dados['clienteConta'])
        criar = Contas.objects.create(clienteConta=filtro, agencia='171', numero=stringnova, ativa=dados['ativa'].title(), senha=(dados['senha']), limite=dados['limite'], saldo=dados['saldo'])
        # estava usando "= make_password" para criptografar a senha
        criar.save()
        serializer = ContasSerializer(criar)
        return Response(serializer.data)
            
        
    
class DetalharContas(RetrieveUpdateDestroyAPIView):
    queryset = Contas.objects.all()
    serializer_class = ContasSerializer

class ListarEndereco(ListCreateAPIView):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer
       
class DetalharEndereco(RetrieveUpdateDestroyAPIView):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer 

class ListarTransferencias(ListCreateAPIView):
    queryset = Transferencias.objects.all()
    serializer_class = TransferenciasSerializer
       
class DetalharTransferencias(RetrieveUpdateDestroyAPIView):
    queryset = Transferencias.objects.all()
    serializer_class = TransferenciasSerializer   
    
   
   
   
   
   
   
   
   

# class ClienteViewSet(viewsets.ModelViewSet):
#     permission_classes = (IsAuthenticated,)
#     queryset = Clientes.objects.all()
#     serializer_class = ClientesSerializer  


  
# class DetalharPedidos(RetrieveUpdateDestroyAPIView):
#     queryset = Pedidos.objects.all()
#     serializer_class = PedidosSerializer
#     # def delete(self, request, pk):
#     #     pedidoItens = get_object_or_404(PedidosItens, pk=pk)
#     #     produto = get_object_or_404(Produtos, pk=pk)
#     #     produto.qtd = produto.qtd + pedidoItens.qtd
#     #     produto.save()
#     #     pedidoItens.delete()
#     #     return Response(status=status.HTTP_204_NO_CONTENT) 
   
# class ListarPedidosItens(ListCreateAPIView):
#     queryset = PedidosItens.objects.all()
#     serializer_class = PedidosItensSerializer
#     def post(self, request):
#         # pedidoItens = get_object_or_404(PedidosItens)
#         produto = get_object_or_404(Produtos, pk=request.data["fk_produtos"])
#         print(produto.nome)
#         produto.qtd -= int(request.data["qtd"])
#         produto.save()
#         produto = get_object_or_404(Produtos, pk=request.data["fk_pedidos"])
#         return self.create(request)
      
# class DetalharPedidosItens(RetrieveUpdateDestroyAPIView):
#     queryset = PedidosItens.objects.all()
#     serializer_class = PedidosItensSerializer
#     def delete(self, request, pk):
#         pedidoItens = get_object_or_404(PedidosItens, pk=pk)
#         produto = get_object_or_404(Produtos, pk=pedidoItens.fk_produtos.id)
#         produto.qtd = produto.qtd + pedidoItens.qtd
#         produto.save()
#         pedidoItens.delete()   
#         return Response(status=status.HTTP_204_NO_CONTENT)     
# Create your views here.
