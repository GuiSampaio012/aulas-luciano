from django.shortcuts import render, get_object_or_404
from .models import Clientes, Endereco, Contas, Transferencias,Cartao
from .serializer import ClienteSerializer, EnderecoSerializer, ContasSerializer, TransferenciasSerializer, CartaoSerializer
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
        teste['agencia'] = '171'
        teste['conta'] = stringnova
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
    


class ListarCartao(ListCreateAPIView):
    # permission_classes = (IsAuthenticated, )
    queryset = Cartao.objects.all()
    serializer_class = CartaoSerializer

    #def create(self, request, *args, **kwargs):
    #     dados = request.data
    #     print(dados['conta_cartao'])
    #     list = []
    #     for i in range(0,16):
    #         numero = random.randint(0,9)
    #         list.append(numero)
    #     stringnova = ""
    #     for i in list:
    #         stringnova += str(i)

    #     list2 = []
    #     for i in range(0,3):
    #         cvv = random.randint(0,9)
    #         list2.append(cvv)
    #     stringnova2 = ""
    #     for i in list2:
    #         stringnova2 += str(i)


    #     teste = dados.copy()
    #     filtro = Cartao.objects.get(id=teste['conta_cartao'])
    #     print(filtro)
    #     teste['agencia'] = '171'
    #     teste['cartao'] = stringnova
    #     # estava usando "= make_password" para criptografar a senha
    #     print(teste['numero'])
    #     serializer = CartaoSerializer(Cartao, teste)
    #     if serializer.is_valid():
    #             novo_cartao = Cartao()
    #             novo_cartao.conta_cartao = filtro
    #             novo_cartao.validade = teste['validade']
    #             novo_cartao.numero = stringnova
    #             novo_cartao.cvv = stringnova2
    #             novo_cartao.save()
    #             return Response(teste)
    #     else: 
    #         print(serializer.errors)
    #         return Response(serializer.data)
       
class DetalharCartao(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Cartao.objects.all()
    serializer_class = CartaoSerializer 
   
   
