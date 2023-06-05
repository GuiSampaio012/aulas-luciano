from django.shortcuts import render, get_object_or_404
from .models import Clientes, Endereco, Contas, Transferencias
from .serializer import ClienteSerializer, EnderecoSerializer, ContasSerializer, TransferenciasSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView 
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import AccessToken
import random

class ListarClientes(ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Clientes.objects.all()
    serializer_class = ClienteSerializer
    # função buscar os dados da conta pela url
    def get_queryset(self):
        # criando um filtro para acessar a url com um parametro
        filtro = self.request.query_params.get('filtro')
        resultado_id_cliente = Clientes.objects.filter(email=filtro)

        # se o numero passado for igual o da conta, ele retornara (continua na linha abaixo)
        # os dados da conta especifica, caso não, ele retornara todas as contas
        if resultado_id_cliente:
            return resultado_id_cliente
        return Clientes.objects.all()
    
    def get(self, request, *args, **kwargs):
        #QUEM FOI O AUTOR DO REQUEST ???
        token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        print(token)
        dados = AccessToken(token)
        usuario = dados['user_id']
        print(usuario)
        listaCliente = Clientes.objects.filter(id=usuario)
        return super().list(listaCliente)
       
class DetalharClientes(RetrieveUpdateDestroyAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClienteSerializer   

class ListarContas(ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Contas.objects.all()
    serializer_class = ContasSerializer

    # função buscar os dados da conta pela url
    def get_queryset(self):
        # criando um filtro para acessar a url com um parametro
        filtro = self.request.query_params.get('filtro')
        # pegando o valor do parametro e comparando com o numero da conta
        resultado_num_conta = Contas.objects.filter(numero=filtro)
        # pegando o valor do parametro e comparando com o id do um cliente da conta
        resultado_idCliente_conta = Contas.objects.filter(cliente_conta=filtro)
        # se o numero passado for igual o da conta, ele retornara (continua na linha abaixo)
        # os dados da conta especifica, caso não, ele retornara todas as contas
        if resultado_num_conta:
            return resultado_num_conta
        if resultado_idCliente_conta:
            return resultado_idCliente_conta
        return Contas.objects.all()
        

    
    def get(self, request, *args, **kwargs):
            #QUEM FOI O AUTOR DO REQUEST ???
        token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        print(token)
        dados = AccessToken(token)
        usuario = dados['user_id']
        print(usuario)
        listaConta = Contas.objects.filter(cliente_conta_id=usuario)
        return super().list(request, *args, **kwargs)
    
    def create(self, request, *args, **kwargs):
        dados = request.data
        print(dados['cliente_conta'])
        list = []
        for i in range(0,6):
            numero = random.randint(0,9)
            list.append(numero)
        stringnova = ""
        for i in list:
            stringnova += str(i)
        teste = dados.copy()
        filtro = Clientes.objects.get(id=teste['cliente_conta'])
        print(filtro)
        # filtroAtiva = Contas.objects.get(Contas.ativa)
        # filtroSenha = Contas.objects.get(Contas.senha)
        # filtroLimite = Contas.objects.get(Contas.limite)
        # filtroSaldo = Contas.objects.get(Contas.saldo)
        # criar = Contas.objects.create(cliente_conta=filtro, agencia='171', numero=stringnova, ativa=filtroAtiva, senha=filtroSenha, limite=filtroLimite, saldo=filtroSaldo)


        teste['agencia'] = '171'
        teste['conta'] = stringnova

        # criar = Contas.objects.create(cliente_conta=filtro, agencia='171', numero=stringnova, ativa=dados['ativa'].title(), senha=(dados['senha']), limite=dados['limite'], saldo=dados['saldo'])
        # nova_conta = {'cliente_conta': filtro, 'agencia': '171', 'ativa': 'A', 'senha': dados['senha'], 'limite': dados['limite'], 'saldo': dados['saldo'] }
        # nova_conta.cliente_conta = filtro
        # nova_conta.agencia = '171'
        # nova_conta.numero = stringnova
        # nova_conta.ativa = dados['ativa'].title()
        # nova_conta.senha = dados['senha']
        # nova_conta.limite = dados['limite']
        # nova_conta.saldo = dados['saldo']
        # print(nova_conta.numero)
        # estava usando "= make_password" para criptografar a senha
        print(teste['saldo'])
        serializer = ContasSerializer(Contas, teste)
        if serializer.is_valid():
                nova_conta = Contas()
                nova_conta.cliente_conta = filtro
                nova_conta.agencia = 171
                nova_conta.numero = stringnova
                nova_conta.ativa = teste['ativa'].title()
                nova_conta.saldo = 1000
                nova_conta.save()
                return Response(teste)
        else: 
            print(serializer.errors)
            return Response(serializer.data)

        
    
class DetalharContas(RetrieveUpdateDestroyAPIView):
    queryset = Contas.objects.all()
    serializer_class = ContasSerializer

    

class ListarEndereco(ListCreateAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer

    def list(self, request, *args, **kwargs):
        #QUEM FOI O AUTOR DO REQUEST ???
        token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        print(token)
        dados = AccessToken(token)
        usuario = dados['user_id']
        print(usuario)
        listaEndereco = Endereco.objects.filter(cliente_endereco_id=usuario)
        return Response(listaEndereco)

        # COM BASE NO ID DO USUARIO QUE FEZ A REQUESIÇÃO
        # INSERIR DADOS EM TABELAS, FAZER CONSULTAS (OBJECTS.)

        # return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        # dados = request.data
        # criar = Contato.objects.create("variavel" = dados["variavel"])
        return super().create(request, *args, **kwargs)
       
class DetalharEndereco(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer 

class ListarTransferencias(ListCreateAPIView):
    queryset = Transferencias.objects.all()
    serializer_class = TransferenciasSerializer
    def get_queryset(self):
        # criando um filtro para acessar a url com um parametro
        filtro = self.request.query_params.get('filtro')
        # pegando o valor do parametro e comparando com o id do um cliente da conta
        resultado_conta_transferencia = Transferencias.objects.filter(conta_transferencia=filtro)
        # pegando o valor do parametro e comparando com o numero da conta
        resultado_conta_remetente = Transferencias.objects.filter(conta_remetente=filtro)
        # se o numero passado for igual o da conta, ele retornara (continua na linha abaixo)
        # os dados da conta especifica, caso não, ele retornara todas as contas
        if resultado_conta_transferencia:
            return resultado_conta_transferencia
        if resultado_conta_remetente:
            return resultado_conta_remetente
        return Transferencias.objects.all()
       
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
