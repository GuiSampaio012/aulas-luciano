from django.shortcuts import render, get_object_or_404
from .models import Produtos, Clientes, Pedidos, PedidosItens, Categoria
from .serializer import ClienteSerializer, ProdutosSerializer, PedidosSerializer, PedidosItensSerializer,CategoriaSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView
  

# Create your views here.
@api_view(['GET', 'POST'])
def MostrarClientes(request):
    if request.method == "GET":
        queryset = Clientes.objects.all()
        serializer = ClienteSerializer(queryset, many = True)
        return Response (serializer.data)
    elif request.method  == "POST":
        serializer = ClienteSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)    
    else:
        pass
    
@api_view(['GET', 'PUT', 'DELETE'])
def detalhe_cliente (request,id):
    # try:
    #     cliente = Clientes.objects.get(pk=id)
    # except Clientes.DoesNotExist:
    #     return Response('Cliente não encontrado', status=status.HTTP_404_NOT_FOUND)
    cliente = get_object_or_404(Clientes, pk=id)
    
    
    if request.method== 'GET':
        serializer = ClienteSerializer(cliente)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ClienteSerializer(cliente,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        cliente.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    
        
    serializer = ClienteSerializer(cliente)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def MostrarProdutos(request):
    if request.method == "GET":
        queryset = Produtos.objects.all()
        serializer = ProdutosSerializer(queryset, many = True)
        return Response (serializer.data)
    elif request.method  == "POST":
        serializer = ProdutosSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)    
    else:
        pass
    
@api_view(['GET', 'PUT', 'DELETE'])
def detalhe_Produto (request,id):
    # try:
    #     cliente = Clientes.objects.get(pk=id)
    # except Clientes.DoesNotExist:
    #     return Response('Cliente não encontrado', status=status.HTTP_404_NOT_FOUND)
    produto = get_object_or_404(Produtos, pk=id)
    
    if request.method== 'GET':
        serializer = ProdutosSerializer(produto)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ProdutosSerializer(produto,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        try:
            pedidosItens = PedidosItens.objects.get(fk_produtos= id)
            return Response("existe um pedido com esse produto, não pode ser apagado",status=status.HTTP_406_NOT_ACCEPTABLE)
        except:   
            if produto.qtd > 0:
                return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
            else:
                produto.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)    
        
    serializer = ProdutosSerializer(produto)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def MostrarPedidos(request):
    if request.method == "GET":
        queryset = Pedidos.objects.all()
        serializer = PedidosSerializer(queryset, many = True)
        return Response (serializer.data)
    elif request.method  == "POST":
        serializer = PedidosSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)    
    else:
        pass
    
@api_view(['GET', 'PUT', 'DELETE'])
def detalhe_Pedido (request,id):
    # try:
    #     cliente = Clientes.objects.get(pk=id)
    # except Clientes.DoesNotExist:
    #     return Response('Cliente não encontrado', status=status.HTTP_404_NOT_FOUND)
    pedido = get_object_or_404(Pedidos, pk=id)
    if request.method== 'GET':
        serializer = PedidosSerializer(pedido)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PedidosSerializer(pedido,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':       
        pedido.status_pedido = pedido.STATUS_PD_CANCELADO
        pedido.save()
        return Response(status=status.HTTP_204_NO_CONTENT) 
        
    serializer = PedidosSerializer(pedido)
    return Response(serializer.data)              


@api_view(['GET', 'POST'])
def MostrarPedidosItens(request):
    if request.method == "GET":
        queryset = PedidosItens.objects.all()
        serializer = PedidosItensSerializer(queryset, many = True)
        return Response (serializer.data)
    elif request.method  == "POST":
        serializer = PedidosItensSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)    
    else:
        pass
    
@api_view(['GET', 'PUT', 'DELETE'])
def detalhe_PedidoItens (request,id):
    # try:
    #     cliente = Clientes.objects.get(pk=id)
    # except Clientes.DoesNotExist:
    #     return Response('Cliente não encontrado', status=status.HTTP_404_NOT_FOUND)
    pedidoItens = get_object_or_404(PedidosItens, pk=id)
    
    
    if request.method== 'GET':
        serializer = PedidosItensSerializer(pedidoItens)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PedidosItensSerializer(pedidoItens,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        
        
        pedidoItens.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    
        
    serializer = PedidosSerializer(pedidoItens)
    return Response(serializer.data) 


@api_view(['GET', 'POST'])
def MostrarCategorias(request):
    if request.method == "GET":
        queryset = Categoria.objects.all()
        serializer = CategoriaSerializer(queryset, many = True)
        return Response (serializer.data)
    elif request.method  == "POST":
        serializer = CategoriaSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)    
    else:
        pass
    
@api_view(['GET', 'PUT', 'DELETE'])
def detalhe_categoria (request,id):
    # try:
    #     cliente = Clientes.objects.get(pk=id)
    # except Clientes.DoesNotExist:
    #     return Response('Cliente não encontrado', status=status.HTTP_404_NOT_FOUND)
    categoria = get_object_or_404(Categoria, pk=id)
    
    
    if request.method== 'GET':
        serializer = CategoriaSerializer(categoria)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategoriaSerializer(categoria,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    elif request.method == 'DELETE':
        tentativa = Produtos.objects.filter(categoria = id)
        if len(tentativa) == 0:
            categoria.delete()
            return Response(status=status.HTTP_204_NO_CONTENT) 
        else:        
            return Response("não deu",status=status.HTTP_401_UNAUTHORIZED)    
        
    serializer = CategoriaSerializer(categoria)
    return Response(serializer.data)