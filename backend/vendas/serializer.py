from rest_framework import serializers
from .models import Clientes, Produtos, Pedidos, PedidosItens, Categoria
class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        fields = ['id', 'nome', 'email', 'cpf', 'celular','data_nascimento','data_cadastro', 'tipo_cliente']

class ProdutosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtos
        fields = ['id','nome', 'preco', 'qtd', 'validade', 'disponibilidade', 'descricao','categoria']        
        
class PedidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedidos
        fields = ['id','cliente', 'data_pedido', 'status_pedido', 'metodo_pagamento', 'total_pagamento', 'status_pagamento']

class PedidosItensSerializer(serializers.ModelSerializer):
    class Meta:
        model = PedidosItens
        fields = ['id','fk_produtos', 'fk_pedidos', 'qtd', 'preco_atual', 'preco_total']

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id','nome']        